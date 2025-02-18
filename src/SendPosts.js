import React, { useRef, useState } from "react";
import './SendPosts.css';
import axios from "axios";
function SendPosts(){
    const [title,setTitle] = useState('');
    const [body,setBody] = useState("");
    const h2Ref = useRef();
    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts",
        [title,body]).then(()=>h2Ref.current.innerHTML="Success")
        .catch(err=>console.log(err));
    };
    return(
        <div className="send">
            <h2 ref={h2Ref}>SEND POSTS</h2>
            <form onSubmit={submitHandler}>
                <input type="text" 
                placeholder="Enter Title"
                name="title" required="true" value={title}
                onChange={e=>setTitle(e.target.value)}/>
                <textarea placeholder="Enter body"
                name="body" required="true" value={body} onChange={e=>setBody(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
export default SendPosts;