import '../styles/globals.css';
import 'swiper/swiper.min.css';
import type { AppProps } from 'next/app';
import DialogContainer from '../dialogs';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <DialogContainer />
    </>
  );
}

export default MyApp;
