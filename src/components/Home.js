import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting user with id, ', id);
            // console.log(id);
            const url = `http://localhost:5000/user/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <h2>Number of Users {users.length}</h2>
            {
                users.map(user => <li key={user._id}>Name: {user.name}:: Email:{user.email}
                    <Link to={`/update/${user._id}`}>UPDATE</Link>
                    <button onClick={() => handleDeleteUser(user._id)}>X</button></li>)
            }

        </div>
    );
};

export default Home;