import React from "react";
import s from './Post.module.css'
import MyButton from "../../UI/MyButton";

import {useHistory} from 'react-router-dom';

const Post = (props) => {

    const history = useHistory();

    return (
        <div className={s.post}>
            <div className={s.post_content}>
                <h4 className={s.post_title}>
                    {`${props.post.id}. ${props.post.title}`}
                </h4>
                <div className={s.post_text}>
                    {props.post.body}
                </div>
            </div>
            <MyButton className={s.btn} onClick={() => history.push(`/posts/${props.post.id}`)}>Відкрити</MyButton>

            <MyButton className={s.btn} onClick={() => props.deletePost(props.post.id)}>
                Видалити
            </MyButton>

        </div>
    )
}

export default Post;