import "./App.css";
import Header from "./component/Header";
import TaskContainer from "./component/TaskContainer";

function App() {
  return (
    <div className="min-vh-100">
      <Header />
      {/* Task Container */}
      <TaskContainer />
    </div>
  );
}

export default App;
