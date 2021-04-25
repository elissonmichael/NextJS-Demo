import Title from '../../components/Title'

export default function ShowNotice(props) {
  return (
    <>
    <nav className='clean'>
      <div className="nav-wrapper">
        <div className="col s12">
          <a href="/" className="breadcrumb">
            Notices
          </a>
          <a href="#!" className="breadcrumb">
            Notice ID {props.notice.id}
          </a>
        </div>
      </div>
    </nav>
    <Title>Notice ID { props.notice.id }</Title>
    <div className='row'>
      <div className='col s12 m6'>
        <p> <b>ID:      </b> { props.notice.id } </p>
        <p> <b>Title:   </b> {props.notice.title} </p>
        <p> <b>Status:  </b> Sent </p>
      </div>
    </div>
    <div className='row'>
      <h6>Description</h6>
      <div className='divider'></div>
      <div className='col s12'>
        <p>
          { props.notice.description }
        </p>
      </div>
    </div>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${query.id}`);
  const notice = await request.json();

  return {
    props: { notice }
  }
}