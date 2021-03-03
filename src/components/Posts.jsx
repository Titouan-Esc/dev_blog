import { Link } from "react-router-dom";

const Posts = ({ post }) => {
  return (
    <>
      {post.map((p) => {
        const { id, title, content, tags } = p;
        return (
          <Link to={`posts/${title}`}>
            <div key={id}>
              <h2>{title}</h2>
              <p>{content}</p>
              <p className="tags">{tags}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Posts;
