import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Should Your Business Try Unlimited Graphic Design?" />
        <p className="description">
          If you own any type of business, chances are you need to get your graphic designs done on a regular basis. And you’re looking for efficient ways to do this, without breaking the bank. That’s why you might want to try unlimited graphic design – they’re all about fulfilling the design requirements you have, with consistent turnarounds, at a flat monthly rate.</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
