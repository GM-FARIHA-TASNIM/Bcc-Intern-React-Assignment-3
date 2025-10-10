import ControlledForm from "./components/form.jsx";
import Task2UncontrolledBMI from "./components/bmi.jsx";
import Task3EventList from "./components/search.jsx";
function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#f1f3f6ff" }}>
        Controlled Form
      </h1>
      <ControlledForm />
      <Task2UncontrolledBMI />
      <Task3EventList />
    </div>
  );
}

export default App;
