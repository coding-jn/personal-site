export enum TYPES {
  DEFAULT = 'default',
  TAPE = 'tape',
}

export interface PaperProps {
  description: string
  image: string
  href: string
  color?: 'black' | 'tan' | 'pink'
  type?: 'default' | 'tape'
}
