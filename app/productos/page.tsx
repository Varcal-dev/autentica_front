"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ShoppingBag, Heart, Star, Search, Filter, Grid, List } from "lucide-react"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { EmptyState } from "@/components/empty-state"
import { useCart } from "@/contexts/cart-context"

const products = [
  {
    id: 1,
    name: "Labial Mate Premium Rosa",
    brand: "Auténtica",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviews: 124,
    category: "maquillaje",
    subcategory: "labiales",
    image: "/premium-matte-lipstick-product.jpg",
    colors: ["#D946EF", "#EC4899", "#BE123C"],
    isNew: false,
    isOnSale: true,
  },
  {
    id: 2,
    name: "Base Líquida HD Cobertura Total",
    brand: "Auténtica",
    price: 45.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    category: "maquillaje",
    subcategory: "bases",
    image: "/hd-liquid-foundation-makeup.jpg",
    colors: ["#F3E8D0", "#E8C5A0", "#D4A574"],
    isNew: true,
    isOnSale: false,
  },
  {
    id: 3,
    name: "Paleta de Sombras Sunset",
    brand: "Auténtica",
    price: 35.99,
    originalPrice: 49.99,
    rating: 4.7,
    reviews: 156,
    category: "maquillaje",
    subcategory: "sombras",
    image: "/eyeshadow-palette-makeup.jpg",
    colors: ["#FF6B35", "#F7931E", "#FFD23F"],
    isNew: false,
    isOnSale: true,
  },
  {
    id: 4,
    name: "Serum Facial Vitamin C",
    brand: "Auténtica",
    price: 52.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 203,
    category: "cuidado",
    subcategory: "serums",
    image: "/vitamin-c-facial-serum-skincare.jpg",
    colors: [],
    isNew: true,
    isOnSale: false,
  },
  {
    id: 5,
    name: "Perfume Floral Elegance",
    brand: "Auténtica",
    price: 89.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 67,
    category: "fragancias",
    subcategory: "perfumes",
    image: "/elegant-perfume-bottles-collection.jpg",
    colors: [],
    isNew: false,
    isOnSale: false,
  },
  {
    id: 6,
    name: "Crema Hidratante Noche",
    brand: "Auténtica",
    price: 38.99,
    originalPrice: 45.99,
    rating: 4.8,
    reviews: 142,
    category: "cuidado",
    subcategory: "cremas",
    image: "/skincare-products-with-creams-and-serums.jpg",
    colors: [],
    isNew: false,
    isOnSale: true,
  },
]

const categories = [
  { id: "maquillaje", name: "Maquillaje", count: 3 },
  { id: "cuidado", name: "Cuidado Facial", count: 2 },
  { id: "fragancias", name: "Fragancias", count: 1 },
]

const brands = [{ id: "autentica", name: "Auténtica", count: 6 }]

