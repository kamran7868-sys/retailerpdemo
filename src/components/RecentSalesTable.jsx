import DashboardCardHeader from './DashboardCardHeader';
import Icon from './Icon';
import { RECENT_SALES } from '../data/mockData';

const money = (value) => `$${Number(value).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

export default function RecentSalesTable({ onShowToast }) {
  return (
    <article className="dashboard-card table-card recent-sales-card">
      <DashboardCardHeader title="Recent Sales" subtitle="Latest invoices across all channels" icon="ReceiptText" actionLabel="View all sales" onAction={() => onShowToast('Sales register opened')} />
      <div className="table-scroll" tabIndex="0" aria-label="Scrollable recent sales table">
        <table className="data-table recent-sales-table">
          <thead><tr><th scope="col">Invoice</th><th scope="col">Customer</th><th scope="col">Branch</th><th scope="col">Payment</th><th scope="col" className="num">Amount</th><th scope="col" className="num">Status</th></tr></thead>
          <tbody>
            {RECENT_SALES.map((sale, index) => (
              <tr key={sale.invoice}>
                <td><button className="invoice-link" onClick={() => onShowToast(`${sale.invoice} opened`)}>{sale.invoice}</button><small className="invoice-time">{index < 2 ? `${12 - index * 2} min ago` : index < 4 ? 'Today' : 'Yesterday'}</small></td>
                <td><div className="customer-cell"><span className={`mini-avatar avatar-${index % 4}`}>{sale.initials}</span><strong>{sale.customer}</strong></div></td>
                <td><span className="branch-cell"><Icon name={sale.branch === 'Online Store' ? 'PlugZap' : 'Store'} size={13} />{sale.branch}</span></td>
                <td><span className="payment-cell"><Icon name={sale.payment === 'Cash' ? 'Banknote' : sale.payment === 'Card' ? 'CreditCard' : sale.payment === 'Bank' ? 'Landmark' : 'Zap'} size={13} />{sale.payment}</span></td>
                <td className="num strong-num">{money(sale.amount)}</td>
                <td className="num"><span className={`sale-status ${sale.status.toLowerCase()}`}>{sale.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
