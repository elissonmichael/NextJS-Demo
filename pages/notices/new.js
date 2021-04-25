import NoticeForm from '../../components/NoticeForm'
import Title from '../../components/Title';
import Router from 'next/router'

function createNotice(data) {
  fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    Router.push('/')
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

export default function NoticeNew(props) {

  return (
    <>
      <Title> Register Notice </Title>
      <NoticeForm onSubmit={createNotice} notice={props.notice} />
    </>
  )
};

export async function getServerSideProps({ query }) {
  const notice = { title: '', description: '' }

  return {
    props: { notice }
  }
}