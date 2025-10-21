import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PoliticasPrivacidadPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Políticas de Privacidad", href: "/politicas-privacidad" },
          ]}
        />

        <div className="mt-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Políticas de Privacidad</h1>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>1. Información que Recopilamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                En Auténtica, recopilamos información personal que nos proporcionas voluntariamente cuando realizas una
                compra, creas una cuenta o te suscribes a nuestro newsletter. Esta información puede incluir:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Dirección de envío y facturación</li>
                <li>Número de teléfono</li>
                <li>Información de pago (procesada de forma segura por nuestros proveedores)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>2. Uso de la Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Utilizamos la información recopilada para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Procesar y completar tus pedidos</li>
                <li>Comunicarnos contigo sobre tu pedido y envío</li>
                <li>Mejorar nuestros productos y servicios</li>
                <li>Enviarte información promocional (solo si has dado tu consentimiento)</li>
                <li>Prevenir fraudes y garantizar la seguridad de nuestra plataforma</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>3. Protección de Datos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra
                acceso no autorizado, pérdida o alteración. Utilizamos encriptación SSL para todas las transacciones y
                almacenamos los datos en servidores seguros.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>4. Compartir Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                No vendemos ni alquilamos tu información personal a terceros. Solo compartimos información con
                proveedores de servicios confiables que nos ayudan a operar nuestro negocio, como procesadores de pago y
                empresas de envío, bajo estrictos acuerdos de confidencialidad.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>5. Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Utilizamos cookies para mejorar tu experiencia de navegación, recordar tus preferencias y analizar el
                tráfico del sitio. Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar
                algunas funcionalidades del sitio.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>6. Tus Derechos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Tienes derecho a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acceder a tu información personal</li>
                <li>Corregir datos inexactos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Oponerte al procesamiento de tus datos</li>
                <li>Retirar tu consentimiento en cualquier momento</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, contáctanos en{" "}
                <a href="mailto:privacidad@autentica.com" className="text-primary hover:underline">
                  privacidad@autentica.com
                </a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Cambios a esta Política</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios
                significativos publicando la nueva política en esta página y actualizando la fecha de "última
                actualización".
              </p>
              <p className="mt-4 text-sm">
                <strong>Última actualización:</strong> Enero 2024
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
