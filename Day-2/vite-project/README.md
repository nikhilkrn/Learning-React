# Restaurant Menu App

A React-based restaurant menu application that displays food items with interactive features.

## Features

- Displays a restaurant menu with food items
- Each food item displays:
  - Image
  - Name
  - Price
  - Description
  - Counter button with click functionality
- Responsive design with CSS styling
- State management using React hooks


## 📁 Project Structure
```text
vite-project/
├── src/
│   ├── components/
│   │   ├── FoodItem.jsx   # Individual food item component
│   │   └── Menu.jsx       # Menu component containing food items
│   ├── style/
│   │   ├── App.css        # Main app styling
│   │   └── Menu.css       # Menu and food item styling
│   ├── App.jsx            # Main application component
│   └── main.jsx          # Application entry point
```

## Getting Started

1. Clone the repository and navigate to the project
```bash
cd Day\ -\ 2/vite-project/
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts development server |
| `npm run build` | Creates production build |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Previews production build |

## Built With

- React 18.3
- Vite 6.0
- CSS Modules
- React Hooks (useState)

## Project Components

### Menu Component
- Manages the food menu data
- Renders list of FoodItem components
- Located in `components/Menu.jsx`

### FoodItem Component
- Displays individual food items
- Implements counter functionality with useState
- Located in `components/FoodItem.jsx`

## Learning Objectives

- React components and props
- State management with hooks
- CSS styling in React
- Component composition

## Learn More

- [React Documentation](https://reactjs.org/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

## Contributing

Feel free to submit issues and enhancement requests.

---
>Happy Coding :)