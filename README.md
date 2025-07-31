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

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Start the development server
- `npm build` - Build the project for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (not recommended)

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

### Routing
Add new routes in `src/App.tsx`:

```typescript
<Route path="/new-page" element={<NewPage />} />
```

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository. 