import SalesOverviewChart from './SalesOverviewChart';
import PaymentMethodChart from './PaymentMethodChart';
import BranchSalesChart from './BranchSalesChart';

export default function ChartsSection({ onShowToast }) {
  return (
    <section className="analytics-grid" aria-label="Sales analytics">
      <SalesOverviewChart />
      <PaymentMethodChart onShowToast={onShowToast} />
      <BranchSalesChart onShowToast={onShowToast} />
    </section>
  );
}
