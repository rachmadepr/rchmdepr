import { motion } from "framer-motion"

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
  { title: "Organization : BEM Faculty ( Kajian Strategis )", year: "2025" },
]

export const AwardsSection = () => {
  // Palet warna ceria untuk kartu-kartu
  const blockColors = [
    "border-red-500",
    "border-blue-500",
    "border-yellow-400",
    "border-green-500",
    "border-purple-500",
    "border-orange-500",
  ]

  // Animasi yang lebih simpel
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
      },
    },
  }

  return (
    <section
      className="relative py-24 px-6 bg-gray-950 text-white overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2
            className="font-bangers text-5xl md:text-7xl tracking-wider text-red-700"
            style={{ textShadow: "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000" }}
          >
            Life long experiences ranging from work experience, 
            organizational experience, and award experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto md:text-lg">
            Keberhasilan adalah hasil dari kerja keras dan dukungan orang-orang di sekitar kita jadi 
            bersyukurlah bukan hanya pada hasil tapi juga pada prosesnya.
          </p>
        </div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // Tambahkan animasi "goyang" saat diklik
              whileTap={{
                scale: 0.97,
                rotate: [0, -50, 25, -50, 0], // Goyang ke kiri dan kanan
                transition: { duration: 0.4 },
              }}
              className={`group relative cursor-pointer bg-gray-800 rounded-lg border-b-8 transition-transform duration-200 ease-in-out hover:-translate-y-1 ${
                blockColors[index % blockColors.length]
              }`}
            >
              <div className="p-6">
                <p className="text-sm font-bold text-yellow-400 mb-2">{award.year}</p>
                <h4 className="text-lg lg:text-xl font-semibold text-gray-100">
                  {award.title}
                </h4>
              </div>
              <div className="absolute top-3 right-3 text-5xl font-bold text-gray-700/50 transition-colors duration-200 group-hover:text-gray-600/80">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}