import classNames from 'classnames/bind';
import styles from './MemberItem.module.scss';

const cx = classNames.bind(styles);

function MemberItem() {
  return (
    <div className={cx('member-item')}>
      <p className={cx('member-name')}>Name</p>
      <img
        className={cx('member-img')}
        src="https://www.w3schools.com/w3images/bandmember.jpg"
        alt="member1"
      />
    </div>
  );
}

export default MemberItem;
