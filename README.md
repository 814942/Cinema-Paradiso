# 🎬 Cinema Paradiso

**CineParadiso** es una aplicación web interactiva construida con React, Vite, TailwindCSS y la API pública de [The Movie Database (TMDB)](https://www.themoviedb.org/). Permite explorar trailers, películas populares, continuar viendo, y navegar por géneros — todo con una interfaz moderna, inspirada en plataformas de streaming.

[![Ver Demo](https://img.shields.io/badge/Ver-Demo-blue?style=for-the-badge)](https://cinema-paradiso-inky.vercel.app/)
[![Storybook](https://img.shields.io/badge/Ver-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://cinema-paradiso-storybook.vercel.app/?path=/docs/atoms-button--docs)
[![LinkedIn](https://img.shields.io/badge/Conectar-LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pablo-garay-dev/)

---

## 🚀 Tech Stack

- ⚛️ React 19 (Server Components)
- 💨 TailwindCSS
- 🔀 React Router DOM
- 🛠️ Vite
- 🌐 TMDB API v3
- 📦 TypeScript
- 📚 Storybook (para documentación de componentes)

## 📖 Storybook

La documentación de los componentes está disponible en Storybook, donde puedes explorar y probar cada componente de forma aislada.

### 🚀 Ver Storybook Online

[![Storybook](https://img.shields.io/badge/Ver_Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://cinema-paradiso-storybook.vercel.app/?path=/docs/atoms-button--docs)

### 🛠️ Ejecutar Storybook localmente

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia Storybook:
   ```bash
   npm run storybook
   ```
4. Abre [http://localhost:6006](http://localhost:6006) en tu navegador

### 📦 Componentes documentados

- 🎨 **Atoms**: Componentes atómicos reutilizables

  - Botones
  - Chips
  - Imágenes
  - ...y más

- 🧩 **Molecules**: Componentes compuestos

  - Cards
  - Secciones
  - ...y más

---

## 📸 Funcionalidades

- 🎥 Sección de trailers actualizados
- 🎞️ Navegación por géneros
- ⭐ Vista de películas populares
- ⏯️ Continuar viendo
- 📱 Responsive design (pronto)
- 🧠 Custom hooks para llamadas a la API
- 📦 Arquitectura basada en **Atomic Design**

---

## 🧪 Cómo correr el proyecto localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/cinerocker.git
cd cinerocker
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

```bash
VITE_API_ACCESS_KEY=TMBP_ACCESS_KEY
VITE_API_BASE_URL=TMDB_API_URL
VITE_API_IMAGE_BASE_URL=TMDB_IMAGE_URL

```

```bash
npm run dev
```

## Deployment

[![Deploy to Vercel](https://vercel.com/button)](https://cinema-paradiso-inky.vercel.app/)

# 🧩 Roadmap

✅ Header de navegación

✅ Fetch de películas populares, trailers y géneros

✅ Grid adaptable para Hero, Continue Watching, Popular

⏳ Vista individual de película

⏳ Autenticación con TMDB y manejo de watchlist

⏳ Filtro por género

⏳ Dark mode

---

🤘 by
Pablo Garay
