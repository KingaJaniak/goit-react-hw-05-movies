import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppWrapper, HeaderLink, Header } from './App.styled';

export default function SharedLayout() {
  return (
    <AppWrapper>
      <Header>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/movies">Movies</HeaderLink>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </AppWrapper>
  );
}