
import '../components/interface/Runner.scss'
import '../styles/globals.scss'
import '../styles/themes/default.scss'
import RootLayout from "./../app/layout"



function MyApp({ Component, pageProps }) {


  return (

    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>



  )
}

export default MyApp
