import React, { ReactNode, memo } from 'react'
import styled from 'styled-components'

import Checkbox from './checkbox.component'
import { Colors } from '../constants'

const ItemLine = styled.div`
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

interface IListItemProps<T> {
  item: T
  isChecked: boolean
  renderer(item: T): ReactNode
  onClick(): void
}

const ListItem = <T extends unknown>({ item, isChecked, renderer, onClick }: IListItemProps<T>) => (
  <div>
    <ItemLine onClick={onClick}>
      <FirstColumn>
        <Checkbox isChecked={isChecked} />
      </FirstColumn>
      {renderer(item)}
    </ItemLine>
  </div>
)

export default memo(ListItem)
