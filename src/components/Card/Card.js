import "./style.scss";

function Card({ pokemon }) {
  return (
    <>
      {pokemon.map((p) => (
        <div className="card">
          <div className="cont">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p[1]}.png`}
              alt={p[1]}
            />
          </div>
          <h1>{p[0]}</h1>
          <h2>{p[1]}</h2>
        </div>
      ))}
    </>
  );
}

export default Card;
