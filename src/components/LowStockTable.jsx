import DashboardCardHeader from './DashboardCardHeader';
import Icon from './Icon';
import { LOW_STOCK_PRODUCTS } from '../data/mockData';

export default function LowStockTable({ onShowToast }) {
  return (
    <article className="dashboard-card table-card low-stock-card">
      <DashboardCardHeader title="Low Stock Products" subtitle="Products below reorder level" icon="AlertTriangle" />
      <div className="table-scroll" tabIndex="0" aria-label="Scrollable low stock products table">
        <table className="data-table low-stock-table">
          <thead><tr><th scope="col">Product</th><th scope="col" className="num">Available</th><th scope="col" className="num">Reorder</th><th scope="col" className="num">Status</th></tr></thead>
          <tbody>
            {LOW_STOCK_PRODUCTS.map((product) => (
              <tr key={product.sku}>
                <td><div className="product-cell compact"><span className="product-thumb tone-orange"><Icon name={product.icon} size={16} /></span><span><strong>{product.name}</strong><small>{product.sku}</small></span></div></td>
                <td className="num strong-num">{product.available}</td>
                <td className="num muted-num">{product.reorder}</td>
                <td className="num"><span className={`status-badge ${product.status === 'Critical' ? 'critical' : 'low'}`}>{product.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-card-footer"><span><i className="pulse-dot" />Updated 4 minutes ago</span><button onClick={() => onShowToast('Inventory workspace opened')}>View Inventory <Icon name="ChevronRight" size={13} /></button></div>
    </article>
  );
}
