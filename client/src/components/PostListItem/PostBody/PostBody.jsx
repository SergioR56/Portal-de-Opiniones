// Importamos los prop-types.
import PropTypes from 'prop-types';

// Importamos los estilos.
import './PostBody.css';

const PostBody = ({ text }) => {
    return (
        <div className="post-body">
            <p>{text}</p>
        </div>
    );
};

PostBody.propTypes = {
    text: PropTypes.string.isRequired,
};

export default PostBody;
