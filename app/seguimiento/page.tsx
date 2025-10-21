"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb } from "@/components/breadcrumb"
import { Package, Truck, CheckCircle, Clock, MapPin } from "lucide-react"

export default function SeguimientoPage() {
  const [orderNumber, setOrderNumber] = useState("")
  const [email, setEmail] = useState("")
  const [trackingData, setTrackingData] = useState<any>(null)

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulación de datos de seguimiento
    setTrackingData({
      orderNumber: orderNumber,
      status: "En tránsito",
      estimatedDelivery: "25 de Enero, 2024",
      currentLocation: "Centro de distribución - Bogotá",
      timeline: [
        {
          status: "Pedido confirmado",
          date: "20 de Enero, 2024 - 10:30 AM",
          completed: true,
          icon: CheckCircle,
        },
        {
          status: "En preparación",
          date: "20 de Enero, 2024 - 2:15 PM",
          completed: true,
          icon: Package,
        },
        {
          status: "En tránsito",
          date: "22 de Enero, 2024 - 8:00 AM",
          completed: true,
          icon: Truck,
        },
        {
          status: "En reparto",
          date: "Estimado: 25 de Enero, 2024",
          completed: false,
          icon: MapPin,
        },
        {
          status: "Entregado",
          date: "Pendiente",
          completed: false,
          icon: CheckCircle,
        },
      ],
      items: [
        { name: "Labial Mate Premium", quantity: 2, image: "/premium-matte-lipstick-product.jpg" },
        { name: "Base Líquida HD", quantity: 1, image: "/hd-liquid-foundation-makeup.jpg" },
      ],
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Seguimiento de Pedido", href: "/seguimiento" },
          ]}
        />

        <div className="mt-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Seguimiento de Pedido</h1>
            <p className="text-muted-foreground text-lg">Ingresa tu número de pedido y email para rastrear tu envío</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Buscar Pedido</CardTitle>
              <CardDescription>Ingresa los datos de tu pedido para ver el estado actual</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTrack} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="orderNumber">Número de Pedido</Label>
                  <Input
                    id="orderNumber"
                    placeholder="Ej: AUT-2024-001234"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email de Confirmación</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Rastrear Pedido
                </Button>
              </form>
            </CardContent>
          </Card>

          {trackingData && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Pedido #{trackingData.orderNumber}</CardTitle>
                      <CardDescription>Estado actual de tu envío</CardDescription>
                    </div>
                    <Badge className="text-lg px-4 py-2">{trackingData.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Entrega estimada</p>
                        <p className="font-semibold">{trackingData.estimatedDelivery}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Ubicación actual</p>
                        <p className="font-semibold">{trackingData.currentLocation}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-semibold text-lg">Historial de Envío</h3>
                    <div className="relative">
                      {trackingData.timeline.map((item: any, index: number) => {
                        const Icon = item.icon
                        return (
                          <div key={index} className="flex gap-4 pb-8 last:pb-0">
                            <div className="relative flex flex-col items-center">
                              <div
                                className={`rounded-full p-2 ${
                                  item.completed
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground"
                                }`}
                              >
                                <Icon className="h-5 w-5" />
                              </div>
                              {index < trackingData.timeline.length - 1 && (
                                <div className={`w-0.5 h-full mt-2 ${item.completed ? "bg-primary" : "bg-muted"}`} />
                              )}
                            </div>
                            <div className="flex-1 pt-1">
                              <p
                                className={`font-semibold ${item.completed ? "text-foreground" : "text-muted-foreground"}`}
                              >
                                {item.status}
                              </p>
                              <p className="text-sm text-muted-foreground">{item.date}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Productos en tu Pedido</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trackingData.items.map((item: any, index: number) => (
                      <div key={index} className="flex items-center gap-4">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Cantidad: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <p className="text-muted-foreground">¿Necesitas ayuda con tu pedido?</p>
                    <Link href="/contacto">
                      <Button variant="outline">Contactar Soporte</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
