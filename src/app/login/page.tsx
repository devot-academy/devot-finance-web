'use client'

import React from 'react';

import styled from 'styled-components';

const Text = styled.h1`
  font-family: Mina sans-serif;
  color: ${ ({ theme }) => theme.COLORS.PRIMARY }
`;


// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-color: ${(props) => props.theme.COLORS.background};
// `;

// const TitleMina = styled.h1`
//   font-family: ${(props) => props.theme.FONTS.fonts.heading};
//   font-weight: ${(props) => props.theme.FONTS.fontWeights.bold};
//   font-size: 32px;
//   line-height: 80px;
//   letter-spacing: -1.5px;
//   color: ${(props) => props.theme.COLORS.primary};
//   margin-bottom: 20px;
// `;

// const TextRoboto400 = styled.p`
//   font-family: ${(props) => props.theme.FONTS.fonts.body};
//   font-weight: ${(props) => props.theme.FONTS.fontWeights.regular};
//   font-size: 32px;
//   line-height: 80px;
//   letter-spacing: -1.5px;
//   color: ${(props) => props.theme.COLORS.primary};
// `;

// const TextRoboto500 = styled.p`
//   font-family: ${(props) => props.theme.FONTS.fonts.body};
//   font-weight: ${(props) => props.theme.FONTS.fontWeights.medium};
//   font-size: 32px;
//   line-height: 80px;
//   letter-spacing: -1.5px;
//   color: ${(props) => props.theme.COLORS.primary};
// `;

// const TextRoboto700 = styled.p`
//   font-family: ${(props) => props.theme.FONTS.fonts.body};
//   font-weight: ${(props) => props.theme.FONTS.fontWeights.bold};
//   font-size: 32px;
//   line-height: 80px;
//   letter-spacing: -1.5px;
//   color: ${(props) => props.theme.COLORS.primary};
// `;

export default function Login() {
  return (
    <div>
      <Text>
        Login
      </Text>
    </div>
        // <Container>
    //   <TitleMina>Mina 700</TitleMina>
    //   <TextRoboto400>Roboto 400</TextRoboto400>
    //   <TextRoboto500>Roboto 500</TextRoboto500>
    //   <TextRoboto700>Roboto 700</TextRoboto700>
    // </Container>
  );
};
