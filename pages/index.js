import Link from 'next/link';
import Title from '../components/Title';

export default function Home(props) {
  return (
    <>
    <Title> Notices </Title>
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
