import classNames from 'classnames/bind';
import styles from './Map.module.scss';

const cx = classNames.bind(styles);

function Map() {
  return (
    <div className={cx('map')}>
      <img
        className={cx('map-img')}
        src="https://www.w3schools.com/w3images/map.jpg"
        alt="map"
      />
    </div>
  );
}

export default Map;
