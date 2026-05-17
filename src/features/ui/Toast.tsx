import { useEffect, useState } from "react"

interface Props {
  message: string
  visible: boolean
  onClose: () => void
}

export function Toast({ message, visible, onClose }: Props) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (visible) {
      setShow(true)
      const timer = setTimeout(() => {
        setShow(false)
        setTimeout(onClose, 200)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [visible, onClose])

  if (!visible && !show) return null

  return (
    <div
      className={`fixed bottom-20 lg:bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-200 ${
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="bg-on-surface text-background text-[13px] font-medium px-5 py-3 rounded-xl shadow-2xl whitespace-nowrap">
        {message}
      </div>
    </div>
  )
}
