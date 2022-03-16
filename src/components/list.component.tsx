import React, { ReactNode, useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import ListItem, { FirstColumn } from './listItem.component'
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
  padding: 15px 0;
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

const Header = styled.div`
  display: flex;
  padding: 12px;
  border-bottom: 1px solid ${Colors.dark};
  height: 20px;
`

const renderItems = <T extends unknown>(
  data: T[],
  selected: boolean[],
  renderer: (item: T) => ReactNode,
  onClick: (index: number) => void,
) =>
  _.map(
    data,
    (item: T, index: number) => {
      const isChecked = selected[index]
      return (
        <ListItem
          key={btoa(JSON.stringify(item))}
          item={item}
          isChecked={isChecked}
          renderer={renderer}
          onClick={useCallback(() => onClick(index), [index])}
        />
      )
  })

const pickSelectedIndices = (array: boolean[]) => _.keys(_.pickBy(array, (element: boolean) => element)).join(', ')

const getSelectingFunction = (setSelected: (setStateFunction: (prevState: boolean[]) => boolean[]) => void) =>
  (index: number) => {
    setSelected((prevSelected: boolean[]) => _.values<boolean>({
      ...prevSelected,
      [index]: !prevSelected[index]
    }))
  }

interface IListProps<T> {
  data?: T[]
  renderer(item: T): ReactNode
}

const List = <T extends unknown>({ data, renderer }: IListProps<T>) => {
  const [selected, setSelected] = useState<boolean[]>([])

  useEffect(() => {
    if (_.isEmpty(data) || !_.isEmpty(selected)) {
      return
    }
    setSelected(_.map(data, () => false))
  }, [data])

  if (_.isNil(data) || _.isEmpty(data)) {
    return null
  }

  return (
    <Container>
      <TitleBox>Selected items: {pickSelectedIndices(selected) || 'none'}</TitleBox>
      <Table>
        <Header>
          <FirstColumn />
          Info
        </Header>
        <Items>
          {renderItems<T>(data, selected, renderer, getSelectingFunction(setSelected))}
        </Items>
      </Table>
    </Container>
  )
}

export default List
