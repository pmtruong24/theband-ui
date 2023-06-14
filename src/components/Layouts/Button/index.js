import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Button({ children, rightIcon, moreItemList }) {
  const classes = cx('button', {
    moreItemList,
  });
  return (
    <button className={classes}>
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </button>
  );
}

export default Button;
