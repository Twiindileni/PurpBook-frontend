import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Profile() {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get(`http://localhost:3000/profile/${userId}`);
      setProfile(response.data);
    };
    fetchProfile();
  }, [userId]);

  return (
    <div>
      {profile ? (
        <>
          <h1>{profile.username}</h1>
          <p>{profile.email}</p>
          <p>{profile.profile.bio}</p>
          <img src={profile.profile.avatar} alt="Avatar" />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;