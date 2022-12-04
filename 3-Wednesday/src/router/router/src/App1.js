import { Routes, Route, Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

const Home = () => {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Home</h2>
    </main>
  );
};

const Users = () => {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Users</h2>
    </main>
  );
};

const App = () => {
  return (
    <>
      <h1>React Router</h1>

      <Navigation />

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </>
  );
};

export default App;
