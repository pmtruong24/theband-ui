import classNames from 'classnames/bind';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx('content')}>
      <div className={cx('wrapper', 'the-band')}>
        <h2 className={cx('heading')}>THE BAND</h2>
        <p className={cx('sub-heading')}>We love music</p>
        <p className={cx('about-text')}>
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>

      <div className={cx('wrapper', 'the-band')}>
        <h2 className={cx('heading')}>TOUR DATES</h2>
        <p className={cx('sub-heading')}>Remember to book your tickets!</p>
      </div>

      <div className={cx('wrapper', 'the-band')}>
        <h2 className={cx('heading')}>CONTACT</h2>
        <p className={cx('sub-heading')}>Fan? Drop a note!</p>
      </div>
    </div>
  );
}

export default Content;
