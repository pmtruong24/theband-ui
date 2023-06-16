import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '~/components/Layouts/Header';
import Content from './components/Layouts/Content';
import Slider from './components/Layouts/Slider';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Slider />
        <Content />
      </div>
    </Router>
  );
}

export default App;
