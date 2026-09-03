import InventorySummary from './InventorySummary';
import PurchaseSummary from './PurchaseSummary';
import FinancialSummary from './FinancialSummary';

export default function SummarySection({ onShowToast }) {
  return (
    <section className="summary-grid" aria-label="Inventory purchase and financial summaries">
      <InventorySummary onShowToast={onShowToast} />
      <PurchaseSummary onShowToast={onShowToast} />
      <FinancialSummary onShowToast={onShowToast} />
    </section>
  );
}
