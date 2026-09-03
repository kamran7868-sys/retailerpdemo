import DashboardCardHeader from './DashboardCardHeader';
import Icon from './Icon';
import { QUICK_ACTIONS } from '../data/mockData';

export default function QuickActions({ onShowToast }) {
  return (
    <article className="dashboard-card quick-actions-card">
      <DashboardCardHeader title="Quick Actions" subtitle="Start a common workflow" icon="Zap" />
      <div className="quick-actions-grid">
        {QUICK_ACTIONS.map((action) => (
          <button key={action.label} className={`${action.primary ? 'primary' : ''} tone-${action.tone}`} onClick={() => onShowToast(`${action.label} workspace opened`)}>
            <span><Icon name={action.icon} size={17} /></span>
            <strong>{action.label}</strong>
            <Icon className="quick-action-arrow" name="ChevronRight" size={13} />
          </button>
        ))}
      </div>
      <div className="shortcut-hint"><Icon name="Command" size={13} /><span>Tip: press <kbd>/</kbd> from anywhere to search products and invoices.</span></div>
    </article>
  );
}
