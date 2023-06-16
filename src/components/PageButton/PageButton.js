import "./style.scss";

function PageButton({ next, previous }) {
  return (
    <div className="btn_container">
      {previous && (
        <button onClick={previous} className="prev">
          Prev
        </button>
      )}
      {next && (
        <button onClick={next} className="next">
          Next
        </button>
      )}
    </div>
  );
}

export default PageButton;
