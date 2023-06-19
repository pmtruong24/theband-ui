import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '~/components/Layouts/Header';
import Content from './components/Layouts/Content';
import Slider from './components/Layouts/Slider';
import Footer from './components/Layouts/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Slider />
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
