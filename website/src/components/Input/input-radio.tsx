export interface InputProps {
    checked?: boolean;
    className?: string;
    id: string;
    label: string;
    name?: string;
    value?: string;
    disabled?: boolean;
    onClick?: () => void;
}

export function InputRadio({ id, label, ...props }: InputProps) {
    return <>
        <input id={id} type="radio" {...props} />
        <label htmlFor={id}>{label}</label>
    </>;
};
