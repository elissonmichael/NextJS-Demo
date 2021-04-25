import NoticeForm from '../../../components/NoticeForm'
import Title from '../../../components/Title';
import Router from 'next/router'
import { useEffect } from 'react'

function updateNotice(data) {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/${data.id}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    Router.push(`/notices/${data.id}`)
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

export default function NoticeUpdate(props) {
  useEffect(() => {
    M.updateTextFields();
  }, [])

  return (
    <>
      <Title> Edit Notice </Title>
      <NoticeForm onSubmit={updateNotice} notice={props.notice}/>
    </>
  )
};

export async function getServerSideProps({ query }) {
  const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${query.id}`);
  const notice = await request.json();

  return {
    props: { notice }
  }
}