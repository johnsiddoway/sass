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

export function InputCheckbox({ id, label, ...props }: InputProps) {
    return <div className="checkbox">
        <input type="checkbox" id={id} {...props} />
        <label htmlFor={id}>{label}</label>
    </div>;
};
