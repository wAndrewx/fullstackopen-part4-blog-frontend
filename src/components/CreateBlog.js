export const CreateBlog = (props) => {
  return (
    <div>
      <h2>Create a Blog</h2>
      <form onSubmit={props.handleCreation}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          onChange={(e) => {
            props.handleTitle(e.target.value);
          }}
        ></input>

        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          onChange={(e) => {
            props.handleAuthor(e.target.value);
          }}
        ></input>

        <label htmlFor="url">URL</label>
        <input
          id="url"
          type="text"
          onChange={(e) => {
            props.handleURL(e.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
