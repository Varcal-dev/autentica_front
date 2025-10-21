import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { Heart, Award, Users, Sparkles } from "lucide-react"

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: "Inicio", href: "/" },
            { label: "Sobre Nosotros", href: "/sobre-nosotros" },
          ]}
        />

        <div className="mt-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Sobre Auténtica</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Somos más que una tienda de belleza. Somos una comunidad que celebra la autenticidad y empodera a cada
              mujer a sentirse hermosa en su propia piel.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/elegant-makeup-products-display-with-lipsticks-and.jpg"
                alt="Productos Auténtica"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Nuestra Historia</h2>
              <p className="text-muted-foreground">
                Auténtica nació en 2020 con una visión clara: ofrecer productos de belleza de la más alta calidad que
                realcen la belleza natural de cada mujer. Creemos que la verdadera belleza viene de sentirse auténtica y
                segura de ti misma.
              </p>
              <p className="text-muted-foreground">
                Desde nuestros inicios, hemos trabajado con las mejores marcas internacionales y locales para traerte
                una selección curada de productos que no solo embellecen, sino que también cuidan tu piel.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Misión y Visión</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Nuestra Misión</h3>
                  <p className="text-muted-foreground">
                    Empoderar a cada mujer para que descubra y celebre su belleza auténtica, ofreciendo productos de
                    calidad excepcional y una experiencia de compra personalizada que inspire confianza y autoexpresión.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Nuestra Visión</h3>
                  <p className="text-muted-foreground">
                    Ser la tienda de belleza líder en Colombia, reconocida por nuestra autenticidad, calidad y
                    compromiso con el bienestar de nuestras clientas, creando una comunidad donde cada mujer se sienta
                    valorada y hermosa.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Calidad</h3>
                  <p className="text-muted-foreground">
                    Solo ofrecemos productos de las mejores marcas, garantizando autenticidad y resultados
                    excepcionales.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Autenticidad</h3>
                  <p className="text-muted-foreground">
                    Celebramos la individualidad y promovemos la belleza natural sin estereotipos ni presiones.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Comunidad</h3>
                  <p className="text-muted-foreground">
                    Construimos una comunidad de apoyo donde cada mujer puede compartir, aprender y crecer.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Únete a Nuestra Comunidad</h2>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Descubre productos increíbles, tips de belleza y ofertas exclusivas. Sé parte de Auténtica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/productos">
                  <Button variant="secondary" size="lg">
                    Explorar Productos
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Contáctanos
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
