import React from 'react'

import colors from '../../assets/colors.module.scss'
import Text from '../atoms/Text'

type HeaderTextProps = {
  label: string,
}

const HeaderText: React.FC<HeaderTextProps> = ({
  label
}) => {
  return (
    <Text
      label={label}
      fontSize={'20px'}
      fontColor={colors.white}
    />
  )
}

export default HeaderText
