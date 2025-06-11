import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-700 text-sm mb-2">{body}</p>
      <span className="text-xs text-gray-500">Posted by User {userId}</span>
    </div>
  );
};

export default PostCard;
