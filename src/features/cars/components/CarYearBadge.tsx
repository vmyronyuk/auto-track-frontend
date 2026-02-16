type CarYearBadgeProps = {
  year: number
}

export function CarYearBadge({ year }: CarYearBadgeProps) {
  return (
    <span className="absolute top-3 right-3 rounded-md bg-primary px-2 py-0.5 text-xs font-medium ">
      {year}
    </span>
  )
}
