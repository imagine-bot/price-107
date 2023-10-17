// components/UserProfile.tsx
import React from 'react';

interface UserProfileProps {
  user: {
    name: string;
    address: string;
    email: string;
    phone: string;
    profilePic: string;
    socialUpdates: string[];
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={user.profilePic} alt="Profile" className="w-32 h-32 rounded-full mb-4" />
      <h2 className="text-2xl mb-2">{user.name}</h2>
      <p className="mb-2">{user.address}</p>
      <p className="mb-2">{user.email}</p>
      <p className="mb-4">{user.phone}</p>
      <h3 className="text-xl mb-2">Social Updates</h3>
      <ul>
        {user.socialUpdates.map((update, index) => (
          <li key={index}>{update}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;