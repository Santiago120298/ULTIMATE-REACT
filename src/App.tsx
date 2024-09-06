import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["goku", "tanjiro", "eren"];
  return (
    <Card>
      <CardBody title={"Hola mundo"} />
      <List data={list} />
    </Card>
  );
}
export default App;
