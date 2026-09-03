import DashboardCardHeader from './DashboardCardHeader';
import Icon from './Icon';
import { EMPLOYEE_PERFORMANCE } from '../data/mockData';

const money = (value) => `$${Number(value).toLocaleString('en-US')}`;

export default function EmployeePerformance({ onShowToast }) {
  return (
    <article className="dashboard-card employee-card">
      <DashboardCardHeader title="Sales by Employee" subtitle="Salesperson performance this month" icon="UsersRound" actionLabel="Full team" onAction={() => onShowToast('Employee performance report opened')} />
      <div className="employee-scroll" tabIndex="0" aria-label="Scrollable employee performance table">
        <div className="employee-table-head"><span>Employee</span><span>Sales</span><span>Orders</span><span>Avg. Sale</span><span>Performance</span></div>
        <div className="employee-list">
          {EMPLOYEE_PERFORMANCE.map((employee) => (
            <div className="employee-row" key={employee.name}>
              <div className="employee-info"><span className={`employee-avatar ${employee.tone}`}>{employee.initials}</span><span><strong>{employee.name}</strong><small>{employee.role}</small></span></div>
              <strong className="employee-sale">{money(employee.sales)}</strong>
              <span className="employee-orders">{employee.orders}</span>
              <span className="employee-average">{money(employee.average)}</span>
              <div className="performance-cell"><div><span style={{ width: `${employee.performance}%` }} /></div><b>{employee.performance}%</b></div>
            </div>
          ))}
        </div>
      </div>
      <div className="employee-note"><span><Icon name="Sparkles" size={13} />Top performer</span><strong>Ali Raza generated 21.9% of team sales</strong></div>
    </article>
  );
}
