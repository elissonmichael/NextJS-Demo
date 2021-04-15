import Head from "next/head";
import dynamic from 'next/dynamic';
import 'materialize-css/dist/css/materialize.min.css'

const M = dynamic(
  () => import('materialize-css/dist/js/materialize.min.js').then((mod) => mod.AutoInit()),
  { ssr: false }
)

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Notices</title>
    </Head>
    <M />
    <main className="container">
      <Component {...pageProps} />
    </main>
    </>
  );
}
