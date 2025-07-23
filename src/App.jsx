import { useEffect, useState } from 'react';
import './App.css';
import PostForm from './components/PostForm';
import StatusModal from './components/StatusModal';

function App() {
  const [postData, setPostData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  })
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState(null);




  function handlePostSubmit(e){
    e.preventDefault();
    setStatus('loading');
    setIsModalOpen(true);    
    fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then((res) => res.json())
    .then((data) => {
      setStatus('success');
      console.log('post creato:', data)
    })
    .catch((err) =>{
      setStatus('error');
      console.error('errore:', err)
    })
  };

  function closeModal() {
    setIsModalOpen(false);
    setStatus(null);
    setPostData({
      author: '',
      title: '',
      body: '',
      public: false
    })

  }

  return (
    <>
      <div className="container">
        <h1 className='py-3'>Carica il tuo post</h1>
        <PostForm postData={postData} setPostData={setPostData} onSubmit={handlePostSubmit}/>
        <StatusModal isOpen={isModalOpen} status={status} onClose={closeModal}/>
      </div>
    </>
  )
}

export default App
