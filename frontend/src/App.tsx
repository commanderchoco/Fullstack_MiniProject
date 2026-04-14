import React, { useEffect, useState } from "react";
 
function App() {
  const [message, setMessage] = useState("");
 
  useEffect(() => {
    fetch("http://54.90.252.69:3001/api/message")
      .then(res => res.json())
      .then(data => setMessage(data.text));
  }, []);
 
  return (
    <div>
      <h1>Mini Cloud App</h1>
      <p>{message}</p>
    </div>
  );
}
 
export default App;