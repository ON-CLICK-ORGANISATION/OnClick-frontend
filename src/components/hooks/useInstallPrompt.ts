import { useEffect, useState, useCallback } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

/**
 * Gère l'installation de l'application (PWA).
 * - Sur Android / Chrome / Edge desktop : capture l'événement natif et permet de déclencher le prompt d'installation.
 * - Sur iOS Safari : ce navigateur n'expose pas d'API d'installation ; on renvoie `isIos` pour afficher les instructions manuelles.
 * - `isStandalone` : true si l'app est déjà installée et lancée en mode application.
 */
export function useInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    const standaloneMql = window.matchMedia('(display-mode: standalone)')
    setIsStandalone(standaloneMql.matches || (window.navigator as unknown as { standalone?: boolean }).standalone === true)

    const handleBeforeInstall = (event: Event) => {
      event.preventDefault()
      setDeferredPrompt(event as BeforeInstallPromptEvent)
    }
    const handleInstalled = () => {
      setDeferredPrompt(null)
      setIsStandalone(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstall)
    window.addEventListener('appinstalled', handleInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall)
      window.removeEventListener('appinstalled', handleInstalled)
    }
  }, [])

  const isIos = typeof navigator !== 'undefined' && /iphone|ipad|ipod/i.test(navigator.userAgent)
  const canInstall = deferredPrompt !== null

  const promptInstall = useCallback(async () => {
    if (!deferredPrompt) return false
    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    setDeferredPrompt(null)
    return outcome === 'accepted'
  }, [deferredPrompt])

  return { canInstall, isIos, isStandalone, promptInstall }
}
