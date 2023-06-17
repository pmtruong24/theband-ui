import classNames from 'classnames/bind';
import styles from './MoreList.module.scss';
import Button from '~/components/Layouts/Button';

const cx = classNames.bind(styles);

const moreList = [
  { title: 'Merchandise', href: '/', to: '/merchandise' },
  { title: 'Extras', href: '/', to: '/extras' },
  { title: 'Media', href: '/', to: '/media' },
];

function MoreList() {
  return (
    <div className={cx('wrapper')}>
      {moreList.map((item, index) => (
        <Button className={cx('more-item')} key={index} href={item.href}>
          {item.title}
        </Button>
      ))}
    </div>
  );
}

export default MoreList;
