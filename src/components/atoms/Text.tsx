import React from 'react'
import styled from 'styled-components'

const StyledText = styled.p<
  Pick<TextProps, 'fontSize' | 'fontColor' | 'lineHeight' | 'letterSpacing' | 'margin'>
>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ fontColor }) => fontColor};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  margin: ${({ margin }) => margin};
`

type TextProps = {
  label: string,
  fontSize: string,
  fontColor: string,
  lineHeight?: string,
  letterSpacing?: string,
  margin?: string,
}

const Text: React.FC<TextProps> = ({
  label,
  fontSize,
  fontColor,
  lineHeight,
  letterSpacing,
  margin
}) => {
  return (
    <StyledText
      fontSize={fontSize}
      fontColor={fontColor}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      margin={margin}
    >{label}</StyledText>
  )
}

export default Text
