import sweetAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';

function Searcher() {

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault()
        const  keyword = e.currentTarget.keyword.value.trim()
        if (keyword === "") {
          sweetAlert("error", "You must enter a keyword", "error");  
        }

        e.currentTarget.keyword.value = ""
        navigate(`/results?keyword=${keyword}`);
    }

    return  <form action="" method="post" className='d-flex ms-auto mx-3' onSubmit={submitHandler}>
        <input type="text" name="keyword" className='px-2' placeholder='Enter a name...'/>
        <button type="submit" className='btn btn-success mx-2'>Search</button>
      </form>
}

export default Searcher;