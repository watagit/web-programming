import React from 'react'
import styled from 'styled-components'

import color from '../../assets/colors.module.scss'
import Tag, { TagProps } from '../atoms/Tag'
import Button from '../atoms/Button'

type IdeaDetailProps = {
  title: string,
  name: string,
  icon: string,
  description: string,
  tags: TagProps[],
}

const IdeaDetail: React.FC<IdeaDetailProps> = ({
  title,
  name,
  icon,
  description,
  tags
}) => {
  return (
    <div>
      {tags.map(tag => (
        <Tag
          label={tag.label}
          fontSize={tag.fontSize}
          margin={tag.margin}
          padding={tag.padding}
        />
      ))}
      <p>{title}</p>
      <img src={icon} alt={'profile-icon'} />
      <p>{name}</p>
      <p>{description}</p>
      <Button
        label={'詳しく話を聞く'}
        width={'40%'}
        height={'30px'}
        fontSize={'20px'}
        labelColor={color.white}
        fillColor={color.mainColor}
        borderColor={color.mainColor}
      />
    </div>
  )
}

export default IdeaDetail
