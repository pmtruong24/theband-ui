import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function Slider() {
  return (
    <div className={cx('slider')}>
      <img
        className={cx('image')}
        src="https://www.w3schools.com/w3images/chicago.jpg"
        alt="chicago"
      />
    </div>
  );
}

export default Slider;
