import React, { useState } from 'react';

import axios from 'axios';

export default ({ postId }) => {


    const [comment, setComment] = useState('');

    const submitComment = async (event) => {
        event.preventDefault();

        await axios.post(`http://localhost:3100/posts/${postId}/comments`, {
            comment
        });

        setComment('');
    };

    return <div>
        <form onSubmit={submitComment}>
            <div className="form-group ">
                <label htmlFor="commentInput">New Comment</label>
                <input type="text" name="commentInput" 
                    value={comment} className="form-control"
                    onChange={e => setComment(e.target.value)} />
            </div>
            <button className="btn btn-primary mt-2" type="submit">Submit</button>
        </form>
    </div>;
}