import Head from "next/head";
import dynamic from 'next/dynamic';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Notices</title>
    </Head>
    <main className="container">
      <Component {...pageProps} />
    </main>
    </>
  );
}
