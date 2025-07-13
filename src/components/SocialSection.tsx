import { Button } from "@/components/ui/button"
import { Instagram, ExternalLink, Dribbble, Twitter, Phone } from "lucide-react"

interface SocialLink {
  platform: string
  icon: React.ComponentType<any>
  href: string
  handle: string
}

const socialLinks: SocialLink[] = [
  {
    platform: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/rchmdepr_?igsh=aXllNHF1dTF1N3Bj",
    handle: "@"
  },
  {
    platform: "Dribbble",
    icon: Dribbble,
    href: "https://dribbble.com",
    handle: "Be"
  },
  {
    platform: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
    handle: "𝕏"
  }
]

export const SocialSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-card border border-border/20 rounded-lg hover:bg-card/80 transition-all duration-300 hover:shadow-soft"
            >
              <div className="flex items-center space-x-4">
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-foreground font-medium">{social.platform}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-muted-foreground text-sm">{social.handle}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
          ))}
        </div>

        {/* Contact Card */}
        <div className="bg-gradient-card border border-border/20 rounded-2xl p-8 space-y-6">
          <Button 
            variant="glass" 
            size="lg" 
            className="w-full group"
          >
            <Phone className="w-5 h-5 mr-3 group-hover:animate-pulse" />
            Contact Me 
          </Button>

          <div className="flex items-center space-x-4 p-6 bg-card/30 rounded-xl border border-border/20">
            <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">EN</span>
            </div>
            <div>
              <h4 className="text-foreground font-medium">Rachmad</h4>
              <p className="text-muted-foreground text-sm">Freelancer</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="space-y-2">
              <h5 className="text-foreground font-medium">Pages</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="text-foreground font-medium">CMS</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><a href="#work" className="hover:text-primary transition-colors">Work</a></li>
                <li><a href="#work-single" className="hover:text-primary transition-colors">Work Single</a></li>
                <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#blog-single" className="hover:text-primary transition-colors">Blog Single</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-4 border-t border-border/20">
            <p className="text-xs text-muted-foreground">© by Code Templates</p>
          </div>
        </div>
      </div>
    </section>
  )
}