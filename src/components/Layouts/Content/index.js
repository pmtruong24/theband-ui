import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import AboutBand from './AboutBand';
import TourDates from './TourDates';
import Contact from './Contact';

const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx('content')}>
      <AboutBand />

      <div className={cx('wrap')}>
        <TourDates />
      </div>

      <Contact />
    </div>
  );
}

export default Content;
