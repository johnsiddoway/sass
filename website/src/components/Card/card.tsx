import { HTMLAttributes } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
}

export function Card({ ...props }: CardProps) {
    return <div className="card" {...props}>
        <h2>Lorem ipsum</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat, enim id efficitur porta,
            diam sem porta sapien, ut dignissim velit erat quis sapien. Nullam vulputate enim placerat tortor
            consequat, vulputate blandit nunc tempor. Integer purus augue, fringilla eu molestie in, consequat
            at turpis.
        </p>
    </div>;
}