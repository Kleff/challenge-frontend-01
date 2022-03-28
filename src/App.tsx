import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import CardThanks from './components/CardThanks';

function App() {
  const [showThanks, setShowThanks] = useState<boolean>(false);
  const [cardSelected, setCardSelected] = useState<number | undefined>();

  const cardTitle = showThanks ? "Thank you!" : "How did we do?";
  const cardDescription = showThanks? "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!" : "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!";
  const cardTextCta = "Submit";
  const cardItemsRate = [
    {
      id: 1,
      text: "1",
    },
    {
      id: 2,
      text: "2",
    },
    {
      id: 3,
      text: "3",
    },
    {
      id: 4,
      text: "4",
    },
    {
      id: 5,
      text: "5",
    },
  ]

  const handleCardClick = (id: number) => {
    setCardSelected(id);
  }

  const handleCtaClick = () => {
    setShowThanks(true);
  }

  return (
    <div className="container">
      {showThanks ? 
      <CardThanks items={cardItemsRate} cardSelected={cardSelected} title={cardTitle} description={cardDescription} />
      : 
      <Card handleCtaClick={handleCtaClick} handleButtonClick={(id) => handleCardClick(id)} items={cardItemsRate} title={cardTitle} description={cardDescription} textCta={cardTextCta} />
      }
    </div>
  );
}

export default App;
