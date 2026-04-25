# Hire My Idea - Wellness Insights App 🧘‍♀️✨

Welcome to the **Wellness Insights App**, a high-fidelity React Native application designed to provide a comprehensive and visually stunning overview of your health and lifestyle patterns. 

Built with precision and a focus on premium user experience, this app transforms complex health data into intuitive, actionable insights through beautiful data visualizations and a smooth, modern interface.

---

## 📸 Preview & Purpose

The goal of this project was to replicate a pixel-perfect Figma design while maintaining a modular, scalable codebase. Every chart, icon, and layout element has been handcrafted to ensure it feels "alive" and premium.

---

## 🚀 Core Features

### 1. **Stability Summary** 📈
A bird's-eye view of your overall wellness. It features a custom **SVG Area Chart** with smooth gradients and interactive tooltips that highlight trends like "Stability Improving."

### 2. **Cycle Trends** 📅
Visualize your monthly patterns with handcrafted **multi-colored bar charts**. Each bar is vertically segmented to show different data phases at a glance, complete with status icons.

### 3. **Body & Metabolic Trends** ⚖️
Track weight changes over time with a sleek **Line Chart**. It includes a pink gradient fill and interactive toggle switches to swap between **Monthly** and **Weekly** views.

### 4. **Body Signals (Symptom Tracking)** 🍩
A beautiful **Donut Chart** that breaks down symptoms (Mood, Bloating, Acne, Fatigue) into clear percentage segments with floating, shadowed labels for maximum legibility.

### 5. **Lifestyle Impact** ⚡
A correlation grid that helps you understand how factors like **Sleep**, **Hydration**, and **Exercise** impact your day. It uses varying opacities to indicate the strength of correlation.

### 6. **Premium Navigation** 🛠️
A custom-built, curved bottom navigation bar with a floating action button (FAB). It includes placeholder states for features currently in development.

---

## 🛠️ Tech Stack

- **Framework:** [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **Visuals:** [React Native SVG](https://github.com/software-mansion/react-native-svg) (for high-performance custom charts)
- **Icons:** [Lucide React Native](https://lucide.dev/)
- **Animations:** [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- **Styling:** Custom StyleSheet architecture with a centralized Design System (`theme.js`)

---

## 🏗️ Architecture & Clean Code

- **Modular Components:** Each section of the dashboard is its own encapsulated component in `src/components/`, making the code easy to maintain and test.
- **Design System:** All colors, spacing, and shadows are managed through a single source of truth in `src/theme.js`.
- **Performance Optimized:** Charts are built using lightweight SVG paths rather than heavy third-party libraries, ensuring 60 FPS performance on both iOS and Android.

---

## 🚀 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Adarsh-code169/Hire_my_idea.git
   cd Hire_my_idea
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npx expo start
   ```

4. **Preview the app:**
   - Press **`i`** to open the iOS simulator.
   - Press **`a`** for the Android emulator.
   - Scan the QR code with the **Expo Go** app on your physical phone.

> [!TIP]
> If you encounter a Metro SHA-1 error after a fresh clone, run `npx expo start -c` to clear the cache.

---

## 🤝 Contributing

This project was developed as a high-fidelity technical assessment. Feel free to explore the code, open issues, or submit PRs if you have ideas for new insight components!

---

*Handcrafted with ❤️ by Adarsh*
