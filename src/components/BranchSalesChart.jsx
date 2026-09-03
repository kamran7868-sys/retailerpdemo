import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import DashboardCardHeader from './DashboardCardHeader';
import { BRANCH_SALES } from '../data/mockData';

const money = (value) => `$${Number(value).toLocaleString('en-US')}`;

function BranchTooltip({ active, payload }) {
  if (!active || !payload?.[0]) return null;
  const item = payload[0].payload;
  return <div className="compact-chart-tooltip"><strong>{item.name}</strong><span>{money(item.amount)} · {item.percentage}%</span></div>;
}

export default function BranchSalesChart({ onShowToast }) {
  return (
    <article className="dashboard-card analytics-card compact-chart-card branch-chart-card">
      <DashboardCardHeader title="Sales by Branch" subtitle="Revenue contribution" icon="Building2" />
      <div className="branch-chart" role="img" aria-label="Sales amount by branch">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={BRANCH_SALES} layout="vertical" margin={{ top: 2, right: 7, bottom: 1, left: 0 }} barCategoryGap={10}>
            <XAxis type="number" hide domain={[0, 42000]} />
            <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} width={78} tick={{ fill: '#68758a', fontSize: 9.5, fontWeight: 600 }} />
            <Tooltip cursor={{ fill: '#f7f9fc' }} content={<BranchTooltip />} />
            <Bar dataKey="amount" radius={[0, 5, 5, 0]} barSize={12} background={{ fill: '#f0f2f6', radius: 5 }}>
              {BRANCH_SALES.map((item) => <Cell key={item.name} fill={item.color} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="branch-value-grid">
        {BRANCH_SALES.map((item) => <div key={item.name}><span style={{ background: item.color }} /><span className="sr-only">{item.name}: </span><small>{item.percentage}%</small><strong>{money(item.amount)}</strong></div>)}
      </div>
      <button className="card-footer-link" onClick={() => onShowToast('Branch performance opened')}>View branch performance <span>→</span></button>
    </article>
  );
}
