import Head from 'next/head'
import Homepage from './homepage'

export default function Home() {
  return (
    <div className="main-container">
      <Head>
        <meta charSet="utf-8" />
        {/* <a rel="icon" href="../static/favicon.ico" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="The energy of a start-up combined with 30 years of experience"
        />
        <title>Bring every idea to life</title>
        {/* <a href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" /> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" async></script> */}
      </Head>

      <main className="main">
        <Homepage />
      </main>
    </div>
  )
}
