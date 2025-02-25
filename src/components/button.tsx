import { ButtonHTMLAttributes, forwardRef } from 'react';
import { LoadingSpinner } from './loading-spinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
  rounded?: 'default' | 'full';
  icon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      loadingText,
      fullWidth = false,
      rounded = 'default',
      icon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium custom-transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary: 'bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      ghost: 'text-foreground hover:bg-accent hover:text-accent-foreground',
      gradient: 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg active:shadow-sm',
      danger: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm hover:shadow',
    };

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-11 px-6 py-2.5 text-base',
      xl: 'h-12 px-8 py-3 text-lg',
    };

    const roundedStyles = {
      default: 'rounded-md',
      full: 'rounded-full',
    };

    return (
      <button
        ref={ref}
        className={`
          ${baseStyles}
          ${variants[variant]}
          ${sizes[size]}
          ${roundedStyles[rounded]}
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <LoadingSpinner className="mr-2 h-4 w-4" />
            <span>{loadingText || children}</span>
          </>
        ) : (
          <>
            {icon && <span className="mr-2">{icon}</span>}
            {children}
          </>
        )}
      </button>
    );
  }
); 

Button.displayName = 'Button';