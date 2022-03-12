import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import Checkbox from './checkbox.component'
import { Colors } from '../constants'

const Container = styled.div`
  padding: 0 32px 32px 32px;
  border-radius: 8px;
  color: ${Colors.text};
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: calc(100% - 20px);
`

const TitleBox = styled.div`
  line-height: 50px;
  margin: 12px 0;
  font-weight: 600;
`

const Table = styled.div`
  border: 1px solid ${Colors.dark};
  border-radius: 6px;
  overflow: auto;
  display: flex;
  flex-direction: column;
`

const Items = styled.div`
  overflow: auto;
`

const ItemLine = styled.div`
  display: flex;
  padding: 12px;
  &:hover {
    cursor: pointer;
    background-color: ${Colors.light};
  }
`

const Header = styled.div`
  display: flex;
  padding: 12px;
  border-bottom: 1px solid ${Colors.dark};
  height: 20px;
`

const FirstColumn = styled.div`
  width: 26px;
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
        <FirstColumn>
          <Checkbox isChecked={_.includes(selected, index)} />
        </FirstColumn>
        {renderer(item)}
      </ItemLine>
    </div>
  )

interface IListProps<T> {
  data?: T[]
  renderer(item: T): ReactNode
}

const List = <T extends unknown>({ data, renderer }: IListProps<T>) => {
  const [selected, setSelected] = useState<number[]>([])
  return (
    <Container>
      <TitleBox>Selected items: {_.isEmpty(selected) ? 'none' : selected.join(', ')}</TitleBox>
      <Table>
        <Header>
          <FirstColumn />
          Info
        </Header>
        {!_.isNil(data) && (
          <Items>
            {renderItems<T>(data, selected, renderer, setSelected)}
          </Items>
        )}
      </Table>
    </Container>
  )
}

export default List
