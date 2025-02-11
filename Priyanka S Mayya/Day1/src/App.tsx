// import ListGroup from "./components/ListGroup";
// import { Children } from "react";

import Button from "./components/Button";

// import Alert from "./components/Alert";
function App() {
  // let items = ["New York", "Delhi", "Mumbai", "Banglore"];
  // const handleSelect = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
      <Button color="secondary" onClick={() => console.log("Clicked")}>
        My Button
      </Button>

      {/* <Alert>
        Hello <h1>world</h1>
      </Alert> */}
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelect} /> */}
    </div>
  );
}
export default App;
