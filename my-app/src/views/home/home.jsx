import React from "react";
import { useState, useEffect } from "react";
import Post from '../../components/post/post.jsx'
import axios from "./api";
import swal from 'sweetalert'
import './style.css'
import { useNavigate } from "react-router-dom";


export default function Home() {
  
  const [posts, setPosts] = useState([]);
  useEffect(() => {


    async function fetch() {
      axios
        .getAllPosts()
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => {
        });
    }
    fetch();
  }, []);
  const navigate = useNavigate();
  const deletePost = async (id) => {
    const willDelete = await swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this post?",
        icon: "warning",
        dangerMode: true,
    });

    if (willDelete) {
        try {
            let res = await axios.deletePost(id);
            const result = res.data.message;
            if (res.data.success) {
                await swal("Deleted", result, "success");

            } else {
                await swal("", result, "error");
            }

            let filter = [...posts].filter((pt) => pt._id !== id);
            setPosts(filter);

        } catch (e) {
            console.log(e);
        }
    }


};


  return (
    <div className="container relative home">
      <div className="add-btn relative" onClick={()=>{navigate('/add')}}><div className="icon" >+</div></div>
      <div className="flex flex-wrap flex-row responsive">
        {posts.map((pt) => (
          <Post key={pt._id} props={{id:pt._id,title:pt.title,content:pt.content,author:pt.author,delete:deletePost}}/>
        ))}
      </div>
    </div>
  );
}
