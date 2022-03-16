import styled from 'styled-components'
import { Colors } from '../../constants'

export const ItemLine = styled.div`
  display: flex;
  padding: 12px;
  &:hover {
    cursor: pointer;
    background-color: ${Colors.light};
  }
`

export const FirstColumn = styled.div`
  width: 26px;
`
