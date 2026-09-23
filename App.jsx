import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      <Navbar />   {/* COMPONENT INSIDE COMPONENT */}
      
      <main style={{ padding: "2rem" }}>
        <h1>Welcome to Stockersi</h1>
        <p>Stpckersi</p>
      </main>
    </>
  );
}
