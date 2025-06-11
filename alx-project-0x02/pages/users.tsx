import { GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage = ({ users }: UsersPageProps) => {
  return (
    <>
      <Header />
      <main className="p-6 space-y-4 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {users.length === 0 ? (
            <p>No users found.</p>
          ) : (
            users.map((user) => <UserCard key={user.id} {...user} />)
          )}
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: UserProps[] = await res.json();

    return {
      props: {
        users: data,
      },
    };
  } catch (error) {
    console.error('Failed to fetch users:', error);
    return {
      props: {
        users: [],
      },
    };
  }
};

export default UsersPage;
