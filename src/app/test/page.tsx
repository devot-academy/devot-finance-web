'use client'
import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Test() {
  return <Container>
    Teste seu component
  </Container>;
}