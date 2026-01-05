import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mokwa | Architectural Portfolio Engine',
    short_name: 'Mokwa Portfolio',
    description: 'A hyper-modern, architecturally sound personal portfolio engine',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}