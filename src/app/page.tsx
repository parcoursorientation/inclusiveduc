import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HomePage from '@/components/HomePage'
import ClientOnly from '@/components/ClientOnly'

export default function Home() {
  return (
    <ClientOnly>
      <main className="min-h-screen">
        <Navigation />
        <HomePage />
        <Footer />
      </main>
    </ClientOnly>
  )
}