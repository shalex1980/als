import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'

const Layout = (props) => {
    return (
        <>
          <Head>
            <title>{props.pageTitle || 'ALISPOLIN'  }</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Raleway:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
          </Head>
          <Header />
          <main>
            {props.children}
          </main>
          <Footer />
        </>
    )
}

export default  Layout