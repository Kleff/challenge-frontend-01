import './Button.css';

interface ButtonProps {
  text?: string;
  handleClick: (id: number) => void;
  id: number;
  selected: boolean;
}

const Button = ({id, text, handleClick, selected}: ButtonProps) => {
  return (
    <>
    <button className={`button ${selected ? 'selected' : ''}`} onClick={() => handleClick(id)}>{text}</button>
    </>
    
  )
    
}

export default Button