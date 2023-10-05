import {PropTypes}  from "prop-types"
const baseURL = import.meta.env.VITE_API_URL;

const PostBody = ({ text, image}) => {
    return (
      <div className="post-body">
        <p>{text}</p>
        {image && (
            <img
            src={`${baseURL}/${image}`}
            alt="Imagen Adjunta" />
        )}
      </div>
    )
}

PostBody.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string,
}

export default PostBody