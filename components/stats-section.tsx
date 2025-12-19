const stats = [
  { value: "$48B+", label: "Trading Volume (24h)" },
  { value: "10M+", label: "Registered Users" },
  { value: "180+", label: "Countries Supported" },
  { value: "99.99%", label: "Platform Uptime" },
]

export function StatsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-3xl font-bold text-primary lg:text-4xl">{stat.value}</div>
              <div className="text-sm text-muted-foreground lg:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
