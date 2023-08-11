import "./styling.css";
import satData from "./satData";


const Buttons = (props) => {
  let {filterByType, setSat, displaySats } = props;
  return (
    <div>
      {/* <button>Placeholder Button</button> */}
      {displaySats.map((sat, id) => {
  return (
    <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
})}
      {/* <button>All Orbits</button> */}
      <button onClick = {() => setSat(satData)}>All Orbits</button>
      </div>
  );
}

export default Buttons;