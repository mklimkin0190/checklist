import React from 'react';
import List from './components/list.component';

const data: Object[] = [
  { title: 'Title1', more: 'More' },
  { title: 'Title2' },
  { title: 'Title3' },
]
const renderer = (data: Object) => {
  // TODO: deal with types
  return <div>
    <div>{(data as any).title}</div>
    <div>{(data as any).more}</div>
  </div>
}

const App: React.FC = () => (
  <List data={data} renderer={renderer} />
);

export default App;
