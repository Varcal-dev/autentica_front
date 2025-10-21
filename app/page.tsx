"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Heart, Star, Menu, User } from "lucide-react"
import { SearchBar } from "@/components/search-bar"
import { useState, useEffect } from "react"

const banners = [
  {
    id: 1,
    title: "Nueva Colección Primavera",
    subtitle: "Descubre los colores de la temporada",
    cta: "Ver Colección",
    href: "/productos?categoria=maquillaje",
    image: "/elegant-makeup-products-display-with-lipsticks-and.jpg",
  },
  {
    id: 2,
    title: "Hasta 40% OFF en Cuidado Facial",
    subtitle: "Renueva tu rutina de belleza",
    cta: "Ver Ofertas",
    href: "/productos?ofertas=true",
    image: "/skincare-products-with-creams-and-serums.jpg",
  },
  {
    id: 3,
    title: "Fragancias Exclusivas",
    subtitle: "Encuentra tu aroma perfecto",
    cta: "Explorar",
    href: "/productos?categoria=fragancias",
    image: "/elegant-perfume-bottles-collection.jpg",
  },
]

export default function HomePage() {
  const [currentBanner, setCurrentBanner] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/">
                <h1 className="text-2xl font-bold text-primary cursor-pointer">Auténtica</h1>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/productos?categoria=maquillaje"
                className="text-foreground hover:text-primary transition-colors"
              >
                Maquillaje
              </Link>
              <Link
                href="/productos?categoria=cuidado"
                className="text-foreground hover:text-primary transition-colors"
              >
                Cuidado
              </Link>
              <Link
                href="/productos?categoria=fragancias"
                className="text-foreground hover:text-primary transition-colors"
              >
                Fragancias
              </Link>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
            </nav>

            <div className="hidden lg:block flex-1 max-w-md">
              <SearchBar />
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button variant="ghost" size="icon" aria-label="Favoritos">
                <Heart className="h-5 w-5" />
              </Button>
              <Link href="/perfil">
                <Button variant="ghost" size="icon" aria-label="Perfil">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/carrito">
                <Button variant="ghost" size="icon" aria-label="Carrito">
                  <ShoppingBag className="h-5 w-5" />
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menú">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="lg:hidden pb-4">
            <SearchBar />
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-r from-card to-background overflow-hidden">
        <div className="relative h-[500px]">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentBanner ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-12">
                  <div className="space-y-6 z-10">
                    <Badge variant="secondary" className="w-fit">
                      Promoción Especial
                    </Badge>
                    <h2 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">{banner.title}</h2>
                    <p className="text-lg text-muted-foreground text-pretty">{banner.subtitle}</p>
                    <Link href={banner.href}>
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        {banner.cta}
                      </Button>
                    </Link>
                  </div>
                  <div className="relative">
                    <img
                      src={banner.image || "/placeholder.svg"}
                      alt={banner.title}
                      className="w-full h-auto rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentBanner ? "bg-primary w-8" : "bg-primary/30"
              }`}
              aria-label={`Ir al banner ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-card to-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Nueva Colección
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                Descubre tu
                <span className="text-primary"> belleza auténtica</span>
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Productos de maquillaje y cuidado personal de la más alta calidad. Realza tu belleza natural con nuestra
                selección premium.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/productos">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Explorar Productos
                  </Button>
                </Link>
                <Link href="/productos?ofertas=true">
                  <Button variant="outline" size="lg">
                    Ver Ofertas
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/elegant-makeup-products-display-with-lipsticks-and.jpg"
                alt="Productos de maquillaje Auténtica"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Categorías Principales</h3>
            <p className="text-muted-foreground text-lg">Encuentra exactamente lo que necesitas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Maquillaje",
                description: "Labiales, bases, sombras y más",
                image: "/makeup-collection-with-lipsticks-and-eyeshadows.jpg",
                href: "/productos?categoria=maquillaje",
              },
              {
                title: "Cuidado Facial",
                description: "Cremas, serums y tratamientos",
                image: "/skincare-products-with-creams-and-serums.jpg",
                href: "/productos?categoria=cuidado",
              },
              {
                title: "Fragancias",
                description: "Perfumes exclusivos para ti",
                image: "/elegant-perfume-bottles-collection.jpg",
                href: "/productos?categoria=fragancias",
              },
            ].map((category, index) => (
              <Link key={index} href={category.href}>
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-foreground mb-2">{category.title}</h4>
                      <p className="text-muted-foreground">{category.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Productos Destacados</h3>
            <p className="text-muted-foreground text-lg">Los favoritos de nuestras clientas</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: "1",
                name: "Labial Mate Premium",
                price: "$29.99",
                originalPrice: "$39.99",
                rating: 4.8,
                image: "/premium-matte-lipstick-product.jpg",
              },
              {
                id: "2",
                name: "Base Líquida HD",
                price: "$45.99",
                originalPrice: null,
                rating: 4.9,
                image: "/hd-liquid-foundation-makeup.jpg",
              },
              {
                id: "3",
                name: "Paleta de Sombras",
                price: "$35.99",
                originalPrice: "$49.99",
                rating: 4.7,
                image: "/eyeshadow-palette-makeup.jpg",
              },
              {
                id: "4",
                name: "Serum Facial Vitamin C",
                price: "$52.99",
                originalPrice: null,
                rating: 4.9,
                image: "/vitamin-c-facial-serum-skincare.jpg",
              },
            ].map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <Link href={`/productos/${product.id}`}>
                    <div className="relative mb-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </Link>

                  <div className="space-y-2">
                    <Link href={`/productos/${product.id}`}>
                      <h4 className="font-semibold text-foreground text-sm hover:text-primary transition-colors">
                        {product.name}
                      </h4>
                    </Link>

                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted-foreground"}`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">({product.rating})</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-bold text-primary">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
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
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">Mantente al día con Auténtica</h3>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter y recibe ofertas exclusivas, tips de belleza y las últimas novedades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-foreground/20"
            />
            <Button variant="secondary" size="lg">
              Suscribirse
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Auténtica</h4>
              <p className="text-background/80 text-sm">
                Tu belleza auténtica merece productos de la más alta calidad.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Productos</h5>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Maquillaje
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Cuidado Facial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Fragancias
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Ofertas
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Ayuda</h5>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Envíos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Devoluciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Síguenos</h5>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
            <p>&copy; 2024 Auténtica. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
