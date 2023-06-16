import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card/Card";
import PageButton from "./components/PageButton/PageButton";
const root = document.getElementById("root");

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [previousPageURL, setPreviousPageURL] = useState();
  const [nextPageURL, setNextPageURL] = useState();
  const [currentPageURL, setCurrentPageURL] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [pgId, setPgId] = useState(1);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    setLoding(true);
    let cancel;
    axios
      .get(currentPageURL, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoding(false);
        let i = pgId;
        setPokemon(res.data.results.map((p) => [p.name, i++]));
        setNextPageURL(res.data.next);
        setPreviousPageURL(res.data.previous);

        return () => cancel();
      });
  }, [currentPageURL]);

  if (loding) {
    return <h1>loding....</h1>;
  }

  function goToNextPage() {
    setCurrentPageURL(nextPageURL);
    setPgId(pgId + 20);
  }

  function goToPreviousPage() {
    setCurrentPageURL(previousPageURL);
    setPgId(pgId - 20);
  }

  return (
    <div className="App">
      <div className="CardContainer">
        <Card pokemon={pokemon}></Card>
      </div>
      <PageButton
        next={nextPageURL ? goToNextPage : null}
        previous={previousPageURL ? goToPreviousPage : null}
      />
    </div>
  );
}

export default App;
