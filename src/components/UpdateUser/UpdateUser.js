import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const handleUpdateUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };


        //send data to server
        const url = `http://localhost:5000/user/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(UpdateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('user added successful');
                event.target.reset();
            })
    }


    const { id } = useParams()
    return (
        <div>
            <h2>Update User: {id}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" placeholder='Name' id="" />
                <br />
                <input type="text" name="email" placeholder='Email' id="" />
                <br />
                <input type="submit" value="Update User" />

            </form>
        </div>
    );
};

export default UpdateUser;