import { HTMLAttributes } from "react";

export interface TooltipProps extends HTMLAttributes<HTMLElement> {
    tooltip: string;
}

export function Tooltip({ children, tooltip, ...props }: TooltipProps) {
    return <span data-tooltip={tooltip} {...props}>{children}</span>;
}