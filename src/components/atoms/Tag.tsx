import React from 'react'
import styled from 'styled-components'

const StyledTag = styled.div<
  Pick<TagProps, 'fontSize' | 'padding' | 'margin'>
>`
  display: inline-block;
  background-color: #E2E2E2;
  border-radius: 5px;
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`

export type TagProps = {
  label: string,
  fontSize: string,
  margin: string,
  padding: string,
}

const Tag: React.FC<TagProps> = ({
  label,
  fontSize,
  margin,
  padding,
}) => {
  return (
    <StyledTag
      fontSize={fontSize}
      margin={margin}
      padding={padding}
    >
      {label}
    </StyledTag>
  )
}

export default Tag
