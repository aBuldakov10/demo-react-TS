import { Link, Outlet } from 'react-router-dom';

const Contacts = () => {
  return (
    <div>
      <p>Page 2 Contacts</p>
      <Link to="/2/contacts/home">Contacts home</Link> <br />
      <Link to="/2/contacts/work">Contacts work</Link>
      <Outlet />
    </div>
  );
};

export default Contacts;
