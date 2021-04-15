import NoticeForm from '../../components/NoticeForm'
import Title from '../../components/Title';

function createNotice(data) {
  console.log(data);
}

export default function NoticeNew() {
  return (
    <>
      <Title> Register Notice </Title>
      <NoticeForm onSubmit={createNotice}/>
    </>
  )
};
