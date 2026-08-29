import { useState, useEffect } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    favoriteGenre: '',
    bio: ''
  });
  const [savedProfile, setSavedProfile] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('profile'));
    if (saved) {
      setProfile(saved);
      setSavedProfile(saved);
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('profile', JSON.stringify(profile));
    setSavedProfile(profile);
    alert("Profile Saved Successfully!");
  };

  return (
    <div className="page-container profile-page">
      <h1>Gamer Profile</h1>
      
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={profile.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={profile.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Favorite Genre:</label>
          <input type="text" name="favoriteGenre" value={profile.favoriteGenre} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Bio:</label>
          <textarea name="bio" value={profile.bio} onChange={handleChange} rows="4"></textarea>
        </div>
        <button type="submit" className="btn-save">Save Profile</button>
      </form>

      {savedProfile && (
        <div className="saved-profile-card">
          <h2>Current Profile</h2>
          <p><strong>Name:</strong> {savedProfile.name}</p>
          <p><strong>Email:</strong> {savedProfile.email}</p>
          <p><strong>Favorite Genre:</strong> {savedProfile.favoriteGenre}</p>
          <p><strong>Bio:</strong> {savedProfile.bio}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;