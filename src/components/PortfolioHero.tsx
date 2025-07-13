import { Badge } from "@/components/ui/badge"
import profilePhoto from "@/assets/profile-photo.jpg"

export const PortfolioHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-primary flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Status Badge */}
        <div className="flex justify-center">
          <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10 px-4 py-2">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
            Ready to accept any project except draining the sea. 
          </Badge>
        </div>

        {/* Profile Image */}
        <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40">
          <div className="absolute inset-0 bg-gradient-accent rounded-full blur-xl opacity-30 animate-glow"></div>
          <img
            src={profilePhoto}
            alt="Rachmad. - Freelancer"
            className="relative w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-soft"
          />
        </div>

        {/* Name and Title */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-light text-muted-foreground">
            Hi, I'm Rachmad 
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Freelancer 
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A freelancer from the Information Systems study program is a professional who works 
          independently without being tied to one company, with an educational background in the field of
          Information Systems.
        </p>

        {/* Large Profile Image */}
        <div className="relative mt-12">
          <div className="mx-auto w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[400px] rounded-2xl overflow-hidden bg-gradient-card border border-border/20 shadow-soft">
            <img
              src={profilePhoto}
              alt="Rachmad. - Freelancer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-6">
              <p className="text-foreground font-medium text-lg">Rachmad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}