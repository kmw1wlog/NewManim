import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      className={cn('rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-700', className)}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = 'Button';
