import './App.css';
import CommentComponent from './components/CommentComponent/CommentComponent'
import CarComponent from './components/CarComponent/CarComponent';
import PostComponent from './components/PostComponent/PostComponent';

function App() {
  return (
    <div className='container'>
    <CarComponent />
    <CommentComponent />
    <PostComponent />
    </div>
  );
}

export default App;
