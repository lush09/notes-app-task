# 📝 Notes App - React Native Technical Exam

A modern, feature-rich notes application built with React Native, Expo, Redux Toolkit, and Redux Persist. This project demonstrates authentication, state management, and clean UI/UX practices.

## 🚀 Features

### Authentication

- **Static Login**: Username `test`, Password `password123`
- **Form Validation**: Real-time validation with error messages
- **Session Persistence**: Login state persists across app restarts
- **Auto-redirect**: Logged-in users are automatically redirected to home

### Notes Management

- **CRUD Operations**: Create, Read, Update, Delete notes
- **Real-time Search**: Filter notes by title or description
- **Responsive UI**: Clean, modern interface with smooth animations
- **Empty States**: Helpful messages when no notes exist
- **Pull-to-Refresh**: Refresh notes list with pull gesture

### User Experience

- **Modern Design**: Clean, intuitive interface
- **Form Validation**: Real-time input validation
- **Loading States**: Visual feedback during operations
- **Error Handling**: User-friendly error messages
- **Responsive Layout**: Works on different screen sizes

## 🛠 Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router (file-based routing)
- **State Management**: Redux Toolkit
- **Persistence**: Redux Persist + AsyncStorage
- **UI Components**: Custom reusable components
- **Icons**: Expo Vector Icons
- **TypeScript**: Full type safety

## 📁 Project Structure

```
notes-app-task/
├── app/                          # Expo Router screens
│   ├── _layout.tsx              # Root layout with Redux Provider
│   ├── (auth)/                  # Authentication screens
│   │   ├── _layout.tsx          # Auth stack layout
│   │   └── login.tsx            # Login screen
│   └── (app)/                   # Main app screens
│       ├── _layout.tsx          # App stack layout
│       ├── home.tsx             # Home dashboard
│       └── note/                # Note management screens
│           ├── new.tsx          # Create new note
│           └── [id].tsx         # Edit existing note
├── components/                   # Reusable components
│   ├── ui/                      # Base UI components
│   │   ├── Button.tsx           # Custom button component
│   │   └── Input.tsx            # Custom input component
│   └── notes/                   # Notes-specific components
│       ├── NoteCard.tsx         # Individual note display
│       ├── NoteList.tsx         # Notes list with FlatList
│       ├── SearchBar.tsx        # Search functionality
│       └── EmptyState.tsx       # Empty state component
├── store/                       # Redux store configuration
│   ├── index.ts                 # Store setup with persistence
│   ├── persistConfig.ts         # Persistence configuration
│   └── slices/                  # Redux slices
│       ├── authSlice.ts         # Authentication state
│       └── notesSlice.ts        # Notes CRUD operations
├── types/                       # TypeScript type definitions
│   ├── auth.ts                  # Authentication types
│   └── notes.ts                 # Notes types
├── utils/                       # Utility functions
│   ├── validation.ts            # Form validation helpers
│   └── helpers.ts               # General utility functions
└── constants/                   # App constants
    ├── Colors.ts                # Color definitions
    └── config.ts                # App configuration
```

## 🏗 Architecture Overview

### State Management

- **Redux Toolkit**: Modern Redux with simplified boilerplate
- **Redux Persist**: Automatic state persistence
- **Slices**: Modular state management (auth, notes)

### Navigation

- **Expo Router**: File-based routing system
- **Stack Navigation**: Hierarchical navigation structure
- **Authentication Flow**: Protected routes with auto-redirect

### Component Architecture

- **Reusable UI Components**: Button, Input, Modal
- **Feature Components**: Notes-specific components
- **Screen Components**: Full-page components

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd notes-app-task
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Run on device/simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app

### Demo Credentials

- **Username**: `test`
- **Password**: `password123`

## 📱 Usage Guide

### Authentication

1. Launch the app
2. Enter demo credentials (test/password123)
3. Tap "Sign In"
4. You'll be redirected to the home screen

### Managing Notes

1. **Create Note**: Tap the "+" button on home screen
2. **Edit Note**: Tap any note card or edit button
3. **Delete Note**: Use delete button in edit screen or note card
4. **Search Notes**: Use the search bar to filter notes
5. **Logout**: Tap logout button in header

## 🔧 Key Implementation Details

### Redux Persist Configuration

```typescript
// Store setup with persistence
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  notes: persistReducer(notesPersistConfig, notesReducer),
});
```

### Authentication Flow

```typescript
// Auto-redirect based on auth state
useEffect(() => {
  if (isAuthenticated) {
    router.replace("/(app)/home");
  }
}, [isAuthenticated, router]);
```

### Search Implementation

```typescript
// Debounced search with Redux
useEffect(() => {
  const timeoutId = setTimeout(() => {
    dispatch(setSearchQuery(query));
  }, 300);
  return () => clearTimeout(timeoutId);
}, [query, dispatch]);
```

## 🎨 UI/UX Features

### Design System

- **Consistent Colors**: Defined color palette
- **Typography**: Consistent font sizes and weights
- **Spacing**: Standardized margins and padding
- **Shadows**: Subtle elevation effects

### User Feedback

- **Loading States**: Activity indicators during operations
- **Error Messages**: Clear validation feedback
- **Success Actions**: Smooth navigation after operations
- **Empty States**: Helpful messages when no data exists

## 🔒 Security Considerations

- **Input Validation**: Client-side validation for all forms
- **Error Handling**: Graceful error handling without exposing internals
- **Session Management**: Secure session persistence
- **Data Sanitization**: Input sanitization before storage

## 🧪 Testing Strategy

### Manual Testing Checklist

- [ ] Login with valid credentials
- [ ] Login with invalid credentials
- [ ] Create new note
- [ ] Edit existing note
- [ ] Delete note
- [ ] Search notes
- [ ] Logout functionality
- [ ] Session persistence
- [ ] Form validation
- [ ] Error handling

## 🚀 Future Enhancements

### Potential Improvements

- **Backend Integration**: Real API endpoints
- **User Registration**: Sign up functionality
- **Note Categories**: Organize notes by categories
- **Rich Text**: Markdown support for notes
- **Image Attachments**: Add images to notes
- **Offline Support**: Enhanced offline capabilities
- **Push Notifications**: Reminder notifications
- **Dark Mode**: Theme switching
- **Data Export**: Export notes to different formats

## 📄 License

This project is created for educational and demonstration purposes.

## 👨‍💻 Developer Notes

### Best Practices Implemented

- **TypeScript**: Full type safety throughout the app
- **Component Composition**: Reusable, modular components
- **State Management**: Centralized state with Redux
- **Error Boundaries**: Graceful error handling
- **Performance**: Optimized re-renders and list performance
- **Accessibility**: Proper accessibility labels and navigation

### Code Quality

- **ESLint**: Code linting and formatting
- **TypeScript**: Static type checking
- **Modular Architecture**: Clean separation of concerns
- **Documentation**: Comprehensive code comments
- **Consistent Naming**: Clear, descriptive naming conventions

---

**Built with ❤️ using React Native and Expo**
