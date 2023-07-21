import { NavLink, Outlet } from 'react-router-dom';
import { Navigation, Container, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Navigation>
      </header>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default SharedLayout;
