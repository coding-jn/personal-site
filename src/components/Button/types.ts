export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'coral' | 'honey' | 'lavender'
export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  children: React.ReactNode
  as?: 'button' | 'a'
  href?: string
}
