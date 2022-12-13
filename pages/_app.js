import '../styles/theme.scss';
import AOS from "aos";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return <Component {...pageProps} />
}

export default MyApp
