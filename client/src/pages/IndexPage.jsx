import React, { useEffect, useState } from 'react';
import Post from '../components/PostCard';

export default function IndexPage() {
    const backendUrl = import.meta.env.VITE_SERVER || "http://localhost:7777";
    const [posts,setPosts]= useState([]);
    useEffect(() => {
        const response = fetch(backendUrl + "/post").then((response) => response.json().then((data) => setPosts(data)));
    }, []);

    return (
        <>
        <div className='animated tdFadeIn'>
        {posts.length > 0 && posts.map(post=>(<Post key={post._id} {...post}/>))}</div>
        </>
    );
}