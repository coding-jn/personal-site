import { ButtonProps } from './types'
import styles from './Button.module.scss'
import classNames from 'classnames'

export const Button = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  as = 'button',
  href,
  ...props
}: ButtonProps) => {
  const buttonClasses = classNames(
    styles.button,
    styles[variant],
    styles[size],
    {
      [styles.fullWidth]: fullWidth,
      [styles.loading]: isLoading,
      [styles.disabled]: disabled || isLoading,
    },
    className
  )

  const content = (
    <>
      {isLoading && (
        <span className={styles.spinner}>
          <svg className={styles.spinnerIcon} viewBox="0 0 24 24">
            <circle
              className={styles.spinnerCircle}
              cx="12"
              cy="12"
              r="10"
              fill="none"
              strokeWidth="3"
            />
          </svg>
        </span>
      )}
      {!isLoading && leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
      <span className={styles.label}>{children}</span>
      {!isLoading && rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
    </>
  )

  if (as === 'a' && href) {
    return (
      <a href={href} className={buttonClasses} {...(props as any)}>
        {content}
      </a>
    )
  }

  return (
    <button className={buttonClasses} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  )
}
