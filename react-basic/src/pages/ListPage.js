import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '../components/Card';

const ListPage = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        axios.get('http://localhost:3001/posts').then((res) => {
            console.log(res);
            setPosts(res.data);
        })
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <h1>Blogs</h1>
            {posts.map(post => {
                return (
                    <Card key={post.id} title={post.title}>

                    </Card>
                );
            })}
        </div>
    );
};

export default ListPage;