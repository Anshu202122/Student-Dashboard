# Interactive Student Dashboard

## Project Overview
A responsive, theme-switchable web dashboard built with React that visualizes and manages student data through dynamic charts and an interactive table interface. Designed with modern UI/UX principles and real-time user interaction in mind, this dashboard is ideal for performance analytics and educational tools.


## Key Features

* The Interactive Student Dashboard is a front-end application designed to:
* Visualize student marks using Bar, Pie, and Line charts (powered by Chart.js).
* Allow users to manage data with full CRUD support through a dynamic table interface.
* Enable real-time theme switching (light/dark mode).
* Provide an accessible, responsive, and user-friendly experience.


## Libraries And Tools Used

* **React:** Core UI framework
* **Chart.js:** Chart rendering library for data visualization
* **react-chartjs-2:** React wrapper for Chart.js
* **chartjs-plugin-datalabels:** Plugin for showing labels on chart elements
* **lucide-react:** Modern, lightweight SVG icon library
* **CSS Variables:** Theme management via light/dark modes
* **Responsive CSS & Flexbox:** Mobile-first, accessible layout design
    

## Setup and Installation

**Follow these simple steps to run the project locally**
* Clone the repository:
  - git clone https://github.com/Anshu202122/Student-Dashboard.git
* Navigate to the project directory:
  - cd dashboard-app
* Install dependencies:
  - npm install
* Run the development server:
  - npm run dev
* Open the application:
  - Go to the URL provided by Vite (usually http://localhost:5173)


## Features

* **Theme Switching (Light/Dark)**
  -* Toggle between light and dark mode with a single click.
* Theme is applied using CSS custom properties and a data-theme attribute.
* Charts update in real-time when the theme is toggled.
* Component: src/components/ThemeToggle.jsx

* **Chart Panel**
* Visualizes student data in Bar, Pie, and Line formats.
* Dynamically updates chart data and styling based on theme.
* Integrated with chartjs-plugin-datalabels for showing exact values.
* Component: src/components/ChartPanel.jsx
* Data: src/data/sampleData.json

* **Table Panel**
* Displays student data in a tabular layout.
* Features:
    - Add a new student record
    - Delete individual records
    - Select multiple rows for batch deletion
* Controlled form for real-time state update and validation.
* Component: src/components/TablePanel.jsx
