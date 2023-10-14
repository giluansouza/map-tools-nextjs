import '@/styles/global.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap', }
)

export const metadata: Metadata = {
  title: 'Mapas | Devboot',
  description: 'Ferramente de mapas de densidade kernel e geoprocessamento de pontos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
