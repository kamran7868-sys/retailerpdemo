import DashboardCardHeader from './DashboardCardHeader';
import Icon from './Icon';
import { PURCHASE_STATS } from '../data/mockData';

export default function PurchaseSummary({ onShowToast }) {
  const [primary, ...items] = PURCHASE_STATS;
  return (
    <article className="dashboard-card summary-card purchase-summary-card">
      <DashboardCardHeader title="Purchase Overview" subtitle="Procurement activity" icon="ShoppingBag" />
      <div className="purchase-hero">
        <span className="summary-icon tone-purple"><Icon name={primary.icon} size={18} /></span>
        <div><small>{primary.label}</small><strong>{primary.value}</strong><span><Icon name="ArrowUpRight" size={12} />{primary.detail}</span></div>
        <div className="purchase-spark-bars" aria-hidden="true">{[34, 48, 42, 60, 53, 68, 81].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
      </div>
      <div className="purchase-list">
        {items.map((item) => (
          <div key={item.label}>
            <span className={`summary-icon tone-${item.tone}`}><Icon name={item.icon} size={15} /></span>
            <span><strong>{item.label}</strong><small>{item.detail}</small></span>
            <b>{item.value}</b>
          </div>
        ))}
      </div>
      <button className="card-footer-link standalone" onClick={() => onShowToast('Purchase report opened')}>View Purchase Report <span>→</span></button>
    </article>
  );
}
