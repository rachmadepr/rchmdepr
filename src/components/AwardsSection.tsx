interface Award {
  title: string
  year: string
}

const awards: Award[] = [
  { title: "Work Experience : Magang (Staff) Data Entry", year: "2023" },
  { title: "Freelancer : Excellence in UX/UI Design", year: "2023-Now" },
  { title: "Organization : Leader Coppala", year: "2021-2022" },
  { title: "Atlet : FAJI ( Federasi Arung Jeram Indonesia )" , year: "2021" },
  { title: "Organization : KPUM F ( Hukum )", year: "2024" },
  { title: "Organizatiin : BEM Faculty ( Kajian Strategis )", year: "2025" },
]

export const AwardsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Life long experiences ranging from work experience, 
            organizational experience, and award experience
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Keberhasilan adalah hasil dari kerja keras dan dukungan orang-orang di sekitar kita jadi 
            bersyukurlah bukan hanya pada hasil, tapi juga pada proses dan orang-orang yang menemani perjalananmu
            dan tidak ada perjalanan yang benar-benar sendiri, selalu ada tangan-tangan yang membantu di sepanjang jalan.
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