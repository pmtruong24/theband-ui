import classNames from 'classnames/bind';
import styles from './MoreItem.module.scss';
import Button from '~/components/Layouts/Button';

const cx = classNames.bind(styles);

const MORE_ITEM_LIST = [
  {
    title: 'Merchandise',
  },
  {
    title: 'Extras',
  },
  {
    title: 'Media',
  },
];

function MoreItem() {
  return (
    <div className={cx('wrapper')}>
      {MORE_ITEM_LIST.map((item, index) => (
        <Button key={index} moreItemList>
          {item.title}
        </Button>
      ))}
    </div>
  );
}

export default MoreItem;
