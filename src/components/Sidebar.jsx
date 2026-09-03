import { useEffect, useState } from 'react';
import Icon from './Icon';
import { NAVIGATION_ITEMS } from '../data/mockData';

export default function Sidebar({
  isCollapsed,
  setIsCollapsed,
  activeItem,
  setActiveItem,
  isMobileOpen,
  setIsMobileOpen,
}) {
  const [openGroups, setOpenGroups] = useState(['inventory']);
  const [isMobileViewport, setIsMobileViewport] = useState(() => window.innerWidth < 1024);
  const showLabels = !isCollapsed || isMobileOpen;

  useEffect(() => {
    const handleViewport = () => {
      const isMobile = window.innerWidth < 1024;
      setIsMobileViewport(isMobile);
      if (!isMobile) setIsMobileOpen(false);
    };
    const handleKey = (event) => {
      if (event.key === 'Escape') setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleViewport);
    document.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('resize', handleViewport);
      document.removeEventListener('keydown', handleKey);
    };
  }, [setIsMobileOpen]);

  const toggleGroup = (id) => {
    setOpenGroups((groups) => groups.includes(id) ? groups.filter((item) => item !== id) : [...groups, id]);
  };

  const navigate = (id, label) => {
    setActiveItem(id, label);
    if (window.innerWidth < 1024) setIsMobileOpen(false);
  };

  return (
    <>
      {isMobileOpen && <button className="sidebar-backdrop" onClick={() => setIsMobileOpen(false)} aria-label="Close navigation" />}
      <aside
        className={`sidebar ${isCollapsed ? 'is-collapsed' : ''} ${isMobileOpen ? 'is-mobile-open' : ''}`}
        aria-hidden={isMobileViewport && !isMobileOpen ? 'true' : undefined}
        inert={isMobileViewport && !isMobileOpen ? true : undefined}
      >
        <div className="sidebar-brand">
          <div className="brand-mark" aria-hidden="true"><Icon name="Store" size={19} /></div>
          {showLabels && (
            <div className="brand-copy">
              <strong>NexaRetail</strong>
              <span>ERP Suite</span>
            </div>
          )}
          <button className="sidebar-mobile-close" onClick={() => setIsMobileOpen(false)} aria-label="Close menu"><Icon name="X" size={20} /></button>
        </div>

        <div className="sidebar-context">
          {showLabels ? (
            <>
              <span className="sidebar-context-label">Workspace</span>
              <button onClick={() => navigate('workspace-switcher', 'Workspace switcher')} aria-label="Open workspace switcher">
                <span className="workspace-avatar">NR</span>
                <span><strong>Nexa Retail Co.</strong><small>Business account</small></span>
                <Icon name="ChevronDown" size={14} />
              </button>
            </>
          ) : <span className="workspace-avatar centered">NR</span>}
        </div>

        <nav className="sidebar-nav" aria-label="ERP modules">
          <span className="nav-section-label">{showLabels ? 'MAIN MENU' : '•••'}</span>
          <ul className="nav-list">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeItem === item.id;
              const isOpen = openGroups.includes(item.id);
              const hasActiveChild = item.children?.some((child) => child.id === activeItem);
              return (
                <li key={item.id} className="nav-item">
                  <button
                    type="button"
                    className={`nav-item-button ${isActive || hasActiveChild ? 'active' : ''}`}
                    onClick={() => item.children && showLabels ? toggleGroup(item.id) : navigate(item.id, item.label)}
                    title={isCollapsed ? item.label : undefined}
                    aria-expanded={item.children ? isOpen : undefined}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="nav-icon"><Icon name={item.icon} size={18} /></span>
                    {showLabels && <span className="nav-label">{item.label}</span>}
                    {showLabels && item.tag && <span className="nav-tag">{item.tag}</span>}
                    {showLabels && item.children && <Icon className={`nav-chevron ${isOpen ? 'open' : ''}`} name="ChevronDown" size={14} />}
                  </button>
                  {showLabels && item.children && isOpen && (
                    <ul className="nav-submenu">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <button className={activeItem === child.id ? 'active' : ''} onClick={() => navigate(child.id, child.label)}>
                            <span>{child.label}</span>
                            {child.badge && <span className="nav-count">{child.badge}</span>}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="sidebar-bottom">
          {showLabels && (
            <div className="plan-card">
              <div><Icon name="Sparkles" size={15} /><span>Growth plan</span></div>
              <strong>4 of 5 branches active</strong>
              <div className="plan-progress"><span /></div>
            </div>
          )}
          <button className="collapse-button" onClick={() => setIsCollapsed(!isCollapsed)} aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
            <Icon name={isCollapsed ? 'ChevronRight' : 'ChevronLeft'} size={18} />
            {showLabels && <span>Collapse sidebar</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
