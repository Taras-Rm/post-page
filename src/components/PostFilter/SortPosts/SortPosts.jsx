import React from "react";
import s from './SortPosts.module.css'
import MySelect from "../../UI/MySelect";

const SortPosts = (props) => {

    return (
        <div className={s.filter_posts}>
            <span>Сортувати:</span>
            <MySelect
                options={[{value: "title", name: "за назвою"}, {value: "body", name: "за текстом"}]}
                defaultOption={"сортувати"}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default SortPosts;