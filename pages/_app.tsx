import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>MetaVersus</title>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
                <link rel='preconnect' href='https://stijndv.com' />
                <link rel='stylesheet' href='https://stijndv.com/fonts/Eudoxus-Sans.css' />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App
