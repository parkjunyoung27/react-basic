import { useState } from 'react';

function App(){

  const [title, setTitle] = useState('');

  return (
    <div className="container">
      <div className='mb-3'>
        <label className='form-label'>Title</label>  
        <input 
          className='form-control'
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <button className='btn btn-primary'>
        Post
      </button>  
    </div>
  );
}

export default App; // 내보내는 문법 -> 사용할 땐 import 사용

