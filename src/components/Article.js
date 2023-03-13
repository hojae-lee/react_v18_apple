import Button from "./Button";
import UseStateUpload from "./UseStateUpload";

function Article({ topics }) {
  const temp = [];

  for (let i = 0; i < topics.length; i++) {
    temp.push(
      <article key={topics[i].id}>
        <h2>{topics[i].title}</h2>
        <p>{topics[i].body}</p>
      </article>
    );
  }

  return (
    <>
      <Button />
      {temp}
      <UseStateUpload />
    </>
  );
}

export default Article;
