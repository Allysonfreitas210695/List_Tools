import { useState } from "react";
import { Item } from "./Types/Item";
import { ListItem } from "./Components/ListItem";
import { AddArea } from "./Components/AddArea";
import * as C from "./App.styles";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar o pão na padaria", done: true },
    { id: 2, name: "Comprar um bolo na padaria", done: true },
  ]);

  const handleAddText = (testName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: testName,
      done: false
    });

    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddText}/>

        {list.map((item, index) => {
          return (
          <ListItem 
          key = {index} 
          item = {item} 
          onChange = {handleTaskChange}
          />);
        })}
      </C.Area>
    </C.Container>
  );
};

export default App;
