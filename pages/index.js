import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import styles from '../styles/Home.module.css'

function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Notices</title>
      </Head>
      <main className={styles.main}>
      <h1> Notices </h1>
        {
          data.map(notice =>
            <>
              <h3>
                { notice.title }
              </h3>
              <p>
                { notice.description }
              </p>
            </>
          )
        }
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://notice-api.herokuapp.com/notices`);
  const data = await res.json();

  return { props: { data } }
}

export default Home
