import React, { useState, useEffect } from 'react'
import { isAuth, getCookie } from '../../actions/auth'
import { create, getCatagories, removeCatagory } from '../../actions/catagory'
const Catagory = () => {
    const [Values, setValues] = useState({
        name: '',
        error: false,
        success: false,
        catagories: [],
        removed: false,
        reload: false
    });
    const { name, error, success, catagories, removed, reload } = Values;
    const token = getCookie('token')
    useEffect(() => {
        loadCatagories()
    }, [reload])

    const loadCatagories = () => {
        getCatagories()
            .then(data => {
                if (data.err) {
                    console.log(err)
                }
                else {

                    setValues({ ...Values, catagories: data.catagories })
                }

            })
    }
    const showCatagories = () => {
        return catagories.map((c, i) => {
            return (
                <button onDoubleClick={() => { deleteConfirm(c.slug) }} title="double click to delete" key={i} style={{textTransform:'capitalize'}} className="btn btn-outline-primary ml-1 mr-1 mt-3">
                    {c.name}
                    </button>
            )
        })
    }
    const deleteConfirm=slug=>{
        deleteCatagory(slug)
    }
const deleteCatagory=slug=>{
    let answer=window.confirm('Are you sure you want to delete this catagory?')
    if(answer){
        removeCatagory(slug,token)
        .then(data=>{
            if(data.err){
                setValues({ ...Values, error: data.err })
            }
            else{
                setValues({ ...Values, reload: !reload,removed:true, error:false, success:false })

            }
        })
    }
}

 
    const handleChange = (e) => {
        setValues({ ...Values, name: e.target.value, error: false, success: false, removed: '' })
    }

    const clickSubmit = (e) => {
        e.preventDefault();
        create({ name }, token)
            .then(data => {
                if (data.err) {
                    setValues({ ...Values, error: data.err, reload: false })
                }
                else {
                    setValues({ ...Values, error: false, success: true, name: '', reload: !reload,removed:false })
                }
            })
    }
    const newCatagory = () => {
        return (<form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" className="form-control" value={name} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Create</button>
        </form>)
    }
    const showSuccess=()=>{
        if(success){
            return (
                <p className="text-success">New catagory is created. </p>
            )
        }
    }
    const showError=()=>{
        if(error){
            return (
                <p className="text-danger">Catagory already exists.</p>
            )
        }
    }
    const showRemove=()=>{
        if(removed){
            return (
                <p className="text-danger">Catagory is removed</p>
            )
        }
    }
const hideMessage=()=>{
    setValues({...Values,success:'',error:'',removed:''})
}
    return <React.Fragment>
        {showSuccess()}
        {showError()}
        {showRemove()}
        
        <div onMouseMove={hideMessage}>
            {newCatagory()}
            {showCatagories()}
        </div>
    </React.Fragment>
}

export default Catagory
