import type { Shop } from '../types/shop';
import '../styles/Shoptags.css';


const ShopTags = ({ pay_card, pay_bank, delivery }: ShopTagsProps) => {
  return (
    <div className="tags">
      {pay_card && (
        <>
          <span className="tag-label"># 카드</span>
        </>
      )}
      {pay_bank && (
        <>
          <span className="tag-label"># 계좌이체</span>
        </>
      )}
      {delivery && (
        <>
          <span className="tag-label"># 배달가능</span>
        </>
      )}
    </div>
  );
};

export default ShopTags;
