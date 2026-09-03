import TopProductsTable from './TopProductsTable';
import LowStockTable from './LowStockTable';
import RecentSalesTable from './RecentSalesTable';
import EmployeePerformance from './EmployeePerformance';

export default function TablesSection({ onShowToast }) {
  return (
    <>
      <section className="content-grid products-stock-grid" aria-label="Product performance and stock alerts">
        <TopProductsTable onShowToast={onShowToast} />
        <LowStockTable onShowToast={onShowToast} />
      </section>
      <section className="content-grid sales-employee-grid" aria-label="Recent sales and employee performance">
        <RecentSalesTable onShowToast={onShowToast} />
        <EmployeePerformance onShowToast={onShowToast} />
      </section>
    </>
  );
}
