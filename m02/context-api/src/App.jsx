import React from "react";
import MessageList from "./components/message-list";

function App() {
  return (
    <div className="App">
      <MessageList
        messages={[{ text: "hey" }, { text: "ho" }, { text: `let's go` }]}
        color="purple"
      />
    </div>
  );
}

export default App;
