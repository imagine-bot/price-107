// pages/team.tsx
import Team from '../components/Team';

const users = [
  // Add 10 example users with random information and profile links
  {
    name: 'User 1',
    address: '123 Main St, Anytown, USA',
    email: 'user1@example.com',
    phone: '123-456-7890',
    profilePic: 'https://example.com/user1.jpg',
    socialUpdates: ['Update 1', 'Update 2', 'Update 3'],
  },
  // ... add 9 more users
];

const TeamPage = () => {
  return <Team users={users} />;
};

export default TeamPage;