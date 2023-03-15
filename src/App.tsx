import { useEffect, useState } from "react";
import "./App.css";
import { Children } from "./models/RedditResult";
import { fetchRedditPosts } from "./services/redditService";

function App() {
  const [redditPosts, setRedditPosts] = useState<Children[]>([]);

  useEffect(() => {
    fetchRedditPosts().then((res) => setRedditPosts(res.data.children));
  }, []);

  return (
    <div className="App">
      <h1>Reddit Aww Pictures</h1>
      <ul>
        {redditPosts.map((post, index) => (
          <li key={index + Math.floor(Math.random())}>
            <div style={{ minWidth: "150px" }}>
              <img
                src={post.data.thumbnail}
                alt="thumbnail"
                width={140}
                height={100}
              />
            </div>
            <div>
              <h3>{post.data.title}</h3>
              <a href={post.data.url} target="_blank">
                see post
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
