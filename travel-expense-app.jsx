import React, { useState } from 'react';

// Lucide-style SVG icons as components
const Icons = {
  Home: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  ),
  Wallet: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
      <path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>
    </svg>
  ),
  Exchange: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3l4 4-4 4"/>
      <path d="M20 7H4"/>
      <path d="M8 21l-4-4 4-4"/>
      <path d="M4 17h16"/>
    </svg>
  ),
  Users: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Plus: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  ),
  ChevronDown: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6,9 12,15 18,9"/>
    </svg>
  ),
  Search: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  Food: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      <line x1="6" y1="1" x2="6" y2="4"/>
      <line x1="10" y1="1" x2="10" y2="4"/>
      <line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  ),
  Transport: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2"/>
      <polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  Shopping: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  ),
  Hotel: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18"/>
      <path d="M5 21V7l8-4v18"/>
      <path d="M19 21V11l-6-4"/>
      <path d="M9 9h.01"/>
      <path d="M9 12h.01"/>
      <path d="M9 15h.01"/>
      <path d="M9 18h.01"/>
    </svg>
  ),
  Other: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="19" cy="12" r="1"/>
      <circle cx="5" cy="12" r="1"/>
    </svg>
  ),
  Calendar: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  CreditCard: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2"/>
      <line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  ),
  Cash: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2"/>
      <circle cx="12" cy="12" r="3"/>
      <path d="M6 12h.01M18 12h.01"/>
    </svg>
  ),
  Close: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  Refresh: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23,4 23,10 17,10"/>
      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
    </svg>
  ),
  Lock: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  Unlock: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
    </svg>
  ),
  Share: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
  Check: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20,6 9,17 4,12"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12,5 19,12 12,19"/>
    </svg>
  )
};

// Category icon mapping
const getCategoryIcon = (category) => {
  const icons = {
    '餐飲': Icons.Food,
    '交通': Icons.Transport,
    '購物': Icons.Shopping,
    '住宿': Icons.Hotel,
    '其他': Icons.Other
  };
  return icons[category] || Icons.Other;
};

// Category colors
const getCategoryColor = (category) => {
  const colors = {
    '餐飲': '#FF8A65',
    '交通': '#4FC3F7',
    '購物': '#BA68C8',
    '住宿': '#81C784',
    '其他': '#90A4AE'
  };
  return colors[category] || '#90A4AE';
};

// Sample data
const sampleExpenses = [
  { id: 1, category: '餐飲', merchant: '一蘭拉麵', date: '2025/01/12 12:30', localAmount: 1290, twdAmount: 284, payMethod: '現金' },
  { id: 2, category: '交通', merchant: 'Suica 儲值', date: '2025/01/12 09:15', localAmount: 3000, twdAmount: 660, payMethod: '信用卡' },
  { id: 3, category: '購物', merchant: 'MUJI 無印良品', date: '2025/01/11 16:45', localAmount: 4580, twdAmount: 1008, payMethod: '信用卡' },
  { id: 4, category: '住宿', merchant: '東京新宿飯店', date: '2025/01/10 15:00', localAmount: 15000, twdAmount: 3300, payMethod: '信用卡' },
  { id: 5, category: '餐飲', merchant: '7-11 便利商店', date: '2025/01/12 08:00', localAmount: 650, twdAmount: 143, payMethod: '現金' },
];

const splitMembers = [
  { id: 1, name: '我', avatar: '🙋', paid: 28500, shouldPay: 18125, balance: 10375 },
  { id: 2, name: '小美', avatar: '👩', paid: 15000, shouldPay: 18125, balance: -3125 },
  { id: 3, name: '阿明', avatar: '👨', paid: 12000, shouldPay: 18125, balance: -6125 },
  { id: 4, name: '小華', avatar: '👧', paid: 17000, shouldPay: 18125, balance: -1125 },
];

