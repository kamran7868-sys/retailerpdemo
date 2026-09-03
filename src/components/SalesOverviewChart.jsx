import { useEffect, useRef, useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import DashboardCardHeader from './DashboardCardHeader';
import Icon from './Icon';
import { SALES_CHART_DATA } from '../data/mockData';

const PERIODS = ['Today', 'This Week', 'This Month', 'This Year'];
const money = (value) => `$${Number(value).toLocaleString('en-US')}`;

function SalesTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="sales-chart-tooltip">
      <strong>{label}</strong>
      {payload.map((item) => (
        <div key={item.dataKey}>
          <span style={{ background: item.color }} />
          <em>{item.name}</em>
          <b>{money(item.value)}</b>
        </div>
      ))}
    </div>
  );
}

export default function SalesOverviewChart() {
  const [period, setPeriod] = useState('This Month');
  const [open, setOpen] = useState(false);
  const filterRef = useRef(null);
  const chartData = SALES_CHART_DATA[period];
  const totals = chartData.reduce((result, point) => ({
    sales: result.sales + point.sales,
    grossProfit: result.grossProfit + point.grossProfit,
    expenses: result.expenses + point.expenses,
  }), { sales: 0, grossProfit: 0, expenses: 0 });

  useEffect(() => {
    const close = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  return (
    <article className="dashboard-card analytics-card sales-overview-card">
      <DashboardCardHeader
        title="Sales & Profit Overview"
        subtitle="Sales movement and operating performance"
        icon="BarChart3"
      >
        <div className="relative-control" ref={filterRef}>
          <button className="chart-period-button" onClick={() => setOpen(!open)} aria-haspopup="menu" aria-expanded={open}>
            {period}<Icon name="ChevronDown" size={13} />
          </button>
          {open && (
            <div className="dropdown-panel chart-period-dropdown">
              {PERIODS.map((option) => (
                <button key={option} className={`dropdown-option ${period === option ? 'selected' : ''}`} onClick={() => { setPeriod(option); setOpen(false); }}>
                  <span>{option}</span>{period === option && <Icon name="Check" size={14} />}
                </button>
              ))}
            </div>
          )}
        </div>
      </DashboardCardHeader>

      <div className="chart-summary-strip">
        <div><span className="legend-mark sales" /><span>Sales</span><strong>{money(totals.sales)}</strong></div>
        <div><span className="legend-mark profit" /><span>Gross Profit</span><strong>{money(totals.grossProfit)}</strong></div>
        <div><span className="legend-mark expenses" /><span>Expenses</span><strong>{money(totals.expenses)}</strong></div>
      </div>

      <div className="sales-chart" role="img" aria-label={`Sales, gross profit, and expenses chart for ${period}`}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 12, right: 7, bottom: 0, left: -13 }}>
            <defs>
              <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.01" />
              </linearGradient>
              <linearGradient id="profitFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#16a36a" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#16a36a" stopOpacity="0" />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#edf0f5" strokeDasharray="3 4" vertical={false} />
            <XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: '#8390a3', fontSize: 10 }} dy={10} interval="preserveStartEnd" />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#8390a3', fontSize: 10 }} tickFormatter={(value) => value === 0 ? '$0' : `$${Math.round(value / 1000)}k`} width={48} />
            <Tooltip content={<SalesTooltip />} cursor={{ stroke: '#b9c3d2', strokeDasharray: '4 4' }} />
            <Area type="monotone" dataKey="sales" name="Sales" stroke="#2563eb" strokeWidth={2.4} fill="url(#salesFill)" activeDot={{ r: 4, strokeWidth: 3, stroke: '#fff' }} />
            <Area type="monotone" dataKey="grossProfit" name="Gross Profit" stroke="#16a36a" strokeWidth={2} fill="url(#profitFill)" activeDot={{ r: 3.5, strokeWidth: 2, stroke: '#fff' }} />
            <Area type="monotone" dataKey="expenses" name="Expenses" stroke="#e97917" strokeWidth={1.8} fill="transparent" strokeDasharray="5 4" activeDot={{ r: 3.5, strokeWidth: 2, stroke: '#fff' }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="sr-only">Sales are {money(totals.sales)}, gross profit is {money(totals.grossProfit)}, and expenses are {money(totals.expenses)} for {period.toLowerCase()}.</p>
    </article>
  );
}
