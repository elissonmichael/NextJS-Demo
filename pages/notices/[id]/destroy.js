import Router from 'next/router'

export default function DestroyNotice(props) {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/${props.id}`, { method: 'delete' })
    .then(response => {
      Router.push('/')
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  return null;
};

export async function getServerSideProps({ query }) {
  return {
    props: { id: query.id }
  }
}