import React, { useState, useEffect } from 'react';

interface InstagramPost {
  id: string;
  media_url: string;
  permalink: string;
}

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    // This is a mock function. In a real application, you would fetch from the Instagram API
    const fetchInstagramPosts = async () => {
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data
      const mockPosts: InstagramPost[] = Array(8).fill(null).map((_, index) => ({
        id: `post-${index}`,
        media_url: `/placeholder.svg?height=300&width=300&text=Instagram+Post+${index + 1}`,
        permalink: `https://instagram.com/p/mock-post-${index}`
      }));
      
      setPosts(mockPosts);
    };

    fetchInstagramPosts();
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif text-center mb-12">Suivez-nous sur  Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer" className="block">
              <img src={post.media_url} alt="Instagram post" className="w-full h-full object-cover rounded-lg" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InstagramFeed;