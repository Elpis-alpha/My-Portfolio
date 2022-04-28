import Head from 'next/head'

import { siteName, siteDescription, creator } from '../../__env'


const HeadTag = ({ title, description }) => {

  return (

    <Head>

      <meta charSet="UTF-8" />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <meta name="author" content={creator} />

      <meta name='robots' content='index,follow' />

      <meta name="theme-color" content="#f2f4f5" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="description" content={description ? description : siteDescription} />

      <title>{siteName} {title && `| ${title}`}</title>

      <link rel="icon" href="/favicon.ico" />

      <link rel="apple-touch-icon" href="/logo192.png" />

      <link rel="manifest" href="/manifest.json" />

    </Head>

  )

}

export default HeadTag