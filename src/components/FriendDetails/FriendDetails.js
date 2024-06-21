import React from 'react';
import { useLoaderData } from 'react-router-dom';
const FriendDetails = () => {
    const friend=useLoaderData();
    // console.log(friend)
    return (
        <div>
            <h2>Everything You need to know about this friend</h2>
            <h1> Friend Name:{friend.name}</h1>
            <p> Cal Him:{friend.phone}</p>
            
        </div>
    );
};
export default FriendDetails;
