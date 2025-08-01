# Local Store E-commerce Website

A modern, responsive e-commerce website built with React, TypeScript, and Tailwind CSS. This platform enables customers to browse and purchase products online with a beautiful, user-friendly interface.

## Features

- 🛍️ **Product Catalog**: Browse products with images, descriptions, and prices
- 🛒 **Shopping Cart**: Add, remove, and update quantities of items
- 🔍 **Search & Filter**: Find products by category and sort by various criteria
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast Performance**: Optimized for speed and user experience
- 🎨 **Modern UI**: Clean, professional design with smooth animations

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm 


## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx     # Navigation header
│   ├── ProductCard.tsx # Individual product display
│   ├── ProductGrid.tsx # Product grid with filters
│   └── CartItem.tsx   # Shopping cart item
├── context/           # React context providers
│   └── CartContext.tsx # Shopping cart state management
├── data/              # Static data and mock content
│   └── products.ts    # Product catalog data
├── pages/             # Page components
│   ├── Home.tsx       # Homepage
│   ├── Products.tsx   # Products listing
│   └── Cart.tsx       # Shopping cart
├── types/             # TypeScript type definitions
│   └── index.ts       # Shared types
├── App.tsx            # Main application component
├── index.tsx          # Application entry point
└── index.css          # Global styles and Tailwind imports
```

🚀 Getting Started
✅ Prerequisites
Install Node.js (version 16 or higher)

Make sure npm is installed (comes with Node)

📥 Installation Steps
Clone the Repository

git clone https://github.com/941-Abhi/Prodigy_3.git
Navigate to the Project Folder
cd Prodigy_3

Install Dependencies
npm install

Start the Development Server
npm run dev
✨ How to Use
Open your browser and go to http://localhost:5173

Browse products, add to cart, and enjoy the local store experience!

## Features in Detail

### Product Catalog
- Display products with high-quality images
- Product descriptions and pricing
- Star ratings and review counts
- Stock status indicators

### Shopping Cart
- Add products to cart with quantity controls
- Real-time cart total calculation
- Remove items or update quantities
- Persistent cart state across sessions

### Search & Filtering
- Filter products by category
- Sort by name, price, or rating
- Ascending/descending sort order
- Real-time search results

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Fast loading times

### Styling
The project uses Tailwind CSS for styling. Customize colors and themes in `tailwind.config.js`.

## License
This project is licensed under the MIT License.
