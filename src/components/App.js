
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [value, setValue] = useState("Tab 1");
  const [arr, setArr] = useState(["Tab 1", "Tab 2", "Tab 3"]);

  function handleClick(item1) {
    setValue(arr.find(item2 => item2 === item1))
  }

  return (
    <div>
        <ul>
          {
            arr.map((item, i) => (
              <li key={i+1} onClick={() => handleClick(item)}>
                {item}
              </li>
            ))
          }
        </ul>
        <div>This is content for {value}.</div>
    </div>
  )
}

export default App;