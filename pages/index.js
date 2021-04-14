import Head from 'next/head'
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

export async function getServerSideProps() {
  const request = await fetch(`https://notice-api.herokuapp.com/notices`);
  const notices = await request.json();

  return {
    props: { notices }
  }
}
