import Profile from "./Profile.jsx";
import data from "./data.json";

let avengers_list = data.map((avenger) => {
  return (
    <Profile
      name={avenger.name}
      image={avenger.image}
      alt={avenger.alt}
      key={avenger.id}
    />
  );
});

function App() {
  return <ul>{avengers_list}</ul>;
}

export default App;
