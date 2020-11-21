import React from 'react'
import styled from 'styled-components'

import colors from '../../assets/colors.module.scss'
import HeaderText from '../molecules/HeaderText'

const StyledHeader = styled.header`
  background-color: ${colors.mainColor};
  height: 100px;
`

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  float: right;
`

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <TextBox>
        <HeaderText label={'Home'} />
        <HeaderText label={'Post'} />
        <HeaderText label={'Profile'} />
      </TextBox>
    </StyledHeader>
  )
}

export default Header
