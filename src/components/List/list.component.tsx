import React, { ReactNode, useState, useEffect, useCallback } from 'react'
import _ from 'lodash'

import ListItem from '../ListItem/listItem.component'
import { Container, TitleBox, Table, Items, Header } from './styled'
import { FirstColumn } from '../ListItem/styled'

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
