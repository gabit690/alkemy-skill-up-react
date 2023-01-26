import sweetAlert from '@sweetalert/with-react';

function Searcher() {

    const submitHandler = (e) => {
        e.preventDefault()
        const  keyword = e.currentTarget.keyword.value
        if (keyword === "") {
            sweetAlert("error", "You must enter a keyword", "error");
        }
        console.log(keyword);
    }

    return  <form action="" method="post" className='d-flex ms-auto mx-3' onSubmit={submitHandler}>
        <input type="text" name="keyword" className='px-2' placeholder='Enter a name...'/>
        <button type="submit" className='btn btn-success'>Search</button>
      </form>
}

export default Searcher;