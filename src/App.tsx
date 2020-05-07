import React, { useState } from 'react';
import Header from './components/Header';
import { Box } from './components/Box';
import NavBar from './components/NavBar';
import { Tabs } from './types/Tabs';

function App() {
  const [tab, setTab] = useState<Tabs>(Tabs.car);

  const onTabChange = (tab: Tabs) => {
    setTab(tab);
  };

  return (
    <div className="App">
      <Header />
      <NavBar tab={tab} onTabChange={onTabChange} />
      <Box />
    </div>
  );
}

export default App;
