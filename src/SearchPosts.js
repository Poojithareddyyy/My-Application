import React,{useState,useEffect} from "react";
import axios from "axios";
import './GetPosts.css';

function SearchPosts(){
    const [data, setData] = useState([]);
    const [key,setKey] = useState("");
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response =>setData(response.data))
        .catch(err=>console.log(err));
        console.log(data);
    },);
    return(
        <div >
            <input type="search" value={key}
            placeholder="Enter Id" onChange={e=>setKey(e.target.value)}/>

            {
                data.map((obj)=>{
                    if(obj.id===parseInt(key,10)){
                        return(
                            <div className="post" key={obj.id}>
                            <h2>{obj.title}</h2>
                            <p>{obj.body}</p>
                            </div>
                        );

                    }
                    else{
                        return <div>
                            </div>;
                    }
                    
                })
            }
            
        </div>
    );
}
export default SearchPosts;
