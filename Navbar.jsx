export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Stockersi</h1>

      <ul style={styles.links}>
        <li><a href="/">Home</a></li>
        <li><a href="/explore">Explore</a></li>
        <li><a href="/editor">Create</a></li>
        <li><a href="/trending">Trending</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "#222",
    color: "white"
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold"
  },
  links: {
    display: "flex",
    gap: "1.5rem",
    listStyle: "none"
  }
};
