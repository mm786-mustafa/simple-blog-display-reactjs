import React from "react";
import Card from "./Card";
import posts from "../blogPosts";

function App() {
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
