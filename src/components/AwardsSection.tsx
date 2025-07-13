interface Award {
  title: string
  year: string
}

const awards: Award[] = [
  { title: "Best Web Design of the Year", year: "2024" },
  { title: "Excellence in UX/UI Design", year: "2024" },
  { title: "Innovation in Digital Experiences", year: "2023" },
  { title: "Top Framer Website Design", year: "2023" },
  { title: "Outstanding Webflow Project Award", year: "2022" },
  { title: "Creative Excellence in Web Design", year: "2022" },
]

export const AwardsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Awards
          </h2>
          <h3 className="text-2xl md:text-3xl font-light text-muted-foreground">
            & Recognitions
          </h3>
          <p className="text-muted-foreground max-w-2xl">
            I'm honored to have my work recognized by industry experts, celebrating creativity, innovation, and 
            excellence in web design.
          </p>
        </div>

        <div className="space-y-4">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group flex items-center justify-between p-6 bg-card/50 border border-border/20 rounded-lg hover:bg-card/70 transition-all duration-300 hover:shadow-soft"
            >
              <div className="flex-1">
                <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {award.title}
                </h4>
              </div>
              <div className="text-muted-foreground font-mono text-sm">
                {award.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}