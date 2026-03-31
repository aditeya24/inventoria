import { RiLoader4Line } from "@remixicon/react"

type Props = {
  className?: string
}

export function Spinner({ className }: Props) {
  return (
    <RiLoader4Line
      className={`animate-spin ${className ?? ""}`}
    />
  )
}