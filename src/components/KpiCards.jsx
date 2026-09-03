import Icon from './Icon';
import { KPI_DATA } from '../data/mockData';

export default function KpiCards({ onShowToast }) {
  return (
    <section className="kpi-grid" aria-label="Business performance indicators">
      {KPI_DATA.map((kpi) => (
        <article key={kpi.id} className={`kpi-card tone-${kpi.tone}`}>
          <div className="kpi-heading">
            <span className="kpi-icon"><Icon name={kpi.icon} size={18} /></span>
            <span className="kpi-label">{kpi.title}</span>
            <button type="button" aria-label={`View ${kpi.title} details`} onClick={() => onShowToast(`${kpi.title} details opened`)}>•••</button>
          </div>
          <strong className="kpi-value">{kpi.value}</strong>
          <div className="kpi-comparison">
            <span className={kpi.warning ? 'warning' : 'positive'}>{!kpi.warning && <Icon name={kpi.id === 'expenses' ? 'ArrowDownRight' : 'ArrowUpRight'} size={13} />}{kpi.trend}</span>
            <small>{kpi.comparison}</small>
          </div>
          <div className="kpi-progress-row">
            <div className="kpi-track" role="progressbar" aria-valuenow={kpi.progress} aria-valuemin="0" aria-valuemax="100"><span style={{ width: `${kpi.progress}%` }} /></div>
            <small>{kpi.helper}</small>
          </div>
        </article>
      ))}
    </section>
  );
}
