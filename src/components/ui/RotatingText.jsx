import { useEffect, useState } from 'react'

const words = [
  'Tech & Data Enthusiast',
  'Mobile Developer',
  'Administrative Support',
  'Data & Operations',
]

function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Timer untuk mengganti kata setiap 3.5 detik
    const interval = setInterval(() => {
      // Mulai efek fade out (menghilang perlahan)
      setIsVisible(false)

      // Setelah teks menghilang (500ms), ganti kata dan lakukan fade in (muncul kembali)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsVisible(true)
      }, 500) // Waktu durasi fade out

    }, 3500) // Total waktu kata tersebut tampil di layar

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-block min-w-[240px] sm:min-w-[320px] md:min-w-[380px] text-blue-500">
      <span
        className={`inline-block transition-all duration-500 ease-in-out ${
          isVisible
            ? 'opacity-100 translate-y-0 blur-0'
            : 'opacity-0 -translate-y-2 blur-sm'
        }`}
      >
        {words[currentIndex]}
      </span>
    </span>
  )
}

export default RotatingText