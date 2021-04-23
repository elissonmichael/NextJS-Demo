import { useRouter } from 'next/router'
import Router from 'next/router'

export default function DestroyNotice() {
  const router = useRouter()
  const { id } = router.query
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, { method: 'delete' })
    .then(response => {
      Router.push('/')
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  return null;
};