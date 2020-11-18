import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input<
  Pick<InputProps, 'height'>
>`
  height: ${({ height }) => height};
`

const StyledArea = styled.textarea<
  Pick<InputProps, 'height'>
  >`
  height: ${({ height }) => height};
`

type InputProps = {
  type: 'text' | 'textarea',
  placeholder: string,
  height?: string,
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  height
}) => {
  const DisplayInput = () => {
    if (type === 'text')
      return <StyledInput placeholder={placeholder} height={height} />
    else
      return <StyledArea placeholder={placeholder} height={height} />
  }

  return <DisplayInput />
}

export default Input
