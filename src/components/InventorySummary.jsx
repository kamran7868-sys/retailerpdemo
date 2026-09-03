import DashboardCardHeader from './DashboardCardHeader';
import Icon from './Icon';
import { INVENTORY_STATS } from '../data/mockData';

export default function InventorySummary({ onShowToast }) {
  return (
    <article className="dashboard-card summary-card inventory-summary-card">
      <DashboardCardHeader title="Inventory Summary" subtitle="Current stock health" icon="Boxes" actionLabel="Details" onAction={() => onShowToast('Inventory summary opened')} />
      <div className="inventory-main-stats">
        {INVENTORY_STATS.slice(0, 3).map((item) => (
          <div key={item.label}>
            <span className={`summary-icon tone-${item.tone}`}><Icon name={item.icon} size={16} /></span>
            <small>{item.label}</small>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
      <div className="inventory-health">
        {INVENTORY_STATS.slice(3).map((item) => (
          <div key={item.label} className={`inventory-health-row ${item.tone}`}>
            <span className="summary-icon"><Icon name={item.icon} size={15} /></span>
            <div><span><strong>{item.label}</strong><b>{item.value}</b></span><div role="progressbar" aria-valuenow={item.progress} aria-valuemin="0" aria-valuemax="100"><i style={{ width: `${item.progress}%` }} /></div></div>
          </div>
        ))}
      </div>
      <div className="stock-distribution"><span>Stock distribution</span><div><i className="healthy" style={{ width: '78%' }} /><i className="low" style={{ width: '15%' }} /><i className="out" style={{ width: '7%' }} /></div><small><b />Healthy 78% <b />Low 15% <b />Out 7%</small></div>
    </article>
  );
}
