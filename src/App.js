import List from "./List";

function App() {
  return (
    <div className="container">
      <div className="dropdown-item">
        <h2 className="que">Should you use dropdown?</h2>
        <button>
          <p>Select</p>
          <span>
            <i class="fa-solid fa-angle-down"></i>
          </span>
        </button>
        <List />
      </div>
    </div>
  );
}

export default App;
