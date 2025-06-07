import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

// Imágenes de ejemplo
const placeholderImage = 'https://via.placeholder.com/300x450';
const moviePoster = 'https://image.tmdb.org/t/p/w300/qNBAXBIQlnOThrHvG6KMfG1fV4U.jpg';

const meta = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título de la película/serie',
    },
    imagePath: {
      control: 'text',
      description: 'Ruta de la imagen del póster',
    },
    popularity: {
      control: { type: 'number', min: 0, max: 10, step: 0.1 },
      description: 'Puntuación de popularidad (0-10)',
    },
    description: {
      control: 'text',
      description: 'Descripción de la película/serie',
    },
    release_date: {
      control: 'text',
      description: 'Fecha de lanzamiento',
    },
    original_language: {
      control: 'text',
      description: 'Idioma original',
    },
    layout: {
      control: 'select',
      options: ['hero', 'continue', 'popular', 'trailer'],
      description: 'Estilo de la tarjeta',
    },
  },
  args: {
    title: 'Movie Title',
    imagePath: placeholderImage,
    popularity: 7.5,
    description: 'Esta es una descripción de ejemplo para la película o serie. Muestra información adicional cuando se hace hover sobre la tarjeta.',
    release_date: '2023-01-01',
    original_language: 'en',
    layout: 'popular',
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Popular: Story = {
  args: {
    title: 'Popular Movie',
    imagePath: moviePoster,
    popularity: 8.7,
    description: 'Una película emocionante que ha sido muy bien recibida por la crítica y el público.',
    release_date: '2023-05-15',
    layout: 'popular',
  },
};

export const Hero: Story = {
  args: {
    title: 'Featured Movie',
    imagePath: 'https://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg',
    popularity: 9.2,
    description: 'La película más esperada del año con efectos especiales impresionantes y una trama cautivadora.',
    release_date: '2023-12-20',
    layout: 'hero',
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const ContinueWatching: Story = {
  args: {
    title: 'Continue Watching',
    imagePath: 'https://image.tmdb.org/t/p/w300/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg',
    popularity: 7.9,
    description: 'Continúa viendo donde lo dejaste. Temporada 2, Episodio 5: "El misterio se profundiza"',
    release_date: '2023-03-10',
    layout: 'continue',
  },
};

export const Trailer: Story = {
  args: {
    title: 'Nuevo Tráiler',
    imagePath: 'https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    popularity: 8.1,
    description: 'Mira el nuevo tráiler de la próxima película más esperada del año.',
    release_date: '2023-11-05',
    layout: 'trailer',
  },
};

export const WithLongTitle: Story = {
  args: {
    title: 'Esta es una película con un título extremadamente largo que podría no caber en una sola línea',
    imagePath: placeholderImage,
    popularity: 6.5,
    description: 'Esta tarjeta demuestra cómo se manejan los títulos largos en el diseño.',
    release_date: '2023-07-22',
  },
};

export const WithLongDescription: Story = {
  args: {
    title: 'Película con descripción extensa',
    imagePath: placeholderImage,
    popularity: 7.8,
    description: 'Esta es una descripción muy larga que está diseñada para probar cómo se maneja el texto que ocupa múltiples líneas en la tarjeta. La descripción debe ser lo suficientemente larga como para activar el desplazamiento vertical en la tarjeta cuando se hace hover sobre ella. Esto es importante para garantizar que la experiencia del usuario sea óptima incluso con contenido extenso.',
    release_date: '2023-08-30',
  },
};
