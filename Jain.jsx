// App.jsx
import React from "react";

function App() {
  const name = "Shaunte";
  const vibes = "JSX hacker 🧠⚡";

  return (
    <div style={{ fontFamily: "system-ui", padding: "20px" }}>
      <h1>Hello, {name}!</h1>
      // main.jsx or index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
      <p>You just bent GitHub with .gitattributes.</p>
      <p>Current status: <strong>{vibes}</strong></p>

      <button
        onClick={() => alert("JSX is just JavaScript with drip.")}
        style={{
          marginTop: "12px",
          padding: "8px 16px",
          borderRadius: "999px",
          border: "none",
          background: "linear-gradient(135deg, #00c6ff, #0072ff)",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
