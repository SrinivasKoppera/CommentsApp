import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

const initialCommentsList = []

class Comments extends Component {
  state = {commentsList: initialCommentsList, name: '', comment: ''}

  addComment = event => {
    event.preventDefault()
    const newDate = Date.now()
    const {name, comment} = this.state
    const initialBackgroundColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newReview = {
      id: uuidv4(),
      name,
      comment,
      time: newDate,
      isLiked: false,
      initialBackgroundClassName: initialBackgroundColor,
    }
    this.setState(previousState => ({
      commentsList: [...previousState.commentsList, newReview],
      name: '',
      comment: '',
    }))
  }

  toggleLikeButton = id => {
    this.setState(previousState => ({
      commentsList: previousState.commentsList.map(eachOne => {
        if (eachOne.id === id) {
          return {...eachOne, isLiked: !eachOne.isLiked}
        }
        return eachOne
      }),
    }))
  }

  deleteReview = id => {
    const {commentsList} = this.state
    const filtered = commentsList.filter(eachReview => eachReview.id !== id)

    this.setState({commentsList: filtered})
  }

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, name, comment} = this.state
    const commentsCount = commentsList.length
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Comments</h1>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="input-img"
            />
            <form className="form-container" onSubmit={this.addComment}>
              <p className="technology-message">
                Say something about 4.0 Technologies
              </p>
              <input
                className="name-input"
                placeholder="Your Name"
                onChange={this.onNameChange}
                value={name}
              />
              <textarea
                className="name-input"
                cols={6}
                rows={6}
                placeholder="Your Comment"
                onChange={this.onCommentChange}
                value={comment}
              />
              <button className="submit-btn" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <hr />
          <div>
            <p>
              <span className="comments-count">{commentsCount}</span> Comments
            </p>
            <ul className="comments-container">
              {commentsList.map(eachReview => (
                <CommentItem
                  key={eachReview.id}
                  reviewDetails={eachReview}
                  toggleLikeButton={this.toggleLikeButton}
                  deleteReview={this.deleteReview}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
