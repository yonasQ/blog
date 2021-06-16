import Link from 'next/link';
import { withRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { listSearch } from '../../actions/blog';


const Search = ({router}) => {
    const [Values, setValues] = useState({
        search: undefined,
        results: [],
        searched: false,
        message: ''
    })

    const { search, searched, results, message } = Values;
    useEffect(() => {
       setValues({...Values,searched:false,search:''})
    }, [router])
    const searchSubmit = e => {
        e.preventDefault()
        listSearch({ search })
            .then(data => {
                setValues({ ...Values, results:data.blogs,searched:true,message:`${data.blogs.length} blogs found.` })
            })
    }
    const handleChange = e => {
        setValues({ ...Values, search: e.target.value, searched: false, result: [] })
    }
const searchedBlogs=(result=[])=>{
    return <div className="jumbotron bg-white">
        {message && <p className="pt-4 text-muted font-italic">{message}</p> }
        {result.map((blog,i)=>{
            return <div key={i}>
                <Link href={`/blogs/${blog.slug}`}><a className="text-primary">{blog.title}</a></Link>
            </div>
        })}
        
    </div>
}

    const searchForm = () => {
        return <form onSubmit={searchSubmit}>
            <div className="row">
                <div className="col-md-8">
                    <input type="search" className="form-control" value={search} onChange={handleChange} placeholder='search blogs' />
                </div>
                <div className="col-md-4">
                    <button className="btn btn-outline-primary btn-block" type='submit'>Search</button>
                </div>
            </div>
        </form>
    }
    return (
        <div className="container-fluid">
            <div className="pt-3 pb-3">{searchForm()}</div>
            {searched && <div style={{ marginTop: '-80px', marginBottom: '-80px'}}>{searchedBlogs(results)}</div> }
        </div>
    )
}

export default withRouter(Search)
