import classNames from 'classnames/bind';
import styles from './AboutBand.module.scss';

import MemberItem from '../MemberItem';

const cx = classNames.bind(styles);

function AboutBand() {
  return (
    <div className={cx('frame-content')}>
      <h2 className={cx('heading-content')}>THE BAND</h2>
      <p className={cx('sub-heading-content')}>We love music</p>
      <p className={cx('about-text')}>
        We have created a fictional band website. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div className={cx('members')}>
        <MemberItem />
        <MemberItem />
        <MemberItem />
      </div>
    </div>
  );
}

export default AboutBand;
