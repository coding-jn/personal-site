export enum TYPES {
  DEFAULT = 'default',
  TAPE = 'tape',
  PROJECT = 'project',
}

export interface PaperProps {
  description?: string
  image: string
  href: string
  color?: 'marriott' | 'prekindle' | 'uvah'
  type?: 'default' | 'tape' | 'project'
  label?: string
  title: string
  subtitle?: string
  whiteText?: boolean
}
