import Title from '../../components/Title'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Notice({ notice }) {
  useEffect(() => {
    const elems = document.querySelectorAll('.dropdown-trigger');
    const instances = M.Dropdown.init(elems, { coverTrigger: false });
  }, [])

  return (
    <>
    <nav className='clean'>
      <div className="nav-wrapper">
        <div className="col s12">
          <a href="/" className="breadcrumb">
            Notices
          </a>
          <a href="#!" className="breadcrumb">
            Notice ID { notice.id }
          </a>
        </div>
      </div>
    </nav>
    <Title>Notice ID { notice.id }</Title>
    <div className='row'>
      <div className='col s12 m6'>
        <p> <b>ID:      </b> { notice.id } </p>
        <p> <b>Title:   </b> { notice.title } </p>
        <p> <b>Status:  </b> Sent </p>
      </div>
        <a className='dropdown-trigger btn' href='#' data-target='dropdown'>Notice Options</a>

        <ul id='dropdown' className='dropdown-content'>
          <li>
            <Link href={`/notices/${encodeURIComponent(notice.id)}/edit`}>
              <a>
                <i className="material-icons">edit</i> Edit
              </a>
            </Link>
          </li>
          <li className="divider" tabIndex="-1"></li>
          <li>
            <Link href={`/notices/${encodeURIComponent(notice.id)}/destroy`}>
              <a>
                <i className="material-icons">delete</i> Delete
              </a>
            </Link>
          </li>
        </ul>
    </div>
    <div className='row'>
      <h6>Description</h6>
      <div className='divider'></div>
      <div className='col s12'>
        <p>
          { notice.description }
        </p>
      </div>
    </div>
    </>
  )
}

export async function getStaticPaths() {
  const request = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const notices = await request.json();
  const paths = notices.map((notice) => ({
    params: { id: String(notice.id) },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${params.id}`);
  const notice = await request.json();

  return {
    props: {
      notice,
    },
    revalidate: 1,
  }
}