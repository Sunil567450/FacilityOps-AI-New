# FacilityOps AI - Implementation Guide

## Architecture Overview

This document provides a comprehensive guide to the FacilityOps AI dashboard architecture and implementation details.

## Directory Structure Explained

### `/src/components/` - Reusable UI Components

#### 1. **Sidebar.jsx**
- **Purpose**: Main navigation component with collapsible menu
- **Features**:
  - Menu items with icons and labels
  - Collapsible/expandable functionality
  - Active state highlighting
  - User profile section
- **Props**: None (uses React Router's useLocation hook)
- **State**: `isOpen` - Controls sidebar expansion

#### 2. **Navbar.jsx**
- **Purpose**: Top navigation bar with search and user info
- **Features**:
  - Search input field
  - Notification badge
  - Quick action buttons
  - User dropdown menu
- **Props**: None (static presentation)

#### 3. **DashboardCard.jsx**
- **Purpose**: Reusable metric card component
- **Props**:
  - `icon`: Emoji icon to display
  - `title`: Card title (e.g., "Total Buildings")
  - `value`: Main metric value
  - `subtitle`: Additional info
  - `trend`: Percentage trend (positive/negative)
  - `bgColor`: Color variant (card-blue, card-teal, card-purple, card-red)
- **Features**:
  - Color-coded variants
  - Trend indicators (↑ for positive, ↓ for negative)
  - Hover effects
  - Interactive "View Details" button

### `/src/pages/` - Page Components

#### 1. **Login.jsx**
- **Route**: `/` and `/login`
- **Features**:
  - Email and password input fields
  - Remember me checkbox
  - Forgot password link
  - Beautiful gradient background
  - Feature highlights section
- **Authentication**: 
  - Accepts any email/password combination (demo mode)
  - Stores user email in localStorage
  - Redirects to dashboard on success
- **Responsive**: Desktop and mobile layouts

#### 2. **Home.jsx**
- **Route**: `/dashboard`
- **Protected Route**: Requires login
- **Features**:
  - Welcome header with user greeting
  - Dashboard cards grid (4 cards)
  - Charts section with placeholders
  - Recent alerts section with severity levels
  - Action buttons for report generation
- **Data**: Mock data showing:
  - 48 Total Buildings
  - 1,247 Active Sensors
  - 2,458 kWh Energy Consumption
  - 7 Active Alerts

### `/src/styles/` - CSS Modules

#### 1. **App.css** (Global Styles)
- Root CSS variables for the theme
- Global element styles
- App layout structure
- Responsive breakpoints
- Custom scrollbar styling

#### 2. **Login.css**
- Login page layout with grid (two columns)
- Gradient backgrounds and effects
- Form styling
- Input field focus states
- Button animations
- Responsive mobile layout

#### 3. **Sidebar.css**
- Sidebar layout and transitions
- Navigation item styles
- Active state styling
- Collapsible animations
- User profile section
- Responsive mobile positioning

#### 4. **Navbar.css**
- Navbar flex layout
- Search input styling
- Button groups and badges
- User dropdown menu
- Responsive text hiding
- Notification badge positioning

#### 5. **DashboardCard.css**
- Card grid layout
- Color variants with CSS custom properties
- Gradient text for values
- Hover animations and shadow effects
- Trend indicator styling
- Responsive card sizing

#### 6. **Home.css**
- Page container and padding
- Dashboard grid (4 columns on desktop, 1 on mobile)
- Chart container styling
- Alert list and items
- Severity level color coding
- Button styling for primary and secondary actions
- Comprehensive responsive breakpoints

### `/src/App.jsx` - Main Application Component

**Routing Configuration:**
```
/                -> Login page
/login          -> Login page
/dashboard      -> Home dashboard (protected)
/*              -> Redirect to dashboard if logged in, else /login
```

**Key Features:**
- BrowserRouter setup with React Router v6
- Protected route implementation
- localStorage-based authentication
- Automatic redirects based on auth state

## Color Theme System

### Root Colors (from App.css)
```css
--color-primary: #0f172a       /* Main background */
--color-secondary: #1e293b     /* Secondary background */
--color-tertiary: #334155      /* Tertiary background */
--color-accent: #3b82f6        /* Blue accent */
--color-accent-light: #60a5fa  /* Light blue */
--color-text: #f1f5f9          /* Primary text */
--color-text-secondary: #cbd5e1 /* Secondary text */
--color-border: #475569        /* Borders */
--color-success: #10b981       /* Success green */
--color-warning: #f59e0b       /* Warning amber */
--color-danger: #ef4444        /* Danger red */
```

### Card Color Variants
- **Card Blue**: Primary metric cards
- **Card Teal**: Sensor and tech metrics
- **Card Purple**: Energy and consumption metrics
- **Card Red**: Alert and warning metrics

## Responsive Design Strategy

### Breakpoints
1. **Desktop** (1400px+): Full 4-column grid
2. **Laptop** (1024px-1399px): 2x2 grid
3. **Tablet** (768px-1023px): Adjusted layouts
4. **Mobile** (480px-767px): Single column
5. **Small Mobile** (<480px): Compact layouts

### Mobile Optimizations
- Sidebar becomes collapsible overlay on mobile
- Navbar search bar removed on small screens
- Cards stack vertically
- Buttons take full width on mobile
- Font sizes reduce appropriately

## State Management

### Authentication State
- **Storage**: localStorage
- **Key**: `userEmail`
- **Set on**: Login form submission
- **Cleared on**: User logout (not yet implemented)

### Component State
- **Sidebar**: `isOpen` boolean for expansion
- **Login Form**: `email`, `password`, `rememberMe` state

## Interactions and Animations

### Transitions
- Sidebar collapse/expand: 0.3s ease
- Hover effects: translateY(-2px), box-shadow increase
- Button hover: Background color change with shadow
- Link hover: Color transition

### Visual Effects
- Gradient backgrounds on cards and buttons
- Backdrop blur on login card
- Radial gradient overlays
- Box shadows for depth
- Border color transitions on focus

## Integration Points (Ready for Backend)

The dashboard is structured to easily connect to backend APIs:

1. **Authentication Service**: `/src/services/` folder ready for API calls
2. **Dashboard Data**: Mock data in `Home.jsx` can be replaced with API calls
3. **Real-time Updates**: Structure supports WebSocket integration
4. **Search Functionality**: Navbar search is ready for backend queries

## How to Extend

### Adding a New Page
1. Create component in `/src/pages/`
2. Add route in `App.jsx`
3. Add menu item in `Sidebar.jsx`

### Adding Dashboard Metrics
1. Update data array in `Home.jsx`
2. Create new `DashboardCard` instance
3. Update corresponding CSS if needed

### Customizing Colors
1. Modify CSS variables in `/src/styles/App.css`
2. Update color variants in component CSS files
3. Test across all components

### Adding New Components
1. Create component in `/src/components/`
2. Create corresponding CSS in `/src/styles/`
3. Import and use in pages

## Performance Considerations

- Sidebar uses state minimal approach
- CSS animations use GPU acceleration (transform, opacity)
- Components are lightweight and reusable
- No external chart libraries (ready for integration)
- Scrollbar styling optimized

## Accessibility Features

- Semantic HTML structure
- Proper form labels
- Keyboard navigation support via React Router
- Color contrast meets WCAG guidelines
- Focus states on interactive elements

## Browser Compatibility

- Chrome/Chromium: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- IE11: ⚠️ Requires polyfills

## Common Tasks

### To Change the Theme Color
1. Open `/src/styles/App.css`
2. Modify `--color-accent: #3b82f6` to desired color
3. All components automatically update

### To Add a New Menu Item
1. Edit `Sidebar.jsx` - add to `menuItems` array
2. Create corresponding page component
3. Add route to `App.jsx`

### To Modify Dashboard Cards
1. Edit `Home.jsx` - update `dashboardData` array
2. Modify card properties or add new cards
3. Changes reflect immediately

## Troubleshooting

### Sidebar not collapsing?
- Check `isOpen` state in Sidebar.jsx
- Verify CSS transitions are not disabled

### Routes not working?
- Ensure React Router is properly initialized in App.jsx
- Check localStorage for auth state

### Styles not applying?
- Verify CSS file paths in imports
- Check for CSS specificity conflicts
- Use browser DevTools to inspect

---

For more information, see PROJECT_OVERVIEW.md
