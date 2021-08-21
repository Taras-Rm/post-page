import React from "react";
import MyInput from "../UI/MyInput";
import SortPosts from "./SortPosts/SortPosts";
import s from './PostFilter.module.css';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className={s.post_filter}>
            <MyInput
                className={s.post_filter_inp}
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value})}
                placeholder="Пошук..."
            />
            <SortPosts
                className={s.post_filter_sort}
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort})}
            />
        </div>
    )
}

export default PostFilter;