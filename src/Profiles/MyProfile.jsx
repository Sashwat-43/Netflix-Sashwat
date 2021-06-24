import React from 'react'
import './MyProfile.css';
import Navbar from '../Navbar';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../Firebase';

function MyProfile() {

    const user = useSelector(selectUser);

    return (
        <div className="myprofile">
            <Navbar/>
            <div className="myprofile_body">
                <h1>Edit Profile</h1>
                <div className="myprofile_info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="Myprofile" 
                    />
                    <div className="myprofile_details">
                        <h2>{user.email}</h2>
                        <div className="plans">
                            <h3>Plans</h3>
                            <button className="myprofile_signout"
                                onClick={ () =>{ auth.signOut() }}
                                >
                            SIGN OUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile
