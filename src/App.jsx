import { Mail, Music, TrendingUp, Globe, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'
import { spacing } from './config/spacing'

export default function Home() {
  const links = [
    {
      title: 'OUÇA NO SPOTIFY',
      subtitle: 'EM BREVE',
      href: '#',
      icon: Music,
    },
    {
      title: 'TIKTOK OFICIAL',
      subtitle: '@thedarkroomrecords',
      href: 'https://www.tiktok.com/@thedarkroomrecords',
      icon: TrendingUp,
    },
    {
      title: 'INSTAGRAM OFICIAL',
      subtitle: '@thedarkroomrecords',
      href: 'https://www.instagram.com/thedarkroomrecords',
      icon: Instagram,
    },
    {
      title: 'WEBSITE OFICIAL',
      subtitle: 'www.thedarkroomrecords.com',
      href: 'https://www.thedarkroomrecords.com',
      icon: Globe,
    },
    {
      title: 'CONTATO / LABEL',
      subtitle: 'contact@thedarkroomrecords.com',
      href: 'mailto:contact@thedarkroomrecords.com',
      icon: Mail,
    },
  ]

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl flex flex-col items-center">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          {/* Logo */}
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

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-wider mb-1 sm:mb-2">
            DARK ROOM
          </h1>

          {/* Subtitle - Using spacing.titleToRecords */}
          <p className={`text-xl sm:text-2xl md:text-4xl font-light tracking-widest text-[#d4b45f] ${spacing.titleToRecords.className}`}>
            RECORDS
          </p>

          {/* Description - Using spacing.recordsToDescription and spacing.textToButtons */}
          <p className={`${spacing.recordsToDescription.className} ${spacing.textToButtons.className} text-xs text-[#999999] font-light tracking-wide max-w-xs mx-auto text-center`}>
            Música digital para artistas virtuais.
          </p>
        </motion.div>

        {/* Links Section - Using spacing.buttonGap */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`w-full max-w-xs sm:max-w-sm md:max-w-md ${spacing.containerPadding.className} flex flex-col ${spacing.buttonGap.className}`}
        >
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(212,180,95,0.3)' }}
                className={`block ${spacing.buttonPadding.className} border border-[rgba(212,180,95,0.3)] rounded-lg hover:border-[rgba(212,180,95,0.6)] transition-all duration-300 backdrop-blur-sm bg-[rgba(212,180,95,0.02)] group`}
              >
                <div className={`flex items-center ${spacing.iconToText.className}`}>
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

                  <div className="flex-shrink-0 ml-2 text-[#d4b45f] group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
