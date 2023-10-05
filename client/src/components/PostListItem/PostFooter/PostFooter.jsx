import {PropTypes}  from "prop-types"

const PostFooter = ({ postId, likes, dislikes, likedByMe}) => {
    return (
        <footer className="post-footer">
            <div>
                <div className={`heart ${likedByMe && 'like'}`}></div>
                <p>{likes}{dislikes}{postId}</p>    
            </div>
        </footer>
    )
}

PostFooter.propTypes = {
    postId: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    likedByMe: PropTypes.bool.isRequired,
}

export default PostFooter