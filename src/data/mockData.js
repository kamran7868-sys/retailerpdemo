export const NAVIGATION_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  {
    id: 'pos', label: 'POS', icon: 'ShoppingCart', children: [
      { id: 'pos-terminal', label: 'POS Terminal' },
      { id: 'held-sales', label: 'Held Sales' },
    ],
  },
  {
    id: 'products', label: 'Products', icon: 'Package', children: [
      { id: 'all-products', label: 'All Products' },
      { id: 'categories', label: 'Categories' },
      { id: 'brands', label: 'Brands' },
      { id: 'units', label: 'Units' },
    ],
  },
  {
    id: 'inventory', label: 'Inventory', icon: 'Boxes', children: [
      { id: 'stock-overview', label: 'Stock Overview' },
      { id: 'stock-adjustments', label: 'Stock Adjustments' },
      { id: 'stock-transfers', label: 'Stock Transfers' },
      { id: 'low-stock', label: 'Low Stock', badge: '18' },
      { id: 'stock-history', label: 'Stock History' },
    ],
  },
  {
    id: 'sales', label: 'Sales', icon: 'ReceiptText', children: [
      { id: 'sales-orders', label: 'Sales Orders' },
      { id: 'invoices', label: 'Invoices' },
      { id: 'sales-returns', label: 'Sales Returns' },
      { id: 'customer-payments', label: 'Customer Payments' },
    ],
  },
  {
    id: 'purchases', label: 'Purchases', icon: 'ShoppingBag', children: [
      { id: 'purchase-orders', label: 'Purchase Orders' },
      { id: 'purchase-invoices', label: 'Purchase Invoices' },
      { id: 'purchase-returns', label: 'Purchase Returns' },
      { id: 'supplier-payments', label: 'Supplier Payments' },
    ],
  },
  { id: 'customers', label: 'Customers', icon: 'UsersRound' },
  { id: 'suppliers', label: 'Suppliers', icon: 'Truck' },
  {
    id: 'accounting', label: 'Accounting', icon: 'Landmark', children: [
      { id: 'cash-account', label: 'Cash Account' },
      { id: 'bank-accounts', label: 'Bank Accounts' },
      { id: 'expenses', label: 'Expenses' },
      { id: 'income', label: 'Income' },
      { id: 'receivable', label: 'Accounts Receivable' },
      { id: 'payable', label: 'Accounts Payable' },
    ],
  },
  { id: 'reports', label: 'Reports', icon: 'FileBarChart' },
  { id: 'branches', label: 'Branches & Warehouses', icon: 'Building2' },
  { id: 'users', label: 'Users & Roles', icon: 'CircleUserRound' },
  { id: 'integrations', label: 'Marketplace Integrations', icon: 'PlugZap', tag: 'BETA' },
  { id: 'notifications', label: 'Notifications', icon: 'Bell' },
  { id: 'settings', label: 'Settings', icon: 'Settings' },
];

export const KPI_DATA = [
  { id: 'total-sales', title: 'Total Sales', value: '$84,250.00', trend: '+12.5%', comparison: 'vs last month', progress: 84, helper: '$100k monthly target', icon: 'BadgeDollarSign', tone: 'blue' },
  { id: 'net-sales', title: 'Net Sales', value: '$78,640.00', trend: '+10.2%', comparison: 'vs last month', progress: 79, helper: '93.3% of gross sales', icon: 'ReceiptText', tone: 'cyan' },
  { id: 'gross-profit', title: 'Gross Profit', value: '$29,870.00', trend: '+15.2%', comparison: 'vs last month', progress: 76, helper: '38.0% margin', icon: 'ArrowUpRight', tone: 'green' },
  { id: 'expenses', title: 'Expenses', value: '$9,420.00', trend: '−8.3%', comparison: 'vs last month', progress: 47, helper: '$20k monthly budget', icon: 'ArrowDownRight', tone: 'orange', positive: true },
  { id: 'net-profit', title: 'Net Profit', value: '$20,450.00', trend: '+18.7%', comparison: 'vs last month', progress: 82, helper: '26.0% net margin', icon: 'WalletCards', tone: 'emerald' },
  { id: 'purchases', title: 'Purchases', value: '$42,680.00', trend: '+6.4%', comparison: 'vs last month', progress: 61, helper: '12 orders pending', icon: 'ShoppingBag', tone: 'purple' },
  { id: 'inventory-value', title: 'Inventory Value', value: '$126,850.00', trend: '+4.8%', comparison: 'vs last month', progress: 72, helper: '18,650 units on hand', icon: 'Boxes', tone: 'teal' },
  { id: 'low-stock', title: 'Low Stock', value: '18 Products', trend: 'Needs attention', comparison: '7 out of stock', progress: 22, helper: 'Review reorder levels', icon: 'AlertTriangle', tone: 'red', warning: true },
];

