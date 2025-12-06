# Proyecto React - Módulo 4.1 Frameworks

Aplicación React desarrollada con Vite, TypeScript y Material-UI que integra la API de GitHub y Rick & Morty.

## 📋 Tabla de Contenidos

- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Gestión de Estado con Context API](#-gestión-de-estado-con-context-api)
- [Rutas de la Aplicación](#-rutas-de-la-aplicación)
- [Scripts Disponibles](#-scripts-disponibles)

## 📁 Estructura del Proyecto

```
Modulo_4.1_React/
├── src/
│   ├── app.tsx                 # Componente raíz de la aplicación
│   ├── index.tsx               # Punto de entrada de la aplicación
│   ├── styles.css              # Estilos globales
│   │
│   ├── layouts/                # Layouts de la aplicación
│   │   ├── app/                # Layout principal con header
│   │   └── auth.layout.tsx     # Layout para autenticación
│   │
│   ├── pods/                   # Módulos funcionales (lógica de negocio)
│   │   ├── login/              # Gestión de login
│   │   │   ├── login.context.tsx
│   │   │   ├── login.component.tsx
│   │   │   └── ...
│   │   │
│   │   ├── organization/       # Gestión de organizaciones
│   │   │   ├── organization.context.tsx
│   │   │   └── ...
│   │   │
│   │   ├── list/               # Listado de miembros de GitHub
│   │   │   ├── list.component.tsx
│   │   │   ├── list.mappers.ts
│   │   │   └── api/
│   │   │
│   │   ├── detail/             # Detalle de miembro de GitHub
│   │   │
│   │   └── rickMorty/          # Funcionalidad Rick & Morty
│   │       ├── searchCharacter/
│   │       │   └── searchCharacter.context.tsx
│   │       ├── list/
│   │       └── detail/
│   │
│   ├── scenes/                 # Páginas/Vistas de la aplicación
│   │   ├── LoginScene.tsx
│   │   ├── ListScene.tsx
│   │   ├── DetailScene.tsx
│   │   ├── ListRickMortyScene.tsx
│   │   └── DetailRickMortyScene.tsx
│   │
│   └── router/                 # Configuración de rutas
│       ├── app.router.tsx
│       └── routes.ts
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### Organización por Capas

El proyecto sigue una arquitectura en capas:

- **`scenes/`**: Componentes de página que representan las diferentes vistas de la aplicación
- **`pods/`**: Módulos funcionales que contienen la lógica de negocio, componentes, contextos y llamadas a API
- **`layouts/`**: Plantillas de diseño que envuelven las páginas
- **`router/`**: Configuración de rutas y navegación

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos para ejecutar el proyecto en local

1. **Clonar el repositorio** (si aplica):

   ```bash
   git clone <url-del-repositorio>
   cd Modulo_4.1_React
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:

   ```bash
   npm start
   ```

   El servidor se iniciará en `http://localhost:5173` (puerto por defecto de Vite)

4. **Compilar para producción**:

   ```bash
   npm run build
   ```

5. **Previsualizar la build de producción**:
   ```bash
   npm run preview
   ```

## 🔄 Gestión de Estado con Context API

El proyecto utiliza **React Context API** para gestionar el estado global de la aplicación. Se han implementado tres contextos principales:

### 1. LoginContext

**Ubicación**: `src/pods/login/login.context.tsx`

**Propósito**: Almacenar y gestionar el nombre de usuario logueado.

**Características**:

- Estado inicial: cadena vacía `""`
- Persiste durante toda la sesión de la aplicación
- Accesible desde cualquier componente hijo del `LoginProvider`

### 2. OrganizationContext

**Ubicación**: `src/pods/organization/organization.context.tsx`

**Propósito**: Gestionar la organización de GitHub seleccionada para consultar sus miembros.

**Características**:

- Estado inicial: `"lemoncode"`
- Se utiliza en las llamadas a la API de GitHub para obtener miembros de la organización
- Permite cambiar dinámicamente la organización consultada

### 3. CharacterContext

**Ubicación**: `src/pods/rickMorty/searchCharacter/searchCharacter.context.tsx`

**Propósito**: Gestionar el filtro de búsqueda de personajes de Rick & Morty.

**Características**:

- Estado inicial: cadena vacía `""`
- Se utiliza como parámetro de búsqueda en la API de Rick & Morty
- Permite filtrar personajes por nombre

### Jerarquía de Providers

Los contextos están anidados en el siguiente orden en `app.router.tsx`:

```typescript
<LoginProvider>
  <OrganizationProvider>
    <CharacterProvider>
      <Router>
        {/* Rutas de la aplicación */}
      </Router>
    </CharacterProvider>
  </OrganizationProvider>
</LoginProvider>
```

Esta jerarquía garantiza que todos los componentes de la aplicación tengan acceso a los tres contextos.

## 🗺 Rutas de la Aplicación

El proyecto utiliza **React Router DOM** para la navegación. Las rutas están definidas en `src/router/routes.ts`:

| Ruta              | Componente             | Descripción                             |
| ----------------- | ---------------------- | --------------------------------------- |
| `/`               | `LoginScene`           | Página de inicio/login                  |
| `/list`           | `ListScene`            | Listado de miembros de GitHub           |
| `/detail/:login`  | `DetailScene`          | Detalle de un miembro de GitHub         |
| `/rick-morty`     | `ListRickMortyScene`   | Listado de personajes de Rick & Morty   |
| `/rick-morty/:id` | `DetailRickMortyScene` | Detalle de un personaje de Rick & Morty |

## 📜 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm start

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview

# Formatear código con Prettier
npm run format

# Verificar formato de código
npm run format:check
```

## 🌐 APIs Utilizadas

### GitHub API

- **Endpoint**: `https://api.github.com/orgs/{organization}/members`
- **Uso**: Obtener listado de miembros de una organización
- **Autenticación**: No requerida (límite de rate más bajo)

### Rick & Morty API

- **Endpoint**: `https://rickandmortyapi.com/api/character`
- **Uso**: Obtener personajes de la serie
- **Parámetros**: `page`, `name` (opcional para búsqueda)

---

**Desarrollado como parte del Módulo 4 - Frameworks del Master en Frontend**
