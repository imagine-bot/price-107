// pages/user.tsx
import Link from 'next/link';
import UserProfile from '../components/UserProfile';

const user = {
  name: 'John Doe',
  address: '123 Main St, Anytown, USA',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  profilePic: '/path/to/profile/pic.jpg',
  socialUpdates: ['Update 1', 'Update 2', 'Update 3'],
};

const UserPage = () => {
  return (
    <div>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <UserProfile user={user} />
    </div>
  );
};

export default UserPage;