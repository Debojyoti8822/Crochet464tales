import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Heart, 
  Share2, 
  Minus, 
  Plus, 
  ShoppingCart, 
  Truck, 
  Shield, 
  Star,
  ZoomIn,
  ArrowLeft,
  Package,
  Clock,
  Palette
} from 'lucide-react';
import { Product } from '@/components/FeaturedProducts';
import { toast } from '@/components/ui/sonner';

// Extended product type for detailed view
interface DetailedProduct extends Product {
  images: string[];
  material: string;
  dimensions: string;
  colors: string[];
  careInstructions: string[];
  dispatchTime: string;
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviewCount: number;
  tags: string[];
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<DetailedProduct | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [customNote, setCustomNote] = useState('');
  const [isZoomed, setIsZoomed] = useState(false);
  const [loading, setLoading] = useState(true);

  // Mock detailed product data - in real app, this would come from API
  const mockDetailedProducts: { [key: string]: DetailedProduct } = {
    '1': {
      id: '1',
      name: 'Adorable Teddy Bear',
      price: 25,
      image: '/placeholder.svg?height=400&width=400',
      images: [
        '/placeholder.svg?height=400&width=400',
        '/placeholder.svg?height=400&width=400',
        '/placeholder.svg?height=400&width=400',
        '/placeholder.svg?height=400&width=400'
      ],
      category: 'Toys',
      customizable: true,
      description: 'This soft and cuddly handmade teddy bear is perfect for children of all ages. Crafted with premium cotton yarn and filled with hypoallergenic stuffing, it\'s designed to be a lifelong companion. Each bear is unique and made with love.',
      material: 'Premium Cotton Yarn, Hypoallergenic Polyester Filling',
      dimensions: '12" x 8" x 6" (Height x Width x Depth)',
      colors: ['Brown', 'Cream', 'Pink', 'Blue', 'Gray'],
      careInstructions: [
        'Hand wash with mild detergent',
        'Air dry only - do not machine dry',
        'Brush gently to maintain fluffiness',
        'Keep away from direct sunlight for extended periods'
      ],
      dispatchTime: '3-5 business days',
      inStock: true,
      stockQuantity: 15,
      rating: 4.8,
      reviewCount: 24,
      tags: ['teddy', 'bear', 'soft', 'kids', 'gift']
    },
    '2': {
      id: '2',
      name: 'Cozy Winter Scarf',
      price: 35,
      image: '/placeholder.svg?height=400&width=400',
      images: [
        '/placeholder.svg?height=400&width=400',
        '/placeholder.svg?height=400&width=400',
        '/placeholder.svg?height=400&width=400'
      ],
      category: 'Wearables',
      customizable: true,
      description: 'Stay warm and stylish with this handcrafted winter scarf. Made from soft acrylic yarn, it\'s perfect for cold weather while adding a touch of elegance to any outfit.',
      material: 'Soft Acrylic Yarn',
      dimensions: '60" x 8" (Length x Width)',
      colors: ['Navy', 'Burgundy', 'Forest Green', 'Charcoal', 'Cream'],
      careInstructions: [
        'Machine wash cold on gentle cycle',
        'Lay flat to dry',
        'Do not bleach',
        'Iron on low heat if needed'
      ],
      dispatchTime: '2-4 business days',
      inStock: true,
      stockQuantity: 8,
      rating: 4.9,
      reviewCount: 18,
      tags: ['scarf', 'winter', 'warm', 'fashion', 'accessory']
    },
    '3': {
      id: '3',
      name: 'Cute Bunny Plushie',
      price: 30,
      image: '/placeholder.svg?height=400&width=400',
      images: [
        '/placeholder.svg?height=400&width=400',
        '/placeholder.svg?height=400&width=400',
        '/placeholder.svg?height=400&width=400'
      ],
      category: 'Toys',
      customizable: true,
      description: 'This adorable handmade bunny is perfect for snuggles and playtime. Crafted with soft cotton yarn and featuring embroidered details, it makes an ideal gift for children and bunny lovers.',
      material: 'Soft Cotton Yarn, Embroidered Details',
      dimensions: '10" x 6" x 4" (Height x Width x Depth)',
      colors: ['White', 'Pink', 'Gray', 'Lavender'],
      careInstructions: [
        'Hand wash gently with mild soap',
        'Air dry completely',
        'Brush softly to maintain texture',
        'Store in dry place'
      ],
      dispatchTime: '3-5 business days',
      inStock: true,
      stockQuantity: 12,
      rating: 4.7,
      reviewCount: 16,
      tags: ['bunny', 'rabbit', 'soft', 'kids', 'plushie']
    },
    '4': {
      id: '4',
      name: 'Stylish Beanie Hat',
      price: 18,
      image: '/placeholder.svg?height=400&width=400',
      images: [
        '/placeholder.svg?height=400&width=400',
        '/placeholder.svg?height=400&width=400'
      ],
      category: 'Wearables',
      customizable: true,
      description: 'Keep warm with this trendy handmade beanie. Perfect for casual outings and cold weather, this comfortable hat is made with soft yarn and features a classic design.',
      material: 'Soft Acrylic Yarn',
      dimensions: 'One size fits most (22-24" circumference)',
      colors: ['Black', 'Gray', 'Navy', 'Burgundy', 'Mustard'],
      careInstructions: [
        'Machine wash cold',
        'Lay flat to dry',
        'Do not bleach',
        'Store flat to maintain shape'
      ],
      dispatchTime: '1-3 business days',
      inStock: true,
      stockQuantity: 20,
      rating: 4.6,
      reviewCount: 12,
      tags: ['beanie', 'hat', 'winter', 'warm', 'casual']
    },
    '5': {
      id: '5',
      name: 'Dragon Amigurumi',
      price: 40,
      image: '/placeholder.svg?height=400&width=400',
      images: [
        '/placeholder.svg?height=400&width=400',
        '/placeholder.svg?height=400&width=400',
        '/placeholder.svg?height=400&width=400',
        '/placeholder.svg?height=400&width=400'
      ],
      category: 'Toys',
      customizable: true,
      description: 'This mythical dragon toy features intricate details and vibrant colors. Perfect for fantasy lovers and collectors, each dragon is carefully crafted with attention to every scale and wing.',
      material: 'Premium Cotton Yarn, Safety Eyes',
      dimensions: '14" x 10" x 8" (Length x Width x Height)',
      colors: ['Green', 'Blue', 'Red', 'Purple', 'Gold'],
      careInstructions: [
        'Hand wash only',
        'Air dry completely',
        'Handle with care due to detailed features',
        'Keep away from small children under 3'
      ],
      dispatchTime: '5-7 business days',
      inStock: true,
      stockQuantity: 5,
      rating: 4.9,
      reviewCount: 8,
      tags: ['dragon', 'fantasy', 'detailed', 'collector', 'mythical']
    },
    '6': {
      id: '6',
      name: 'Cozy Mittens',
      price: 22,
      image: '/placeholder.svg?height=400&width=400',
      images: [
        '/placeholder.svg?height=400&width=400',
        '/placeholder.svg?height=400&width=400'
      ],
      category: 'Wearables',
      customizable: true,
      description: 'Keep your hands warm with these handmade mittens. Soft, comfortable, and perfect for cold days, these mittens are both functional and stylish.',
      material: 'Wool Blend Yarn',
      dimensions: 'Available in S, M, L sizes',
      colors: ['Cream', 'Gray', 'Navy', 'Red', 'Forest Green'],
      careInstructions: [
        'Hand wash in cold water',
        'Lay flat to dry',
        'Do not wring or twist',
        'Store flat when not in use'
      ],
      dispatchTime: '2-4 business days',
      inStock: true,
      stockQuantity: 15,
      rating: 4.5,
      reviewCount: 10,
      tags: ['mittens', 'gloves', 'winter', 'warm', 'hands']
    }
  };

