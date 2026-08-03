interface DeviceProps {
  screenshot: string
  alt?: string
  className?: string
}

/** Laptop mockup: aluminium body + screen bezel, screenshot rendered inside the screen area. */
export function LaptopMockup({ screenshot, alt = '', className = '' }: DeviceProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Screen */}
      <div className="relative rounded-t-[10px] border-[6px] border-b-0 border-[#1c1f24] bg-[#1c1f24] p-1.5 shadow-2xl">
        <div className="overflow-hidden rounded-[3px] bg-black">
          <img src={screenshot} alt={alt} className="aspect-[16/10] w-full object-cover object-top" />
        </div>
      </div>
      {/* Base / keyboard deck */}
      <div className="relative h-3 rounded-b-[6px] bg-gradient-to-b from-[#e3e5e8] to-[#c7cad0] shadow-md">
        <div className="absolute inset-x-0 top-0 h-1 bg-[#f4f5f6]" />
      </div>
      {/* Base foot / hinge shadow */}
      <div className="mx-auto h-1.5 w-1/3 rounded-b-lg bg-[#b7bac0]" />
    </div>
  )
}

/** Simple smartphone mockup with rounded body, notch and screenshot. */
export function PhoneMockup({ screenshot, alt = '', className = '' }: DeviceProps) {
  return (
    <div className={`relative rounded-[1.6rem] border-[6px] border-[#111318] bg-[#111318] shadow-2xl ${className}`}>
      {/* Notch */}
      <div className="absolute left-1/2 top-0 z-10 h-3 w-1/3 -translate-x-1/2 rounded-b-xl bg-[#111318]" />
      <div className="overflow-hidden rounded-[1.15rem]">
        <img src={screenshot} alt={alt} className="aspect-[9/19] w-full object-cover object-top" />
      </div>
    </div>
  )
}
