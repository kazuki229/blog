import Typography from "typography"
import theme from 'typography-theme-github'

theme.headerFontFamily = ['M PLUS 1p', 'Roboto', 'serif']
theme.bodyFontFamily = ['M PLUS 1p', 'Roboto', 'serif']
theme.googleFonts = [
  {
    name: 'M+PLUS+1p',
    styles: ['400'],
  }
]

const typography = new Typography(theme)

export default typography

export const rhythm = typography.rhythm
export const scale = typography.scale
