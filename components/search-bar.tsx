"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Link from "next/link"

// Mock product data for search
const allProducts = [
  {
    id: "1",
    name: "Labial Mate Premium",
    category: "Maquillaje",
    price: 29.99,
    image: "/premium-matte-lipstick-product.jpg",
  },
  { id: "2", name: "Base Líquida HD", category: "Maquillaje", price: 45.99, image: "/hd-liquid-foundation-makeup.jpg" },
  { id: "3", name: "Paleta de Sombras", category: "Maquillaje", price: 35.99, image: "/eyeshadow-palette-makeup.jpg" },
  {
    id: "4",
    name: "Serum Facial Vitamin C",
    category: "Cuidado",
    price: 52.99,
    image: "/vitamin-c-facial-serum-skincare.jpg",
  },
  {
    id: "5",
    name: "Crema Hidratante",
    category: "Cuidado",
    price: 38.99,
    image: "/skincare-products-with-creams-and-serums.jpg",
  },
  {
    id: "6",
    name: "Perfume Floral",
    category: "Fragancias",
    price: 65.99,
    image: "/elegant-perfume-bottles-collection.jpg",
  },
]

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<typeof allProducts>([])
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.length > 0) {
      const filtered = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filtered)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar productos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          className="pl-10 pr-10"
          aria-label="Buscar productos"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("")
              setIsOpen(false)
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Limpiar búsqueda"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <Card className="absolute top-full mt-2 w-full max-h-96 overflow-y-auto z-50 shadow-lg">
          <div className="p-2">
            {results.map((product) => (
              <Link
                key={product.id}
                href={`/productos/${product.id}`}
                onClick={() => {
                  setIsOpen(false)
                  setQuery("")
                }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
              >
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-medium text-sm">{product.name}</p>
                  <p className="text-xs text-muted-foreground">{product.category}</p>
                </div>
                <span className="font-semibold text-primary">${product.price}</span>
              </Link>
            ))}
          </div>
        </Card>
      )}

      {isOpen && query.length > 0 && results.length === 0 && (
        <Card className="absolute top-full mt-2 w-full z-50 shadow-lg">
          <div className="p-4 text-center text-muted-foreground">No se encontraron productos para "{query}"</div>
        </Card>
      )}
    </div>
  )
}
