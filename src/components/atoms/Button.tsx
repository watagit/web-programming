import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<
  Pick<ButtonProps, 'width' | 'height' | 'margin' | 'fontSize' | 'labelColor' | 'fillColor' | 'borderColor'>
>`
  display: block;
  border-radius: 5px;
  font-weight: bold;
  width: ${({ width } ) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ labelColor }) => labelColor};
  background-color: ${({ fillColor }) => fillColor};
  border: solid 2px ${({ borderColor }) => borderColor};
`

type ButtonProps = {
  label: string,
  width: string,
  height: string,
  margin: string,
  fontSize: string,
  labelColor: string,
  fillColor: string,
  borderColor: string,
}

const Button: React.FC<ButtonProps> = ({
  label,
  width,
  height,
  margin,
  fontSize,
  labelColor,
  fillColor,
  borderColor
}) => {
  return (
    <StyledButton
      width={width}
      height={height}
      margin={margin}
      fontSize={fontSize}
      labelColor={labelColor}
      fillColor={fillColor}
      borderColor={borderColor}
    >{label}</StyledButton>
  )
}

export default Button
