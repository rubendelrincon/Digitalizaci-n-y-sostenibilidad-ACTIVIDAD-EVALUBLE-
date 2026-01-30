# 📋 MEMORIA DEL PROYECTO
## EcoData Solutions - Digitalización y Sostenibilidad

---

## 🎯 RESUMEN EJECUTIVO

**Proyecto:** Sistema web para gestión de indicadores empresariales  
**Temática:** Digitalización y Sostenibilidad  
**Empresa ficticia:** EcoData Solutions S.L.  
**Tecnologías:** HTML5, CSS3, JavaScript, Bootstrap 5, ASP.NET Core Web API  

---

## 📌 OBJETIVOS DEL PROYECTO

1. **Digitalización:** Centralizar datos empresariales mediante API REST
2. **Gestión de datos:** CRUD completo de indicadores (Crear, Leer, Actualizar, Eliminar)
3. **Sostenibilidad:** Enfoque en métricas ambientales y de impacto social
4. **Usabilidad:** Interfaz responsive y accesible desde cualquier dispositivo

---

## 🏗️ ARQUITECTURA TÉCNICA

### **Frontend (Cliente)**
- **HTML5 semántico** → Estructura clara y accesible
- **Bootstrap 5** → Diseño responsive y componentes modernos
- **JavaScript vanilla** → Lógica de cliente sin dependencias pesadas
- **CSS personalizado** → Identidad visual con gradientes verdes

### **Backend (Servidor)**
- **API REST** en ASP.NET Core (.NET 7)
- **Endpoint:** `https://localhost:7093/api/Indicadores`
- **Operaciones:** GET, POST, PUT, DELETE

### **Comunicación**
- **Fetch API** → Llamadas asíncronas al servidor
- **JSON** → Formato de intercambio de datos
- **async/await** → Manejo moderno de promesas

---


## ⚙️ FUNCIONALIDADES PRINCIPALES

### **1. Página Principal (index.html)**
✅ Hero section con gradiente verde moderno  
✅ Presentación de las 3 áreas clave:
   - Digitalización
   - Análisis de datos
   - Sostenibilidad  
✅ Navegación clara hacia las secciones funcionales

### **2. Gestión de Indicadores (indicadores.html)**
✅ **Listar:** Tabla dinámica con datos de la API  
✅ **Filtrar:** Por tipo (Digitalización/Sostenibilidad) y nombre  
✅ **Crear:** Formulario para nuevos indicadores  
✅ **Editar:** Modificar registros existentes  
✅ **Eliminar:** Borrado con confirmación  
✅ **Ver más:** Modal con detalles completos  

**Campos de un indicador:**
- Nombre
- Tipo (Digitalización / Sostenibilidad)
- Ámbito
- Categoría
- Valor

### **3. Galería (galeria.html)**
✅ Tarjetas con imágenes SVG ambientales  
✅ Efectos hover (elevación y zoom)  
✅ Badges con categorías  
✅ Diseño responsive en grid  

---

## 🔌 INTEGRACIÓN CON LA API

### **Archivo: api-service.js**

| Función | Método HTTP | Descripción |
|---------|-------------|-------------|
| `getIndicadores()` | GET | Obtiene todos los indicadores |
| `crearIndicador(data)` | POST | Crea un nuevo indicador |
| `actualizarIndicador(id, data)` | PUT | Actualiza un indicador existente |
| `eliminarIndicador(id)` | DELETE | Elimina un indicador |

**Características técnicas:**
- Manejo de errores con try-catch
- Validación de respuestas HTTP
- Console.log para debugging
- Headers con Content-Type: application/json

---

## 🎨 DISEÑO Y UX

### **Paleta de colores**
- **Verde principal:** #2e7d32 (sostenibilidad)
- **Gradientes:** De verde oscuro a claro
- **Fondo:** #f4f7f6 (gris claro neutro)
- **Blanco:** Para tarjetas y contenido

### **Efectos interactivos**
- **Hover en tarjetas:** Elevación 3D con translateY
- **Hover en iconos:** Rotación y escala
- **Botones:** Sombras dinámicas
- **Transiciones:** 0.3s ease para suavidad

### **Responsive Design**
- Mobile-first con Bootstrap grid
- Breakpoints: col-lg-3, col-md-6, col-sm-12
- Navbar colapsable en móviles

---

## 🌱 ASPECTOS DE SOSTENIBILIDAD

1. **Temática verde:** Todo el diseño gira en torno a la sostenibilidad
2. **Imágenes SVG:** Formato ligero y escalable (menos consumo de datos)
3. **Indicadores ambientales:** Métricas de huella de carbono, energía renovable, etc.
4. **Galería educativa:** Iconos de reciclaje, reforestación, planeta tierra

---

## 🚀 PUNTOS CLAVE PARA DEFENDER

### **1. Competencias técnicas demostradas**
✅ Consumo de API REST  
✅ CRUD completo funcional  
✅ JavaScript asíncrono (Fetch, async/await)  
✅ Manipulación del DOM  
✅ Diseño responsive con frameworks modernos  

### **2. Buenas prácticas**
✅ Separación de responsabilidades (HTML, CSS, JS en archivos distintos)  
✅ Código modular y reutilizable  
✅ Nombres de variables descriptivos  
✅ Comentarios y estructura clara  

### **3. Valor añadido**
✅ Diseño profesional y moderno  
✅ Experiencia de usuario pulida  
✅ Temática actual y relevante (sostenibilidad)  
✅ Funcionalidad completa más allá de requisitos mínimos  

---

## 🐛 POSIBLES PREGUNTAS Y RESPUESTAS

**P: ¿Por qué usas fetch en lugar de axios?**  
R: Fetch es nativo del navegador, no requiere dependencias externas y es perfectamente válido para este proyecto. Es más ligero.

**P: ¿Cómo manejas los errores de la API?**  
R: Con bloques try-catch, validación de res.ok, y mensajes de error informativos en consola y alerts.

**P: ¿El diseño es responsive?**  
R: Sí, usa Bootstrap 5 con sistema de grid responsive (col-lg, col-md, col-sm) y se adapta a móviles, tablets y escritorio.

**P: ¿Qué pasaría si la API no está disponible?**  
R: El fetch lanzaría un error que se captura en el catch, mostrando un mensaje al usuario. Se podría mejorar con datos mock de respaldo.

**P: ¿Por qué esta temática de sostenibilidad?**  
R: Es un tema de actualidad empresarial. Cada vez más empresas necesitan medir y reportar indicadores ESG (Environmental, Social, Governance).

---

## 📊 DEMOSTRACIÓN RECOMENDADA

1. **Mostrar la landing** → Diseño profesional, hero atractivo
2. **Navegar a Indicadores** → Tabla funcionando con datos de la API
3. **Crear un indicador** → Formulario funcional
4. **Filtrar por tipo** → Interactividad en tiempo real
5. **Editar un registro** → CRUD completo
6. **Ver detalles en modal** → UX avanzada
7. **Mostrar la galería** → Efectos visuales y diseño

---

## 💡 CONCLUSIÓN

Este proyecto demuestra capacidad para:
- Integrar frontend con backend mediante API REST
- Crear interfaces modernas y funcionales
- Aplicar conceptos de sostenibilidad digital
- Desarrollar aplicaciones web completas con tecnologías actuales

**Resultado:** Aplicación web profesional lista para producción con fines educativos/demostrativos.

---

*EcoData Solutions S.L. © 2026 · Digitalización y Sostenibilidad*
