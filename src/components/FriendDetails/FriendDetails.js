import React from 'react';
import { useLoaderData } from 'react-router-dom';
const FriendDetails = () => {
    const friend=useLoaderData();
    // console.log(friend)
    return (
        <div>
            <h1> Details About:{friend.name}</h1>
            <p> Cal Him:{friend.phone}</p>
            <h2>Everything You need to know about this Person</h2>
            
        </div>
    );
};
export default FriendDetails;
