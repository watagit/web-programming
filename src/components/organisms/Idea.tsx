import React from 'react'
import styled from 'styled-components'

import color from '../../assets/colors.module.scss'
import Tag, { TagProps } from '../atoms/Tag'

const StyledIdea = styled.div`
  width: 30%;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
`

const IdeaElement = styled.p`
  margin: 0;
`

const Title = styled(IdeaElement)`
  font-size: 20px;
`

const Name = styled(IdeaElement)`
  font-size: 15px;
  color: ${color.gray3};
  margin-bottom: 5px;
  font-weight: bold;
`

const Description = styled(IdeaElement)`
  font-size: 18px;
  word-break: break-word;
`

type IdeaProps = {
  title: string,
  name: string,
  description: string,
  tags: TagProps[],
}

const Idea: React.FC<IdeaProps> = ({
  title,
  name,
  description,
  tags,
}) => {
  return (
    <StyledIdea>
      {tags.map(tag => (
        <Tag
          label={tag.label}
          fontSize={tag.fontSize}
          margin={tag.margin}
          padding={tag.padding}
        />
      ))}
      <Title>{title}</Title>
      <Name>{name}</Name>
      <Description>{description}</Description>
    </StyledIdea>
  )
}

export default Idea
