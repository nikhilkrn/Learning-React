# Introduction to React with Vite

A basic React project demonstrating component creation using Vite as the build tool.

## 📁 Project Structure

```text
// filepath: /Day-1/vite-project/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── public/
├── README.md
├── src/
│   ├── App.jsx
│   ├── Circle.jsx
│   ├── main.jsx
│   ├── Square.jsx
└── vite.config.js
```

### 🧩 Components

#### Circle Component

The `Circle` component is a simple React component that renders a yellow circle.

```jsx
import React from "react";

class Circle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "yellow",
        }}
      ></div>
    );
  }
}

export default Circle;
```

#### Square

The `Square` component is located in `src/Square.jsx` and renders a square. (Add more details about the Square component here.)

#### 🚀Getting Started

To get started with this project, follow these steps:

## Initial Setup

1. Clone the repository
```bash
git clone https://github.com/nikhilkrn/Learning-React.git
cd vite-project
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

### 📑 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev`     | Starts development server |
| `npm run build`   | Creates production build |
| `npm run lint`    | Runs ESLint |

### 🔗Learn More 

- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)


>Happy Coding :)