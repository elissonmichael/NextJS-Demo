import dynamic from 'next/dynamic';

const M = dynamic(
  () => import('materialize-css/dist/js/materialize.min.js').then((mod) => mod.AutoInit()),
  { ssr: false }
)

export default function Home(props) {

  return (
    <div className="container">
      <M />
      <main>
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
