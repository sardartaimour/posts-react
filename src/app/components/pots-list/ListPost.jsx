import React, { useState, useEffect } from 'react';
import ListComments from '../comments-list/ListComments';
import CreateComment from '../comment-create/CreateComment';


import axios from 'axios';

export default () => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async (event) => {
        const response = await axios.get('http://localhost:3400/posts');
        setPosts(Object.values(response.data));
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return <div className='d-flex flex-wrap justify-content-between'>
        { posts.map(post =>
            <div 
                key={post.id}
                className="card" 
                style={{ width: '30%', marginBottom: '20px'}}>

                <div className="card-body">
                    <h3>{post.title}</h3>
                    <ListComments postId={post.id} comments={post.comments} />

                    <CreateComment postId={post.id} />
                </div>
            </div>
        )}
    </div>;
}