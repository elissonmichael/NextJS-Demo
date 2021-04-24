import Title from '../../components/Title'
import { useRouter } from 'next/router'

export default function ShowNotice(props) {
  return (
    <>
    <nav className='clean'>
      <div class="nav-wrapper">
        <div class="col s12">
          <a href="/" class="breadcrumb">
            Notices
          </a>
          <a href="#!" class="breadcrumb">
            Notice ID {props.notice.id}
          </a>
        </div>
      </div>
    </nav>
    <Title>Notice ID { props.notice.id }</Title>
    <div className='row'>
      <div className='col s12 m6'>
        <p> <b>ID:      </b> { props.notice.id } </p>
        <p> <b>Title:      </b> { props.notice.title } </p>
      </div>
    </div>
    <div class='row'>
      <h6>Description</h6>
      <div class='divider'></div>
      <div class='col s12'>
        <p>
          { props.notice.title }
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