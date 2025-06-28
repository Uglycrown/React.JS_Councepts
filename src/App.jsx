import { useState } from "react";
function App() {
  const [value, setValue] = useState('Rahul')
  return (
    <div>
      <h1>Hello World</h1>
     
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type something..." />
      <p>You typed: {value}</p>
      <button onClick={() => setValue('')}>Clear Value</button>
      <h1>{value}</h1>
    </div>
  );
}


export default App;
