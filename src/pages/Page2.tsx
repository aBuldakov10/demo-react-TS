import { Link, Outlet } from 'react-router-dom';

const Page2 = () => {
  return (
    <div>
      <br />
      <Link to="/demo-react-ts/2/contacts">Page contacts</Link> <br />
      <Link to="/demo-react-ts/2/map">Page map</Link>
      <p>Page 2</p>
      <Outlet />
    </div>
  );
};

export default Page2;
