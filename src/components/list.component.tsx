import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Checkbox from './checkbox.component'
import { Colors } from '../constants'

const Container = styled.div`
  padding: 0 32px 32px 32px;
  border-radius: 8px;
  color: ${Colors.text};
`

const TitleBox = styled.div`
  line-height: 50px;
  margin: 12px 0;
  font-weight: 600;
`

const Table = styled.div`
  border: 1px solid ${Colors.dark};
  border-radius: 6px;
`

const ItemLine = styled.div`
  display: flex;
  padding: 12px;
  &:hover {
    cursor: pointer;
    background-color: ${Colors.light};
  }
`

const TitleLine = styled.div`
  padding: 12px 0 12px 40px;
  border-bottom: 1px solid ${Colors.dark};
`

const toggleItem = (index: number, selected: number[]): number[] => {
  if (_.includes(selected, index)) {
    return _.reject(selected, (selectedIndex: number) => selectedIndex === index)
  }
  return [...selected, index]
}

const renderItems = <T extends unknown>(
  data: T[],
  selected: number[],
  renderer: (item: T) => ReactNode,
  setSelected: (items: number[]) => void,
) =>
  _.map(
    data,
    (item: T, index: number) => <div key={btoa(JSON.stringify(item))}>
      <ItemLine onClick={() => setSelected(toggleItem(index, selected))}>
        <Checkbox isChecked={_.includes(selected, index)} />
        {renderer(item)}
      </ItemLine>
    </div>
  )

interface IListProps<T> {
  data: T[]
  renderer(item: T): ReactNode
}

const List = <T extends unknown>({ data, renderer }: IListProps<T>) => {
  const [selected, setSelected] = useState<number[]>([])
  return (
    <Container>
      <TitleBox>Selected items: {_.isEmpty(selected) ? 'none' : selected.join(', ')}</TitleBox>
      <Table>
        <TitleLine>Info</TitleLine>
        <>{renderItems<T>(data, selected, renderer, setSelected)}</>
      </Table>
    </Container>
  )
}

export default List
