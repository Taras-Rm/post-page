import React from "react";
import s from './Paginator.module.css'
import MyButton from "../MyButton";

const Paginator = ({currentPage, setCurrentPage, totalCount, itemsOnPage}) => {

    const countOfPages = Math.ceil(totalCount / itemsOnPage);
    const pagesArr = [];
    for(let i = 1; i <= countOfPages; i++) {
        pagesArr[i] = i;
    }

    return (
        <div className={s.paginator}>
            {
                pagesArr.map((number) => <MyButton className={`${number === currentPage ? `${s.paginator_btn} ${s.active}` : s.paginator_btn}`} onClick={() => setCurrentPage(number)}>{number}</MyButton>)
            }
        </div>
    )
}

export default Paginator;