export interface Photo {
  src: string;
  alt: string;
  className: string;
}

export interface Tag {
  label: string;
  className: string;
}

export interface HeadingProps {
  subtitle: string;
  title: string;
  description?: string;
}
