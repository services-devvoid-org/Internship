
interface props {
  text: string;
  onClick:()=>void;
  color?: 'primary'| 'secondary';
}
function Button({text, onClick,color='primary'}:props) {
  return (
    <div>
      <button type="button" className={'btn btn-'+color} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
