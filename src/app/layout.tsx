import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import "./styles/slider.css"
import Providers from '@/components/providers/Providers'
import ClientLayout from '@/components/layout/ClientLayout'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Etrit Hair',
  description: 'Professional hair salon services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <ClientLayout>
            {children}
          </ClientLayout>
        </Providers>
      </body>
    </html>
  )
}
