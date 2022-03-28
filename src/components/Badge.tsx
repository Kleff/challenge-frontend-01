import './Badge.css';

interface BadgeProps {
    text: string;
}

const Badge = ({text}: BadgeProps) => {
  return (
    <p className="badge-container">{text}</p>
  )
}

export default Badge;