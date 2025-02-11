import { useEffect, useState } from "react";

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    //convention or good practice, pass all the states in this funciton atleast as a dependency item.
    console.log("Hi Interns");
  }, [isFormOpen]);

  function handleClick() {
    //manipulating DOM is not recommended in React
    setIsFormOpen((prev) => !prev);
  }

  return (
    <div>
      <div>Create New Task</div>
      <button onClick={handleClick}>
        {isFormOpen ? "Close Task" : "New Task"}
      </button>
      {isFormOpen && (
        <form>
          <input placeholder="Enter Task" />
        </form>
      )}
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    </div>
  );
}
