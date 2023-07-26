import { Outlet } from 'react-router-dom';
import { Navigation, Container, Link } from './SharedLayout.styled';
import { Suspense } from 'react';

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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};

export default SharedLayout;
