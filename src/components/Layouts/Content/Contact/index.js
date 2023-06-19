import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Contact.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx('frame-content')}>
      <h2 className={cx('heading-content')}>CONTACT</h2>
      <p className={cx('sub-heading-content')}>Fan? Drop a note!</p>

      <div className={cx('container')}>
        <div className={cx('info')}>
          <p>
            <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
            Chicago, US
          </p>
          <p>
            <FontAwesomeIcon className={cx('icon')} icon={faPhone} />
            Phone: +00 151515
          </p>
          <p>
            <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
            Email: mail@mail.com
          </p>
        </div>

        <div className={cx('form')}>
          <div>
            <input className={cx('form-name')} placeholder="Name" />
            <input className={cx('form-email')} placeholder="Email" />
          </div>
          <div>
            <input className={cx('form-message')} placeholder="Message" />
            <Button send>SEND</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
