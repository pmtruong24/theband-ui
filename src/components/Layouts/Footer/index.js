import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faPinterest,
  faPinterestP,
  faSnapchat,
  faSnapchatGhost,
  faSquareFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('footer')}>
      <div className={cx('container')}>
        <div className={cx('icons')}>
          <a className={cx('icon')} href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faSquareFacebook} />
          </a>
          <a className={cx('icon')} href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className={cx('icon')} href="https://www.snapchat.com/">
            <FontAwesomeIcon icon={faSnapchat} />
          </a>
          <a className={cx('icon')} href="https://www.pinterest.com/">
            <FontAwesomeIcon icon={faPinterestP} />
          </a>
          <a className={cx('icon')} href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className={cx('icon')} href="https://www.linkedin.com/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>

        <p className={cx('copyright')}>
          Powered by
          <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
