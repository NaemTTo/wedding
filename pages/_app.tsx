import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DialogContainer from '../dialogs'

function MyApp({ Component, pageProps }: AppProps) {
  return <><Component {...pageProps} />
  <DialogContainer />
  </>
}

export default MyApp
