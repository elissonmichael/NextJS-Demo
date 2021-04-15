import Link from 'next/link';

export default function NoticeForm() {
  return (
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id="title" type="text" className="validate"/>
          <label htmlFor="title">Title</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <textarea id="description" className="materialize-textarea"></textarea>
          <label htmlFor="description">Description</label>
        </div>
      </div>
      <div class='row'>
        <div class='col s6 right-align'>
          <button className='waves-effect waves-light btn deep-purple darkn-4' type='submit'>
            Save
          </button>
        </div>
        <div class='col s6 left-align'>
          <Link href='/'>
            <a class="waves-effect waves-light btn">Cancel</a>
          </Link>
        </div>
      </div>
    </form>
  )
};
