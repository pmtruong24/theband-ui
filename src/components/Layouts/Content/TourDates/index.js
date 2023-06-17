import classNames from 'classnames/bind';
import styles from './TourDates.module.scss';
import Button from '../../Button';
import PlaceItem from '../PlaceItem';

const cx = classNames.bind(styles);

function TourDates() {
  return (
    <div className={cx('frame-content')}>
      <h2 className={cx('heading-content')}>TOUR DATES</h2>
      <p className={cx('sub-heading-content')}>
        Remember to book your tickets!
      </p>

      <ul className={cx('ticket-list')}>
        <li>
          September
          <span className={cx('sold-out')}>Sold out</span>
        </li>

        <li>
          October
          <span className={cx('sold-out')}>Sold out</span>
        </li>

        <li>
          November
          <span className={cx('quatity')}>3</span>
        </li>
      </ul>

      <div className={cx('place-list')}>
        <PlaceItem
          src="https://www.w3schools.com/w3images/newyork.jpg"
          title="New York"
          time="Fri 27 Nov 2016"
          description="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
        />
        <PlaceItem
          src="https://www.w3schools.com/w3images/paris.jpg"
          title="Paris"
          time="Fri 28 Nov 2016"
          description="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
        />
        <PlaceItem
          src="https://www.w3schools.com/w3images/sanfran.jpg"
          title="San Francisco"
          time="Fri 29 Nov 2016"
          description="Praesent tincidunt sed tellus ut rutrum sed vitae justo."
        />
      </div>
    </div>
  );
}

export default TourDates;
