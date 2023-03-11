import Nav from "./nav";
import {Poppins} from 'next/font/google'
import Head from 'next/head'

const poppins = Poppins({
    weight:'400',
    subsets: ['latin'],
})

const Layout = ({children}) => {

    return(
        <>
            <Head>
                <title>Troy A Wilson</title>
                <meta name="description" content="Portfolio website" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="/favicon.ico?v=2" />
            </Head>
        
            <div className={['mainContainer', poppins.className].join(" ")}>
                <Nav/>
                <main style={{marginBottom:'1%'}}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;