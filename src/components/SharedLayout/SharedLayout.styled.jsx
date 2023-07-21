import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 20px;

  &.active {
    color: orange;
  }
`;
