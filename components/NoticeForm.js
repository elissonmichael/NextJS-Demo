import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function NoticeForm({ onSubmit, notice }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form className="col s12" onSubmit={handleSubmit(onSubmit)}>
      <input {...register('id')} id="id" type="hidden" defaultValue={ notice.id }/>
      <div className="row">
        <div className="input-field col s12">
          <input {...register('title', { required: true })} id="title" type="text" className="validate" defaultValue={ notice.title } autoFocus/>
          <label htmlFor="title">Title</label>
          { errors.title &&
            <span className="helper-text" data-error="wrong">Title can't be blank</span>
          }
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <textarea {...register('description', { required: true })} id="description" className="materialize-textarea" defaultValue={ notice.description }></textarea>
          <label htmlFor="description">Description</label>
          { errors.description &&
            <span className="helper-text" data-error="wrong">Description can't be blank</span>
          }
        </div>
      </div>
      <div className='row'>
        <div className='col s6 right-align'>
          <button className='waves-effect waves-light btn deep-purple darkn-4' type='submit'>
            Save
          </button>
        </div>
        <div className='col s6 left-align'>
          <Link href='/'>
            <a className="waves-effect waves-light btn">Cancel</a>
          </Link>
        </div>
      </div>
    </form>
  )
};
