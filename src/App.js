import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
//function key word is a function 
//it can be calles jsx
//In this project i created app component 
// Content component , Header component and Footer Component
function App() {
    return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
