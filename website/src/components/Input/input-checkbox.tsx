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

export function InputCheckbox({ className, id, label, name, ...props }: InputProps) {
    return <>
        <input id={id} type="checkbox" name={name} {...props} />
        <label className={className} htmlFor={id}>{label}</label>
    </>;
};