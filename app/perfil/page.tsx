"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  ShoppingBag,
  Heart,
  Star,
  Package,
  Truck,
  CheckCircle,
  Gift,
  User,
  MapPin,
  CreditCard,
  Bell,
  Menu,
  Search,
} from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

const orderHistory = [
  {
    id: "ORD-2024-001",
    date: "2024-01-15",
    status: "Entregado",
    total: 125.97,
    items: [
      { name: "Labial Mate Premium", quantity: 2, price: 29.99, image: "/premium-matte-lipstick-product.jpg" },
      { name: "Base Líquida HD", quantity: 1, price: 45.99, image: "/hd-liquid-foundation-makeup.jpg" },
    ],
  },
  {
    id: "ORD-2024-002",
    date: "2024-01-20",
    status: "En tránsito",
    total: 88.98,
    items: [
      { name: "Paleta de Sombras", quantity: 1, price: 35.99, image: "/eyeshadow-palette-makeup.jpg" },
      { name: "Serum Vitamin C", quantity: 1, price: 52.99, image: "/vitamin-c-facial-serum-skincare.jpg" },
    ],
  },
]

const wishlistItems = [
  {
    id: "1",
    name: "Perfume Floral Elegante",
    price: 65.99,
    image: "/elegant-perfume-bottles-collection.jpg",
    inStock: true,
  },
  {
    id: "2",
    name: "Crema Hidratante Premium",
    price: 38.99,
    image: "/skincare-products-with-creams-and-serums.jpg",
    inStock: true,
  },
  {
    id: "3",
    name: "Set de Brochas Profesional",
    price: 89.99,
    image: "/makeup-collection-with-lipsticks-and-eyeshadows.jpg",
    inStock: false,
  },
]

