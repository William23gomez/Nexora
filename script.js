const products = [
  {
    name: "DJI Mini 5 Pro",
    category: "Dron compacto",
    symbol: "DJI",
    image: "assets/products/Producto_1.jpeg",
    description: "Dron compacto para captura aerea, viajes, contenido visual y vuelos creativos.",
    features: [
      "Diseno ultraligero: Facil de transportar y utilizar en cualquier lugar.",
      "Camara de alta calidad: Captura fotografias y videos con gran nivel de detalle.",
      "Grabacion en 4K: Permite crear videos profesionales y fluidos.",
      "Evitacion de obstaculos: Ayuda a realizar vuelos mas seguros.",
      "Gran autonomia: Ofrece un tiempo de vuelo adecuado para grabaciones prolongadas."
    ]
  },
  {
    name: "Samsung Galaxy Buds 4 Pro",
    category: "Audio inalambrico",
    symbol: "B4",
    image: "assets/products/Producto_2.jpeg",
    description: "Audifonos premium para llamadas, musica, concentracion y uso diario.",
    features: [
      "Sonido envolvente: Brinda una experiencia de audio clara e inmersiva.",
      "Cancelacion activa de ruido: Reduce los sonidos externos para escuchar mejor.",
      "Diseno comodo: Se adapta al oido para utilizarlos durante varias horas.",
      "Conexion inalambrica: Permite escuchar musica sin cables.",
      "Bateria duradera: Ofrece varias horas de reproduccion y comodidad."
    ]
  },
  {
    name: "Samsung Galaxy S26 Ultra",
    category: "Smartphone premium",
    symbol: "S26",
    image: "assets/products/Producto_3.jpeg",
    description: "Telefono de gama alta para productividad, fotografia, video y multitarea.",
    features: [
      "Pantalla de alta resolucion: Ofrece imagenes brillantes, nitidas y detalladas.",
      "Camara profesional: Permite capturar fotografias de gran calidad.",
      "Procesador potente: Facilita el uso de aplicaciones exigentes y videojuegos.",
      "Bateria de larga duracion: Permite utilizar el equipo durante todo el dia.",
      "Diseno premium: Combina elegancia, resistencia y tecnologia avanzada."
    ]
  },
  {
    name: "Samsung OLED 48' S83H",
    category: "Televisor OLED",
    symbol: "TV",
    image: "assets/products/Producto_4.jpeg",
    description: "Pantalla OLED de 48 pulgadas para entretenimiento, presentaciones y contenido visual.",
    features: [
      "Pantalla OLED: Proporciona colores intensos y negros profundos.",
      "Tamano de 48 pulgadas: Ideal para entretenimiento, trabajo y videojuegos.",
      "Alta calidad de imagen: Muestra detalles precisos y realistas.",
      "Diseno moderno: Se adapta facilmente a espacios de oficina o entretenimiento.",
      "Experiencia visual inmersiva: Ofrece una imagen amplia y envolvente."
    ]
  },
  {
    name: "Dron Profesional DJI Air 3",
    category: "Dron profesional",
    symbol: "AIR",
    image: "assets/products/Producto_5.jpeg",
    description: "Dron avanzado para produccion audiovisual, inspeccion y captura aerea profesional.",
    features: [
      "Camara dual: Permite realizar tomas amplias y acercamientos detallados.",
      "Grabacion profesional: Captura videos de alta calidad para proyectos audiovisuales.",
      "Vuelo estable: Mantiene imagenes fluidas incluso durante el movimiento.",
      "Deteccion de obstaculos: Aumenta la seguridad durante el vuelo.",
      "Larga autonomia: Permite realizar sesiones de grabacion mas extensas."
    ]
  },
  {
    name: "iPhone 17 Pro Max",
    category: "Smartphone premium",
    symbol: "17",
    image: "assets/products/Producto_6.jpeg",
    description: "Smartphone de alto rendimiento para fotografia, video, trabajo movil y ecosistema Apple.",
    features: [
      "Pantalla avanzada: Ofrece una visualizacion brillante y de gran calidad.",
      "Camaras profesionales: Permite tomar fotografias y videos con excelente detalle.",
      "Alto rendimiento: Ejecuta aplicaciones y juegos de manera rapida.",
      "Diseno elegante: Combina materiales resistentes con una apariencia moderna.",
      "Seguridad avanzada: Protege la informacion mediante sistemas de identificacion biometrica."
    ]
  },
  {
    name: "Estacion de Trabajo Dell Precision 3680",
    category: "Workstation",
    symbol: "DELL",
    image: "assets/products/Producto_7.jpeg",
    description: "Equipo de escritorio profesional para diseno, ingenieria, datos y cargas exigentes.",
    features: [
      "Alto rendimiento: Disenada para ejecutar programas profesionales y exigentes.",
      "Gran capacidad de memoria: Facilita el trabajo con multiples aplicaciones al mismo tiempo.",
      "Almacenamiento rapido: Permite abrir archivos y programas con mayor velocidad.",
      "Graficos profesionales: Ideal para diseno, edicion de video y modelado 3D.",
      "Construccion resistente: Pensada para un uso empresarial continuo."
    ]
  },
  {
    name: "Sistema de Captura Facial SENA",
    category: "Captura facial",
    symbol: "3D",
    image: "assets/products/Producto_8.jpeg",
    description: "Sistema orientado a registrar expresiones faciales para animacion, formacion y produccion digital.",
    features: [
      "Reconocimiento facial: Permite identificar personas mediante sus caracteristicas faciales.",
      "Registro rapido: Facilita la captura de informacion de los usuarios.",
      "Mayor seguridad: Ayuda a controlar el acceso a espacios o sistemas.",
      "Tecnologia innovadora: Integra herramientas digitales para procesos de identificacion.",
      "Uso institucional: Puede apoyar procesos de control, registro y seguimiento."
    ]
  },
  {
    name: "Camara Sony Alpha 7 IV (A7IV)",
    category: "Camara mirrorless",
    symbol: "A7",
    image: "assets/products/Producto_9.jpeg",
    description: "Camara hibrida para fotografia profesional, video, retrato, producto y produccion de contenido.",
    features: [
      "Sensor de alta resolucion: Captura fotografias con gran detalle y nitidez.",
      "Grabacion en 4K: Permite producir videos de aspecto profesional.",
      "Enfoque automatico inteligente: Mantiene el enfoque sobre personas y objetos en movimiento.",
      "Excelente rendimiento con poca luz: Permite tomar fotografias en ambientes oscuros.",
      "Diseno versatil: Ideal para fotografia, video, eventos y creacion de contenido."
    ]
  },
  {
    name: "Servidor Rack HP ProLiant DL20",
    category: "Servidor rack",
    symbol: "HP",
    image: "assets/products/Producto_10.jpeg",
    description: "Servidor compacto para infraestructura, archivos, servicios internos y pequenas empresas.",
    features: [
      "Formato compacto: Su diseno permite instalarlo facilmente en un rack empresarial.",
      "Alto rendimiento: Puede manejar aplicaciones, bases de datos y servicios de red.",
      "Almacenamiento ampliable: Permite aumentar la capacidad segun las necesidades.",
      "Seguridad empresarial: Incluye funciones para proteger y administrar la informacion.",
      "Funcionamiento continuo: Esta disenado para trabajar de forma estable en empresas y centros de datos."
    ]
  }
];

