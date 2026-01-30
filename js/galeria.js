const galeria = document.getElementById("galeria");

const imagenes = [
  {
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
    titulo: "Reforestación Sostenible",
    descripcion: "Plantación de árboles para combatir el cambio climático y restaurar ecosistemas",
    categoria: "Naturaleza"
  },
  {
    url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    titulo: "Energía Solar",
    descripcion: "Fuentes de energía limpia y renovable para un futuro sostenible",
    categoria: "Energía"
  },
  {
    url: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
    titulo: "Reciclaje Circular",
    descripcion: "Gestión responsable de residuos y economía circular",
    categoria: "Residuos"
  },
  {
    url: "https://images.unsplash.com/photo-1569163139394-de4798aa62b1?w=600&h=400&fit=crop",
    titulo: "Conservación Marina",
    descripcion: "Protección de océanos y ecosistemas marinos vitales",
    categoria: "Océanos"
  },
  {
    url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
    titulo: "Agricultura Ecológica",
    descripcion: "Cultivos orgánicos y prácticas agrícolas sostenibles",
    categoria: "Agricultura"
  },
  {
    url: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop",
    titulo: "Biodiversidad",
    descripcion: "Preservación de especies y hábitats naturales únicos",
    categoria: "Vida Silvestre"
  },
  {
    url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
    titulo: "Movilidad Verde",
    descripcion: "Transporte sostenible y reducción de emisiones urbanas",
    categoria: "Movilidad"
  },
  {
    url: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=400&fit=crop",
    titulo: "Tecnología Limpia",
    descripcion: "Innovación tecnológica al servicio del medio ambiente",
    categoria: "Tecnología"
  }
];

imagenes.forEach((item, index) => {
  const card = `
    <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div class="card galeria-card h-100 animate-fade-in" style="animation-delay: ${index * 0.1}s">
        <img src="${item.url}" class="card-img-top" alt="${item.titulo}" loading="lazy">
        <div class="card-body d-flex flex-column">
          <div class="mb-auto">
            <span class="badge-eco mb-3 d-inline-block">${item.categoria}</span>
            <h5 class="card-title">${item.titulo}</h5>
            <p class="card-text">${item.descripcion}</p>
          </div>
          <div class="mt-3 text-center">
            <i class="bi bi-heart text-danger me-2"></i>
            <i class="bi bi-share text-primary"></i>
          </div>
        </div>
      </div>
    </div>
  `;
  galeria.innerHTML += card;
});
