import React, {useMemo} from "react";

const useSorted = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;

    }, [sort, posts]);

    return sortedPosts;
}

const usePosts = (posts, query, sort) => {
    const sortedPosts = useSorted(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [sortedPosts, query]);

    return sortedAndSearchedPosts;
}

export default usePosts;