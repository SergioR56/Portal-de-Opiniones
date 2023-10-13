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
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength='500'
        autoFocus
        required
      />
      <div className='img-prev-container'>
        <button disabled={loading}>Enviar</button>
      </div>
    </form>
  );
};

export default PostCreateForm;
