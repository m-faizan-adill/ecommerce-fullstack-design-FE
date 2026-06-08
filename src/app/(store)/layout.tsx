import { ReactNode } from "react";

interface StoreLayoutProps {
    children: ReactNode;
    auth: ReactNode;
}

export default function StoreLayout({ children, auth }: StoreLayoutProps) {
    return (
        <main>
            {children}
            {auth}
        </main>
    );
}