export interface ButtonProps {
    className?: string;
    label: string;
    onClick?: () => void;
}

export function Button({ className, label, ...props }: ButtonProps) {
    return <button type="button" className={className} {...props}>
        {label}
    </button>;
};
