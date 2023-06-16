import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function Slider() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <h2 className={cx('title')}>Chicago</h2>
        <p className={cx('paragraph')}>
          Thank you, Chicago - A night we won't forget.
        </p>
      </div>
    </div>
  );
}

export default Slider;
