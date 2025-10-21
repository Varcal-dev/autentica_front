"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Breadcrumb } from "@/components/breadcrumb"
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react"

export default function ContactoPage() {
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hola! Soy el asistente virtual de Auténtica. ¿En qué puedo ayudarte hoy?" },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    setMessages([...messages, { sender: "user", text: inputMessage }])
    setInputMessage("")

    // Simulación de respuesta automática
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Gracias por tu mensaje. Un agente se pondrá en contacto contigo pronto. ¿Hay algo más en lo que pueda ayudarte?",
        },
      ])
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Contacto", href: "/contacto" },
          ]}
        />

        <div className="mt-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Contáctanos</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Envíanos un mensaje o chatea con nosotros en vivo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">hola@autentica.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Teléfono</h3>
                <p className="text-sm text-muted-foreground">+57 (1) 234-5678</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Ubicación</h3>
                <p className="text-sm text-muted-foreground">Bogotá, Colombia</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un Mensaje</CardTitle>
                <CardDescription>Completa el formulario y te responderemos pronto</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input id="name" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows={6} />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Chat en Vivo</CardTitle>
                    <CardDescription>Respuesta inmediata a tus preguntas</CardDescription>
                  </div>
                  <Button variant={chatOpen ? "secondary" : "default"} size="sm" onClick={() => setChatOpen(!chatOpen)}>
                    {chatOpen ? "Cerrar" : "Abrir Chat"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {chatOpen ? (
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 h-80 overflow-y-auto space-y-4 bg-muted/20">
                      {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                              msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-background border"
                            }`}
                          >
                            <p className="text-sm">{msg.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                      <Input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Escribe tu mensaje..."
                        className="flex-1"
                      />
                      <Button type="submit" size="icon">
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <MessageCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">Haz clic en "Abrir Chat" para comenzar</p>
                    <p className="text-sm text-muted-foreground">
                      Nuestro equipo está disponible de Lunes a Viernes, 9:00 AM - 6:00 PM
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 max-w-6xl mx-auto">
            <CardHeader>
              <CardTitle>Preguntas Frecuentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    q: "¿Cuál es el tiempo de entrega?",
                    a: "El tiempo de entrega es de 3-5 días hábiles para Bogotá y 5-7 días para otras ciudades.",
                  },
                  {
                    q: "¿Puedo devolver un producto?",
                    a: "Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra si el producto está sin usar.",
                  },
                  {
                    q: "¿Los productos son originales?",
                    a: "Todos nuestros productos son 100% originales y cuentan con garantía de autenticidad.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="border-b pb-4 last:border-0">
                    <h4 className="font-semibold mb-2">{faq.q}</h4>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
