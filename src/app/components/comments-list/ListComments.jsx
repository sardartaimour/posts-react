import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default ({ postId, comments }) => {

    // const [comments, setComments] = useState([]);

    // const fetchComments = async (event) => {
    //     const response = await axios.get(`http://localhost:3100/posts/${postId}/comments`);
    //     setComments(response.data);
    // };

    // useEffect(() => {
    //     fetchComments();
    // }, []);

    return <ul>
        { comments.map(comment =>
            <li 
                key={comment.id}>
                    {
                        comment.status.toLowerCase() === 'approved' 
                            ? comment.comment 
                            : ((comment.status.toLowerCase() === 'pending') ? 'This comment is awaiting moderation' : 'This comment has been rejected')
                    }
            </li>
        )}
    </ul>;
}