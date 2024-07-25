'use client'

import React from 'react';
import styled from 'styled-components';
import Text from '../../components/atoms/text';
import Button from '../../components/molecules/button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.COLORS.BACKGROUND};
`;

export default function Login() {
  return (
    <Container>
      <Text type="headline-1" color="PRIMARY">
        Mina
      </Text>
      <Text type="headline-2" color="SECONDARY">
        Roboto 700
      </Text>
      <Text type="subtitle-1" color="SECONDARY">
        Roboto 500
      </Text>
      <Text type="body-1" color="SECONDARY">
        Roboto 400
        </Text>
      <Button>
        Botão
      </Button>
    </Container>
  );
}