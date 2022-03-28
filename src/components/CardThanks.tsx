import IconThanks from '../icons/IconThanks';
import Badge from './Badge';
import { itemButton } from './Card';
import './CardThanks.css';

interface CardThanksProps {
  cardSelected: number | undefined;
  title: string;
  description: string;
  items: itemButton[];
}

const CardThanks = ({cardSelected, title, description, items }: CardThanksProps) => {

  return (
    <div className='card-thanks-container'>
        <IconThanks/>
        <Badge text={`You selected ${cardSelected} out of ${items.length}`}/>
        <h2 className='card-thanks-title'>{title}</h2>
        <p className='card-thanks-description'>{description}</p>
    </div>
  )
}

export default CardThanks;