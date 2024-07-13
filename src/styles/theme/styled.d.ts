import 'styled-components'
import { ColorFormat } from './colors'

export interface ThemeType {
  COLORS: ColorFormat
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
