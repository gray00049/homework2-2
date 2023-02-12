export default function IconSwitch(props) {
  return (
    <div className="view-btn">
      <span 
        className="material-icons view-btn__icon"
        onClick={() => props.onSwitch(props.icon)}
      >{props.icon}</span>
    </div>
  )
}