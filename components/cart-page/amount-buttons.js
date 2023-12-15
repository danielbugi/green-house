import classes from './amount-buttons.module.css';

import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className={classes.amountBtns}>
      <p className={classes.amount}>{amount}</p>
      <div>
        <button type="button" className={classes.amountBtn} onClick={increase}>
          <FaChevronUp />
        </button>
        <button type="button" className={classes.amountBtn} onClick={decrease}>
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
};
export default AmountButtons;
