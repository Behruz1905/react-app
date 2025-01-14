import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import { useState } from "react";

import { BsFillCalendarFill } from "react-icons/bs";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = [
    "New York",
    "Chicago",
    "Miami",
    "Tokio",
    "Roma",
    "Istanbul",
    "Baku",
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (

      <div>
          <Like onClick={() => console.log('clicked')}/>
          <br/><br/>
          {alertVisible && (
              <Alert onClose={() => setAlertVisibility(false)}>
                  Salam <b>Dunya</b>
              </Alert>
          )}

          <Button color="primary" onClick={() => setAlertVisibility(true)}>
              My Button
          </Button>
          <br/>
          <ListGroup
              items={items}
              heading="Şəhərlər"
              onSelectItem={handleSelectItem}
          />
          <BsFillCalendarFill color="blue" size="40"/>
      </div>
  );
}

export default App;
