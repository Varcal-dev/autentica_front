"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { ShoppingBag, Heart, Minus, Plus, X, Truck, Tag, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/contexts/cart-context"
import { Breadcrumb } from "@/components/breadcrumb"
import { EmptyState } from "@/components/empty-state"
import { useState } from "react"

const recommendedProducts = [
  {
    id: "4",
    name: "Paleta de Sombras Sunset",
    price: 35.99,
    originalPrice: 49.99,
    image: "/eyeshadow-palette-makeup.jpg",
  },
  {
    id: "5",
    name: "Perfume Floral Elegance",
    price: 89.99,
    image: "/elegant-perfume-bottles-collection.jpg",
  },
]

export default function CartPage() {
  const { items: cartItems, updateQuantity, removeItem, totalItems, totalPrice } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null)

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "autentica10") {
      setAppliedPromo("AUTENTICA10")
      setPromoCode("")
    }
  }

  const subtotal = totalPrice
  const savings = cartItems.reduce((sum, item) => {
    return sum + 0 // Calculate from originalPrice if available
  }, 0)
  const promoDiscount = appliedPromo ? subtotal * 0.1 : 0
  const shipping = subtotal >= 50 ? 0 : 5.99
  const tax = (subtotal - promoDiscount) * 0.08
  const total = subtotal - promoDiscount + shipping + tax

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
              <Link href="/productos" className="text-foreground hover:text-primary transition-colors">
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
        <Breadcrumb items={[{ label: "Carrito de Compras" }]} />

        {/* Page Header */}
        <div className="flex items-center gap-4 mb-8 mt-6">
          <Link href="/productos">
            <Button variant="ghost" size="icon" aria-label="Volver a productos">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Carrito de Compras</h1>
            <p className="text-muted-foreground">
              {cartItems.length} {cartItems.length === 1 ? "producto" : "productos"} en tu carrito
            </p>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <EmptyState
            icon={ShoppingBag}
            title="Tu carrito está vacío"
            description="Agrega algunos productos para comenzar tu compra"
            actionLabel="Explorar Productos"
            actionHref="/productos"
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={`${item.id}-${item.color}`}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-foreground">{item.name}</h3>
                            {item.color && (
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-sm text-muted-foreground">Color: {item.color}</span>
                              </div>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(`${item.id}-${item.color}`)}
                            className="text-muted-foreground hover:text-destructive"
                            aria-label={`Eliminar ${item.name} del carrito`}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="font-bold text-primary">${item.price.toFixed(2)}</span>

                          <div className="flex items-center gap-3">
                            <div className="flex items-center border rounded-lg">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => updateQuantity(`${item.id}-${item.color}`, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className="h-8 w-8"
                                aria-label="Disminuir cantidad"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="px-3 py-1 min-w-[2rem] text-center text-sm">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => updateQuantity(`${item.id}-${item.color}`, item.quantity + 1)}
                                className="h-8 w-8"
                                aria-label="Aumentar cantidad"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <span className="font-semibold min-w-[4rem] text-right">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Recommended Products */}
              <Card className="mt-8">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">También te puede interesar</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {recommendedProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/productos/${product.id}`}
                        className="flex gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{product.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-bold text-primary text-sm">${product.price}</span>
                            {product.originalPrice && (
                              <span className="text-xs text-muted-foreground line-through">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              {/* Promo Code */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Código de Descuento</h3>
                  {appliedPromo ? (
                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">{appliedPromo}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setAppliedPromo(null)}
                        className="text-green-600 hover:text-green-800"
                        aria-label="Quitar código de descuento"
                      >
                        Quitar
                      </Button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <Input
                        placeholder="Ingresa tu código"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        aria-label="Código promocional"
                      />
                      <Button variant="outline" onClick={applyPromoCode} disabled={!promoCode.trim()}>
                        Aplicar
                      </Button>
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">Prueba con: AUTENTICA10 para 10% de descuento</p>
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Resumen del Pedido</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>

                    {appliedPromo && (
                      <div className="flex justify-between text-green-600">
                        <span>Descuento ({appliedPromo})</span>
                        <span>-${promoDiscount.toFixed(2)}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Envío</span>
                      <span>
                        {shipping === 0 ? <span className="text-green-600">Gratis</span> : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Impuestos</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>

                    <Separator />

                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {subtotal < 50 && (
                    <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-blue-800">
                          Agrega ${(50 - subtotal).toFixed(2)} más para envío gratis
                        </span>
                      </div>
                    </div>
                  )}

                  <Link href="/checkout">
                    <Button size="lg" className="w-full mt-6 bg-primary hover:bg-primary/90">
                      Proceder al Checkout
                    </Button>
                  </Link>

                  <Link href="/productos">
                    <Button variant="outline" size="lg" className="w-full mt-3 bg-transparent">
                      Continuar Comprando
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Security Features */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Compra Segura</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Pago 100% seguro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Devolución gratuita 30 días</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Garantía de calidad</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
