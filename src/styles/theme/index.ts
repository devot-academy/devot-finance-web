import { COLORS as DEFAULT_COLORS } from './colors'
import { FONTS as DEFAULT_FONTS } from './fonts'
import { ThemeType } from './styled'

const colorMap = {
  default: { COLORS: DEFAULT_COLORS }
}

const fontMap = {
  default: { FONTS: DEFAULT_FONTS }
}

interface SelectThemeInterface {
  color?: keyof typeof colorMap
  font?: keyof typeof fontMap
}

export const selectTheme = ({
  color = 'default',
  font = 'default'
}: SelectThemeInterface = {}): ThemeType => {
  return {
    ...colorMap[color],
    ...fontMap[font]
  }
}