export const DATE_RANGES = [
  'Today, May 31, 2026',
  'May 25 – May 31, 2026',
  'May 1 – May 31, 2026',
  'Apr 1 – Apr 30, 2026',
  'Jan 1 – May 31, 2026',
];

export const BRANCHES = ['All Branches', 'Main Branch', 'City Center', 'North Branch', 'Online Store'];
export const WAREHOUSES = ['All Warehouses', 'Central Warehouse', 'North Depot', 'City Center Store'];

export const NOTIFICATIONS_DATA = [
  { id: 1, text: '18 products are running low on stock.', time: '8 min ago', unread: true, type: 'warning' },
  { id: 2, text: '3 supplier payments are due today.', time: '24 min ago', unread: true, type: 'danger' },
  { id: 3, text: 'Purchase Order #PO-1054 needs approval.', time: '1 hr ago', unread: true, type: 'info' },
  { id: 4, text: 'Stock transfer #ST-203 was completed.', time: 'Yesterday', unread: false, type: 'success' },
];

export const SEARCH_SUGGESTIONS = [
  { type: 'Product', title: 'Wireless Headphones', detail: 'SKU-1001 · 85 in stock', icon: 'Package' },
  { type: 'Invoice', title: 'INV-2026-1058', detail: 'Ahmed Khan · $450.00', icon: 'ReceiptText' },
  { type: 'Customer', title: 'Sarah Trading', detail: 'Customer · Main Branch', icon: 'UserRound' },
  { type: 'Barcode', title: '8901234567109', detail: 'Bluetooth Speaker · SKU-1004', icon: 'Search' },
];

export const SALES_CHART_DATA = {
  Today: [
    { label: '8 AM', sales: 950, grossProfit: 360, expenses: 105 },
    { label: '10 AM', sales: 1850, grossProfit: 690, expenses: 240 },
    { label: '12 PM', sales: 2920, grossProfit: 1080, expenses: 345 },
    { label: '2 PM', sales: 2380, grossProfit: 910, expenses: 270 },
    { label: '4 PM', sales: 3420, grossProfit: 1320, expenses: 405 },
    { label: '6 PM', sales: 4110, grossProfit: 1590, expenses: 510 },
    { label: '8 PM', sales: 2860, grossProfit: 1060, expenses: 315 },
  ],
  'This Week': [
    { label: 'Mon', sales: 10500, grossProfit: 3950, expenses: 1180 },
    { label: 'Tue', sales: 11800, grossProfit: 4380, expenses: 1320 },
    { label: 'Wed', sales: 10950, grossProfit: 4120, expenses: 1210 },
    { label: 'Thu', sales: 13400, grossProfit: 5010, expenses: 1470 },
    { label: 'Fri', sales: 15100, grossProfit: 5780, expenses: 1690 },
    { label: 'Sat', sales: 17800, grossProfit: 6710, expenses: 2010 },
    { label: 'Sun', sales: 14620, grossProfit: 5480, expenses: 1620 },
  ],
  'This Month': [
    { label: 'May 1', sales: 7800, grossProfit: 2750, expenses: 880 },
    { label: 'May 5', sales: 10550, grossProfit: 3650, expenses: 1120 },
    { label: 'May 10', sales: 12180, grossProfit: 4210, expenses: 1320 },
    { label: 'May 15', sales: 10940, grossProfit: 3900, expenses: 1240 },
    { label: 'May 20', sales: 14280, grossProfit: 4980, expenses: 1630 },
    { label: 'May 25', sales: 13070, grossProfit: 4500, expenses: 1510 },
    { label: 'May 31', sales: 15430, grossProfit: 5880, expenses: 1720 },
  ],
  'This Year': [
    { label: 'Jan', sales: 64200, grossProfit: 23400, expenses: 8900 },
    { label: 'Feb', sales: 68100, grossProfit: 24900, expenses: 9150 },
    { label: 'Mar', sales: 71950, grossProfit: 26300, expenses: 9020 },
    { label: 'Apr', sales: 74880, grossProfit: 27120, expenses: 10270 },
    { label: 'May', sales: 84250, grossProfit: 29870, expenses: 9420 },
    { label: 'Jun', sales: 0, grossProfit: 0, expenses: 0 },
  ],
};

