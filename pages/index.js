import Link from 'next/link';
import Title from '../components/Title';
import { useEffect } from 'react'

export default function Home(props) {
  useEffect(() => {
    const elems = document.querySelectorAll('.collapsible');
    const instances = M.Collapsible.init(elems);
  }, [])

  return (
    <>
    <Title> Notices </Title>
    <div className='row'>
      <div className='input-field col m4 offset-m8'>
        <Link href="/notices/new">
          <a className="waves-effect waves-light btn">Create Notice</a>
        </Link>
      </div>
    </div>
    <ul className="collapsible">
    {
      props.notices.map(notice =>
        <li key={ notice.id }>
          <div className="collapsible-header">
            <b> ID: { notice.id } </b> <i className="material-icons">swap_vert</i>{ notice.title }
          </div>
          <div className="collapsible-body"><span>{ notice.description }</span></div>
        </li>
      )
    }
    </ul>
    </>
  )
}

export async function getServerSideProps() {
  const request = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const notices = await request.json();

  return {
    props: { notices }
  }
}
