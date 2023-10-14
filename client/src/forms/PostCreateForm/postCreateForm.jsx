import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

import './PostCreateForm.css';
import { createPostService } from '../../services/postService';


const PostCreateForm = () => {
    const navigate = useNavigate();
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePostCreate = async () => {
    try {
      setLoading(true);

      const body = await createPostService(text);

      if (body.status === 'error') {
        throw new Error(body.message);
      }

      navigate('/');
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className='post-create-form'
      onSubmit={(e) => {
        e.preventDefault();
        handlePostCreate();
      }}
    >
      <h1>Añadir una opinion.</h1>
      <textarea
        placeholder='El texto aqui...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength='500'
        autoFocus
        required
      />
      <div className='img-prev-container'>
        <button disabled={loading}>
          Enviar
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default PostCreateForm;
