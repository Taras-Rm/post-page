import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import PostService from "../../API/PostService";

import s from './PostId.module.css';
import CommentsList from "../../components/CommentsList/CommentsList";
import Loader from "../../components/UI/Loader/Loader";

const PostId = () => {

    const params = useParams();

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPost, isLoadingPost, errorsPost] = useFetch(async (id) => {
        const response = await PostService.getPostId(id);
        setPost(response.data);
    })

    const [fetchComm, isLoadingComm, errorsComm] = useFetch(async (id) => {
        const response = await PostService.getPostCom(id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPost(params.id);
        fetchComm(params.id);
    }, [])

    return (

        <div className={'postId'}>
            {
                isLoadingPost ? <div style={{display: "flex", justifyContent: "center"}}><Loader/></div> :
                    <div>
                        <h1 className={s.postTitle}>{post.title}</h1>
                        <p className={s.postBody}><span className={s.postBodySpan}>Post text:</span> {post.body}</p>
                    </div>
            }

            <div className={s.postComments}>
                <h2 className={s.postCommentsTitle}>Comments</h2>
                {
                    isLoadingComm ? <div style={{display: "flex", justifyContent: "center"}}><Loader/></div> :
                        <CommentsList comments={comments}/>
                }
            </div>


        </div>
    )
}

export default PostId;