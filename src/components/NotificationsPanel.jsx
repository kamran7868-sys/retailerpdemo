import { useState } from 'react';
import DashboardCardHeader from './DashboardCardHeader';
import Icon from './Icon';
import { ALERTS } from '../data/mockData';

const alertIcon = { warning: 'AlertTriangle', danger: 'AlertCircle', info: 'Bell', success: 'CheckCircle2' };

export default function NotificationsPanel({ onShowToast }) {
  const [alerts, setAlerts] = useState(ALERTS);

  const handleAction = (alert) => {
    onShowToast(`${alert.action}: ${alert.text}`);
    if (alert.type === 'success') setAlerts((items) => items.filter((item) => item.id !== alert.id));
  };

  return (
    <article className="dashboard-card alerts-card">
      <DashboardCardHeader title="Alerts & Notifications" subtitle={`${alerts.length} items need your attention`} icon="Bell" actionLabel="Mark viewed" onAction={() => onShowToast('All alerts marked as viewed')} />
      <div className="alerts-list">
        {alerts.map((alert) => (
          <div className={`alert-row ${alert.type}`} key={alert.id}>
            <span className="alert-icon"><Icon name={alertIcon[alert.type]} size={16} /></span>
            <span className="alert-copy"><strong>{alert.text}</strong><small>{alert.meta}</small></span>
            <button onClick={() => handleAction(alert)}>{alert.action}<Icon name="ChevronRight" size={12} /></button>
          </div>
        ))}
      </div>
    </article>
  );
}
