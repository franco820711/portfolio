export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  return `${basePath}${src}${width ? `?w=${width}` : ''}${quality ? `&q=${quality}` : ''}`;
}
