# FacilityOps AI - Modern React Dashboard

A modern, responsive React dashboard for Intelligent Facility Management System built with React, Vite, and JavaScript.

## Features

✨ **Modern Dark Blue Theme** - Professional dark blue color scheme with gradient accents
🏢 **Dashboard Analytics** - Real-time facility metrics including:
  - Total Buildings monitoring
  - Active Sensors status
  - Energy Consumption tracking
  - Active Alerts management

📱 **Responsive Design** - Fully responsive layout that works on desktop, tablet, and mobile
🗂️ **Component-Based Architecture** - Modular, reusable components
🔐 **Authentication** - Login page with session management
🧭 **Navigation** - React Router for seamless page transitions
🎨 **Interactive UI** - Smooth animations and hover effects
📊 **Dashboard Cards** - Color-coded metric cards with trend indicators

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx         # Navigation sidebar with collapsible menu
│   │   ├── Navbar.jsx          # Top navigation bar
│   │   └── DashboardCard.jsx   # Reusable dashboard metric card
│   ├── pages/
│   │   ├── Login.jsx           # Login page
│   │   └── Home.jsx            # Dashboard home page
│   ├── services/               # API services (for future backend integration)
│   ├── styles/
│   │   ├── App.css             # Global application styles
│   │   ├── Login.css           # Login page styles
│   │   ├── Sidebar.css         # Sidebar component styles
│   │   ├── Navbar.css          # Navbar component styles
│   │   ├── DashboardCard.css   # Dashboard card styles
│   │   └── Home.css            # Home page styles
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # React entry point
│   └── index.css               # Global CSS reset
├── public/                     # Static assets
├── index.html                  # HTML entry point
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## Color Theme

The dashboard uses a modern dark blue theme with the following color palette:

- **Primary**: `#0f172a` - Deep dark blue (background)
- **Secondary**: `#1e293b` - Slightly lighter blue
- **Accent**: `#3b82f6` - Bright blue (highlights)
- **Text**: `#f1f5f9` - Light gray (primary text)
- **Text Secondary**: `#cbd5e1` - Medium gray (secondary text)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5174`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Login

**Demo Credentials:**
- Email: Any email address
- Password: Any password

The login page accepts any email and password combination for demonstration purposes. Upon successful login, the session is stored in localStorage and you'll be redirected to the dashboard.

## Dashboard Components

### Sidebar
- Collapsible navigation menu
- Quick access to all major sections
- User profile information
- Toggle between expanded/collapsed states
- Active state highlighting for current page

### Navbar
- Search functionality
- Notification center with badge counter
- User dropdown menu
- System title and subtitle
- Real-time status indicators

### Dashboard Cards
The dashboard displays four main metric cards:

1. **🏢 Total Buildings**
   - Shows total number of managed buildings
   - 24/7 monitoring status
   - Trend indicator

2. **📡 Active Sensors**
   - Total active sensor count
   - System operational status
   - Performance trend

3. **⚡ Energy Consumption**
   - Current day energy usage in kWh
   - Daily tracking
   - Energy efficiency trend

4. **🚨 Active Alerts**
   - Critical, warning, and info alerts
   - Quick alert status overview
   - Trend indicator

### Additional Sections

**Charts Section:**
- Energy Consumption Trend - Displays historical energy data
- Sensor Status Distribution - Shows sensor status analytics

**Alerts Section:**
- Recent alerts with different severity levels (Critical, Warning, Info)
- Alert timestamps and location information
- Quick action buttons

## Responsive Breakpoints

- **Desktop**: Full layout (1400px+)
- **Tablet**: Adjusted grid layout (1024px - 1399px)
- **Mobile**: Single column layout (< 1024px)

## Future Enhancements

- Backend API integration
- Real-time data updates with WebSockets
- Advanced charting with Chart.js or D3.js
- User authentication with JWT
- Multiple user roles and permissions
- Export reports functionality
- Dark/Light theme toggle
- Internationalization (i18n)
- Mobile app with React Native

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Styling with gradients and animations
- **LocalStorage** - Session management

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is part of the FacilityOps AI system. All rights reserved.

## Support

For issues or questions, please contact the development team.

---

**Version:** 1.0.0  
**Last Updated:** July 2026
