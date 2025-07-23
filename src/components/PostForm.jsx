export default function PostForm({ postData, setPostData, onSubmit }) {
  const isFormValid = postData.author && postData.title && postData.body;

  return (
    <form className='border p-4 rounded bg-light' onSubmit={onSubmit}>
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
            <input type="checkbox" className="form-check-input" id="public" checked={postData.public} onChange={e => setPostData({...postData, public: e.target.checked})}/>
            <label className="form-check-label" htmlFor="public">Pubblico</label>
        </div>

        <div className='d-flex'>
            <button type="submit" className="btn btn-primary w-25 mx-auto" disabled={!isFormValid} >Invia</button>
        </div>
    </form>
  );
}

