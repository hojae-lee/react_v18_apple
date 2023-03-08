import Article from "../../components/Article";

function Contents() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];
  return (
    <section>
      <Article topics={topics} />
    </section>
  );
}

export default Contents;
