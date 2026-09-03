import Icon from './Icon';

export default function DashboardCardHeader({ title, subtitle, icon, actionLabel, onAction, children }) {
  return (
    <div className="card-header">
      <div className="card-title-wrap">
        {icon && <span className="card-title-icon"><Icon name={icon} size={16} /></span>}
        <div>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
      <div className="card-header-actions">
        {children}
        {actionLabel && <button className="card-link" onClick={onAction}>{actionLabel}<Icon name="ChevronRight" size={13} /></button>}
      </div>
    </div>
  );
}
