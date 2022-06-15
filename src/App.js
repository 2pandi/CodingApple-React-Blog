import logo from './logo.svg';
import './App.css';

function App() {

  let postTitle = '송파 초밥 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <h4>2pandi의 블로그</h4>
      </div>
      <h4>{postTitle}</h4>
    </div>
  );
}

export default App;
