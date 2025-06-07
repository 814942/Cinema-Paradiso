import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

// Imagen de ejemplo de placeholder
const placeholderImage = 'https://via.placeholder.com/300x450';
const notFoundImage = 'https://via.placeholder.com/300x450?text=Not+Found';

const meta = {
  title: 'Atoms/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    path: {
      control: 'text',
      description: 'Ruta de la imagen (se concatena con la URL base)',
    },
    alt: {
      control: 'text',
      description: 'Texto alternativo para accesibilidad',
    },
    size: {
      control: 'select',
      options: ['w92', 'w154', 'w185', 'w300', 'w500', 'w780', 'original'],
      description: 'Tamaño de la imagen según la API de TMDB',
    },
    width: {
      control: { type: 'text' },
      description: 'Ancho de la imagen (ej: "100%", "200px")',
    },
    height: {
      control: { type: 'text' },
      description: 'Alto de la imagen (ej: "100%", "300px")',
    },
    className: {
      control: 'text',
      description: 'Clases CSS adicionales',
    },
    fallbackSrc: {
      control: 'text',
      description: 'Imagen que se muestra si falla la carga',
    },
  },
  args: {
    path: '',
    alt: 'Movie poster',
    size: 'w300',
    width: '200px',
    height: '300px',
    fallbackSrc: notFoundImage,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
        { name: 'light', value: '#f3f4f6' },
      ],
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    path: placeholderImage,
    alt: 'Default movie poster',
  },
};

export const Small: Story = {
  args: {
    path: placeholderImage,
    alt: 'Small poster',
    size: 'w154',
    width: '154px',
    height: '231px',
  },
};

export const Medium: Story = {
  args: {
    path: placeholderImage,
    alt: 'Medium poster',
    size: 'w300',
    width: '300px',
    height: '450px',
  },
};

export const Large: Story = {
  args: {
    path: placeholderImage,
    alt: 'Large poster',
    size: 'w500',
    width: '500px',
    height: '750px',
  },
};

export const WithFallback: Story = {
  args: {
    path: '/non-existent-image.jpg',
    alt: 'Image with fallback',
    fallbackSrc: notFoundImage,
  },
};

export const WithCustomClass: Story = {
  args: {
    path: placeholderImage,
    alt: 'Custom styled image',
    className: 'rounded-lg shadow-lg',
  },
};

// Ejemplo de cómo se vería con una imagen de la API de TMDB
export const TMDBExample: Story = {
  args: {
    path: '/qNBAXBIQlnOThrHvG6KMfG1fV4U.jpg', // Ejemplo de ruta de imagen de TMDB
    alt: 'Movie poster from TMDB',
    size: 'w300',
    width: '200px',
    height: '300px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de cómo se vería con una imagen real de la API de TMDB (requiere que la variable de entorno VITE_API_IMAGE_BASE_URL esté configurada correctamente).',
      },
    },
  },
};
