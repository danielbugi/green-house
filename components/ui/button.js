import Link from 'next/link';
import classes from './button.module.css';

const Button = (props) => {
  const customClass = (buttonClass) => {
    if (buttonClass === 'btnWhite') {
      return `${classes.button} ${classes.buttonWhite}`;
    }
    if (buttonClass === 'btnGreen') {
      return `${classes.button} ${classes.buttonGreen}`;
    }
  };

  return (
    <Link href={props.link} className={customClass(props.customButtonClass)}>
      {props.title}
    </Link>
  );
};
export default Button;
