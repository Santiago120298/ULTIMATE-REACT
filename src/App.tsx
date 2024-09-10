import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [data, setData] = useState(["goku", "tanjiro", "eren"]);
  /*  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list = ["goku", "tanjiro", "eren"];
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  return (
    <Card>
      <CardBody title={"Hola mundo"} />
      <List data={list} onSelect={handleSelect} />
      <Button isLoading={isLoading} onClick={handleClick}>
        hola mundo
      </Button>
    </Card>
  );*/
  const addMinions = () => setData([...data, "Minion"]);
  const delMinions = () => setData(data.slice(0, -1));
  return (
    <Card>
      <Button onClick={addMinions}>Agregar</Button>
      <Button onClick={delMinions}>Eliminar</Button>
      <List data={data} />
    </Card>
  );
}
export default App;
