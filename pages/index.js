import Link from 'next/link';

export default function Home(props) {
  return (
    <>
    <div className='row center'>
      <div className='col s12'>
        <h5 className='header grey-text text-darken-1'> Notices </h5>
      </div>
    </div>
    <div className='divider'></div>
    <div className='row'>
      <div className='input-field col m4 offset-m8'>
        <Link href='notices/new'>
          <a class="waves-effect waves-light btn">Create Notice</a>
        </Link>
      </div>
    </div>
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
    </>
  )
}

export async function getServerSideProps() {
  const request = await fetch(`https://notice-api.herokuapp.com/notices`);
  const notices = await request.json();

  return {
    props: { notices }
  }
}
