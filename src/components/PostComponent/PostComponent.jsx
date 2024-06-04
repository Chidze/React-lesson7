import styles from './PostComponent.module.css'
import React from 'react';
import axios from 'axios';

class PostComponent extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        posts: []
      }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            this.setState({ posts: response.data });
          })
          .catch(error => {
            console.error("There was an error fetching the posts!", error);
          });
      }

  render () {
    const { posts } = this.state;
  return (
    <ol className={styles.box}>  
    <div className={styles.header}>Posts</div>
    {posts?.map((post) =>(
    <li key={post.id} >
    <div>userID: {post.userId}</div>
    <div>id: {post.id}</div>
    <div>title : {post.title}</div>
    <div>body: {post.body}</div>
    </li>
    ))}
    </ol>
    
  );
}
}

export default PostComponent;