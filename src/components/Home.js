import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <div>
            <h2>Users</h2>
            {
                users.map(user => <li key={user._id}>Name: {user.name}:: Email:{user.email}<button>X</button></li>)
            }

        </div>
    );
};

export default Home;