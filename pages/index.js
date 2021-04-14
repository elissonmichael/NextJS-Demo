import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Notices</title>
      </Head>
      <main className={styles.main}>
      <h1> Notices </h1>
        {
          props.notices.map(notice =>
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

export async function getStaticProps() {
  const res = await fetch(`http://localhost:8080/notices`);
  const data = await res.json();

  return {
    props: {
      notices: data
    }
  }
}
