import sipaminalPreview from '../assets/images/projects/sipaminal-preview.png'
import telabatikPreview from '../assets/images/projects/telabatik-preview.png'
import tomascanPreview from '../assets/images/projects/tomascan-preview.png'

const projects = [
  {
    id: 'sipaminal',

    title: 'SIPAMINAL',

    category: 'Android Application',

    year: '2025',

    description:
      'SIPAMINAL adalah aplikasi mobile untuk membantu petugas lapas kelas IIA kota kendari melakukan kontrol dan pelaporan pengamanan secara digital. Petugas dapat melakukan scan QR pada area yang diperiksa, mengambil dokumentasi foto, mencatat lokasi dan waktu pemeriksaan, serta menyimpan hasil laporan secara terpusat. Sistem ini membantu membuat proses monitoring lebih cepat, terdokumentasi, dan mudah ditelusuri.',

    technologies: [
      'Kotlin',
      'Firebase',
      'MVVM',
      'CameraX',
    ],

    featured: true,
    
    image: sipaminalPreview,
  },

  {
    id: 'telabatik',

    title: 'TelaBatik',

    category: 'Mobile & Machine Learning',

    year: '2024',

    description:
      'TelaBatik merupakan aplikasi mobile berbasis Android yang dikembangkan sebagai capstone project akhir dalam program Bangkit Academy 2024 Batch 2. Aplikasi ini memanfaatkan teknologi Machine Learning untuk mengenali motif batik melalui gambar, kemudian memberikan informasi mengenai motif batik yang terdeteksi. TelaBatik dirancang untuk membantu pengguna mengenali dan mempelajari keberagaman motif batik Indonesia dengan cara yang lebih praktis dan interaktif.',

    technologies: [
      'Kotlin',
      'TensorFlow Lite',
      'MVVM',
      'Android',
      'Google Cloud',
    ],

    featured: true,

    image: telabatikPreview,
  },

  {
    id: 'tomato-disease-detection',

    title: 'TomaScan',

    category: 'Machine Learning & Android',

    year: '2025',

    description:
      'TomaScan adalah aplikasi Android berbasis Machine Learning yang dikembangkan sebagai proyek tugas akhir untuk membantu mengenali penyakit pada daun tanaman tomat melalui gambar. Aplikasi menggunakan model Convolutional Neural Network (CNN) berbasis MobileNetV2 untuk mengklasifikasikan kondisi daun dan memberikan informasi mengenai penyakit yang terdeteksi. TomaScan dirancang sebagai solusi praktis untuk membantu pengguna melakukan identifikasi awal penyakit tanaman tomat dengan lebih cepat dan mudah.',

    technologies: [
      'Python',
      'TensorFlow',
      'MobileNetV2',
      'TensorFlow Lite',
      'CameraX',
    ],

    featured: true,

     image: tomascanPreview,

  },
]

export default projects