export default function ProductsPage() {
  const { totalItems } = useCart()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 100])
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand.toLowerCase())
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.isNew ? 1 : -1
      default:
        return 0
    }
  })

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId])
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    }
  }

  const handleBrandChange = (brandId: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brandId])
    } else {
      setSelectedBrands(selectedBrands.filter((id) => id !== brandId))
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" aria-label="Ir a inicio">
                <h1 className="text-2xl font-bold text-primary">Auténtica</h1>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8" aria-label="Navegación principal">
              <Link href="/productos" className="text-primary font-medium">
                Maquillaje
              </Link>
              <Link href="/productos" className="text-foreground hover:text-primary transition-colors">
                Cuidado
              </Link>
              <Link href="/productos" className="text-foreground hover:text-primary transition-colors">
                Fragancias
              </Link>
              <Link href="/productos" className="text-foreground hover:text-primary transition-colors">
                Ofertas
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" aria-label="Buscar">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Ver favoritos">
                <Heart className="h-5 w-5" />
              </Button>
              <Link href="/carrito">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  aria-label={`Carrito con ${totalItems} productos`}
                >
                  <ShoppingBag className="h-5 w-5" />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                      {totalItems}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: "Productos" }]} />

        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Todos los Productos</h1>
            <p className="text-muted-foreground">Descubre nuestra colección completa de belleza</p>
          </div>

          {/* Search and Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full sm:w-64"
              />
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>

              <div className="flex items-center border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="space-y-6">
              {/* Sort */}
              <div>
                <Label className="text-sm font-medium mb-3 block">Ordenar por</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Destacados</SelectItem>
                    <SelectItem value="newest">Más nuevos</SelectItem>
                    <SelectItem value="price-low">Precio: menor a mayor</SelectItem>
                    <SelectItem value="price-high">Precio: mayor a menor</SelectItem>
                    <SelectItem value="rating">Mejor valorados</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Categories */}
              <div>
                <Label className="text-sm font-medium mb-3 block">Categorías</Label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                      />
                      <Label htmlFor={category.id} className="text-sm flex-1 cursor-pointer">
                        {category.name} ({category.count})
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <Label className="text-sm font-medium mb-3 block">Marcas</Label>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={brand.id}
                        checked={selectedBrands.includes(brand.id)}
                        onCheckedChange={(checked) => handleBrandChange(brand.id, checked as boolean)}
                      />
                      <Label htmlFor={brand.id} className="text-sm flex-1 cursor-pointer">
                        {brand.name} ({brand.count})
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <Label className="text-sm font-medium mb-3 block">
                  Precio: ${priceRange[0]} - ${priceRange[1]}
                </Label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={100}
                  min={0}
                  step={5}
                  className="w-full"
                />
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Mostrando {sortedProducts.length} de {products.length} productos
              </p>
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="relative mb-4">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {product.isNew && (
                            <Badge variant="default" className="bg-accent">
                              Nuevo
                            </Badge>
                          )}
                          {product.isOnSale && <Badge variant="destructive">Oferta</Badge>}
                        </div>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="space-y-2">
                        <p className="text-xs text-muted-foreground">{product.brand}</p>
                        <h4 className="font-semibold text-foreground text-sm line-clamp-2">{product.name}</h4>

                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"}`}
                            />
                          ))}
                          <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                        </div>

                        {product.colors.length > 0 && (
                          <div className="flex items-center gap-1">
                            {product.colors.slice(0, 3).map((color, index) => (
                              <div
                                key={index}
                                className="w-4 h-4 rounded-full border border-border"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                            {product.colors.length > 3 && (
                              <span className="text-xs text-muted-foreground">+{product.colors.length - 3}</span>
                            )}
                          </div>
                        )}

                        <div className="flex items-center gap-2">
                          <span className="font-bold text-primary">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                          )}
                        </div>

                        <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                          Agregar al Carrito
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedProducts.map((product) => (
                  <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="relative w-32 h-32 flex-shrink-0">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2 left-2 flex flex-col gap-1">
                            {product.isNew && (
                              <Badge variant="default" className="bg-accent text-xs">
                                Nuevo
                              </Badge>
                            )}
                            {product.isOnSale && (
                              <Badge variant="destructive" className="text-xs">
                                Oferta
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-sm text-muted-foreground">{product.brand}</p>
                              <h4 className="font-semibold text-foreground text-lg">{product.name}</h4>
                            </div>
                            <Button size="icon" variant="ghost">
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"}`}
                              />
                            ))}
                            <span className="text-sm text-muted-foreground ml-1">({product.reviews} reseñas)</span>
                          </div>

                          {product.colors.length > 0 && (
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">Colores:</span>
                              <div className="flex items-center gap-1">
                                {product.colors.map((color, index) => (
                                  <div
                                    key={index}
                                    className="w-5 h-5 rounded-full border border-border"
                                    style={{ backgroundColor: color }}
                                  />
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-primary text-xl">${product.price}</span>
                              {product.originalPrice && (
                                <span className="text-lg text-muted-foreground line-through">
                                  ${product.originalPrice}
                                </span>
                              )}
                            </div>

                            <Button className="bg-primary hover:bg-primary/90">Agregar al Carrito</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {sortedProducts.length === 0 && (
              <EmptyState
                icon={Search}
                title="No se encontraron productos"
                description="No hay productos que coincidan con tus filtros. Intenta ajustar tu búsqueda."
                actionLabel="Limpiar filtros"
                actionHref="#"
              />
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
