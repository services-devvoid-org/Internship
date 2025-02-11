import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New york", "Tokyo", "Londo", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}> My alert</Alert>
      )}
      <>
        <Button text="Click" onClick={() => setAlertVisibility(true)}></Button>
      </>
    </div>
  );
}

export default App;
