import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

const Title = (props) => {
  return (
    // 顯示出props.content
    <h1>{props.content}</h1>
  );
};

const App = () => {
  // 定義要傳入的字串
  let text = 'This is title';
  return (
    <div>
      <Title content={text} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
  </div>
);
