import { Breadcrumb } from "@/components/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TerminosCondicionesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Términos y Condiciones", href: "/terminos-condiciones" },
          ]}
        />

        <div className="mt-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Términos y Condiciones</h1>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>1. Aceptación de Términos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Al acceder y utilizar el sitio web de Auténtica, aceptas estar sujeto a estos términos y condiciones. Si
                no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro sitio web.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>2. Productos y Precios</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Todos los productos mostrados en nuestro sitio web son 100% originales y están sujetos a disponibilidad.
                Los precios pueden cambiar sin previo aviso, pero los cambios no afectarán pedidos ya confirmados.
              </p>
              <p>
                Nos reservamos el derecho de limitar las cantidades de productos que ofrecemos y de rechazar pedidos a
                nuestra discreción.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>3. Proceso de Compra</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Al realizar un pedido, garantizas que:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Eres mayor de 18 años o tienes el consentimiento de un tutor legal</li>
                <li>La información proporcionada es precisa y completa</li>
                <li>Tienes autorización para usar el método de pago seleccionado</li>
              </ul>
              <p className="mt-4">
                Recibirás un correo electrónico de confirmación una vez que tu pedido haya sido procesado exitosamente.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>4. Envíos y Entregas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Los tiempos de entrega estimados son de 3-5 días hábiles para Bogotá y 5-7 días hábiles para otras
                ciudades de Colombia. Estos tiempos son aproximados y pueden variar según la ubicación y disponibilidad.
              </p>
              <p>
                No nos hacemos responsables por retrasos causados por la empresa de mensajería o circunstancias fuera de
                nuestro control.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>5. Devoluciones y Reembolsos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Aceptamos devoluciones dentro de los 30 días posteriores a la recepción del producto si:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>El producto está sin usar y en su empaque original</li>
                <li>Incluye todos los accesorios y documentación</li>
                <li>No es un producto de higiene personal (como labiales o máscaras de pestañas abiertas)</li>
              </ul>
              <p className="mt-4">
                Los reembolsos se procesarán dentro de 5-10 días hábiles después de recibir y verificar el producto
                devuelto.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>6. Propiedad Intelectual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Todo el contenido del sitio web de Auténtica, incluyendo textos, imágenes, logos y diseños, está
                protegido por derechos de autor y otras leyes de propiedad intelectual. No puedes reproducir, distribuir
                o usar este contenido sin nuestro permiso expreso por escrito.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>7. Limitación de Responsabilidad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Auténtica no será responsable por daños indirectos, incidentales o consecuentes que resulten del uso o
                la imposibilidad de usar nuestros productos o servicios. Nuestra responsabilidad máxima se limitará al
                precio de compra del producto en cuestión.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>8. Modificaciones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios
                entrarán en vigor inmediatamente después de su publicación en el sitio web. Es tu responsabilidad
                revisar estos términos periódicamente.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Contacto</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>Si tienes preguntas sobre estos términos y condiciones, contáctanos en:</p>
              <p className="mt-4">
                Email:{" "}
                <a href="mailto:legal@autentica.com" className="text-primary hover:underline">
                  legal@autentica.com
                </a>
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
