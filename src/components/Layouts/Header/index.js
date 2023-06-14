import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Button from '~/components/Layouts/Button';
import PopperWrapper from '~/components/PopperWrapper';
import MoreItem from './MoreItem';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('header')}>
      <div className={cx('inner')}>
        <div className={cx('navbar')}>
          <Button>Home</Button>
          <Button>Band</Button>
          <Button>Tour</Button>
          <Button>Contact</Button>

          <Tippy
            interactive
            placement="bottom-start"
            render={(attrs) => (
              <div className={cx('more-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <MoreItem />
                </PopperWrapper>
              </div>
            )}
          >
            <button className={cx('more-btn')}>
              <span className={cx('title')}>More</span>
              <FontAwesomeIcon className={cx('icon')} icon={faCaretDown} />
            </button>
          </Tippy>
        </div>
      </div>
    </header>
  );
}

export default Header;
