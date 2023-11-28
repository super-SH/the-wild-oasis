import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';
import styled from 'styled-components';

const StlyedAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StlyedAppLayout>
      <Header />
      <SideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StlyedAppLayout>
  );
}

export default AppLayout;
