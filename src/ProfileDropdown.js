import React from 'react';

function ProfileDropdown(props) {
  const { profiles, selectedProfile, onProfileChange } = props;
  return (
    <select 
      className='me-2 rounded shadow'
      value={selectedProfile} 
      onChange={onProfileChange}
    >
      {profiles.map(profile => (
        <option key={profile.id} value={profile.id}>{profile.name}</option>
      ))}
    </select>
  );
}

export default ProfileDropdown;
