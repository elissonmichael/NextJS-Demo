import dynamic from 'next/dynamic';

const M = dynamic(
  () => import('materialize-css/dist/js/materialize.min.js').then((mod) => mod.AutoInit()),
  { ssr: false }
)

export default function Home(props) {

  return (
    <main className="container">
      <M />
      <div className='row center'>
        <div className='col s12'>
          <h5 className='header grey-text text-darken-1'> Notices </h5>
        </div>
      </div>
      <div className='divider'></div>
      <ul class="collapsible">
      {
        props.notices.map(notice =>
          <li>
            <div class="collapsible-header">
              <b> ID: { notice.id } </b> <i class="material-icons">swap_vert</i>{ notice.title }
            </div>
            <div class="collapsible-body"><span>{ notice.description }</span></div>
          </li>
        )
      }
      </ul>
    </main>
  )
}

export async function getServerSideProps() {
  const request = await fetch(`https://notice-api.herokuapp.com/notices`);
  const notices = await request.json();

  return {
    props: { notices }
  }
}
