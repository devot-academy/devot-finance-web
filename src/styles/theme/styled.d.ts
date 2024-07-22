import 'styled-components'
import { ColorFormat } from './colors'
import { FontFormat } from './fonts'

export interface ThemeType {
  COLORS: ColorFormat
  FONTS: FontFormat
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