  // Mock related products API call
  const fetchRelatedProducts = async (productId: string, category: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock related products based on category
    const allProducts: Product[] = [
      {
        id: '3',
        name: 'Cute Bunny Plushie',
        price: 30,
        image: '/placeholder.svg?height=300&width=300',
        category: 'Toys',
        customizable: true,
        description: 'Adorable bunny perfect for snuggles'
      },
      {
        id: '4',
        name: 'Stylish Beanie Hat',
        price: 18,
        image: '/placeholder.svg?height=300&width=300',
        category: 'Wearables',
        customizable: true,
        description: 'Keep warm with this trendy beanie'
      },
      {
        id: '5',
        name: 'Dragon Amigurumi',
        price: 40,
        image: '/placeholder.svg?height=300&width=300',
        category: 'Toys',
        customizable: true,
        description: 'Mythical dragon toy with intricate details'
      },
      {
        id: '6',
        name: 'Cozy Mittens',
        price: 22,
        image: '/placeholder.svg?height=300&width=300',
        category: 'Wearables',
        customizable: true,
        description: 'Warm mittens for cold days'
      },
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
      }
    ];

    return allProducts
      .filter(p => p.category === category && p.id !== productId)
      .slice(0, 4);
  };

  // Reset state when product ID changes
  useEffect(() => {
    // Reset all state when navigating to a new product
    setSelectedImage(0);
    setQuantity(1);
    setCustomNote('');
    setIsZoomed(false);
    
    // Scroll to top when product changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;
      
      setLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const productData = mockDetailedProducts[id];
      if (productData) {
        setProduct(productData);
        setSelectedColor(productData.colors[0]);
        
        // Fetch related products
        const related = await fetchRelatedProducts(id, productData.category);
        setRelatedProducts(related);
      }
      
      setLoading(false);
    };

    loadProduct();
  }, [id]); // This effect runs whenever the id parameter changes

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= (product?.stockQuantity || 1)) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ${product?.name} to cart!`, {
      description: selectedColor ? `Color: ${selectedColor}` : undefined
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product?.name,
        text: product?.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Product link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="aspect-square bg-gray-200 rounded-lg"></div>
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-20 bg-gray-200 rounded"></div>
                <div className="h-12 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <Link to="/shop">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Shop
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-purple-600">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-purple-600">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-purple-600">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setIsZoomed(true)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="destructive" className="text-lg px-4 py-2">
                    Out of Stock
                  </Badge>
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-purple-500'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleShare}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-pink-500 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className="text-3xl font-bold text-purple-600 mb-4">
                ${product.price}
              </div>

              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Product Options */}
            <div className="space-y-4">
              {/* Color Selection */}
              {product.customizable && product.colors.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    <Palette className="w-4 h-4 inline mr-1" />
                    Color: {selectedColor}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-colors ${
                          selectedColor === color
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Custom Note */}
              {product.customizable && (
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Custom Note (Optional)
                  </label>
                  <textarea
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="Add any special instructions or personalization requests..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={3}
                  />
                </div>
              )}

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stockQuantity}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <span className="text-sm text-gray-500">
                    ({product.stockQuantity} available)
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3"
                size="lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              
              <Button
                variant="outline"
                className="w-full border-purple-200 text-purple-700 hover:bg-purple-50"
                size="lg"
              >
                Buy Now
              </Button>
            </div>

            {/* Shipping & Info */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Truck className="w-5 h-5 text-green-600" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>Dispatch time: {product.dispatchTime}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Shield className="w-5 h-5 text-purple-600" />
                <span>Handmade with love - No returns unless damaged</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Product Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Material</h4>
                    <p className="text-gray-600">{product.material}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Dimensions</h4>
                    <p className="text-gray-600">{product.dimensions}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Available Colors</h4>
                    <p className="text-gray-600">{product.colors.join(', ')}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Dispatch Time</h4>
                    <p className="text-gray-600">{product.dispatchTime}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="care" className="mt-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Care Instructions</h3>
                <ul className="space-y-2">
                  {product.careInstructions.map((instruction, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-purple-600 mt-1">•</span>
                      <span className="text-gray-600">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Free shipping on orders over $50</li>
                      <li>• Standard shipping: 5-7 business days</li>
                      <li>• Express shipping: 2-3 business days (additional charges apply)</li>
                      <li>• International shipping available</li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Returns & Exchanges</h3>
                    <p className="text-gray-600">
                      As each item is handmade with love, we do not accept returns unless the item 
                      arrives damaged. Please inspect your order upon delivery and contact us 
                      immediately if there are any issues. We stand behind the quality of our work 
                      and will make it right.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Image Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div className="max-w-4xl max-h-full">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetail;