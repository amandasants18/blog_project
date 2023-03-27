import React, { useState, useEffect } from "react";
import axios from "axios";
import { Description, Section, TitlePost } from "../../styles/Post.styled";
import { ModalComments } from "../../components/ModalComments";
import { Button } from "../../styles/Modal.styles";

export const Posts = () => {
  const [postData, setPostData] = useState([]);
  const [comments, setComments] = useState([]);
  const [openModalPost, setOpenModalPost] = useState(false);

  useEffect(() => {
    const data = async () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/")
        .then((res) => setPostData(res.data))
        .catch((err) => console.log(err));
    };
    data();
  }, []);

  const handleClick = (id) => {
    const dataCommentsFunction = async () => {
      axios
        .get(
          "https://jsonplaceholder.typicode.com/posts/" + `${id}` + "/comments"
        )
        .then((res) => setComments(res.data))
        .catch((err) => console.log(err));
    };
    dataCommentsFunction();
   setOpenModalPost(true)
  };


  return (
    
    <>
      <Section>
        <div className="posts">
          {postData.map((post) => {
            return (
              <div className="post">
                <TitlePost>{post.title}</TitlePost>
                <Description>{post.body}</Description>
                <Button
                  onClick={() => {
                    handleClick(post.id);
                  }}
                >
                  Comentários 
                </Button>
               
              </div>
            );
          })}
        </div>


        <ModalComments setOpen={setOpenModalPost} dataComments={comments} isOpen={openModalPost}></ModalComments>
      </Section>
    </>
  );
};
