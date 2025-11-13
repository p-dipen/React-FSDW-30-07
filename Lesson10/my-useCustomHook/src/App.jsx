import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import InnerWidth from './InnerWidth';
import OuterWidth from './Outerwidth';
import CustomWidth from './CustomWidth';
import useFetch from './useFetch';
function App() {
  const [count, setCount] = useState(0);
  const [post, errorPost] = useFetch(
    'https://jsonplaceholder.typicode.com/pos/1',
  );
  const [comment, errorComment] = useFetch(
    'https://jsonplaceholder.typicode.com/comments/1',
  );
  const [album, errorAlbum] = useFetch(
    'https://jsonplaceholder.typicode.com/albums/1',
  );
  console.log(typeof post);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        {errorPost == ''
          ? JSON.stringify(post)
          : 'Error While getting post - ' + errorPost}
      </div>
      <div className="card">
        {errorComment == ''
          ? JSON.stringify(comment)
          : 'Error While getting comment - ' + errorComment}
      </div>
      <div className="card">{JSON.stringify(album)}</div>
      <p className="read-the-docs"></p>
    </>
  );
}

export default App;
