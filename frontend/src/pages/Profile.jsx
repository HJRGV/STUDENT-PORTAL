import React, { useEffect, useState } from 'react';
import { getProfile, updateProfile } from '../api/profile';
import { toast } from 'react-toastify';
import './Profile.css'; 

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfile();
        setProfile(res.data);
      } catch {
        toast.error('Failed to fetch profile');
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

  const handleSave = async () => {
    try {
      await updateProfile(profile);
      toast.success('Profile updated');
      setEditMode(false);
    } catch {
      toast.error('Update failed');
    }
  };

  return (
    <div className="profile-container"> {/* Add this className */}
      <input
        name="name"
        value={profile.name}
        onChange={handleChange}
        readOnly={!editMode}
      />
      <input
        name="email"
        value={profile.email}
        onChange={handleChange}
        readOnly={!editMode}
      />
      <input
        name="phone"
        value={profile.phone}
        onChange={handleChange}
        readOnly={!editMode}
      />
      <button onClick={() => (editMode ? handleSave() : setEditMode(true))}>
        {editMode ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};

export default Profile;
