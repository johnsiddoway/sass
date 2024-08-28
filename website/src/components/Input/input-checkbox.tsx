export interface InputProps {
    className?: string;
    id: string;
    label: string;
    name?: string;
    value?: string;
    disabled?: boolean;
    onClick?: () => void;
}

export function InputCheckbox({ id, label, ...props }: InputProps) {
    return <label>
        <input type="checkbox" id={id} {...props} />
        {label}
    </label>;
};
