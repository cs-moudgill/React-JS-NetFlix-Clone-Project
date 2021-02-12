import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import "./ProfileScreen.css";

function ProfileScreen() {
    const user=useSelector(selectUser);
    return (
        <div className='profileScreen'>
            <Nav />
            <div className="profileBody">
                <h1>Edit profile</h1>
                <div className="profileInfo">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt=""/>
                <div className="profileDetails">
                    <h2>{user.email}</h2>
                    <div className="profilePlans">
                    <h3>Plans</h3>
                        <button onClick={()=>auth.signOut()} className='profileSignOut'>Sign out</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
