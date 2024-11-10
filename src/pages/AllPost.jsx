import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

const AllPost = () => {
  const [posts, SetPosts] = useState([]);

  useEffect(() => {}, []);

  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      SetPosts(posts.documents);
    }
  });

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            <div key={post.$id} className="p-2 w-1">
              <PostCard post={post} />
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
