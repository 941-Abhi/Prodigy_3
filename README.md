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
- npm or yarn


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

## Customization

### Adding Products
Edit `src/data/products.ts` to add new products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Product description',
  price: 19.99,
  image: 'image-url',
  category: 'Category',
  inStock: true,
  rating: 4.5,
  reviews: 123
}
```

### Styling
The project uses Tailwind CSS for styling. Customize colors and themes in `tailwind.config.js`.

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository. 
