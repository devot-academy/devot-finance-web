'use client'
import styled from 'styled-components';
import React from 'react';
import SideBar from '../../components/organisms/sideBar';

const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Test() {
  return <Container>
      <SideBar />
  </Container>;
}