const loyaltyPoints = {
  current: 450,
  nextReward: 500,
  tier: "Gold",
  benefits: [
    "10% de descuento en todas las compras",
    "Envío gratis en pedidos superiores a $30",
    "Acceso anticipado a nuevos productos",
    "Regalos de cumpleaños exclusivos",
  ],
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("orders")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Entregado":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "En tránsito":
        return <Truck className="h-5 w-5 text-blue-500" />
      case "Procesando":
        return <Package className="h-5 w-5 text-yellow-500" />
      default:
        return <Package className="h-5 w-5" />
    }
  }

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
              <Link href="/productos?ofertas=true" className="text-foreground hover:text-primary transition-colors">
                Ofertas
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
                  <User className="h-5 w-5 text-primary" />
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
            { label: "Mi Perfil", href: "/perfil" },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">María González</h3>
                  <p className="text-sm text-muted-foreground">maria@example.com</p>
                  <Badge variant="secondary" className="mt-2 bg-gold/10 text-gold border-gold/20">
                    Miembro {loyaltyPoints.tier}
                  </Badge>
                </div>

                <Separator className="my-4" />

                <nav className="space-y-2">
                  <Button
                    variant={activeTab === "orders" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("orders")}
                  >
                    <Package className="h-4 w-4 mr-2" />
                    Mis Pedidos
                  </Button>
                  <Button
                    variant={activeTab === "wishlist" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("wishlist")}
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Lista de Deseos
                  </Button>
                  <Button
                    variant={activeTab === "points" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("points")}
                  >
                    <Gift className="h-4 w-4 mr-2" />
                    Puntos y Recompensas
                  </Button>
                  <Button
                    variant={activeTab === "account" ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("account")}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Información Personal
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    Direcciones
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Métodos de Pago
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Bell className="h-4 w-4 mr-2" />
                    Notificaciones
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Historial de Pedidos</h2>
                  <p className="text-muted-foreground">Revisa el estado de tus pedidos actuales y anteriores</p>
                </div>

                {orderHistory.map((order) => (
                  <Card key={order.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">Pedido {order.id}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">Realizado el {order.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(order.status)}
                          <Badge variant={order.status === "Entregado" ? "default" : "secondary"}>{order.status}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">Cantidad: {item.quantity}</p>
                            </div>
                            <span className="font-semibold">${item.price}</span>
                          </div>
                        ))}

                        <Separator />

                        <div className="flex items-center justify-between">
                          <span className="font-semibold">Total:</span>
                          <span className="text-xl font-bold text-primary">${order.total.toFixed(2)}</span>
                        </div>

                        <div className="flex gap-3">
                          <Button variant="outline" className="flex-1 bg-transparent">
                            Ver Detalles
                          </Button>
                          {order.status === "Entregado" && (
                            <Button variant="outline" className="flex-1 bg-transparent">
                              Comprar de Nuevo
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Wishlist Tab */}
            {activeTab === "wishlist" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Lista de Deseos</h2>
                  <p className="text-muted-foreground">Guarda tus productos favoritos para más tarde</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {wishlistItems.map((item) => (
                    <Card key={item.id} className="group">
                      <CardContent className="p-4">
                        <div className="relative mb-4">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                          {!item.inStock && (
                            <Badge variant="destructive" className="absolute top-2 left-2">
                              Agotado
                            </Badge>
                          )}
                        </div>

                        <h4 className="font-semibold mb-2">{item.name}</h4>
                        <p className="text-xl font-bold text-primary mb-4">${item.price}</p>

                        <div className="flex gap-2">
                          <Button className="flex-1" disabled={!item.inStock}>
                            <ShoppingBag className="h-4 w-4 mr-2" />
                            Agregar al Carrito
                          </Button>
                          <Button variant="outline" size="icon">
                            <Heart className="h-4 w-4 fill-current" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Points Tab */}
            {activeTab === "points" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Puntos y Recompensas</h2>
                  <p className="text-muted-foreground">
                    Gana puntos con cada compra y disfruta de beneficios exclusivos
                  </p>
                </div>

                <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Puntos Disponibles</p>
                        <p className="text-4xl font-bold text-primary">{loyaltyPoints.current}</p>
                      </div>
                      <Gift className="h-12 w-12 text-primary" />
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Progreso al siguiente nivel</span>
                        <span className="font-medium">
                          {loyaltyPoints.current} / {loyaltyPoints.nextReward}
                        </span>
                      </div>
                      <div className="w-full bg-background/50 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${(loyaltyPoints.current / loyaltyPoints.nextReward) * 100}%` }}
                        />
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      Te faltan {loyaltyPoints.nextReward - loyaltyPoints.current} puntos para alcanzar el siguiente
                      nivel
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Beneficios de Miembro {loyaltyPoints.tier}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {loyaltyPoints.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cómo Ganar Puntos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <ShoppingBag className="h-5 w-5 text-primary" />
                          <span>Por cada $1 gastado</span>
                        </div>
                        <Badge variant="secondary">+10 puntos</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Star className="h-5 w-5 text-primary" />
                          <span>Reseña de producto</span>
                        </div>
                        <Badge variant="secondary">+50 puntos</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-accent/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Gift className="h-5 w-5 text-primary" />
                          <span>Referir a un amigo</span>
                        </div>
                        <Badge variant="secondary">+100 puntos</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Account Tab */}
            {activeTab === "account" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Información Personal</h2>
                  <p className="text-muted-foreground">Administra tu información de cuenta</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Datos Personales</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Nombre</label>
                        <input type="text" defaultValue="María" className="w-full px-3 py-2 border rounded-lg" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Apellido</label>
                        <input type="text" defaultValue="González" className="w-full px-3 py-2 border rounded-lg" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Email</label>
                      <input
                        type="email"
                        defaultValue="maria@example.com"
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Teléfono</label>
                      <input
                        type="tel"
                        defaultValue="+57 300 123 4567"
                        className="w-full px-3 py-2 border rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Fecha de Nacimiento</label>
                      <input type="date" defaultValue="1990-05-15" className="w-full px-3 py-2 border rounded-lg" />
                    </div>

                    <Button className="w-full md:w-auto">Guardar Cambios</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cambiar Contraseña</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Contraseña Actual</label>
                      <input type="password" className="w-full px-3 py-2 border rounded-lg" />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Nueva Contraseña</label>
                      <input type="password" className="w-full px-3 py-2 border rounded-lg" />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Confirmar Nueva Contraseña</label>
                      <input type="password" className="w-full px-3 py-2 border rounded-lg" />
                    </div>

                    <Button className="w-full md:w-auto">Actualizar Contraseña</Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
