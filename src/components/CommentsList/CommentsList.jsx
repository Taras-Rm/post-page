import React from "react";
import s from './CommentsList.module.css'
import Comment from "./Comment/Comment";

const CommentsList = ({comments}) => {

    return (
        <div className={s.commentsList}>
            {comments.map((comm) => <Comment name={comm.name} email={comm.email} body={comm.body}/>)}
        </div>
    )
}

export default CommentsList;