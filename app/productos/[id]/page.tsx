"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ShoppingBag, Heart, Star, Minus, Plus, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// Mock product data - in a real app this would come from an API
const productData = {
  1: {
    id: 1,
    name: "Labial Mate Premium Rosa",
    brand: "Auténtica",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 124,
    category: "maquillaje",
    subcategory: "labiales",
    images: [
      "/premium-matte-lipstick-product.jpg",
      "/makeup-collection-with-lipsticks-and-eyeshadows.jpg",
      "/elegant-makeup-products-display-with-lipsticks-and.jpg",
    ],
    colors: [
      { name: "Rosa Intenso", hex: "#D946EF", stock: 15 },
      { name: "Rosa Clásico", hex: "#EC4899", stock: 8 },
      { name: "Rosa Profundo", hex: "#BE123C", stock: 12 },
    ],
    isNew: false,
    isOnSale: true,
    description:
      "Nuestro labial mate premium ofrece una cobertura intensa y duradera con una fórmula enriquecida con vitamina E. Perfecto para un look sofisticado que dura todo el día.",
    ingredients:
      "Dimethicone, Bis-Diglyceryl Polyacyladipate-2, Diisostearyl Malate, Phenylpropyldimethylsiloxysilicate, Vitamin E, Jojoba Oil",
    howToUse:
      "Aplica directamente sobre los labios limpios y secos. Para mayor intensidad, aplica una segunda capa. Retira con desmaquillante bifásico.",
    benefits: [
      "Larga duración hasta 8 horas",
      "Fórmula mate que no reseca",
      "Enriquecido con vitamina E",
      "Resistente al agua",
      "No transfiere",
    ],
    inStock: true,
    stockCount: 35,
  },
}

const relatedProducts = [
  {
    id: 2,
    name: "Base Líquida HD",
    price: 45.99,
    image: "/hd-liquid-foundation-makeup.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Paleta de Sombras",
    price: 35.99,
    image: "/eyeshadow-palette-makeup.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Serum Vitamin C",
    price: 52.99,
    image: "/vitamin-c-facial-serum-skincare.jpg",
    rating: 4.9,
  },
]

const reviews = [
  {
    id: 1,
    user: "María González",
    rating: 5,
    date: "2024-01-15",
    comment: "¡Increíble! El color es exactamente como se ve en la foto y dura todo el día sin retoques.",
    verified: true,
  },
  {
    id: 2,
    user: "Ana Rodríguez",
    rating: 4,
    date: "2024-01-10",
    comment:
      "Muy buen producto, aunque al principio se siente un poco seco. Después de unas horas se asienta perfectamente.",
    verified: true,
  },
  {
    id: 3,
    user: "Carmen López",
    rating: 5,
    date: "2024-01-08",
    comment: "Mi labial favorito! Lo he comprado en varios colores. La calidad es excelente.",
    verified: true,
  },
]

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const product = productData[1] // In a real app, you'd fetch by productId

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product?.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  if (!product) {
    return <div>Producto no encontrado</div>
  }

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-2xl font-bold text-primary">Auténtica</h1>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/productos" className="text-primary font-medium">
                Maquillaje
              </Link>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Cuidado
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Fragancias
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Ofertas
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/productos" className="hover:text-foreground">
            Productos
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-card">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isOnSale && (
                <Badge variant="destructive" className="absolute top-4 left-4">
                  -{discountPercentage}%
                </Badge>
              )}
              {product.isNew && (
                <Badge variant="default" className="absolute top-4 right-4 bg-accent">
                  Nuevo
                </Badge>
              )}
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-border"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reseñas)
                </span>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                )}
                {product.isOnSale && (
                  <Badge variant="destructive">Ahorra ${(product.originalPrice! - product.price).toFixed(2)}</Badge>
                )}
              </div>
            </div>

            <Separator />

            {/* Color Selection */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Color: {selectedColor?.name}</Label>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor?.name === color.name
                        ? "border-primary scale-110"
                        : "border-border hover:border-primary/50"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={`${color.name} (${color.stock} disponibles)`}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{selectedColor?.stock} unidades disponibles</p>
            </div>

            {/* Quantity */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Cantidad</Label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.min(selectedColor?.stock || 1, quantity + 1))}
                    disabled={quantity >= (selectedColor?.stock || 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">Máximo {selectedColor?.stock} unidades</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90" disabled={!product.inStock}>
                <ShoppingBag className="h-5 w-5 mr-2" />
                {product.inStock ? "Agregar al Carrito" : "Agotado"}
              </Button>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 bg-transparent"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart className={`h-5 w-5 mr-2 ${isFavorite ? "fill-current" : ""}`} />
                  {isFavorite ? "En Favoritos" : "Agregar a Favoritos"}
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">Envío gratis desde $50</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">Producto garantizado</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">Devolución 30 días</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Descripción</TabsTrigger>
            <TabsTrigger value="ingredients">Ingredientes</TabsTrigger>
            <TabsTrigger value="usage">Modo de Uso</TabsTrigger>
            <TabsTrigger value="reviews">Reseñas ({product.reviews})</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground leading-relaxed mb-4">{product.description}</p>
                <h4 className="font-semibold mb-3">Beneficios:</h4>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ingredients" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground leading-relaxed">{product.ingredients}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground leading-relaxed">{product.howToUse}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{review.user}</span>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Compra verificada
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${i < review.rating ? "fill-accent text-accent" : "text-muted-foreground"}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-foreground">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section>
          <h3 className="text-2xl font-bold text-foreground mb-6">Productos Relacionados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card
                key={relatedProduct.id}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <img
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">{relatedProduct.name}</h4>

                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < Math.floor(relatedProduct.rating) ? "fill-accent text-accent" : "text-muted-foreground"}`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">({relatedProduct.rating})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">${relatedProduct.price}</span>
                      <Button size="sm" variant="outline">
                        Ver Producto
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

function Label({
  children,
  className,
  ...props
}: { children: React.ReactNode; className?: string; [key: string]: any }) {
  return (
    <label
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className || ""}`}
      {...props}
    >
      {children}
    </label>
  )
}
