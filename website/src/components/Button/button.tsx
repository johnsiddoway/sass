export interface ButtonProps {
    className?: string;
    label: string;
    disabled?: boolean;
    onClick?: () => void;
}

export function Button({ className, label, disabled = false, ...props }: ButtonProps) {
    return <button type="button" className={className} disabled={disabled} {...props}>
        {label}
    </button>;
};
