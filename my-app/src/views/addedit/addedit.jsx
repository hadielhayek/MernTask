import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "./api";
import "./addedit.css";
export default function AddEdit() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(false);

  
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // eventEmitter.emit('loading', true);

    async function fetch() {
      axios
        .getPostById(params.id)
        .then((res) => {
          setTitle(res.data.title);
          setContent(res.data.content);
          setAuthor(res.data.author);
        })
        .catch((err) => {
          // eventEmitter.emit('loading', false)
        });
    }
    if (location.pathname != "/add") fetch();
  }, []);
  const savepost = () => {
    let data = { title: title, content: content, author: author };
    if (!title && !content && !author) {
      setError(true)
    } else {
      if (location.pathname == "/add") {
        axios
          .postData(data)
          .then((res) => {
            if (res.data) navigate("/");
          })
          .catch((err) => {
            // eventEmitter.emit('loading', false)
          });
      } else {
        axios
          .editPost(data, params.id)
          .then((res) => {
            if (res.data) navigate("/");
          })
          .catch((err) => {
            // eventEmitter.emit('loading', false)
          });
      }
    }
  };

  return (
    <div>
      <div className="container-add">
       {error ?
        <div className="col-green">All Fields are required</div> :''
       }
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            className="author"
            value={author}
            type="text"
            placeholder="Author"
            name="author"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>
        <div>
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
        <button
          onClick={() => {
            savepost();
          }}
          className="btn save"
        >
          Save
        </button>
      </div>
    </div>
  );
}
