import { Badge } from "@/components/ui/badge"
import profilePhoto from "@/assets/profile-photo.jpg"
import { Code } from "lucide-react"

export const PortfolioHero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center p-4 md:p-8 bg-stone-200 dark:bg-stone-900 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(hsla(0,0%,60%,.3) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    >
      {/* Decorative Lego-like blocks */}
      <div className="absolute top-10 left-10 w-12 h-12 bg-red-500 rounded-md shadow-lg rotate-12 transition-transform hover:scale-110 hover:rotate-6"></div>
      <div className="absolute bottom-16 right-12 w-16 h-16 bg-blue-500 rounded-md shadow-lg -rotate-6 transition-transform hover:scale-110 hover:rotate-0"></div>
      <div className="absolute top-24 right-20 w-8 h-8 bg-yellow-400 rounded-md shadow-lg rotate-45 transition-transform hover:scale-110 hover:rotate-30"></div>

      {/* Main Lego brick container */}
      <div className="relative bg-card p-6 sm:p-8 rounded-2xl shadow-2xl max-w-xl w-full text-center border-4 border-border/20">
        {/* Lego studs on top */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-3">
          <div className="w-6 h-6 rounded-full bg-background border-2 border-border/20"></div>
          <div className="w-6 h-6 rounded-full bg-background border-2 border-border/20"></div>
          <div className="w-6 h-6 rounded-full bg-background border-2 border-border/20"></div>
          <div className="w-6 h-6 rounded-full bg-background border-2 border-border/20"></div>
        </div>

        {/* Status Badge */}
        <div className="flex justify-center">
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            <Code className="w-4 h-4 mr-2" />
            Ready to accept any project except draining the sea. 
          </Badge>
        </div>

        {/* Profile Image */}
        <div className="relative mx-auto w-32 h-32 md:w-36 md:h-36 mt-6 group">
          <div className="absolute -inset-1.5 bg-gradient-to-br from-red-500 to-red-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-tilt"></div>
          <img
            src={profilePhoto}
            alt="Rachmad. - Freelancer"
            className="relative w-full h-full object-cover rounded-xl border-4 border-card shadow-lg"
          />
        </div>

        {/* Name and Title */}
        <div className="mt-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Rachmad E.P.
          </h1>
          <h2 className="text-primary font-semibold text-lg">Freelancer & UI/UX Designer</h2>
        </div>

        {/* Description */}
        <p className="text-md text-muted-foreground max-w-md mx-auto mt-4">
          A freelancer from the Information Systems study program is a professional who works 
          independently without being tied to one company, with an educational background in the field of
          Information Systems.
        </p>
      </div>
    </section>
  )
}

