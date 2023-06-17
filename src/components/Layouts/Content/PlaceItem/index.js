import classNames from 'classnames/bind';
import styles from './PlaceItem.module.scss';

import Button from '~/components/Layouts/Button';

const cx = classNames.bind(styles);

function PlaceItem({ src, title, time, description }) {
  return (
    <div className={cx('place-item')}>
      <img className={cx('image')} src={src} alt="new york" />
      <div className={cx('info')}>
        <h3 className={cx('title')}>{title}</h3>
        <p className={cx('time')}>{time}</p>
        <p className={cx('description')}>{description}</p>
        <Button buyTickets>Buy Tickets</Button>
      </div>
    </div>
  );
}

export default PlaceItem;
