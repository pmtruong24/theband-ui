import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import AboutBand from './AboutBand';
import TourDates from './TourDates';
import Contact from './Contact';
import Map from './Map';

const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx('content')}>
      <AboutBand />

      <div className={cx('wrap')}>
        <TourDates />
      </div>

      <Contact />

      <Map />
    </div>
  );
}

export default Content;
