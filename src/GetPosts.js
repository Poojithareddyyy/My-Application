import React,{useState,useEffect} from "react";
import axios from "axios";
import './GetPosts.css';

function GetPosts(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response =>setData(response.data))
        .catch(err=>console.log(err));
        console.log(data);
    },);
    return(
        <div >
            {
                data.map((obj)=>{
                    return(
                        <div className="post">
                        <h2>{obj.title}</h2>
                        <p>{obj.body}</p>
                        </div>
                    );
                })
            }
            
        </div>
    );
}
export default GetPosts;
