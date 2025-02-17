import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 justify-center items-center flex">
      <div className="h-1/2 bg-gray-500 rounded-lg w-1/3 px-6 py-4">
        <h1 className="my-4 font-bold text-4xl">Interns Day 2</h1>
        <h2 className="font-semibold text-2xl">To-Do List</h2>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
