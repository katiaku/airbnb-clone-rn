# 🏠 React Native AirBnB Clone with Clerk

Welcome to the **React Native AirBnB Clone**! This project uses the power of [Clerk](https://clerk.com/?utm_source=sponsorship&utm_medium=github&utm_campaign=simong&utm_content=rn-airbnb) for seamless user authentication and delivers an immersive mobile app experience inspired by AirBnB. 🛏️✨

Based on Simon Grimm's tutorial on [YouTube](https://www.youtube.com/watch?v=iWzUZiVoiR0&list=WL&index=21).

---

## 🚀 Features

### ✨ Core Features
- **User Authentication** powered by [Clerk](https://clerk.com/docs) with support for:
  - 🌐 [Google](https://clerk.com/docs/authentication/social-connections/google) login
  - 🍎 [Apple](https://clerk.com/docs/authentication/social-connections/apple) login
  - 👍 [Facebook](https://clerk.com/docs/authentication/social-connections/facebook) login
- **File-based navigation** with [Expo Router](https://docs.expo.dev/routing/introduction/)
- **Interactive maps** with:
  - 📍 [MapView](https://docs.expo.dev/versions/latest/sdk/map-view/)
  - 🔍 [Marker Clustering](https://github.com/venits/react-native-map-clustering)
- **Dynamic Animations** using [Reanimated 3](https://reanimated-beta-docs.swmansion.com/)
- **Customizable Bottom Sheets** via [@gorhom/bottom-sheet](https://gorhom.github.io/react-native-bottom-sheet/)

---

## 🛠️ Getting Started

Follow these steps to set up the project on your local machine:

### 1️⃣ Clone the repository
Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/katiaku/airbnb-clone-rn
cd rn-airbnb-clone
```

### 2️⃣ Install dependencies
Install the required dependencies with npm or yarn:

```bash
npm install
// or
yarn install
```
### 3️⃣ Set up Clerk
To use Clerk for authentication, follow these steps:

- Go to the Clerk Dashboard and create a new project.
- Copy the Frontend API Key from your Clerk project.
- Create a .env file in the root of the project and add the following:

```CLERK_FRONTEND_API_KEY=your_clerk_frontend_api_key```

### 4️⃣ Run the app
Start the development server using Expo:

```bash
npm start
```

Follow the instructions to open the app on an emulator, simulator, or physical device.
