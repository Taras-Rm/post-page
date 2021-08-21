import React from "react";
import s from './Comment.module.css'

const Comment = ({name = 'djfkjf ksd kfs', email='sfkjksfkl', body='kfsksfklkfd kldfk kfkl ksk k klfkvd klvdk k'}) => {

    return (
        <div className={s.comment}>
            <h2 className={s.comment_title}>{name}</h2>
            <span className={s.comment_email}>{email}</span>
            <p className={s.comment_body}>{body}</p>
        </div>
    )
}

export default Comment;