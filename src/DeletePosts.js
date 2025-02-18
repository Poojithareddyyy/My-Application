import React, { useRef, useState } from "react";
import './SendPosts.css';
import axios from "axios";
function DeletePosts(){
    const [id,setId] = useState("");
    const h2Ref = useRef();
    const submitHandler = (e)=>{
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/posts/"+id)
        .then(()=>h2Ref.current.innerHTML="Success")
        .catch(err=>console.log(err));
    };
    return(
        <div className="send">
            <h2 ref={h2Ref}>DELETE POSTS</h2>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Id" name="id" value={id}
                onChange={e=>setId(e.target.value)}/>
                <button type="submit">Delete Posts</button>
            </form>
        </div>
    );
}
export default DeletePosts;