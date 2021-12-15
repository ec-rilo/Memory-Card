import CardsContainer from './components/Body/CardsContainer';
import Footer from './components/Footer/Footer';
import HeaderContent from './components/Header/HeaderContent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <HeaderContent></HeaderContent>
      <CardsContainer />
      <Footer />
    </div>
  );
}

export default App;