const productGrid = document.getElementById("product-grid");
const modal = document.getElementById("product-modal");
const modalCategory = document.getElementById("modal-category");
const modalSideCategory = document.getElementById("modal-side-category");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalFeatures = document.getElementById("modal-features");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");

function renderProducts() {
  productGrid.innerHTML = products.map((product, index) => `
    <article class="product">
      <div class="product-visual">
        <span class="product-tag">${product.category}</span>
        <img class="product-photo" src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </div>
      <button class="btn product-action" type="button" data-product="${index}">Ver caracteristicas</button>
    </article>
  `).join("");
}

function openProduct(index) {
  const product = products[index];
  modalCategory.textContent = product.category;
  modalSideCategory.textContent = product.category;
  modalTitle.textContent = product.name;
  modalDescription.textContent = product.description;
  modalImage.src = product.image;
  modalImage.alt = product.name;
  modalFeatures.innerHTML = product.features.map((feature, featureIndex) => `
    <li>
      <span>${String(featureIndex + 1).padStart(2, "0")}</span>
      <p>${feature}</p>
    </li>
  `).join("");
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function hideModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.addEventListener("click", event => {
  const productButton = event.target.closest("[data-product]");

  if (productButton) {
    openProduct(Number(productButton.dataset.product));
  }

  if (event.target === modal) {
    hideModal();
  }
});

closeModal.addEventListener("click", hideModal);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    hideModal();
  }
});

renderProducts();
