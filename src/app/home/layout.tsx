'use client'

import SideBar from "../../components/organisms/sideBar";
import { styled } from "styled-components";


const Container = styled.div`
width: 100dvw;
height: 100dvh;
display: flex;
justify-content: center;
align-items: center; 
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

  return <Container>
         {children}
      <SideBar />
 
  </Container>;
}
 