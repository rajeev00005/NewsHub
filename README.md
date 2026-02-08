# React + Vite
<div align="center">
  <h1>📰 NewsHub</h1>
  <p><b>Modern React News Website (Vite + Bootstrap)</b></p>
  <img src="./preview.png" alt="NewsHub UI Preview" width="700" />
</div>

---

## 🚀 Overview

NewsHub is a modern, responsive news website built with React, Vite, and Bootstrap. It fetches the latest headlines and category-based news from the NewsAPI, providing a clean, accessible, and mobile-friendly user experience.

---

## ✨ Features

- 🔎 **Search** for news articles with debounced input
- 🗂️ **Category pages** (Business, Sports, Technology, etc.)
- 📱 **Responsive** and mobile-friendly layout
- 🦾 **Accessibility**: ARIA labels, skip links, keyboard navigation
- 📰 **Skeleton loaders** for smooth loading experience
- 📌 **Sticky navbar and sidebar** for easy navigation
- ⚡ **Fast**: Powered by Vite and optimized React code
- 🔒 **API key in .env** for security

---

## 📸 UI Preview

<img src="./preview.png" alt="NewsHub UI Screenshot" width="700" />

---

## 🛠️ Getting Started

1. **Clone the repository:**
	```bash
	git clone https://github.com/your-username/news-app.git
	cd news-app
	```
2. **Install dependencies:**
	```bash
	npm install
	```
3. **Add your NewsAPI key:**
	- Create a `.env` file in the root:
	  ```env
	  VITE_NEWS_API_KEY=your_api_key_here
	  ```
4. **Run the app locally:**
	```bash
	npm run dev
	```
5. **Open in browser:**
	- Visit [http://localhost:5173](http://localhost:5173)

---

## 📂 Project Structure

```
src/
  api/           # API logic (NewsAPI)
  components/    # Reusable UI components
  pages/         # Page components (Home, Category, Search, About, Contact)
  assets/        # Static assets
  App.jsx        # Main app component
  main.jsx       # Entry point
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
