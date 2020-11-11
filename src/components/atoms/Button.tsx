import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  width?: string,
  height?: string,
  text?: string,
}

const StyledButton = styled.button<
  Pick<ButtonProps, 'width' | 'height'>
  >`
  width: ${({ width } ) => width};
  height: ${({ height }) => height};
`

const Button: React.FC<ButtonProps> = ({
  width,
  height,
  text,
                                       }) => {
  return (
    <StyledButton
      width={width}
      height={height}
    >{text}</StyledButton>
  )
}

export default Button
