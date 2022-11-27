import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {/* <a rel="shortcut icon" href="/img/favicon.ico" /> */}
          <meta
            name="keywords"
            content="Home | Wishit | Design Agency"
          />

          <meta name="author" content="Wishit" />

          <meta
            name="description"
            content="The energy of a start-up combined with 30 years of experience"
          />
          {/* 
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Grid Design Studio" />
          <meta property="og:title" content="Grid Design Studio - A global design agency crafting experiences using power of design that move businesses & people." />
          <meta property="og:image" content="https://grid-studio.netlify.app/og.png" />
          <meta property="og:image:url" content="https://grid-studio.netlify.app/og.png" />
          <meta property="og:image:alt" content="Image | Grid Design Studio" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:type" content="images/png" />
          <meta property="og:description" content="A global design agency crafting experiences using power of design that move businesses & people." />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="Twitter @Grid_Design_Studio" />
          <meta name="twitter:title" content="Grid Design Studio - A global design agency crafting experiences using power of design that move businesses & people." />
          <meta name="twitter:description" content="A global design agency crafting experiences using power of design that move businesses & people." />
          <meta name="twitter:image" content="https://grid-studio.netlify.app/og.png" /> */}


          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js" async />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" async />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.velocity.min.js" async />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js" async />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.min.js" async />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.min.js" async />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js" async ></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js" async />
          <script src="ttps://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js" async />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
