import React, { useRef, useState } from "react";
import './SendPosts.css';
import axios from "axios";
function ModifyPosts(){
    const [title,setTitle] = useState('');
    const [body,setBody] = useState("");
    const [id,setId] = useState("");
    const h2Ref = useRef();
    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/posts/"+id,
        [id,title,body]).then(()=>h2Ref.current.innerHTML="Success")
        .catch(err=>console.log(err));
    };
    return(
        <div className="send">
            <h2 ref={h2Ref}>UPDATE POSTS</h2>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Id"
                name="id" value={id} onChange={e=>setId(e.target.value)} />
                <input type="text" 
                placeholder="Enter Title"
                name="title" required="true" value={title}
                onChange={e=>setTitle(e.target.value)}/>
                <textarea placeholder="Enter body"
                 required="true" value={body} onChange={e=>setBody(e.target.value)}/>
                <button type="submit">Modify Post</button>
            </form>
        </div>
    );
}
export default ModifyPosts;