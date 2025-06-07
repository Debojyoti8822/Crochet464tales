
import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { ProductFilters } from '../components/ProductFilters';
import { ProductSearch } from '../components/ProductSearch';
import { ProductPagination } from '../components/ProductPagination';
import { Product } from '../components/FeaturedProducts';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Extended product catalog
  const allProducts: Product[] = [
    {
      id: '1',
      name: 'Adorable Teddy Bear',
      price: 25,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Toys',
      customizable: true,
      description: 'Soft and cuddly teddy bear, perfect for all ages'
    },
    {
      id: '2',
      name: 'Cozy Winter Scarf',
      price: 35,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Wearables',
      customizable: true,
      description: 'Warm and stylish scarf for cold days'
    },
    {
      id: '3',
      name: 'Decorative Plant Holder',
      price: 20,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Home Decor',
      customizable: false,
      description: 'Beautiful holder for your favorite plants'
    },
    {
      id: '4',
      name: 'Baby Gift Set',
      price: 45,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Gift Sets',
      customizable: true,
      description: 'Complete set for new arrivals'
    },
    {
      id: '5',
      name: 'Cute Bunny Plushie',
      price: 30,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Toys',
      customizable: true,
      description: 'Adorable bunny perfect for snuggles'
    },
    {
      id: '6',
      name: 'Stylish Beanie Hat',
      price: 18,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Wearables',
      customizable: true,
      description: 'Keep warm with this trendy beanie'
    },
    {
      id: '7',
      name: 'Kitchen Dishcloth Set',
      price: 15,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Home Decor',
      customizable: false,
      description: 'Set of 3 colorful dishcloths'
    },
    {
      id: '8',
      name: 'Birthday Party Pack',
      price: 60,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Gift Sets',
      customizable: true,
      description: 'Everything you need for a special celebration'
    },
    {
      id: '9',
      name: 'Dragon Amigurumi',
      price: 40,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Toys',
      customizable: true,
      description: 'Mythical dragon toy with intricate details'
    },
    {
      id: '10',
      name: 'Coaster Set',
      price: 12,
      image: '/placeholder.svg?height=300&width=300',
      category: 'Home Decor',
      customizable: false,
      description: 'Set of 4 decorative coasters'
    }
  ];

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredAndSortedProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Handmade Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover unique, handcrafted crochet pieces made with love and attention to detail
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <ProductSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <ProductFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {paginatedProducts.length} of {filteredAndSortedProducts.length} products
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Products Grid */}
        {paginatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <ProductPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
