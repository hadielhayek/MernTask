import React from 'react'
import { useNavigate} from "react-router-dom";
import './post.css'
export default function Post({props}) {
  const navigate = useNavigate();

  return (
    <div className='cartpost'>
        <div className='center fs-30 bold'  >{props.title}</div>
        <div className='content' >{props.content.substring(0,50)}...</div>
        <div>{props.author}</div>
        <div className='flex justify-between actions'>
        <div><button onClick={()=>{navigate(`/edit/${props.id}`)}}>edit</button></div>
        <div><button onClick={()=>{props.delete(props.id)}}>delete</button></div>
        </div>
        {/* <br></br> */}

    </div>
  )
}
