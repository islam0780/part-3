import { Routes, Route, Outlet, Link, NavLink} from 'react-router-dom';


const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  );
};

const Users = ({ users }) => {
  return (
    <>
      <h2>Users</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.fullName}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <>
      <h1>React Router</h1>

      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <NavLink to="/home" style={style}>Home</NavLink>
        <NavLink to="/users" style={style}>Users</NavLink>
      </nav>

      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>
    </>
  );
};

const NoMatch = () => {
  return (<p>There's nothing here: 404!</p>);
};

const App = () => {
  const users = [
    { id: '1', fullName: 'Robin Wieruch' },
    { id: '2', fullName: 'Sarah Finnley' },
  ];

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users users={users} />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};



export default App;
