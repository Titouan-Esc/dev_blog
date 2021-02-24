const Posts = ({ post }) => {
  return (
    <>
      {post.map((p) => {
        const { id, titre, content, tags } = p;
        return (
          <div key={id}>
            <h2>{titre}</h2>
            <p>{content}</p>
            <p className="tags">{tags}</p>
          </div>
        );
      })}
    </>
  );
};

export default Posts;