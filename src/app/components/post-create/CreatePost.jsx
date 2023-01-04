import React, { useState } from 'react';

import axios from 'axios';

export default () => {

    const [title, setTitle] = useState('');

    const submitPost = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:3200/posts', {
            title
        });

        setTitle('');
    };

    return <div>
        <form onSubmit={submitPost}>
            <div className="form-group ">
                <label htmlFor="postInput">Title</label>
                <input type="text" name="postInput" 
                    value={title} className="form-control"
                    onChange={e => setTitle(e.target.value)} />
            </div>
            <button className="btn btn-primary mt-2" type="submit">Submit</button>
        </form>
    </div>;
}