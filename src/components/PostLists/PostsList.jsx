import React from "react";
import s from './PostsList.module.css'
import Post from "./Post/Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostsList = ({posts, deletePost}) => {

    if (!posts.length) {
        return <div className="withoutPosts">Немає постів</div>
    }

    return (
        <div className={s.postsList}>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post">
                        <Post number={index + 1} post={post} deletePost={deletePost}/>
                    </CSSTransition>)

                }
            </TransitionGroup>
        </div>
    )
}

export default PostsList;