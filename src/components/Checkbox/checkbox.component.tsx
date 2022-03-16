import React, { memo } from 'react'

import { StyledCheckbox } from './styled'

interface ICheckboxProps {
  isChecked: boolean
}

const Checkbox: React.FC<ICheckboxProps> = ({ isChecked }: ICheckboxProps) =>
  <StyledCheckbox isChecked={isChecked} />

export default memo(Checkbox)
