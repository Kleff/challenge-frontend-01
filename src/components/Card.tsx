import Button from './Button';
import Logo from './Logo';
import './Card.css';
import { useState } from 'react';

export interface itemButton {
  id: number,
  text: string
}

interface CardProps {
  items: itemButton[],
  title: string,
  description: string,
  textCta: string
  handleButtonClick: (id:number) => void;
  handleCtaClick: () => void;
}

const Card = ({items, title, description, textCta, handleButtonClick, handleCtaClick }: CardProps) => {
  const [cardSelected, setCardSelected] = useState();

  const handleButton = (id: any) => {
    setCardSelected(id);
    handleButtonClick(id)
  }

  return (
    <div className='card-container'>
        <Logo />
        <h2 className='card-title'>{title}</h2>
        <p className='card-description'>{description}</p>
        <div className="container-buttons">
          {items.map((item) => {
            return <Button selected={item.id === cardSelected} id={item.id} handleClick={(id) =>handleButton(id)} key={item.id} text={item.text}></Button>
        })}
        </div>
        <button disabled={!cardSelected} onClick={handleCtaClick} className={`card-button-cta ${!cardSelected ? 'card-button-cta-disabled' : ''}`}>{textCta.toUpperCase()}</button>
    </div>
  )
}

export default Card