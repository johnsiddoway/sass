import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export function Toggle({ label, ...props }: InputProps) {
    return <label className="toggle">
        <input type="checkbox" {...props} />
        {label}
    </label>;
};