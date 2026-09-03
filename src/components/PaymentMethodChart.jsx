import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import DashboardCardHeader from './DashboardCardHeader';
import { PAYMENT_METHODS } from '../data/mockData';

const money = (value) => `$${Number(value).toLocaleString('en-US')}`;

function DonutTooltip({ active, payload }) {
  if (!active || !payload?.[0]) return null;
  const item = payload[0].payload;
  return <div className="compact-chart-tooltip"><strong>{item.name}</strong><span>{money(item.amount)} · {item.percentage}%</span></div>;
}

export default function PaymentMethodChart({ onShowToast }) {
  return (
    <article className="dashboard-card analytics-card compact-chart-card">
      <DashboardCardHeader title="Sales by Payment Method" subtitle="How customers paid" icon="CreditCard" />
      <div className="donut-layout">
        <div className="donut-wrap" role="img" aria-label="Payment method share of total sales">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={PAYMENT_METHODS} dataKey="amount" nameKey="name" cx="50%" cy="50%" innerRadius={49} outerRadius={68} paddingAngle={2.5} startAngle={90} endAngle={-270} stroke="none">
                {PAYMENT_METHODS.map((item) => <Cell key={item.name} fill={item.color} />)}
              </Pie>
              <Tooltip content={<DonutTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="donut-total"><small>Total sales</small><strong>$84.25k</strong><span>1,032 orders</span></div>
        </div>
        <div className="chart-legend-list">
          {PAYMENT_METHODS.map((item) => (
            <div className="chart-legend-row" key={item.name}>
              <span className="chart-legend-color" style={{ background: item.color }} />
              <div><strong>{item.shortName}</strong><small>{item.percentage}%</small></div>
              <b>{money(item.amount)}</b>
            </div>
          ))}
        </div>
      </div>
      <button className="card-footer-link" onClick={() => onShowToast('Payment report opened')}>View payment report <span>→</span></button>
    </article>
  );
}
