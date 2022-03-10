import React, { ReactNode, useState } from 'react';
import _ from 'lodash';

import Checkbox from './checkbox.component';

interface IListProps {
  data: Object[]
  renderer(item: Object): ReactNode
}

const toggleItem = (index: number, selected: number[]): number[] => {
  if (_.includes(selected, index)) {
    return _.reject(selected, (selectedIndex: number) => selectedIndex === index)
  }
  return [...selected, index]
}

const List: React.FC<IListProps> = ({ data, renderer }: IListProps) => {
  const [selected, setSelected] = useState([] as number[])
  return (
    <>
      <div>Selected items: {selected.join(', ')}</div>
      <div>{_.map(
        data,
        (item: Object, index: number) => <>
          <Checkbox
            isChecked={_.includes(selected, index)}
            onClick={() => setSelected(toggleItem(index, selected))}
          >
            {renderer(item)}
          </Checkbox>
        </>
      )}</div>
    </>
  )
}

export default List
