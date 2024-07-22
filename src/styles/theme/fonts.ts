export type FontFormat = {
  BODY: string
  HEADING: string
  FONT_WEIGHTS: {
    REGULAR: number
    MEDIUM: number
    BOLD: number
  }
}

export const FONTS: FontFormat = {
  BODY: "'Roboto', sans-serif",
  HEADING: "'Mina', sans-serif",
  FONT_WEIGHTS: {
    REGULAR: 400,
    MEDIUM: 500,
    BOLD: 700
  }
}
