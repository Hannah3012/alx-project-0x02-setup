import Card from "@/components/common/Card";
import React, { useState } from 'react';
import PostModal from '@/components/common/PostModal'; 
import Header from "@/components/layout/Header";

const Home = () => {
  return(
  <div>
    <h1> Home Page </h1>
    <Card title="Card one" content="First card"/>
    <Card title="Card two" content="Second card"/>
    <Card title="Card three" content="Third card"/>
  </div>
  );
};


const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to hold the list of posts
  const [posts, setPosts] = useState<
    { title: string; content: string }[]
  >([]);

  <Header/>
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Handle new post submission
  const handleAddPost = (newPost: { title: string; content: string }) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Posts</h1>

      {/* Open Modal Button */}
      <button
        onClick={handleOpenModal}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Create New Post
      </button>

      
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post, index) => (
            <li
              key={index}
              className="border p-4 rounded shadow-sm bg-white"
            >
              <h3 className="font-semibold text-lg">{post.title}</h3>
              <p className="text-gray-700">{post.content}</p>
            </li>
          ))}
        </ul>
      )}

      
      <PostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddPost}
      />
    </div>
  );
};


export default HomePage;



