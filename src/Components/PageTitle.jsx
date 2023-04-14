import "../Styles/App.css";

function PageTitle({ title }) {
  return (
    <header className="pageTitle__header">
      <h1>{title}</h1>
    </header>
  );
}

export default PageTitle;
