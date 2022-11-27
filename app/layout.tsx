import React from 'react'
import Head from 'next/head'
import '../styles/globals.css'

type BaseLayoutProps = {
    children: React.ReactNode
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    return (
        <html lang='en'>
            <Head>
                <title>MetaVersus</title>
                <link rel='preconnect' href='https://stijndv.com' />
                <link rel='stylesheet' href='https://stijndv.com/fonts/Eudoxus-Sans.css' />
            </Head>
            <body>{children}</body>
        </html>
    )
}

export default BaseLayout