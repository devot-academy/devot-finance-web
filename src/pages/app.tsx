import type { AppProps } from 'next/app';
import { Mina, Roboto } from 'next/font/google';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { selectTheme } from '../styles/theme';

const theme = selectTheme({});

const mina = Mina({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.FONTS.fonts.body};
    background-color: ${(props) => props.theme.COLORS.background};
    color: ${(props) => props.theme.COLORS.text};
  }
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <main className={`${mina.className} ${roboto.className}`}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}