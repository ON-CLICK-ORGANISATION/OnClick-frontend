import { defineConfig, loadEnv } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Sert les fonctions du dossier api/ pendant `npm run dev`.
 * Vite ne connaît pas les fonctions serverless : sans ce plugin, /api/contact
 * renvoie 404 en local alors qu'il fonctionne une fois déployé sur Vercel.
 */
function vercelApiDev(): Plugin {
  return {
    name: 'vercel-api-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api', (req, res, next) => {
        const route = (req.url ?? '').split('?')[0].replace(/\/+$/, '')
        if (!route) return next()

        void (async () => {
          let handler: ((req: unknown, res: unknown) => unknown) | undefined
          try {
            const mod = await server.ssrLoadModule(`/api${route}.ts`)
            handler = mod.default
          } catch {
            return next()
          }
          if (typeof handler !== 'function') return next()

          const chunks: Buffer[] = []
          for await (const chunk of req) chunks.push(chunk as Buffer)
          const raw = Buffer.concat(chunks).toString('utf8')

          const apiReq = Object.assign(req, { body: raw, query: {}, cookies: {} })
          const apiRes = Object.assign(res, {
            status(code: number) {
              res.statusCode = code
              return apiRes
            },
            json(data: unknown) {
              res.setHeader('Content-Type', 'application/json; charset=utf-8')
              res.end(JSON.stringify(data))
              return apiRes
            },
            send(data: string) {
              res.end(data)
              return apiRes
            },
          })

          try {
            await handler(apiReq, apiRes)
          } catch (error) {
            server.config.logger.error(`[api${route}] ${String(error)}`)
            if (!res.writableEnded) {
              res.statusCode = 500
              res.end(JSON.stringify({ error: 'Erreur interne.' }))
            }
          }
        })()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Rend les variables de .env (SMTP_*) lisibles par les fonctions api/ en local.
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))

  return {
    plugins: [react(), vercelApiDev()],
  }
})
