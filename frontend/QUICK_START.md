# FacilityOps AI - Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Install Dependencies
```bash
cd frontend
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The server will start at `http://localhost:5173` (or next available port)

### Step 3: Access the Dashboard
1. Open your browser
2. Go to `http://localhost:5174`
3. You will see the login page

### Step 4: Login
**Demo Credentials:**
- **Email**: Any email (e.g., admin@facilityops.ai)
- **Password**: Any password (e.g., password123)

Just enter any email and password to access the dashboard.

---

## 📋 Dashboard Overview

Once logged in, you'll see the main dashboard with:

### Top Navigation (Navbar)
- Dashboard title and subtitle
- Search bar for facilities/sensors
- Notification bell with badge count
- User profile dropdown

### Left Sidebar
- Navigation menu with collapsible sections:
  - Dashboard 📊
  - Buildings 🏢
  - Sensors 📡
  - Energy Usage ⚡
  - Alerts 🚨
  - Reports 📈
  - Settings ⚙️
- User profile information at the bottom
- Toggle button to expand/collapse sidebar

### Main Content Area
Contains several sections:

#### 1. Welcome Header
- Personalized greeting
- Quick action buttons (Generate Report, Configure)

#### 2. Dashboard Cards (4 columns)
- **Total Buildings**: 48 buildings monitored
- **Active Sensors**: 1,247 active sensors
- **Energy Consumption**: 2,458 kWh today
- **Active Alerts**: 7 active alerts

Each card shows:
- Icon and title
- Main metric value
- Trend indicator (↑ or ↓ with percentage)
- "View Details" link

#### 3. Charts Section (2 columns)
- Energy Consumption Trend (last 7 days)
- Sensor Status Distribution (real-time)

#### 4. Recent Alerts
- Critical alerts (🔴)
- Warning alerts (🟡)
- Info alerts (🔵)

Each alert shows:
- Severity badge
- Alert title
- Timestamp and location
- Quick action options

---

## 🎨 Theme Overview

### Dark Blue Modern Design
- **Primary Background**: Deep dark blue (#0f172a)
- **Highlight Color**: Bright blue (#3b82f6)
- **Accent Colors**: Cyan, Purple, Red for different card types
- **Text**: Light gray for excellent contrast

### Visual Effects
- Smooth hover animations
- Gradient backgrounds
- Shadow effects for depth
- Color transitions

---

## 📱 Responsive Features

The dashboard works on:
- **Desktop** (1400px+): Full layout with all elements
- **Laptop** (1024px-1399px): 2x2 card grid
- **Tablet** (768px-1023px): Adjusted spacing
- **Mobile** (480px-768px): Single column layout

Try resizing your browser window to see responsive layout changes!

---

## 🔑 Key Features

### 1. Collapsible Sidebar
- Click the toggle button (☰ or ✕) to expand/collapse
- Menu items show labels when expanded
- Takes less space when collapsed

### 2. Search Functionality
- Type in the navbar search bar
- Ready to integrate with backend search API

### 3. Navigation
- Click any menu item to navigate (in demo, all link to placeholder routes)
- Current page is highlighted in the sidebar
- Browser back/forward buttons work

### 4. Responsive Design
- Automatically adjusts to screen size
- Mobile-friendly interface
- Touch-friendly buttons and interactive elements

---

## 🔧 File Structure for Reference

```
frontend/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx         ← Navigation menu
│   │   ├── Navbar.jsx          ← Top bar
│   │   └── DashboardCard.jsx   ← Metric cards
│   ├── pages/
│   │   ├── Login.jsx           ← Login page
│   │   └── Home.jsx            ← Dashboard page
│   ├── styles/
│   │   ├── App.css             ← Global styles + theme
│   │   ├── Login.css           ← Login page styling
│   │   ├── Sidebar.css         ← Sidebar styling
│   │   ├── Navbar.css          ← Navbar styling
│   │   ├── DashboardCard.css   ← Card styling
│   │   └── Home.css            ← Dashboard page styling
│   ├── App.jsx                 ← Main app with routing
│   └── main.jsx                ← React entry point
├── index.html                  ← HTML entry point
└── package.json                ← Dependencies
```

---

## 💡 Tips & Tricks

### Keyboard Shortcuts
- Tab through elements to navigate
- Enter to activate buttons
- Search bar automatically focused on page load

### Viewing in Different Screen Sizes
- **Chrome DevTools**: Press F12, click device toggle
- **Firefox DevTools**: Press F12, click responsive design mode
- Resize your browser window

### Inspection
- Right-click anywhere → "Inspect Element"
- View CSS in DevTools
- Check component structure in "Components" tab

---

## 🎯 Next Steps

After exploring the dashboard:

1. **Customize Colors**: Edit `/src/styles/App.css` (--color-accent variable)
2. **Add More Pages**: Create new `.jsx` files in `/src/pages/`
3. **Connect Backend**: Update API calls in `/src/services/`
4. **Add Real Data**: Replace mock data with API responses
5. **Deploy**: Run `npm run build` for production

---

## 📊 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 🐛 Troubleshooting

### "Port already in use"
```bash
# Vite will automatically try the next port
# Check the output to see which port it's using
```

### "Module not found" error
```bash
# Reinstall dependencies
npm install

# Delete node_modules and lock file, then reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styling looks wrong
```bash
# Clear browser cache
# Or use Ctrl+Shift+Delete in Chrome/Firefox
# Then refresh the page
```

### Login not working
- Any email and password combination works
- Check browser console (F12) for errors
- Open localStorage (DevTools → Application → Local Storage)

---

## 📞 Support

For issues or questions:
1. Check the browser console (F12)
2. Review the Implementation Guide
3. Check the Project Overview

---

## 🎉 You're All Set!

You now have a fully functional, modern React dashboard for FacilityOps AI!

Enjoy exploring the interface and feel free to customize it to your needs.

**Happy Building! 🚀**

---

**Last Updated**: July 2026  
**FacilityOps AI v1.0**