export const PAYMENT_METHODS = [
  { name: 'Cash', shortName: 'Cash', amount: 32500, percentage: 38.6, color: '#2563eb' },
  { name: 'Card', shortName: 'Card', amount: 24850, percentage: 29.5, color: '#16a36a' },
  { name: 'Bank Transfer', shortName: 'Bank', amount: 16200, percentage: 19.2, color: '#7c5ce7' },
  { name: 'Online Payment', shortName: 'Online', amount: 10700, percentage: 12.7, color: '#e97917' },
];

export const BRANCH_SALES = [
  { name: 'Main Branch', amount: 38400, percentage: 45.6, color: '#2563eb' },
  { name: 'City Center', amount: 24200, percentage: 28.7, color: '#5b8def' },
  { name: 'North Branch', amount: 13950, percentage: 16.6, color: '#8eaff4' },
  { name: 'Online Store', amount: 7700, percentage: 9.1, color: '#b9cef8' },
];

export const TOP_PRODUCTS = [
  { id: 1, name: 'Wireless Headphones', sku: 'SKU-1001', qty: 148, revenue: 8880, stock: 85, margin: 32.5, icon: 'Headphones', tone: 'blue', stockStatus: 'healthy' },
  { id: 2, name: 'Smart Watch Series X', sku: 'SKU-1002', qty: 121, revenue: 7865, stock: 42, margin: 28.7, icon: 'Watch', tone: 'purple', stockStatus: 'healthy' },
  { id: 3, name: 'Premium Backpack', sku: 'SKU-1003', qty: 96, revenue: 5760, stock: 18, margin: 35.4, icon: 'Backpack', tone: 'orange', stockStatus: 'watch' },
  { id: 4, name: 'Bluetooth Speaker', sku: 'SKU-1004', qty: 88, revenue: 4840, stock: 9, margin: 26.8, icon: 'Speaker', tone: 'cyan', stockStatus: 'low' },
  { id: 5, name: 'Running Shoes', sku: 'SKU-1005', qty: 76, revenue: 4560, stock: 64, margin: 31.2, icon: 'Footprints', tone: 'green', stockStatus: 'healthy' },
];

export const LOW_STOCK_PRODUCTS = [
  { name: 'Bluetooth Speaker', sku: 'SKU-1004', available: 9, reorder: 20, status: 'Low Stock', icon: 'Speaker' },
  { name: 'USB-C Charger', sku: 'SKU-1035', available: 4, reorder: 15, status: 'Critical', icon: 'Cable' },
  { name: 'Wireless Mouse', sku: 'SKU-1044', available: 8, reorder: 20, status: 'Low Stock', icon: 'MousePointer2' },
  { name: 'Gaming Keyboard', sku: 'SKU-1080', available: 3, reorder: 10, status: 'Critical', icon: 'Keyboard' },
];

export const RECENT_SALES = [
  { invoice: 'INV-2026-1058', customer: 'Ahmed Khan', initials: 'AK', branch: 'Main Branch', payment: 'Cash', amount: 450, status: 'Paid' },
  { invoice: 'INV-2026-1057', customer: 'Sarah Trading', initials: 'ST', branch: 'City Center', payment: 'Card', amount: 1280, status: 'Paid' },
  { invoice: 'INV-2026-1056', customer: 'Walk-in Customer', initials: 'WC', branch: 'North Branch', payment: 'Cash', amount: 185, status: 'Paid' },
  { invoice: 'INV-2026-1055', customer: 'Ali Enterprises', initials: 'AE', branch: 'Main Branch', payment: 'Bank', amount: 2450, status: 'Partial' },
  { invoice: 'INV-2026-1054', customer: 'Urban Mart', initials: 'UM', branch: 'Online Store', payment: 'Online', amount: 725, status: 'Pending' },
  { invoice: 'INV-2026-1053', customer: 'Hassan Retail', initials: 'HR', branch: 'City Center', payment: 'Card', amount: 320, status: 'Refunded' },
];

