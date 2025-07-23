import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [postData, setPostData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  })

  const isFormValid = postData.author && postData.title && postData.body;


  function handlePostSubmit(e){
    e.preventDefault();
    fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then((res) => res.json())
    .then((data) => console.log('post creato:', data))
    .catch((err) =>{
      console.error('errore:', err)
    })
  };

  return (
    <>
      <div className="container">
        <h1 className='py-3'>Carica il tuo post</h1>

        <form className='border p-4 rounded bg-light' onSubmit={handlePostSubmit}>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">Author</label>
            <input type="text" className="form-control" id="author" placeholder='Nome' value={postData.author} onChange={e => setPostData({...postData, author: e.target.value})}/>
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" placeholder='Titolo' value={postData.title} onChange={e => setPostData({...postData, title: e.target.value})}/>
          </div>

          <div className="col-12 mb-4">
              <label htmlFor="floatingTextarea2" className='mb-2'>Contenuto del post</label>
              <textarea className="form-control" placeholder="Il tuo post" id="body" name='body' value={postData.body} onChange={e => setPostData({...postData, body: e.target.value})}></textarea>
          </div>

          <div className="mb-5 form-check">
            <input type="checkbox" className="form-check-input" id="public" value={postData.public} onChange={e => setPostData({...postData, public: e.target.checked})}/>
            <label className="form-check-label" htmlFor="public">Pubblico</label>
          </div>

          <div className='d-flex'>
            <button type="submit" className="btn btn-primary w-25 mx-auto" disabled={!isFormValid} >Invia</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
