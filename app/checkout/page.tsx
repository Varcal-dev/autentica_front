"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Truck, Check, ArrowLeft, ArrowRight, Lock } from "lucide-react"
import Link from "next/link"

// Mock cart data
const cartItems = [
  {
    id: 1,
    name: "Labial Mate Premium Rosa",
    brand: "Auténtica",
    price: 29.99,
    image: "/premium-matte-lipstick-product.jpg",
    color: "Rosa Intenso",
    quantity: 2,
  },
  {
    id: 2,
    name: "Base Líquida HD",
    brand: "Auténtica",
    price: 45.99,
    image: "/hd-liquid-foundation-makeup.jpg",
    color: "Beige Natural",
    quantity: 1,
  },
]

const steps = [
  { id: 1, name: "Envío", icon: Truck },
  { id: 2, name: "Pago", icon: CreditCard },
  { id: 3, name: "Confirmación", icon: Check },
]

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [shippingInfo, setShippingInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  })
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  })
  const [billingAddress, setBillingAddress] = useState({
    sameAsShipping: true,
    address: "",
    city: "",
    state: "",
    zipCode: "",
  })

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCost = shippingMethod === "express" ? 12.99 : shippingMethod === "standard" ? 5.99 : 0
  const tax = subtotal * 0.08
  const total = subtotal + shippingCost + tax

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleShippingInfoChange = (field: string, value: string) => {
    setShippingInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handlePaymentInfoChange = (field: string, value: string) => {
    setPaymentInfo((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary">Auténtica</h1>
            </Link>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-green-600" />
              <span className="text-sm text-muted-foreground">Checkout Seguro</span>
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
          <Link href="/carrito" className="hover:text-foreground">
            Carrito
          </Link>
          <span>/</span>
          <span className="text-foreground">Checkout</span>
        </nav>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.id
                      ? "bg-primary border-primary text-primary-foreground"
                      : "border-muted-foreground text-muted-foreground"
                  }`}
                >
                  {currentStep > step.id ? <Check className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
                </div>
                <span
                  className={`ml-2 text-sm font-medium ${
                    currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.name}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${currentStep > step.id ? "bg-primary" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Shipping Information */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Información de Envío
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={shippingInfo.email}
                      onChange={(e) => handleShippingInfoChange("email", e.target.value)}
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Nombre *</Label>
                      <Input
                        id="firstName"
                        value={shippingInfo.firstName}
                        onChange={(e) => handleShippingInfoChange("firstName", e.target.value)}
                        placeholder="Nombre"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Apellido *</Label>
                      <Input
                        id="lastName"
                        value={shippingInfo.lastName}
                        onChange={(e) => handleShippingInfoChange("lastName", e.target.value)}
                        placeholder="Apellido"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Dirección *</Label>
                    <Input
                      id="address"
                      value={shippingInfo.address}
                      onChange={(e) => handleShippingInfoChange("address", e.target.value)}
                      placeholder="Calle y número"
                    />
                  </div>

                  <div>
                    <Label htmlFor="apartment">Apartamento, suite, etc. (opcional)</Label>
                    <Input
                      id="apartment"
                      value={shippingInfo.apartment}
                      onChange={(e) => handleShippingInfoChange("apartment", e.target.value)}
                      placeholder="Apartamento, suite, etc."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">Ciudad *</Label>
                      <Input
                        id="city"
                        value={shippingInfo.city}
                        onChange={(e) => handleShippingInfoChange("city", e.target.value)}
                        placeholder="Ciudad"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">Estado *</Label>
                      <Select onValueChange={(value) => handleShippingInfoChange("state", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cdmx">Ciudad de México</SelectItem>
                          <SelectItem value="jalisco">Jalisco</SelectItem>
                          <SelectItem value="nuevo-leon">Nuevo León</SelectItem>
                          <SelectItem value="yucatan">Yucatán</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="zipCode">Código Postal *</Label>
                      <Input
                        id="zipCode"
                        value={shippingInfo.zipCode}
                        onChange={(e) => handleShippingInfoChange("zipCode", e.target.value)}
                        placeholder="00000"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Teléfono *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={shippingInfo.phone}
                      onChange={(e) => handleShippingInfoChange("phone", e.target.value)}
                      placeholder="+52 55 1234 5678"
                    />
                  </div>

                  {/* Shipping Method */}
                  <div className="space-y-4">
                    <Label>Método de Envío</Label>
                    <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="free" id="free" />
                        <Label htmlFor="free" className="flex-1 cursor-pointer">
                          <div className="flex justify-between">
                            <span>Envío Estándar (5-7 días)</span>
                            <span className="text-green-600 font-medium">Gratis</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="flex-1 cursor-pointer">
                          <div className="flex justify-between">
                            <span>Envío Rápido (3-5 días)</span>
                            <span className="font-medium">$5.99</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express" className="flex-1 cursor-pointer">
                          <div className="flex justify-between">
                            <span>Envío Express (1-2 días)</span>
                            <span className="font-medium">$12.99</span>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Payment Information */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Información de Pago
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Payment Method */}
                  <div className="space-y-4">
                    <Label>Método de Pago</Label>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                          Tarjeta de Crédito/Débito
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                          PayPal
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Número de Tarjeta *</Label>
                        <Input
                          id="cardNumber"
                          value={paymentInfo.cardNumber}
                          onChange={(e) => handlePaymentInfoChange("cardNumber", e.target.value)}
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Fecha de Vencimiento *</Label>
                          <Input
                            id="expiryDate"
                            value={paymentInfo.expiryDate}
                            onChange={(e) => handlePaymentInfoChange("expiryDate", e.target.value)}
                            placeholder="MM/AA"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            value={paymentInfo.cvv}
                            onChange={(e) => handlePaymentInfoChange("cvv", e.target.value)}
                            placeholder="123"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="nameOnCard">Nombre en la Tarjeta *</Label>
                        <Input
                          id="nameOnCard"
                          value={paymentInfo.nameOnCard}
                          onChange={(e) => handlePaymentInfoChange("nameOnCard", e.target.value)}
                          placeholder="Nombre completo"
                        />
                      </div>
                    </div>
                  )}

                  {/* Billing Address */}
                  <div className="space-y-4">
                    <Label>Dirección de Facturación</Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sameAsShipping"
                        checked={billingAddress.sameAsShipping}
                        onCheckedChange={(checked) =>
                          setBillingAddress((prev) => ({ ...prev, sameAsShipping: checked as boolean }))
                        }
                      />
                      <Label htmlFor="sameAsShipping" className="cursor-pointer">
                        Misma dirección de envío
                      </Label>
                    </div>

                    {!billingAddress.sameAsShipping && (
                      <div className="space-y-4">
                        <Input
                          placeholder="Dirección de facturación"
                          value={billingAddress.address}
                          onChange={(e) => setBillingAddress((prev) => ({ ...prev, address: e.target.value }))}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Input
                            placeholder="Ciudad"
                            value={billingAddress.city}
                            onChange={(e) => setBillingAddress((prev) => ({ ...prev, city: e.target.value }))}
                          />
                          <Input
                            placeholder="Estado"
                            value={billingAddress.state}
                            onChange={(e) => setBillingAddress((prev) => ({ ...prev, state: e.target.value }))}
                          />
                          <Input
                            placeholder="Código Postal"
                            value={billingAddress.zipCode}
                            onChange={(e) => setBillingAddress((prev) => ({ ...prev, zipCode: e.target.value }))}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Order Confirmation */}
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    Confirmar Pedido
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">¡Pedido Confirmado!</h3>
                    <p className="text-muted-foreground mb-4">Tu pedido #AU-2024-001 ha sido procesado exitosamente.</p>
                    <Badge variant="secondary" className="mb-6">
                      Recibirás un email de confirmación en {shippingInfo.email}
                    </Badge>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="font-semibold">Información de Envío</h4>
                    <div className="text-sm text-muted-foreground">
                      <p>
                        {shippingInfo.firstName} {shippingInfo.lastName}
                      </p>
                      <p>{shippingInfo.address}</p>
                      {shippingInfo.apartment && <p>{shippingInfo.apartment}</p>}
                      <p>
                        {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}
                      </p>
                      <p>{shippingInfo.phone}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Método de Envío</h4>
                    <p className="text-sm text-muted-foreground">
                      {shippingMethod === "free" && "Envío Estándar (5-7 días) - Gratis"}
                      {shippingMethod === "standard" && "Envío Rápido (3-5 días) - $5.99"}
                      {shippingMethod === "express" && "Envío Express (1-2 días) - $12.99"}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Link href="/" className="flex-1">
                      <Button variant="outline" className="w-full bg-transparent">
                        Continuar Comprando
                      </Button>
                    </Link>
                    <Button className="flex-1 bg-primary hover:bg-primary/90">Ver Mis Pedidos</Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            {currentStep < 3 && (
              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 bg-transparent"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Anterior
                </Button>
                <Button onClick={handleNextStep} className="flex items-center gap-2 bg-primary hover:bg-primary/90">
                  {currentStep === 2 ? "Finalizar Pedido" : "Continuar"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Resumen del Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                        {item.quantity}
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.color}</p>
                      <p className="font-semibold text-sm">${item.price}</p>
                    </div>
                  </div>
                ))}

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Envío</span>
                    <span>{shippingCost === 0 ? "Gratis" : `$${shippingCost.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Impuestos</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Garantías</h4>
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
      </div>
    </div>
  )
}
