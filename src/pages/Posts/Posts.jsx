import React, {useEffect} from "react";
import MyButton from "../../components/UI/MyButton";
import MyModal from "../../components/UI/MyModal/MyModal";
import CreatePost from "../../components/CreatePost/CreatePost";
import PostFilter from "../../components/PostFilter/PostFilter";
import Loader from "../../components/UI/Loader/Loader";
import PostsList from "../../components/PostLists/PostsList";
import Paginator from "../../components/UI/Paginator/Paginator";
import usePosts from "../../hooks/usePosts";
import useFetch from "../../hooks/useFetch";
import PostService from "../../API/PostService";

const Posts = () => {

    // пости
    let [posts, setPosts] = React.useState([]);
    // фільтр постів
    const [filter, setFilter] = React.useState({sort: '', query: ''});
    // модальне вікно
    const [modal, setModal] = React.useState(false);
    // створений хук
    const sortedAndSearchedPosts = usePosts(posts, filter.query, filter.sort);

    const [totalCount, setTotalCount] = React.useState(0);
    const [itemsOnPage, setItemsOnPage] = React.useState(10);
    const [currentPage, setCurrentPage] = React.useState(1);

    // створений хук
    const [fetchPosts, isLoading, errors] = useFetch(async (itemsOnPage, currentPage) => {
        const response = await PostService.getAll(itemsOnPage, currentPage);
        // загальна кількість постів
        setTotalCount(response.headers['x-total-count']);
        setPosts(response.data);
    })

    // завантажити пости з сервера
    useEffect(() => {
        fetchPosts(itemsOnPage, currentPage);
    }, [currentPage])

    const createPost = (postTitle, postText) => {
        let newPost = {
            id: Date.now(),
            title: postTitle,
            body: postText
        };
        setPosts([newPost, ...posts])
        setModal(false)
    }

    const deletePost = (postId) => {
        setPosts(posts.filter((post) => {
            return post.id !== postId;
        }))
    }

    return (
        <div className="Posts">
            <MyButton onClick={() => setModal(true)} style={{marginBottom: 20}}>
                Створити пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <CreatePost createPost={createPost}/>
            </MyModal>
            <hr/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <h2>Пости</h2>
            {
                isLoading
                    ? <div style={{display: "flex", justifyContent: "center", marginTop: 30}}><Loader /></div>
                    : <PostsList posts={sortedAndSearchedPosts} deletePost={deletePost}/>
            }
            <Paginator className="paginator" currentPage={currentPage} setCurrentPage={setCurrentPage} totalCount={totalCount} itemsOnPage={itemsOnPage}/>
        </div>
    )
}


export default Posts;