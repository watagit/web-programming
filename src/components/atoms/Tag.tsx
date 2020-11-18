import React from 'react'
import styled from 'styled-components'

const StyledTag = styled.div<
  Pick<TagProps, 'fontSize'>
>`
  display: inline;
  background-color: #E2E2E2;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: ${({ fontSize }) => fontSize};
`

type TagProps = {
  label: string,
  fontSize: string,
}

const Tag: React.FC<TagProps> = ({
  label,
  fontSize,
}) => {
  return (
    <StyledTag
      fontSize={fontSize}
    >
      {label}
    </StyledTag>
  )
}

export default Tag