export default function TravelExpenseApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [currencyDisplay, setCurrencyDisplay] = useState('local'); // 'local' or 'twd'
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [isRateLocked, setIsRateLocked] = useState(false);
  const [fxFromAmount, setFxFromAmount] = useState('1000');
  const [addExpenseData, setAddExpenseData] = useState({
    amount: '',
    currency: 'JPY',
    category: '餐飲',
    merchant: '',
    date: '2025-01-12',
    time: '12:00',
    payMethod: '現金',
    enableSplit: false,
    splitGroup: '東京旅行團'
  });

  const exchangeRate = 0.22;
  const todayLocalTotal = 4940;
  const todayTwdTotal = 1087;
  const tripLocalTotal = 24520;
  const tripTwdTotal = 5394;

  // Category data for chart
  const categoryData = [
    { name: '餐飲', value: 35, color: '#FF8A65' },
    { name: '交通', value: 20, color: '#4FC3F7' },
    { name: '購物', value: 25, color: '#BA68C8' },
    { name: '住宿', value: 20, color: '#81C784' },
  ];

  const formatAmount = (local, twd, showSymbol = true) => {
    if (currencyDisplay === 'local') {
      return showSymbol ? `¥${local.toLocaleString()}` : local.toLocaleString();
    }
    return showSymbol ? `NT$${twd.toLocaleString()}` : twd.toLocaleString();
  };

  const formatSecondary = (local, twd) => {
    if (currencyDisplay === 'local') {
      return `≈ NT$${twd.toLocaleString()}`;
    }
    return `≈ ¥${local.toLocaleString()}`;
  };

  // Navigation Component
  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-2 flex justify-around items-center z-50" style={{ boxShadow: '0 -4px 20px rgba(0,0,0,0.05)' }}>
      {[
        { id: 'home', label: '總覽', icon: Icons.Home },
        { id: 'expenses', label: '記帳', icon: Icons.Wallet },
        { id: 'fx', label: '換匯', icon: Icons.Exchange },
        { id: 'split', label: '分帳', icon: Icons.Users },
      ].map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex flex-col items-center py-1 px-4 transition-all duration-200"
          >
            <div className={`p-2 rounded-xl transition-all duration-200 ${isActive ? 'bg-green-50' : ''}`}>
              <div className={`transition-colors duration-200 ${isActive ? 'text-green-600' : 'text-gray-400'}`}>
                <Icon />
              </div>
            </div>
            <span className={`text-xs mt-1 font-medium transition-colors duration-200 ${isActive ? 'text-green-600' : 'text-gray-400'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );

  // Currency Toggle Component
  const CurrencyToggle = ({ size = 'normal' }) => (
    <button
      onClick={() => setCurrencyDisplay(currencyDisplay === 'local' ? 'twd' : 'local')}
      className={`flex items-center gap-1 rounded-full transition-all duration-200 ${
        size === 'small' 
          ? 'px-2 py-1 text-xs' 
          : 'px-3 py-1.5 text-sm'
      }`}
      style={{ 
        backgroundColor: currencyDisplay === 'local' ? '#E8F5E9' : '#FFF8E1',
        color: currencyDisplay === 'local' ? '#2E7D32' : '#F57C00'
      }}
    >
      <span className="font-medium">{currencyDisplay === 'local' ? 'JPY' : 'TWD'}</span>
      <Icons.Exchange />
    </button>
  );

  // Home Screen
  const HomeScreen = () => (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white px-5 pt-12 pb-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
              <span className="font-semibold">東京 5 天</span>
              <Icons.ChevronDown />
            </button>
            <p className="text-green-100 text-sm mt-2 ml-1">2025/01/10 - 01/14</p>
          </div>
          <CurrencyToggle />
        </div>

        {/* Today's Spending Card */}
        <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 mb-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-green-100 text-sm mb-1">今日花費</p>
              <p className="text-3xl font-bold">{formatAmount(todayLocalTotal, todayTwdTotal)}</p>
              <p className="text-green-200 text-sm mt-1">{formatSecondary(todayLocalTotal, todayTwdTotal)}</p>
            </div>
            <div className="bg-white/20 rounded-xl p-3">
              <Icons.Calendar />
            </div>
          </div>
        </div>
      </div>

      {/* Trip Total Card */}
      <div className="px-5 -mt-4">
        <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-50">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-500 text-sm mb-1">旅程總花費</p>
              <p className="text-3xl font-bold text-gray-800">{formatAmount(tripLocalTotal, tripTwdTotal)}</p>
              <p className="text-gray-400 text-sm mt-1">{formatSecondary(tripLocalTotal, tripTwdTotal)}</p>
            </div>
            <div className="bg-green-50 rounded-xl p-3">
              <div className="text-green-600"><Icons.Wallet /></div>
            </div>
          </div>

          {/* Rate Info */}
          <div className="bg-amber-50 rounded-xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icons.Exchange />
              <span className="text-gray-600 text-sm">1 JPY = 0.22 TWD</span>
            </div>
            <span className="text-gray-400 text-xs">今日 09:00 更新</span>
          </div>
        </div>
      </div>

      {/* Category Chart */}
      <div className="px-5 mt-5">
        <h3 className="text-gray-700 font-semibold mb-3">支出分類</h3>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-50">
          <div className="flex items-center gap-6">
            {/* Simple Pie Chart Representation */}
            <div className="relative w-24 h-24 flex-shrink-0">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#FF8A65" strokeWidth="3" strokeDasharray="35 100" strokeDashoffset="0"/>
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#4FC3F7" strokeWidth="3" strokeDasharray="20 100" strokeDashoffset="-35"/>
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#BA68C8" strokeWidth="3" strokeDasharray="25 100" strokeDashoffset="-55"/>
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#81C784" strokeWidth="3" strokeDasharray="20 100" strokeDashoffset="-80"/>
              </svg>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-2">
              {categoryData.map((cat) => (
                <div key={cat.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
                  <span className="text-sm text-gray-600">{cat.name}</span>
                  <span className="text-sm text-gray-400 ml-auto">{cat.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="px-5 mt-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-gray-700 font-semibold">最近交易</h3>
          <button className="text-green-600 text-sm font-medium">查看全部</button>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
          {sampleExpenses.slice(0, 5).map((expense, idx) => {
            const CategoryIcon = getCategoryIcon(expense.category);
            return (
              <div 
                key={expense.id} 
                className={`flex items-center p-4 ${idx !== 4 ? 'border-b border-gray-50' : ''}`}
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center mr-3"
                  style={{ backgroundColor: `${getCategoryColor(expense.category)}20` }}
                >
                  <div style={{ color: getCategoryColor(expense.category) }}><CategoryIcon /></div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium">{expense.merchant}</p>
                  <p className="text-gray-400 text-xs">{expense.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-800 font-semibold">
                    {formatAmount(expense.localAmount, expense.twdAmount)}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {formatSecondary(expense.localAmount, expense.twdAmount)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAB */}
      <button 
        onClick={() => setShowAddExpense(true)}
        className="fixed bottom-24 right-5 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200 z-40 hover:bg-green-600 transition-colors"
      >
        <div className="text-white"><Icons.Plus /></div>
      </button>
    </div>
  );

  // Expenses Screen
  const ExpensesScreen = () => (
    <div className="pb-24 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-800">記帳紀錄</h1>
          <CurrencyToggle size="small" />
        </div>
        
        {/* Search */}
        <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 gap-3">
          <div className="text-gray-400"><Icons.Search /></div>
          <input 
            type="text" 
            placeholder="搜尋商家或備註..."
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 -mx-5 px-5">
          {['全部', '餐飲', '交通', '購物', '住宿', '其他'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat 
                  ? 'bg-green-500 text-white' 
                  : 'bg-white text-gray-600 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Expense List */}
      <div className="px-5 py-4">
        {sampleExpenses
          .filter(e => selectedCategory === '全部' || e.category === selectedCategory)
          .map((expense) => {
            const CategoryIcon = getCategoryIcon(expense.category);
            return (
              <div 
                key={expense.id} 
                className="bg-white rounded-xl p-4 mb-3 shadow-sm border border-gray-50 flex items-center"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                  style={{ backgroundColor: `${getCategoryColor(expense.category)}20` }}
                >
                  <div style={{ color: getCategoryColor(expense.category) }}><CategoryIcon /></div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-semibold">{expense.merchant}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-gray-400 text-xs">{expense.date}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      {expense.payMethod === '現金' ? <Icons.Cash /> : <Icons.CreditCard />}
                      {expense.payMethod}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-800 font-bold text-lg">
                    {formatAmount(expense.localAmount, expense.twdAmount)}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {formatSecondary(expense.localAmount, expense.twdAmount)}
                  </p>
                </div>
              </div>
            );
          })}
      </div>

      {/* Bottom Summary */}
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-100 px-5 py-3 flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-xs">本日合計</p>
          <p className="text-gray-800 font-bold">{formatAmount(todayLocalTotal, todayTwdTotal)}</p>
        </div>
        <div className="h-8 w-px bg-gray-200"></div>
        <div className="text-right">
          <p className="text-gray-500 text-xs">旅程合計</p>
          <p className="text-green-600 font-bold">{formatAmount(tripLocalTotal, tripTwdTotal)}</p>
        </div>
      </div>

      {/* FAB */}
      <button 
        onClick={() => setShowAddExpense(true)}
        className="fixed bottom-36 right-5 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200 z-40 hover:bg-green-600 transition-colors"
      >
        <div className="text-white"><Icons.Plus /></div>
      </button>
    </div>
  );

  // Add Expense Modal
  const AddExpenseModal = () => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className="bg-white w-full rounded-t-3xl max-h-[90vh] overflow-y-auto animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 bg-white px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <button onClick={() => setShowAddExpense(false)} className="text-gray-500">
            <Icons.Close />
          </button>
          <h2 className="text-lg font-bold text-gray-800">新增記帳</h2>
          <div className="w-6"></div>
        </div>

        <div className="p-5 space-y-5">
          {/* Amount Input */}
          <div>
            <label className="text-gray-500 text-sm mb-2 block">金額</label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                placeholder="0"
                value={addExpenseData.amount}
                onChange={(e) => setAddExpenseData({...addExpenseData, amount: e.target.value})}
                className="flex-1 text-4xl font-bold text-gray-800 outline-none placeholder-gray-300"
              />
              <select 
                value={addExpenseData.currency}
                onChange={(e) => setAddExpenseData({...addExpenseData, currency: e.target.value})}
                className="bg-gray-100 rounded-xl px-4 py-3 text-gray-700 font-medium outline-none"
              >
                <option value="JPY">JPY</option>
                <option value="KRW">KRW</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>

          {/* Exchange Rate Info */}
          <div className="bg-amber-50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">即時匯率</span>
              <span className="text-gray-400 text-xs">09:00 更新</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">1 JPY = 0.22 TWD</span>
              <span className="text-amber-600 font-bold text-lg">
                ≈ NT${addExpenseData.amount ? Math.round(parseFloat(addExpenseData.amount) * 0.22).toLocaleString() : 0}
              </span>
            </div>
          </div>

          {/* Category Selection */}
          <div>
            <label className="text-gray-500 text-sm mb-3 block">分類</label>
            <div className="flex gap-2 flex-wrap">
              {['餐飲', '交通', '購物', '住宿', '其他'].map((cat) => {
                const CategoryIcon = getCategoryIcon(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => setAddExpenseData({...addExpenseData, category: cat})}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                      addExpenseData.category === cat
                        ? 'text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                    style={{
                      backgroundColor: addExpenseData.category === cat ? getCategoryColor(cat) : undefined
                    }}
                  >
                    <CategoryIcon />
                    <span className="font-medium">{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Merchant Input */}
          <div>
            <label className="text-gray-500 text-sm mb-2 block">商家/備註</label>
            <input
              type="text"
              placeholder="例如：一蘭拉麵"
              value={addExpenseData.merchant}
              onChange={(e) => setAddExpenseData({...addExpenseData, merchant: e.target.value})}
              className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Date Time */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-gray-500 text-sm mb-2 block">日期</label>
              <input
                type="date"
                value={addExpenseData.date}
                onChange={(e) => setAddExpenseData({...addExpenseData, date: e.target.value})}
                className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none text-gray-700"
              />
            </div>
            <div className="flex-1">
              <label className="text-gray-500 text-sm mb-2 block">時間</label>
              <input
                type="time"
                value={addExpenseData.time}
                onChange={(e) => setAddExpenseData({...addExpenseData, time: e.target.value})}
                className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <label className="text-gray-500 text-sm mb-3 block">付款方式</label>
            <div className="flex gap-2">
              {['現金', '信用卡', '電子支付'].map((method) => (
                <button
                  key={method}
                  onClick={() => setAddExpenseData({...addExpenseData, payMethod: method})}
                  className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                    addExpenseData.payMethod === method
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          {/* Split Toggle */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-green-600"><Icons.Users /></div>
                <span className="text-gray-700 font-medium">加入分帳</span>
              </div>
              <button
                onClick={() => setAddExpenseData({...addExpenseData, enableSplit: !addExpenseData.enableSplit})}
                className={`w-12 h-7 rounded-full transition-all ${addExpenseData.enableSplit ? 'bg-green-500' : 'bg-gray-300'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${addExpenseData.enableSplit ? 'translate-x-6' : 'translate-x-1'}`}></div>
              </button>
            </div>

            {addExpenseData.enableSplit && (
              <div className="mt-4 space-y-3">
                <select className="w-full bg-white rounded-xl px-4 py-3 outline-none text-gray-700 border border-gray-200">
                  <option>東京旅行團</option>
                  <option>好友出遊</option>
                </select>
                <div className="flex gap-2">
                  {['平均分攤', '自訂金額', '自訂比例'].map((method, idx) => (
                    <button
                      key={method}
                      className={`flex-1 py-2 rounded-lg text-xs font-medium ${
                        idx === 0 ? 'bg-green-100 text-green-700' : 'bg-white text-gray-600 border border-gray-200'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 pb-8">
            <button 
              onClick={() => setShowAddExpense(false)}
              className="flex-1 py-4 rounded-xl bg-gray-100 text-gray-600 font-semibold"
            >
              取消
            </button>
            <button 
              onClick={() => setShowAddExpense(false)}
              className="flex-1 py-4 rounded-xl bg-green-500 text-white font-semibold shadow-lg shadow-green-200"
            >
              儲存
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // FX Screen
  const FXScreen = () => {
    const calculatedTWD = parseFloat(fxFromAmount || 0) * exchangeRate;
    
    return (
      <div className="pb-24 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white px-5 pt-12 pb-6 rounded-b-3xl">
          <h1 className="text-xl font-bold mb-1">換匯計算</h1>
          <p className="text-green-100 text-sm">即時匯率換算工具</p>
        </div>

        <div className="px-5 -mt-4 space-y-4">
          {/* Rate Card */}
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-lg">🇯🇵</div>
                <div>
                  <p className="text-gray-800 font-semibold">JPY → TWD</p>
                  <p className="text-gray-400 text-xs">日圓 → 新台幣</p>
                </div>
              </div>
              <button className="flex items-center gap-1 text-green-600 text-sm font-medium">
                <Icons.Refresh />
                切換
              </button>
            </div>

            <div className="bg-amber-50 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-amber-800 text-2xl font-bold">1 JPY = 0.22 TWD</p>
                  <p className="text-amber-600 text-xs mt-1">更新時間：2025/01/12 09:00</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setIsRateLocked(!isRateLocked)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all ${
                  isRateLocked 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {isRateLocked ? <Icons.Lock /> : <Icons.Unlock />}
                {isRateLocked ? '已鎖定匯率' : '鎖定匯率'}
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-green-100 text-green-700 font-medium">
                <Icons.Refresh />
                更新匯率
              </button>
            </div>
          </div>

          {/* Calculator */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-50">
            <h3 className="text-gray-700 font-semibold mb-4">快速換算</h3>
            
            {/* From Amount */}
            <div className="bg-gray-50 rounded-xl p-4 mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500 text-sm">輸入金額</span>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-md flex items-center justify-center text-xs">🇯🇵</span>
                  <span className="text-gray-700 font-medium">JPY</span>
                </div>
              </div>
              <input
                type="number"
                value={fxFromAmount}
                onChange={(e) => setFxFromAmount(e.target.value)}
                className="w-full text-3xl font-bold text-gray-800 bg-transparent outline-none"
                placeholder="0"
              />
            </div>

            {/* Arrow */}
            <div className="flex justify-center py-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <polyline points="19,12 12,19 5,12"/>
                </svg>
              </div>
            </div>

            {/* To Amount */}
            <div className="bg-amber-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-amber-700 text-sm">換算結果</span>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-md flex items-center justify-center text-xs">🇹🇼</span>
                  <span className="text-amber-800 font-medium">TWD</span>
                </div>
              </div>
              <p className="text-3xl font-bold text-amber-800">
                NT$ {calculatedTWD.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </p>
            </div>

            {/* Quick Amounts */}
            <div className="mt-4">
              <p className="text-gray-500 text-sm mb-2">常用金額</p>
              <div className="flex gap-2 flex-wrap">
                {['100', '500', '1000', '5000', '10000'].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setFxFromAmount(amount)}
                    className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    ¥{parseInt(amount).toLocaleString()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Split Screen
  const SplitScreen = () => (
    <div className="pb-24 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl font-bold text-gray-800">分帳結算</h1>
          <button className="flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-2">
            <span className="text-gray-700 font-medium text-sm">東京旅行團</span>
            <Icons.ChevronDown />
          </button>
        </div>
        <p className="text-gray-500 text-sm">4 位成員 • 共 12 筆分帳</p>
      </div>

      <div className="px-5 py-4 space-y-4">
        {/* Total Summary */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-50">
          <div className="text-center mb-4">
            <p className="text-gray-500 text-sm mb-1">總花費</p>
            <p className="text-3xl font-bold text-gray-800">¥72,500</p>
            <p className="text-gray-400 text-sm">≈ NT$15,950</p>
          </div>
          <div className="bg-amber-50 rounded-xl p-3 text-center">
            <p className="text-amber-700 text-sm">每人平均</p>
            <p className="text-amber-800 font-bold text-lg">¥18,125 (NT$3,988)</p>
          </div>
        </div>

        {/* Members */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-50">
            <h3 className="text-gray-700 font-semibold">成員餘額</h3>
          </div>
          {splitMembers.map((member, idx) => (
            <div 
              key={member.id}
              className={`flex items-center p-4 ${idx !== splitMembers.length - 1 ? 'border-b border-gray-50' : ''}`}
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl mr-3">
                {member.avatar}
              </div>
              <div className="flex-1">
                <p className="text-gray-800 font-medium">{member.name}</p>
                <p className="text-gray-400 text-xs">已付 ¥{member.paid.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className={`font-bold ${member.balance >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {member.balance >= 0 ? '+' : ''}¥{member.balance.toLocaleString()}
                </p>
                <p className="text-gray-400 text-xs">
                  {member.balance >= 0 ? '應收' : '應付'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Settlement Suggestions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-50">
            <h3 className="text-gray-700 font-semibold">結算建議</h3>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between bg-amber-50 rounded-xl p-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">👨</span>
                <span className="text-gray-700">阿明</span>
                <Icons.ArrowRight />
                <span className="text-xl">🙋</span>
                <span className="text-gray-700">我</span>
              </div>
              <span className="font-bold text-amber-800">¥6,125</span>
            </div>
            <div className="flex items-center justify-between bg-amber-50 rounded-xl p-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">👩</span>
                <span className="text-gray-700">小美</span>
                <Icons.ArrowRight />
                <span className="text-xl">🙋</span>
                <span className="text-gray-700">我</span>
              </div>
              <span className="font-bold text-amber-800">¥3,125</span>
            </div>
            <div className="flex items-center justify-between bg-amber-50 rounded-xl p-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">👧</span>
                <span className="text-gray-700">小華</span>
                <Icons.ArrowRight />
                <span className="text-xl">🙋</span>
                <span className="text-gray-700">我</span>
              </div>
              <span className="font-bold text-amber-800">¥1,125</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-green-500 text-white font-semibold shadow-lg shadow-green-200">
            <Icons.Check />
            一鍵結算
          </button>
          <button className="px-6 py-4 rounded-xl bg-white border border-gray-200 text-gray-700 font-semibold flex items-center gap-2">
            <Icons.Share />
            分享
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto relative overflow-hidden" style={{ fontFamily: "'Noto Sans TC', 'SF Pro Display', -apple-system, sans-serif" }}>
      {/* Status Bar Simulation */}
      <div className="fixed top-0 left-0 right-0 h-11 bg-transparent z-50 max-w-md mx-auto">
        <div className="flex justify-between items-center px-6 py-3">
          <span className="text-sm font-medium" style={{ color: activeTab === 'home' || activeTab === 'fx' ? 'white' : '#374151' }}>9:41</span>
          <div className="flex gap-1">
            <div className={`w-4 h-2 rounded-sm ${activeTab === 'home' || activeTab === 'fx' ? 'bg-white' : 'bg-gray-800'}`}></div>
            <div className={`w-4 h-2 rounded-sm ${activeTab === 'home' || activeTab === 'fx' ? 'bg-white' : 'bg-gray-800'}`}></div>
            <div className={`w-6 h-3 rounded-sm border ${activeTab === 'home' || activeTab === 'fx' ? 'border-white' : 'border-gray-800'}`}>
              <div className={`w-4 h-2 rounded-sm m-0.5 ${activeTab === 'home' || activeTab === 'fx' ? 'bg-white' : 'bg-gray-800'}`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {activeTab === 'home' && <HomeScreen />}
      {activeTab === 'expenses' && <ExpensesScreen />}
      {activeTab === 'fx' && <FXScreen />}
      {activeTab === 'split' && <SplitScreen />}

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Add Expense Modal */}
      {showAddExpense && <AddExpenseModal />}

      {/* Animations */}
      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
