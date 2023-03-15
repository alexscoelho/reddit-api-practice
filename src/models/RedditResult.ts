interface Post {
  title: string;
  thumbnail: string;
  url: string;
}

export interface Children {
  data: Post;
}

export interface RedditResult {
  data: Data;
}

interface Data {
  children: Children[];
}
