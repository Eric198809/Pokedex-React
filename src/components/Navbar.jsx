const NavBar = (props) => {
  return (
    <div>
      {props.pokemonList.map((name, index) => (
        <button key={index} onClick={() => props.setPokemonIndex(index)}>
          {name.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
