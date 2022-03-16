import React from 'react'

import List from './components/List/list.component'
import data from './assets/testDataset.json'
import renderer from './renderer'

const App = () => <List data={data} renderer={renderer} />

export default App
