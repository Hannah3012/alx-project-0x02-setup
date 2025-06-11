import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';
import { GetStaticProps } from 'next';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage = ({ posts }: PostsPageProps) => {
  return (
    <>
      <Header />
      <main className="p-6 space-y-4 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        {posts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))
        )}
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: PostProps[] = await res.json();

    return {
      props: {
        posts: data.slice(0, 10), // Limit to 10 posts
      },
    };
  } catch (error) {
    console.error('Failed to fetch posts:', error);

    return {
      props: {
        posts: [],
      },
    };
  }
};

export default PostsPage;

