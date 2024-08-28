export interface InputProps {
    className?: string;
    id: string;
    label: string;
    value: number;
    disabled?: boolean;
    onClick?: () => void;
}

export function InputRange({ id, label, ...props }: InputProps) {
    return <>
        <label htmlFor={id}>{label}</label>
        <input type="range" id={id} {...props} />
    </>;
};
