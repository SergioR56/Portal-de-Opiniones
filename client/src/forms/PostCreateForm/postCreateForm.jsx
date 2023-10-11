import PropTypes from 'prop-types';
import { useState } from "react";
import { createPostService } from '../../services/postService';



const PostCreateForm = ({ addPost }) => {
   const [text, setText] = useState('');
 
   const [loading, setLoading] = useState(false); 

   const handlePostCreate = async () => {
        try {
            setLoading(true)
            const formData = new FormData();
            formData.append('text', text);

           
            const body = await createPostService(formData);
            addPost(body.data.post)
        } catch (err) {
            alert(err.message)
        } finally {
            setLoading(false)
        }
   }
 
   return (
         <form>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength="500"
              autoFocus
              required
            />
            <button onClick={handlePostCreate} disabled={loading}>
              {loading ? 'Cargando...' : 'Crear Post'}
            </button>
        </form>
   );
};

PostCreateForm.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default PostCreateForm;
