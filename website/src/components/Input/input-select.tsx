import { ReactNode, SelectHTMLAttributes } from "react";

export interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    children?: ReactNode | undefined;
}

export function InputSelect({ children, label, ...props }: InputProps) {
    return <label>
        {label}
        <select {...props}>
            {children}
        </select>
    </label>;
};
