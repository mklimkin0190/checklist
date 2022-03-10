import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ICheckboxProps {
  isChecked: boolean
  children: ReactNode
  onClick(): void
}

const StyledCheckbox = styled.div<{ isChecked: boolean }>`
  width: 12px;
  height: 12px;
  border: 1px solid gray;
  border-radius: 2px;
  display: inline-block;
  vertical-align: top;
  ${({ isChecked }) => (isChecked && 'background-color: gray;')}
`

const Inline = styled.div`
  display: inline-block;
`

const Checkbox: React.FC<ICheckboxProps> = ({ isChecked, children, onClick }: ICheckboxProps) => {
  return (
    <div style={{ lineHeight: '25px' }} onClick={onClick}>
      <StyledCheckbox isChecked={isChecked} />
      <Inline>{children}</Inline>
    </div>
  )
}

export default Checkbox
