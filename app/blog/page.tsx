"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ShoppingBag, Heart, User, Search, Menu, Clock, ArrowRight } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

const blogPosts = [
  {
    id: "1",
    title: "10 Tips para un Maquillaje Natural Perfecto",
    excerpt: "Descubre los secretos para lograr un look natural que realce tu belleza sin parecer recargado.",
    image: "/elegant-makeup-products-display-with-lipsticks-and.jpg",
    category: "Tutoriales",
    author: "Laura Martínez",
    date: "2024-01-20",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "Rutina de Cuidado Facial para Piel Sensible",
    excerpt: "Aprende a cuidar tu piel sensible con productos suaves y efectivos que no irritan.",
    image: "/skincare-products-with-creams-and-serums.jpg",
    category: "Cuidado",
    author: "Ana Rodríguez",
    date: "2024-01-18",
    readTime: "7 min",
  },
  {
    id: "3",
    title: "Tendencias de Maquillaje 2024",
    excerpt:
      "Las últimas tendencias en maquillaje que dominarán este año. Desde colores vibrantes hasta acabados naturales.",
    image: "/makeup-collection-with-lipsticks-and-eyeshadows.jpg",
    category: "Tendencias",
    author: "Carmen López",
    date: "2024-01-15",
    readTime: "6 min",
  },
  {
    id: "4",
    title: "Cómo Elegir el Perfume Perfecto",
    excerpt: "Guía completa para encontrar la fragancia que mejor se adapte a tu personalidad y estilo.",
    image: "/elegant-perfume-bottles-collection.jpg",
    category: "Fragancias",
    author: "Isabel Torres",
    date: "2024-01-12",
    readTime: "4 min",
  },
  {
    id: "5",
    title: "Maquillaje de Ojos: Técnicas Profesionales",
    excerpt: "Domina las técnicas de maquillaje de ojos como una profesional con estos consejos expertos.",
    image: "/eyeshadow-palette-makeup.jpg",
    category: "Tutoriales",
    author: "Laura Martínez",
    date: "2024-01-10",
    readTime: "8 min",
  },
  {
    id: "6",
    title: "Beneficios del Serum de Vitamina C",
    excerpt: "Descubre por qué el serum de vitamina C es esencial en tu rutina de cuidado facial.",
    image: "/vitamin-c-facial-serum-skincare.jpg",
    category: "Cuidado",
    author: "Ana Rodríguez",
    date: "2024-01-08",
    readTime: "5 min",
  },
]

const categories = ["Todos", "Tutoriales", "Cuidado", "Tendencias", "Fragancias"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <h1 className="text-2xl font-bold text-primary cursor-pointer">Auténtica</h1>
              </Link>
            </div>

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
              <Link href="/blog" className="text-primary font-medium">
                Blog
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" aria-label="Buscar">
                <Search className="h-5 w-5" />
              </Button>
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
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Blog", href: "/blog" },
          ]}
        />

        {/* Hero Section */}
        <div className="mt-6 mb-12 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Blog de Belleza Auténtica</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Consejos, tutoriales y las últimas tendencias en belleza y cuidado personal
          </p>
        </div>

        {/* Search and Categories */}
        <div className="mb-8 space-y-4">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar artículos..." className="pl-10" aria-label="Buscar artículos" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button key={category} variant={category === "Todos" ? "default" : "outline"} size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4">{blogPosts[0].category}</Badge>
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <Badge variant="secondary" className="w-fit mb-3">
                Destacado
              </Badge>
              <h3 className="text-2xl font-bold mb-3">{blogPosts[0].title}</h3>
              <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>{blogPosts[0].author}</span>
                <span>•</span>
                <span>{blogPosts[0].date}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              <Button className="w-fit">
                Leer Más
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4">{post.category}</Badge>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    Leer Más
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Suscríbete a Nuestro Newsletter</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Recibe los mejores consejos de belleza, tutoriales exclusivos y ofertas especiales directamente en tu
              correo
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Tu email" className="flex-1" />
              <Button>Suscribirse</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
