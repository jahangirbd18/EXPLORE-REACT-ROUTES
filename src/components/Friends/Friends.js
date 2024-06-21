import React from 'react';
import { useLoaderData } from 
'react-router-dom';
import Friend from '../Friend/Friend';
// import Header from '../Header/Header';

const Friends = () => {
    const friends = useLoaderData();
    console.log (friends)
    return (
        <div>
{/* <Header></Header> */}
<h2> From Friend Component.Wow:
    {friends.length}</h2>
{
    friends.map(friend=><Friend
        key={friend.id}
        friend={friend}
        
        ></Friend>)
    
}
           
        </div>
    );
};

export default Friends;