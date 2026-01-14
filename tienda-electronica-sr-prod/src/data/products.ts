export type Product = {
  id: string;
  sku: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  shortDescription: string;
  description: string;
  price: number;
  currency: "UYU" | "USD";
  images: string[];
  stockQty: number;
  isActive: boolean;
  warrantyMonths?: number;
  specs: Record<string, string>;
};

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    sku: "NB-ACER-001",
    slug: "notebook-acer-aspire-5",
    name: "Notebook Acer Aspire 5 15.6”",
    brand: "Acer",
    category: "Notebooks",
    shortDescription: "Notebook para estudio y trabajo, SSD y buen rendimiento diario.",
    description:
      "Equipo equilibrado para tareas diarias, oficina, estudio y navegación. Ideal para quienes buscan una notebook confiable.",
    price: 28990,
    currency: "UYU",
    images: ["https://picsum.photos/seed/acer1/900/700", "https://picsum.photos/seed/acer2/900/700"],
    stockQty: 5,
    isActive: true,
    warrantyMonths: 12,
    specs: { RAM: "8GB", Almacenamiento: "256GB SSD", Pantalla: "15.6 FHD", Procesador: "Intel i5" }
  },
  {
    id: "p2",
    sku: "NB-LEN-002",
    slug: "notebook-lenovo-ideapad-3",
    name: "Notebook Lenovo IdeaPad 3 15”",
    brand: "Lenovo",
    category: "Notebooks",
    shortDescription: "Notebook liviana, buena autonomía y desempeño para oficina.",
    description:
      "Perfecta para trabajo remoto y tareas cotidianas. Diseño simple y rendimiento estable.",
    price: 25990,
    currency: "UYU",
    images: ["https://picsum.photos/seed/len1/900/700"],
    stockQty: 2,
    isActive: true,
    warrantyMonths: 12,
    specs: { RAM: "8GB", Almacenamiento: "512GB SSD", Pantalla: "15.6 HD", Procesador: "Intel i3" }
  },
  {
    id: "p3",
    sku: "MOU-LOG-001",
    slug: "mouse-logitech-m185",
    name: "Mouse Logitech M185 Inalámbrico",
    brand: "Logitech",
    category: "Accesorios",
    shortDescription: "Mouse inalámbrico confiable para uso diario.",
    description:
      "Conexión estable, ideal para notebook o escritorio. Plug & play.",
    price: 790,
    currency: "UYU",
    images: ["https://picsum.photos/seed/mouse1/900/700"],
    stockQty: 0,
    isActive: true,
    specs: { Conexion: "Wireless 2.4GHz", Bateria: "AA", DPI: "1000" }
  },
  {
    id: "p4",
    sku: "KB-RED-001",
    slug: "teclado-redragon-k552",
    name: "Teclado mecánico Redragon K552",
    brand: "Redragon",
    category: "Accesorios",
    shortDescription: "Teclado mecánico compacto, robusto y cómodo.",
    description:
      "Buena respuesta táctil, ideal para productividad y gaming casual.",
    price: 2190,
    currency: "UYU",
    images: ["https://picsum.photos/seed/kb1/900/700"],
    stockQty: 7,
    isActive: true,
    specs: { Tipo: "Mecánico", Layout: "Compacto", Conexion: "USB" }
  },
  {
    id: "p5",
    sku: "AUD-JBL-001",
    slug: "auriculares-jbl-tune-510bt",
    name: "Auriculares JBL Tune 510BT",
    brand: "JBL",
    category: "Audio",
    shortDescription: "Bluetooth, livianos y con buen sonido.",
    description:
      "Pensados para uso diario, llamadas y música. Autonomía sólida.",
    price: 3490,
    currency: "UYU",
    images: ["https://picsum.photos/seed/jbl1/900/700"],
    stockQty: 4,
    isActive: true,
    specs: { Conexion: "Bluetooth", Microfono: "Sí", Bateria: "40h aprox" }
  },
  {
    id: "p6",
    sku: "RT-TP-001",
    slug: "router-tp-link-archer-c6",
    name: "Router TP-Link Archer C6",
    brand: "TP-Link",
    category: "Redes",
    shortDescription: "WiFi estable para hogar y oficina pequeña.",
    description:
      "Cobertura sólida y buena relación calidad/precio.",
    price: 2990,
    currency: "UYU",
    images: ["https://picsum.photos/seed/tplink1/900/700"],
    stockQty: 3,
    isActive: true,
    specs: { WiFi: "Dual Band", Puertos: "4 LAN", Velocidad: "AC1200" }
  },
  {
    id: "p7",
    sku: "CAB-USBC-001",
    slug: "cable-usb-c-2m",
    name: "Cable USB-C 2m Reforzado",
    brand: "Genérico",
    category: "Accesorios",
    shortDescription: "Cable reforzado para carga y datos.",
    description:
      "Ideal para uso diario. Compatible con carga rápida (según cargador).",
    price: 390,
    currency: "UYU",
    images: ["https://picsum.photos/seed/cable1/900/700"],
    stockQty: 12,
    isActive: true,
    specs: { Largo: "2m", Tipo: "USB-C", Uso: "Carga/Datos" }
  },
  {
    id: "p8",
    sku: "SSD-KIN-001",
    slug: "ssd-kingston-480gb",
    name: "SSD Kingston 480GB",
    brand: "Kingston",
    category: "Componentes",
    shortDescription: "Actualizá tu PC con un SSD rápido y confiable.",
    description:
      "Mejora notable en tiempos de arranque y carga de programas.",
    price: 2490,
    currency: "UYU",
    images: ["https://picsum.photos/seed/ssd1/900/700"],
    stockQty: 6,
    isActive: true,
    specs: { Capacidad: "480GB", Interfaz: "SATA", Formato: "2.5”" }
  },
  {
    id: "p9",
    sku: "RAM-CRU-001",
    slug: "memoria-ram-8gb-ddr4",
    name: "Memoria RAM 8GB DDR4",
    brand: "Crucial",
    category: "Componentes",
    shortDescription: "RAM DDR4 8GB para mejorar multitarea.",
    description:
      "Aumenta el rendimiento general y la fluidez.",
    price: 1590,
    currency: "UYU",
    images: ["https://picsum.photos/seed/ram1/900/700"],
    stockQty: 1,
    isActive: true,
    specs: { Tipo: "DDR4", Capacidad: "8GB", Velocidad: "2666MHz" }
  },
  {
    id: "p10",
    sku: "MON-LG-001",
    slug: "monitor-lg-24-ips",
    name: "Monitor LG 24” IPS",
    brand: "LG",
    category: "Monitores",
    shortDescription: "Panel IPS, ideal para trabajo y estudio.",
    description:
      "Buen color y ángulos de visión. Perfecto para escritorio.",
    price: 8990,
    currency: "UYU",
    images: ["https://picsum.photos/seed/mon1/900/700"],
    stockQty: 0,
    isActive: true,
    specs: { Tamaño: "24”", Panel: "IPS", Resolucion: "1080p" }
  },
  {
    id: "p11",
    sku: "CAM-LOG-001",
    slug: "webcam-logitech-c920",
    name: "Webcam Logitech C920",
    brand: "Logitech",
    category: "Accesorios",
    shortDescription: "Videollamadas nítidas y buen micrófono.",
    description:
      "Ideal para trabajo remoto, clases y streaming básico.",
    price: 4990,
    currency: "UYU",
    images: ["https://picsum.photos/seed/cam1/900/700"],
    stockQty: 2,
    isActive: true,
    specs: { Resolucion: "1080p", Microfono: "Sí", Conexion: "USB" }
  },
  {
    id: "p12",
    sku: "SPK-ED-001",
    slug: "parlantes-edifier-r1280t",
    name: "Parlantes Edifier R1280T",
    brand: "Edifier",
    category: "Audio",
    shortDescription: "Sonido balanceado para escritorio.",
    description:
      "Excelente opción para música, videos y uso diario.",
    price: 10990,
    currency: "UYU",
    images: ["https://picsum.photos/seed/ed1/900/700"],
    stockQty: 3,
    isActive: true,
    specs: { Tipo: "2.0", Entrada: "RCA", Potencia: "42W RMS" }
  }
];
