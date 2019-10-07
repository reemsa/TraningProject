import React from 'react';
import useStyles from './ProfileStyles'
import ProfileBanner from '../Banner/ProfileBanner'
import axios from 'axios'
const Profile=()=>{
    const classes=useStyles()
    return (
        <div>
            <ProfileBanner></ProfileBanner>
        </div>
    )
}
export default Profile;