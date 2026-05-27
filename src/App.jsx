import { motion } from 'framer-motion'
import { Music, TrendingUp, Instagram, Globe, Mail } from 'lucide-react'

export default function App() {
  const links = [
    {
      icon: TrendingUp,
      title: 'OUÇA NO SPOTIFY',
      subtitle: 'EM BREVE',
      href: '#',
      color: '#1DB954',
    },
    {
      icon: Music,
      title: 'TIKTOK OFICIAL',
      subtitle: '@thedarkroomrecords',
      href: 'https://www.tiktok.com/@thedarkroomrecords',
    },
    {
      icon: Instagram,
      title: 'INSTAGRAM OFICIAL',
      subtitle: '@thedarkroomrecords',
      href: 'https://www.instagram.com/thedarkroomrecords',
    },
    {
      icon: Globe,
      title: 'WEBSITE OFICIAL',
      subtitle: 'www.thedarkroomrecords.com',
      href: 'https://www.thedarkroomrecords.com',
    },
    {
      icon: Mail,
      title: 'CONTATO / LABEL',
      subtitle: 'contact@thedarkroomrecords.com',
      href: 'mailto:contact@thedarkroomrecords.com',
    },
  ]

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5] overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(212,180,95,0.05)] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <div className="relative mb-6 sm:mb-8 inline-block">
            <motion.div
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgba(212,180,95,0.2)] via-[rgba(212,180,95,0.15)] to-[rgba(212,180,95,0.2)] blur-3xl"
              style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
            />
            <img
              src="/images/logo.png"
              alt="Dark Room Records"
              className="h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 relative z-10 drop-shadow-[0_0_80px_rgba(212,180,95,0.4)]"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-wider mb-1 sm:mb-2">
            DARK ROOM
          </h1>
          <p className="text-xl sm:text-2xl md:text-4xl font-light tracking-widest text-[#d4b45f]">
            RECORDS
          </p>
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-[#999999] font-light tracking-wide max-w-xs sm:max-w-md mx-auto">
            Selo fonográfico independente focado em música digital e artistas virtuais.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md px-3 sm:px-0 flex flex-col gap-6 sm:gap-8 md:gap-10"
        >
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(212,180,95,0.3)' }}
                className="block p-3 sm:p-4 md:p-4 border border-[rgba(212,180,95,0.3)] rounded-lg hover:border-[rgba(212,180,95,0.6)] transition-all duration-300 backdrop-blur-sm bg-[rgba(212,180,95,0.02)] group mb-4 sm:mb-6 md:mb-8"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[rgba(212,180,95,0.15)] flex items-center justify-center group-hover:bg-[rgba(212,180,95,0.25)] transition-colors">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#d4b45f]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#f5f5f5]">
                      {link.title}
                    </p>
                    <p className="text-xs text-[#999999] font-light tracking-wide truncate">
                      {link.subtitle}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-[#d4b45f] group-hover:translate-x-1 transition-transform text-xs">
                    →
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <p className="text-xs text-[#666666] font-light tracking-wide">
            © 2024 Dark Room Records. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
