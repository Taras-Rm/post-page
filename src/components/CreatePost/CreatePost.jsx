import React, {useState} from "react";
import s from './CreatePost.module.css'
import MyButton from "../UI/MyButton";
import MyInput from "../UI/MyInput";

const CreatePost = ({createPost}) => {

    const [post, setPost] = useState({title: '', text: ''});

    // перевірка на те чи введено заголовок і текст посту
    const isPostData = post.title && post.text;

    const onCreatePostClick = (e) => {
        e.preventDefault();
        createPost(post.title, post.text);

        setPost({title: '', text: ''});
    }

    return (
        <form className={s.create_post}>
            <MyInput onChange={e => {setPost({...post, title: e.target.value})}} value={post.title} className={s.create_post_inp} placeholder="Заголовок" />
            <MyInput onChange={e => {setPost({...post, text: e.target.value})}} value={post.text} className={s.create_post_inp} placeholder="Текст" />
            <MyButton className={s.create_post_btn} onClick={(e) => onCreatePostClick(e)} disabled={!isPostData}>Створити пост</MyButton>
        </form>
    )
}

export default CreatePost;