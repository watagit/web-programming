import React from 'react'
import styled from 'styled-components'

import color from '../../assets/colors.module.scss'
import Tag, { TagProps } from '../atoms/Tag'
import Button from '../atoms/Button'

const IdeaDetailBox = styled.div`
  width: 60%;
  margin: 50px auto 0 auto;
  padding: 30px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
`

const IdeaDetailElementP = styled.p`
  margin: 0;
`

const IdeaDetailElementImg = styled.img`
  margin: 0;
`

const Title = styled(IdeaDetailElementP)`
  font-size: 20px;
  margin-bottom: 5px;
`

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ProfileImg = styled(IdeaDetailElementImg)`
  height: 50px;
  margin-right: 10px;
`

const ProfileName = styled(IdeaDetailElementP)`
  font-size: 15px;
  color: ${color.gray3};
  font-weight: bold;
`

const Description = styled(IdeaDetailElementP)`
  word-break: break-word;
  margin: 30px 0;
`

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
  tags,
}) => {
  return (
    <IdeaDetailBox>
      {tags.map(tag => (
        <Tag
          label={tag.label}
          fontSize={tag.fontSize}
          margin={tag.margin}
          padding={tag.padding}
        />
      ))}
      <Title>{title}</Title>
      <ProfileBox>
        <ProfileImg src={icon} alt={'profile-icon'} />
        <ProfileName>{name}</ProfileName>
      </ProfileBox>
      <Description>{description}</Description>
      <Button
        label={'詳しく話を聞く'}
        width={'40%'}
        height={'40px'}
        margin={'0 auto'}
        fontSize={'15px'}
        labelColor={color.white}
        fillColor={color.mainColor}
        borderColor={color.mainColor}
      />
    </IdeaDetailBox>
  )
}

export default IdeaDetail
