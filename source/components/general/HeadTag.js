import Head from 'next/head'

import { siteName, siteDescription, creator, clientID } from '../../__env'


const HeadTag = ({ title, description }) => {

  return (

    <Head>

      <meta charSet="UTF-8" />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <meta name="author" content={creator} />

      <meta name="publisher" content={creator} />

      <meta name='robots' content='all' />

      <meta name='googlebot' content='all' />

      <meta name="theme-color" content="#dadcdd" />

      <meta name='application-name' content={siteName} />

      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="description" content={description ? description : siteDescription} />

      <title>{siteName} {title && `| ${title}`}</title>

      <link rel="icon" href="/favicon.ico" />

      <link rel="apple-touch-icon" href="/logo192.png" />

      <link rel="manifest" href="/manifest.json" />

      <meta property="og:title" content={siteName} />

      <meta property="og:url" content="https://elpis-portfolio.vercel.app/" />

      <meta property="og:description" content={description ? description : siteDescription} />

      <meta property="og:type" content="website" />

      <meta property="og:locale" content="en_US" />

      <meta property="og:image" content="https://elpis-portfolio.vercel.app/images/open-graph.png" />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      <meta property="og:image:type" content="image/png" />

    </Head>

  )

}

export default HeadTag