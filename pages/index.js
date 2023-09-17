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
 <Header title="September macros" />
        <h2>IntegrityAI</h2>
                <p className="description">
                      Hire someone to redo web-detector accurate <code></code>
                    </p>
                <p className="description">
                      Get them to Integrate the UI design <code></code>
                    </p>
                <p className="description">
                     Hire someone to code extension bulk uploads <code></code>
                    </p>
       <h2>bot</h2>
                 <p className="description">
                        Check Status <code>buy computers</code>
                      </p>
        <h2>EmojiPulse</h2>
                   <p className="description">
                        Meet people at SD <code></code>
                      </p>
    <p className="description">
                        Hire one as CEO with a budget + equity <code></code>
                      </p>
    
    <p className="description">
           <code></code>
        </p>
        <h2>Golden</h2>
    <p className="description">
          IntegrityAI <code></code>
        </p>
        <h2>Nosotro</h2>
    <p className="description">
          IntegrityAI <code></code>
        </p>


        
      </main>

      <Footer />
    </div>
  )
}
