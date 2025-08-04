# Notes App

This is my submission for the Jr. React Native Technical Examination at RBS Software Solutions. A simple mobile notes application built with React Native and Expo.

## 📱 Demo APK

Download the APK: [Notes App APK](https://drive.google.com/file/d/1fe9HtmW3ebCkMk8NU8CcNwr7v4WyvirW/view?usp=sharing)

## ✨ Features

### 🔐 Authentication

- **Secure Login System** with mock credentials
- **Persistent Sessions** - Stay logged in across app restarts
- **Form Validation** - Real-time validation for empty fields and invalid credentials
- **Demo Credentials:**
  - Username: `test`
  - Password: `password123`

### 📝 Note Management

- **Create Notes** - Add new notes with title and description
- **Edit Notes** - Modify existing notes with full editing capabilities
- **Delete Notes** - Remove notes with confirmation
- **Search & Filter** - Real-time search through note titles and descriptions
- **Empty State UI** - Beautiful empty state when no notes exist

### 🎨 User Experience

- **Clean, Modern UI** - Intuitive and user-friendly interface
- **Dark/Light Mode** - Automatic theme switching based on system preferences
- **Responsive Design** - Optimized for various screen sizes
- **Smooth Animations** - Fluid transitions and interactions
- **Floating Action Button** - Easy access to create new notes

### 💾 Data Persistence

- **Redux Persist** - Notes and authentication state survive app restarts
- **Offline Support** - All data stored locally on device
- **Session Management** - Automatic logout and data clearing

## 🛠️ Tech Stack

- **Framework:** React Native with Expo
- **Navigation:** Expo Router (file-based routing)
- **State Management:** Redux Toolkit + Redux Persist
- **Storage:** AsyncStorage for local data persistence
- **UI Components:** Custom themed components
- **Icons:** Expo Vector Icons (Ionicons)
- **Development:** TypeScript for type safety

## 📋 Requirements

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd notes-app-task
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

```bash
npx expo start
```

### 4. Run on Device/Simulator

#### Android

```bash
npm run android
# or
yarn android
```

#### iOS

```bash
npm run ios
# or
yarn ios
```

#### Web

```bash
npm run web
# or
yarn web
```

### 5. Build for Production

#### Android APK

```bash
eas build --platform android
```

#### iOS

```bash
eas build --platform ios
```

## 🏗️ Project Structure

```
notes-app-task/
├── app/                    # Expo Router app directory
│   ├── (auth)/            # Authentication screens
│   │   ├── login.tsx      # Login screen
│   │   └── _layout.tsx    # Auth layout
│   ├── (app)/             # Main app screens
│   │   ├── home.tsx       # Home dashboard
│   │   ├── note/          # Note management
│   │   │   ├── new.tsx    # Create note
│   │   │   └── [id].tsx   # Edit note
│   │   └── _layout.tsx    # App layout with auth protection
│   ├── index.tsx          # Root redirect
│   └── _layout.tsx        # Root layout with providers
├── components/            # Reusable components
│   ├── notes/            # Note-specific components
│   │   ├── NoteCard.tsx  # Individual note display
│   │   ├── NoteList.tsx  # Notes list container
│   │   ├── SearchBar.tsx # Search functionality
│   │   └── EmptyState.tsx # Empty state UI
│   ├── ui/               # UI components
│   │   ├── Button.tsx    # Custom button component
│   │   └── Input.tsx     # Input field with validation
│   ├── ThemedText.tsx    # Themed text component
│   └── ThemedView.tsx    # Themed view component
├── store/                # Redux store configuration
│   ├── index.ts          # Store setup
│   ├── persistConfig.ts  # Persistence configuration
│   └── slices/           # Redux slices
│       ├── authSlice.ts  # Authentication state
│       └── notesSlice.ts # Notes state management
├── types/                # TypeScript type definitions
├── constants/            # App constants and configuration
├── hooks/                # Custom React hooks
└── utils/                # Utility functions
```

## 🔧 Key Features Implementation

### Authentication Flow

- **Mock Login System** with predefined credentials
- **Form Validation** using custom validation utilities
- **Persistent Sessions** with Redux Persist
- **Automatic Redirects** based on authentication status

### Note Management

- **CRUD Operations** - Create, Read, Update, Delete notes
- **Real-time Search** - Instant filtering as you type
- **Optimistic Updates** - Immediate UI feedback
- **Data Persistence** - Notes survive app restarts

### State Management

- **Redux Toolkit** for predictable state management
- **Redux Persist** for data persistence
- **Selective Persistence** - Only important data is saved
- **Type Safety** - Full TypeScript integration

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- Icons from [Expo Vector Icons](https://expo.github.io/vector-icons/)
- State management with [Redux Toolkit](https://redux-toolkit.js.org/)
- Data persistence with [Redux Persist](https://github.com/rt2zz/redux-persist)
