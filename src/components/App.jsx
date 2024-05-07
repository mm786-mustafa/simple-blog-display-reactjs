import React, { useState, useEffect } from "react";
import Card from "./Card";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>
        <span>Simple Blog Post Display</span>
      </h1>

      <dl className="dictionary">
        {posts.map((post) => (
          <Card
          key={post.id}
          userID={post.userId}
          title={post.title}
          body={post.body}
          /> 
        ))}
      </dl>

    </div>
  );
}

export default App;
