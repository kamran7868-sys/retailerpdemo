import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PageHeader from './components/PageHeader';
import KpiCards from './components/KpiCards';
import ChartsSection from './components/ChartsSection';
import TablesSection from './components/TablesSection';
import SummarySection from './components/SummarySection';
import QuickActions from './components/QuickActions';
import NotificationsPanel from './components/NotificationsPanel';
import DashboardFooter from './components/DashboardFooter';
import Toast from './components/Toast';
import './App.css';

export default function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('dashboard');
  const [selectedDate, setSelectedDate] = useState('May 1 – May 31, 2026');
  const [selectedBranch, setSelectedBranch] = useState('Main Branch');
  const [selectedWarehouse, setSelectedWarehouse] = useState('All Warehouses');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message) => {
    setToastMessage(message);
    window.setTimeout(() => {
      setToastMessage((current) => (current === message ? '' : current));
    }, 3000);
  };

  return (
    <div className={`app-shell ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        activeItem={activeNavItem}
        setActiveItem={(id, label) => {
          if (id === 'dashboard') setActiveNavItem('dashboard');
          else showToast(`${label} is ready for the next ERP phase`);
        }}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <div className="workspace">
        <Header
          setIsMobileOpen={setIsMobileOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedBranch={selectedBranch}
          setSelectedBranch={setSelectedBranch}
          onShowToast={showToast}
        />

        <main className="dashboard-main">
          <div className="dashboard-container">
            <PageHeader
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedWarehouse={selectedWarehouse}
              setSelectedWarehouse={setSelectedWarehouse}
              onExport={(format) => showToast(`${format} export prepared for ${selectedDate}`)}
              onRefresh={() => showToast('Dashboard data refreshed')}
            />
            <KpiCards onShowToast={showToast} />
            <ChartsSection onShowToast={showToast} />
            <TablesSection onShowToast={showToast} />
            <SummarySection onShowToast={showToast} />
            <section className="bottom-grid" aria-label="Quick actions and alerts">
              <QuickActions onShowToast={showToast} />
              <NotificationsPanel onShowToast={showToast} />
            </section>
            <DashboardFooter />
          </div>
        </main>
      </div>
    </div>
  );
}
