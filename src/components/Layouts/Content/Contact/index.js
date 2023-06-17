import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx('frame-content')}>
      <h2 className={cx('heading-content')}>CONTACT</h2>
      <p className={cx('sub-heading-content')}>Fan? Drop a note!</p>
    </div>
  );
}

export default Contact;
