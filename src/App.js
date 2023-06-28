import Dropdown from "./Dropdown";

function App() {
  const dropDownItems = ["Yes", "Probably"];
  return (
    <div className="container">
      <Dropdown items={dropDownItems} />
    </div>
  );
}

export default App;
