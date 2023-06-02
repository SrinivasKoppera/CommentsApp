// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const like =
  'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
const disLike =
  'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
const CommentItem = props => {
  const {reviewDetails, toggleLikeButton, deleteReview} = props
  const {
    name,
    comment,
    time,
    isLiked,
    id,
    initialBackgroundClassName,
  } = reviewDetails
  const postingTime = formatDistanceToNow(time)
  const clickLikeBtn = () => {
    toggleLikeButton(id)
  }

  const onDeleteReview = () => {
    deleteReview(id)
  }
  const initialName = name.slice(0, 1)
  const likeStatus = isLiked ? like : disLike

  return (
    <li className="comment-list-item">
      <div className="name-container">
        <div className={`initial-container ${initialBackgroundClassName}`}>
          <p className="initial">{initialName}</p>
        </div>
        <p className="name">{name}</p>
        <p className="time">{postingTime} ago</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="delete-like-container">
        <div className="like-container">
          <button type="button" className="btn" onClick={clickLikeBtn}>
            <img src={likeStatus} alt="like" className="like-img" />
          </button>

          <p className="like-text">Like</p>
        </div>
        <button
          type="button"
          className="btn"
          data-testid="delete"
          onClick={onDeleteReview}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
