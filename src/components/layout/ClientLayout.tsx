'use client'

import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

export default function ClientLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
