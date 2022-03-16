import styled from 'styled-components'

import { Colors } from '../../constants'

export const StyledCheckbox = styled.div<{ isChecked: boolean }>`
  position: relative;
  width: 15px;
  height: 15px;
  top: 1px;
  border-radius: 2px;
  border: 1px solid ${Colors.dark};
  ${({ isChecked }) => {
    if (isChecked) {
      return `
        background-color: ${Colors.dark};
        &:after {
          position: absolute;
          top: -3px;
          left: 1px;
          content: '\\2713';
          color: white;
          font-weight: 600;
        }
      `
    }
    return `background-color: ${Colors.white};`
  }}
`
