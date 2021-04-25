import Link from 'next/link';
import Title from '../components/Title';

export default function Home({ notices }) {
  return (
    <>
    <Title> Notices </Title>
    <div className='divider'></div>
    <div className='row'>
      <div className='input-field col m4 offset-m8'>
        <Link href="/notices/new">
          <a className="waves-effect waves-light btn">Create Notice</a>
        </Link>
      </div>
    </div>
    {
      notices.length === 0
      ?
        <div className='row center'>
          <h6> No Notices Found. </h6>
        </div>
      :
        <table className='striped centered responsive-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {
              notices.map(notice =>
                <tr key={notice.id}>
                  <td> {notice.id} </td>
                  <td> {notice.title} </td>
                  <td>
                    <Link href={`/notices/${encodeURIComponent(notice.id)}`}>
                      <a>
                        <i className="material-icons">remove_red_eye</i>
                      </a>
                    </Link>
                    <Link href={`/notices/${encodeURIComponent(notice.id)}/edit`}>
                      <a>
                        <i className="material-icons">edit</i>
                      </a>
                    </Link>
                    <Link href={`/notices/${encodeURIComponent(notice.id)}/destroy`}>
                      <a>
                        <i className="material-icons">delete</i>
                      </a>
                    </Link>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
    }
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  const request = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const notices = await request.json();
  return { notices }
}
