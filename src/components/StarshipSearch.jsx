import { useState} from 'react'

function StarshipSearch (props){

    const [formData,setFormData]= useState('')

    function handleChange(e){
        setFormData(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        props.handleSearch(formData)
    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Search for starship: </label>
            <input 
            type="text"
            onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
        </>
    )
}

export default StarshipSearch;