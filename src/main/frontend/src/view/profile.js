import { useNavigate } from 'react-router-dom';
import React from 'react';

function Profile() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Profile</h1>
      <button
        onClick={() => {
          navigate('/');
        }}
      >누르면 홈으로 이동한다</button>
    </div>
  )
}
export default Profile;