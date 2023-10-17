// components/Team.tsx
import React from 'react';
import UserProfile from './UserProfile';

interface User {
  name: string;
  address: string;
  email: string;
  phone: string;
  profilePic: string;
  socialUpdates: string[];
}

interface TeamProps {
  users: User[];
}

const Team: React.FC<TeamProps> = ({ users }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {users.map((user, index) => (
        <UserProfile key={index} user={user} />
      ))}
    </div>
  );
};

export default Team;