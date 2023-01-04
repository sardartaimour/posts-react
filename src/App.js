import CreatePost from './app/components/post-create/CreatePost';
import ListPost from './app/components/pots-list/ListPost';
import './App.css';

function App() {

  console.log('app')
  return (
    <div className="container">
      <h1>Create Post</h1>
      <CreatePost />

      <hr />

      <ListPost />
    </div>
  );
}

export default App;
