import 'styled-components'
import { ColorFormat } from './colors/interfaces'
import { FontFormat } from './fonts/interfaces'

export interface ThemeType {
  COLORS: ColorFormat
  FONTS: FontFormat
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
