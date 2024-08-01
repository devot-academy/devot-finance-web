'use client'

import React from 'react';
import styled from 'styled-components';
import Text from '../../components/atoms/text';
import Button from '../../components/molecules/button';
import Icon from '../../components/atoms/icon'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function Login() {
  return (
    <Container>
      <Icon name='trash' size='large'/>
      <Icon size='medium' color='SECONDARY'/>
      <Icon size='small' color='BACKGROUND'/>
    </Container>
  );
}