export const EMPLOYEE_PERFORMANCE = [
  { name: 'Ali Raza', role: 'Senior Cashier', initials: 'AR', sales: 18450, orders: 128, average: 144, performance: 94, tone: 'navy' },
  { name: 'Sarah Ahmed', role: 'Sales Associate', initials: 'SA', sales: 15280, orders: 106, average: 144, performance: 88, tone: 'purple' },
  { name: 'Usman Malik', role: 'Floor Supervisor', initials: 'UM', sales: 12940, orders: 94, average: 138, performance: 82, tone: 'teal' },
  { name: 'Ayesha Khan', role: 'Sales Associate', initials: 'AY', sales: 10860, orders: 82, average: 132, performance: 78, tone: 'orange' },
];

export const INVENTORY_STATS = [
  { label: 'Total Products', value: '1,248', icon: 'Package', tone: 'blue', progress: 82 },
  { label: 'Total Stock Units', value: '18,650', icon: 'Boxes', tone: 'cyan', progress: 74 },
  { label: 'Inventory Value', value: '$126,850', icon: 'BadgeDollarSign', tone: 'green', progress: 68 },
  { label: 'Low Stock', value: '18', icon: 'AlertTriangle', tone: 'orange', progress: 24 },
  { label: 'Out of Stock', value: '7', icon: 'PackageMinus', tone: 'red', progress: 12 },
];

export const PURCHASE_STATS = [
  { label: 'Total Purchases', value: '$42,680', detail: '+6.4% this month', icon: 'ShoppingBag', tone: 'purple' },
  { label: 'Pending Purchase Orders', value: '12', detail: '4 need approval', icon: 'Clock3', tone: 'orange' },
  { label: 'Supplier Outstanding', value: '$8,450', detail: '3 due today', icon: 'Truck', tone: 'red' },
  { label: 'Purchase Returns', value: '$1,260', detail: '2.9% of purchases', icon: 'RotateCcw', tone: 'cyan' },
];

export const FINANCIAL_STATS = [
  { label: 'Cash Account', value: '$24,850', icon: 'Banknote', trend: '+4.2%', tone: 'green' },
  { label: 'Bank Balance', value: '$62,400', icon: 'Landmark', trend: '+7.8%', tone: 'blue' },
  { label: 'Accounts Receivable', value: '$18,750', icon: 'ArrowDownRight', trend: '11 invoices', tone: 'cyan' },
  { label: 'Accounts Payable', value: '$13,420', icon: 'ArrowUpRight', trend: '8 bills', tone: 'orange' },
  { label: 'Expenses', value: '$9,420', icon: 'Receipt', trend: '−8.3%', tone: 'red' },
  { label: 'Net Profit', value: '$20,450', icon: 'WalletCards', trend: '+18.7%', tone: 'purple' },
];

export const QUICK_ACTIONS = [
  { label: 'New Sale', icon: 'ShoppingCart', tone: 'blue', primary: true },
  { label: 'Add Product', icon: 'PackagePlus', tone: 'cyan' },
  { label: 'Create Purchase', icon: 'ShoppingBag', tone: 'purple' },
  { label: 'Add Customer', icon: 'UserRound', tone: 'green' },
  { label: 'Add Supplier', icon: 'Truck', tone: 'orange' },
  { label: 'Stock Transfer', icon: 'ArrowLeftRight', tone: 'teal' },
  { label: 'Add Expense', icon: 'Receipt', tone: 'red' },
];

export const ALERTS = [
  { id: 1, text: '18 products are running low on stock.', meta: 'Inventory · 8 min ago', type: 'warning', action: 'Review stock' },
  { id: 2, text: '3 supplier payments are due today.', meta: 'Accounting · 24 min ago', type: 'danger', action: 'View payments' },
  { id: 3, text: 'Purchase Order #PO-1054 is pending approval.', meta: 'Purchases · 1 hr ago', type: 'info', action: 'Review order' },
  { id: 4, text: 'Stock transfer #ST-203 has been completed.', meta: 'Inventory · Yesterday', type: 'success', action: 'View transfer' },
  { id: 5, text: '7 products are currently out of stock.', meta: 'Inventory · Yesterday', type: 'danger', action: 'Create purchase' },
];
