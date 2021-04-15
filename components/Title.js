export default function Title(props){
  return (
    <div className='row center'>
      <div className='col s12'>
        <h5 className='header grey-text text-darken-1'> { props.children } </h5>
      </div>
      <div className='divider'></div>
    </div>
  )
};
