import DashboardCardHeader from './DashboardCardHeader';
import Icon from './Icon';
import { FINANCIAL_STATS } from '../data/mockData';

export default function FinancialSummary({ onShowToast }) {
  return (
    <article className="dashboard-card summary-card financial-summary-card">
      <DashboardCardHeader title="Financial Summary" subtitle="Cash flow and balances" icon="Landmark" actionLabel="Ledger" onAction={() => onShowToast('General ledger opened')} />
      <div className="financial-grid">
        {FINANCIAL_STATS.map((item) => (
          <div key={item.label} className={`financial-item tone-${item.tone}`}>
            <span className="summary-icon"><Icon name={item.icon} size={15} /></span>
            <span><small>{item.label}</small><strong>{item.value}</strong></span>
            <b>{item.trend}</b>
          </div>
        ))}
      </div>
      <div className="cashflow-footer"><div><span>Cash position</span><strong>$87,250</strong></div><span className="cashflow-positive"><Icon name="ArrowUpRight" size={13} /> Healthy cash flow</span></div>
    </article>
  );
}
