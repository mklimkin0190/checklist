import React from 'react'

interface IListItem {
  title: string
  description?: string
  link?: string
}

const renderer = (data: IListItem) => {
  return <div>
    <div>{data.title}</div>
    {data.description && (<div>{data.description}</div>)}
    {data.link && (<div>{data.link}</div>)}
  </div>
}

export default renderer
