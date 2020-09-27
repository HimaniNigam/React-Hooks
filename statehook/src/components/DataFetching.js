import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const[post,setPost] = useState({})  
    const[id,setId] = useState(1) 
    const[idFromButtonClick,setIdFromButtonClick] = useState(1)

    const handleClick = () =>{
        setIdFromButtonClick(id)

    }

useEffect(()=>{
    axios.get(`http://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    .then(res=>{
        console.log(res)
        setPost(res.data) // to display data in UI
    })
    .catch(err=>{
        console.log(err)
    })
},[idFromButtonClick])  // [] used to fetch data only once in componentdidMount
    return (
        <div>
            <input type='text' value={id} onChange={e=>setId(e.target.value)} ></input>
            <button type="button" onClick={handleClick} >Fetch Post</button> 
   
    <div>{post.title}
       
    </div>
    
            {/*<ul>
                {
                    posts.map(post=><li key={post.id}>{post.title}</li>)
                }
            </ul>*/}
        </div>
    )
}

export default DataFetching
