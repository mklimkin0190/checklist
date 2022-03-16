import React, { ReactNode, memo } from 'react'

import Checkbox from '../Checkbox/checkbox.component'
import { ItemLine, FirstColumn } from './styled'

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
