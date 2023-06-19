import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  children,
  className,
  rightIcon,
  navBar,
  soldOut,
  buyTickets,
  send,
  to,
  href,
  onClick,
}) {
  let Comp = 'button';
  const props = {
    onClick,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('button', {
    [className]: className,
    rightIcon,
    navBar,
    soldOut,
    buyTickets,
    send,
  });

  return (
    <Comp className={classes} {...props}>
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
