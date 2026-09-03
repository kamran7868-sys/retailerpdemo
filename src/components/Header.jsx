import { useEffect, useMemo, useRef, useState } from 'react';
import Icon from './Icon';
import { BRANCHES, NOTIFICATIONS_DATA, SEARCH_SUGGESTIONS } from '../data/mockData';

export default function Header({
  setIsMobileOpen,
  searchQuery,
  setSearchQuery,
  selectedBranch,
  setSelectedBranch,
  onShowToast,
}) {
  const [openMenu, setOpenMenu] = useState(null);
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);
  const headerRef = useRef(null);

  useEffect(() => {
    const closeMenus = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) setOpenMenu(null);
    };
    document.addEventListener('mousedown', closeMenus);
    return () => document.removeEventListener('mousedown', closeMenus);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        event.preventDefault();
        document.querySelector('.global-search-input')?.focus();
      }
      if (event.key === 'Escape') setOpenMenu(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const unreadCount = notifications.filter((item) => item.unread).length;
  const results = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return SEARCH_SUGGESTIONS;
    return SEARCH_SUGGESTIONS.filter((item) => `${item.type} ${item.title} ${item.detail}`.toLowerCase().includes(query));
  }, [searchQuery]);

  const toggle = (menu) => setOpenMenu((current) => current === menu ? null : menu);

  return (
    <header className="topbar" ref={headerRef}>
      <div className="topbar-left">
        <button className="mobile-menu-button" onClick={() => setIsMobileOpen(true)} aria-label="Open navigation"><Icon name="Menu" size={22} /></button>
        <div className="global-search">
          <Icon name="Search" size={17} />
          <input
            className="global-search-input"
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
              setOpenMenu('search');
            }}
            onFocus={() => setOpenMenu('search')}
            placeholder="Search products, sales, invoices, customers..."
            aria-label="Global ERP search"
          />
          {searchQuery ? <button className="search-clear" onClick={() => setSearchQuery('')} aria-label="Clear search"><Icon name="X" size={14} /></button> : <kbd>/</kbd>}
          {openMenu === 'search' && (
            <div className="dropdown-panel search-results-panel">
              <div className="dropdown-eyebrow">SEARCH ACROSS YOUR BUSINESS</div>
              {results.length ? results.map((result) => (
                <button key={`${result.type}-${result.title}`} className="search-result" onClick={() => {
                  setSearchQuery(result.title);
                  setOpenMenu(null);
                  onShowToast(`${result.type} opened: ${result.title}`);
                }}>
                  <span className="search-result-icon"><Icon name={result.icon} size={16} /></span>
                  <span><strong>{result.title}</strong><small>{result.detail}</small></span>
                  <em>{result.type}</em>
                </button>
              )) : <div className="search-empty">No matching products, orders, or contacts</div>}
              <div className="search-tip"><Icon name="Command" size={13} /> Search by SKU, barcode, invoice, customer, or supplier</div>
            </div>
          )}
        </div>
      </div>

      <div className="topbar-actions">
        <div className="relative-control desktop-branch">
          <button className="branch-selector" onClick={() => toggle('branch')} aria-expanded={openMenu === 'branch'}>
            <span className="branch-icon"><Icon name="Building2" size={16} /></span>
            <span><small>Active branch</small><strong>{selectedBranch}</strong></span>
            <Icon name="ChevronDown" size={14} />
          </button>
          {openMenu === 'branch' && (
            <div className="dropdown-panel branch-dropdown">
              <div className="dropdown-eyebrow">SWITCH BRANCH</div>
              {BRANCHES.map((branch) => (
                <button key={branch} className={`dropdown-option ${selectedBranch === branch ? 'selected' : ''}`} onClick={() => {
                  setSelectedBranch(branch);
                  setOpenMenu(null);
                  onShowToast(`Dashboard switched to ${branch}`);
                }}>
                  <Icon name={branch === 'All Branches' ? 'Building2' : 'Store'} size={16} />
                  <span>{branch}</span>
                  {selectedBranch === branch && <Icon name="Check" size={15} />}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="relative-control">
          <button className={`topbar-icon-button ${openMenu === 'notifications' ? 'active' : ''}`} onClick={() => toggle('notifications')} aria-label="Notifications" aria-haspopup="menu" aria-expanded={openMenu === 'notifications'}>
            <Icon name="Bell" size={19} />
            {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
          </button>
          {openMenu === 'notifications' && (
            <div className="dropdown-panel notification-dropdown">
              <div className="dropdown-heading"><div><strong>Notifications</strong><span>{unreadCount} unread alerts</span></div><button onClick={() => setNotifications((items) => items.map((item) => ({ ...item, unread: false })))}>Mark all read</button></div>
              <div className="notification-list">
                {notifications.map((item) => (
                  <button key={item.id} className={`notification-item ${item.unread ? 'unread' : ''}`} onClick={() => setNotifications((items) => items.map((entry) => entry.id === item.id ? { ...entry, unread: false } : entry))}>
                    <span className={`notification-symbol ${item.type}`}><Icon name={item.type === 'success' ? 'CheckCircle2' : item.type === 'danger' ? 'AlertCircle' : item.type === 'warning' ? 'AlertTriangle' : 'Bell'} size={16} /></span>
                    <span><strong>{item.text}</strong><small>{item.time}</small></span>
                    {item.unread && <i />}
                  </button>
                ))}
              </div>
              <button className="dropdown-footer-action" onClick={() => { setOpenMenu(null); onShowToast('Notification center opened'); }}>View notification center</button>
            </div>
          )}
        </div>

        <button className="topbar-icon-button help-button" onClick={() => onShowToast('Help center opened')} aria-label="Help center"><Icon name="CircleHelp" size={19} /></button>

        <div className="relative-control">
          <button className="profile-button" onClick={() => toggle('profile')} aria-expanded={openMenu === 'profile'} aria-label="Open profile menu for Ali Khan">
            <span className="profile-avatar">AK<span /></span>
            <span className="profile-copy"><strong>Ali Khan</strong><small>Administrator</small></span>
            <Icon name="ChevronDown" size={14} />
          </button>
          {openMenu === 'profile' && (
            <div className="dropdown-panel profile-dropdown">
              <div className="profile-card-head"><span className="profile-avatar large">AK<span /></span><span><strong>Ali Khan</strong><small>ali@nexaretail.co</small></span></div>
              <div className="dropdown-divider" />
              <button className="dropdown-option" onClick={() => onShowToast('Profile settings opened')}><Icon name="CircleUserRound" size={16} /><span>My profile</span></button>
              <button className="dropdown-option" onClick={() => onShowToast('Account preferences opened')}><Icon name="Settings" size={16} /><span>Account settings</span></button>
              <div className="dropdown-divider" />
              <button className="dropdown-option danger" onClick={() => onShowToast('Sign out is disabled in this demo')}><Icon name="LogOut" size={16} /><span>Sign out</span></button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
