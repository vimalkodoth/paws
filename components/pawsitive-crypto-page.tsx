import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Bone, PawPrintIcon as Paw, Coins, Heart, Dog } from 'lucide-react'

export default function PawsitiveCryptoPage() {
  const [pawCount, setPawCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPawCount((prevCount) => prevCount + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-orange-400 flex flex-col items-center justify-center p-4 text-center">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="text-6xl md:text-8xl font-bold text-purple-800 mb-8"
      >
        Being <i>Pawsitive!</i>
      </motion.h1>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl md:text-3xl text-purple-900 mb-8"
      >
        Unleash positivity into the world with Paw-sitive Vibes!
      </motion.div>

      <div className="relative w-48 h-48 mb-8" aria-label="Animated illustration of a happy dog wagging its tail">
        <Dog className="w-full h-full text-purple-800" />
        <div className="absolute bottom-0 right-0 w-12 h-24 origin-bottom-right animate-wag">
          <div className="w-full h-full bg-purple-800 rounded-full transform -rotate-45"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <FeatureCard
          icon={<Bone className="w-12 h-12 text-purple-600" />}
          title="Bone-afide Currency"
          description="Our token is the real deal, no bones about it!"
        />
        <FeatureCard
          icon={<Paw className="w-12 h-12 text-purple-600" />}
          title="Paw-some Returns"
          description="Watch your investment grow faster than a puppy!"
        />
        <FeatureCard
          icon={<Coins className="w-12 h-12 text-purple-600" />}
          title="Fetch Great Deals"
          description="Sniff out amazing opportunities in the crypto world!"
        />
        <FeatureCard
          icon={<Heart className="w-12 h-12 text-purple-600" />}
          title="Loyal Community"
          description="Join a pack that's always got your back!"
        />
      </div>
      <a href="https://memecoin.new/coin/0xd137b0c0226a8e8692c0bca22f55864345c93f54" target="_blank">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:bg-purple-700 transition duration-300"
        >
          Get Your Paws on Some Tokens!
        </motion.button>
      </a>

      <div className="mt-12 text-purple-900 text-xl">
        ca: 0xd137b0c0226a8e8692c0bca22f55864345c93f54
      </div>

      <footer className="mt-16 text-purple-900">
        <p>© 2024 Pawsitive Crypto. All rights re-furr-ved.</p>
        <p className="text-sm mt-2">
          Disclaimer: This is not financial advice. Please invest responsibly and don't chase your tail in the crypto market!
        </p>
      </footer>
      <style jsx>{`
        @keyframes wag {
          0%, 100% { transform: rotate(-45deg); }
          50% { transform: rotate(-30deg); }
        }
        .animate-wag {
          animation: wag 0.5s infinite;
        }
      `}</style>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg p-6 shadow-md"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-purple-800 mb-2">{title}</h3>
      <p className="text-purple-900">{description}</p>
    </motion.div>
  )
}

