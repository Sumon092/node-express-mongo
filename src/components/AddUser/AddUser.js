import React from 'react';

const AddUser = () => {
    const handleOnSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };


        //send data to server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('user added successful');
                event.target.reset();
            })
    }

    return (
        <div>
            <h2>Please add user here</h2>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="name" placeholder='Name' id="" />
                <br />
                <input type="text" name="email" placeholder='Email' id="" />
                <br />
                <input type="submit" value="Add User" />

            </form>
        </div>
    );
};

export default AddUser;