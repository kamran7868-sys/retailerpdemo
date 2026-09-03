import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { DATE_RANGES, WAREHOUSES } from '../data/mockData';

export default function PageHeader({ selectedDate, setSelectedDate, selectedWarehouse, setSelectedWarehouse, onExport, onRefresh }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const actionsRef = useRef(null);

  useEffect(() => {
    const closeMenus = (event) => {
      if (actionsRef.current && !actionsRef.current.contains(event.target)) setOpenMenu(null);
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpenMenu(null);
    };
    document.addEventListener('mousedown', closeMenus);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeMenus);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const refresh = () => {
    setRefreshing(true);
    onRefresh();
    window.setTimeout(() => setRefreshing(false), 700);
  };

  return (
    <section className="page-header">
      <div className="page-title-group">
        <div className="page-eyebrow"><span>Overview</span><i />Live business snapshot</div>
        <h1>Dashboard</h1>
        <p>Monitor your sales, inventory, purchases and business performance.</p>
      </div>
      <div className="page-actions" ref={actionsRef}>
        <div className="relative-control warehouse-filter">
          <button className="filter-button" aria-haspopup="menu" aria-expanded={openMenu === 'warehouse'} onClick={() => setOpenMenu(openMenu === 'warehouse' ? null : 'warehouse')}>
            <Icon name="Warehouse" size={16} /><span>{selectedWarehouse}</span><Icon name="ChevronDown" size={14} />
          </button>
          {openMenu === 'warehouse' && <div className="dropdown-panel filter-dropdown"><div className="dropdown-eyebrow">WAREHOUSE FILTER</div>{WAREHOUSES.map((warehouse) => <button key={warehouse} className={`dropdown-option ${selectedWarehouse === warehouse ? 'selected' : ''}`} onClick={() => { setSelectedWarehouse(warehouse); setOpenMenu(null); }}><Icon name="Warehouse" size={15} /><span>{warehouse}</span>{selectedWarehouse === warehouse && <Icon name="Check" size={14} />}</button>)}</div>}
        </div>
        <div className="relative-control date-filter">
          <button className="filter-button" aria-haspopup="menu" aria-expanded={openMenu === 'date'} onClick={() => setOpenMenu(openMenu === 'date' ? null : 'date')}>
            <Icon name="CalendarDays" size={16} /><span>{selectedDate}</span><Icon name="ChevronDown" size={14} />
          </button>
          {openMenu === 'date' && <div className="dropdown-panel filter-dropdown date-dropdown"><div className="dropdown-eyebrow">DATE RANGE</div>{DATE_RANGES.map((range) => <button key={range} className={`dropdown-option ${selectedDate === range ? 'selected' : ''}`} onClick={() => { setSelectedDate(range); setOpenMenu(null); }}><span>{range}</span>{selectedDate === range && <Icon name="Check" size={14} />}</button>)}</div>}
        </div>
        <div className="relative-control">
          <button className="filter-button export-button" aria-label="Export dashboard" aria-haspopup="menu" aria-expanded={openMenu === 'export'} onClick={() => setOpenMenu(openMenu === 'export' ? null : 'export')}><Icon name="Download" size={16} /><span>Export</span><Icon name="ChevronDown" size={14} /></button>
          {openMenu === 'export' && <div className="dropdown-panel export-dropdown"><div className="dropdown-eyebrow">EXPORT DASHBOARD</div>{[
            ['PDF', 'FileText', 'Portable document'], ['Excel', 'FileSpreadsheet', 'Formatted workbook'], ['CSV', 'FileBarChart', 'Raw data file'],
          ].map(([label, icon, detail]) => <button key={label} className="dropdown-option export-option" onClick={() => { onExport(label); setOpenMenu(null); }}><span className={`export-icon ${label.toLowerCase()}`}><Icon name={icon} size={15} /></span><span><strong>{label}</strong><small>{detail}</small></span></button>)}</div>}
        </div>
        <button className="refresh-button" aria-label="Refresh dashboard" onClick={refresh}><Icon className={refreshing ? 'spin' : ''} name="RefreshCw" size={16} /><span>Refresh</span></button>
      </div>
    </section>
  );
}
