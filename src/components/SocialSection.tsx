import { Button } from "@/components/ui/button"
import { Instagram, ExternalLink, Mail, Twitter, Phone } from "lucide-react"
import { Link } from "react-router-dom"

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
    platform: "Email",
    icon: Mail,
    // Ganti dengan alamat email Anda yang sebenarnya
    href: "mailto:rachmadekaputraramadhan@gmail.com",
    handle: "Send"
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
    <section className="relative py-24 px-6 bg-gray-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-gray-400 mt-2 max-w-lg mx-auto">
            Malu bertanya sesat di jalan, masalahnya udah tersesat🗿
          </p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800 p-6 rounded-lg border-b-4 border-gray-700 hover:border-primary transform hover:-translate-y-1 hover:rotate-[-3deg] transition-all duration-200 ease-in-out shadow-lg hover:shadow-primary/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <social.icon className="w-8 h-8 text-primary transition-colors" />
                  <span className="text-white font-bold text-lg">{social.platform}</span>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              <p className="text-gray-400 mt-2 text-right font-mono">{social.handle}</p>
            </a>
          ))}
        </div>

        {/* Contact Card */}
        <div className="bg-gray-800 border-2 border-red-700 p-8 rounded-2xl space-y-6 shadow-2xl shadow-white-500/10 transform -rotate-1">
          <Button asChild size="lg" className="w-full group bg-red-700 hover:bg-blue-700 text-gray-900 font-bangers text-2xl tracking-widest py-6 transition-transform hover:scale-105">
            <Link to="/whatsapp-redirect">
              <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Fast Track?
            </Link>
          </Button>

          <div className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
            <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center font-bangers text-2xl text-gray-900">
              <span>R</span>
            </div>
            <div>
              <h4 className="text-white font-bold">Rachmad/Reka</h4>
              <p className="text-gray-400 text-sm">Note: Opsi yang belum bisa di klik masih dalam proses hehe</p>
            </div>
          </div>
          <div className="text-center pt-4 border-t border-gray-700">
            <p className="text-xs text-gray-500 font-mono">"Kita bisa kalo terpaksa"</p>
          </div>
        </div>
      </div>
    </section>
  )
}