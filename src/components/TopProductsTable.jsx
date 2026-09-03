import DashboardCardHeader from './DashboardCardHeader';
import Icon from './Icon';
import { TOP_PRODUCTS } from '../data/mockData';

const money = (value) => `$${Number(value).toLocaleString('en-US')}`;

export default function TopProductsTable({ onShowToast }) {
  return (
    <article className="dashboard-card table-card top-products-card">
      <DashboardCardHeader title="Top Selling Products" subtitle="Highest revenue products this month" icon="Package" actionLabel="View all products" onAction={() => onShowToast('Product catalog opened')} />
      <div className="table-scroll" tabIndex="0" aria-label="Scrollable top selling products table">
        <table className="data-table products-table">
          <thead><tr><th scope="col">Product</th><th scope="col">SKU</th><th scope="col" className="num">Qty Sold</th><th scope="col" className="num">Revenue</th><th scope="col" className="num">Stock</th><th scope="col" className="num">Profit Margin</th></tr></thead>
          <tbody>
            {TOP_PRODUCTS.map((product) => (
              <tr key={product.id}>
                <td><div className="product-cell"><span className={`product-thumb tone-${product.tone}`}><Icon name={product.icon} size={18} /></span><span><strong>{product.name}</strong><small>{product.qty >= 100 ? 'Popular item' : 'Active product'}</small></span></div></td>
                <td><span className="sku-code">{product.sku}</span></td>
                <td className="num strong-num">{product.qty}</td>
                <td className="num strong-num">{money(product.revenue)}</td>
                <td className="num"><span className={`stock-value ${product.stockStatus}`}><i />{product.stock}</span></td>
                <td className="num"><span className="margin-badge">{product.margin}%</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
