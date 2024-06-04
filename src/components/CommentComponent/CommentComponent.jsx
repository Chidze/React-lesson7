import styles from './CommentComponent.module.css'
import React from 'react';
import axios from 'axios';

class CommentComponent extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        comments: []
      }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
          .then(response => {
            this.setState({ comments: response.data });
          })
          .catch(error => {
            console.error("There was an error fetching the comments!", error);
          });
      }

  render () {
    const { comments } = this.state;
  return (
    <ol className={styles.box}>  
    <div className={styles.header}>Comments</div>
    {comments?.map((comment) =>(
    <li key={comment.id} >
    <div>userID: {comment.postId}</div>
    <div>id: {comment.id}</div>
    </li>
    ))}
    </ol>
  );
}
}

export default CommentComponent;