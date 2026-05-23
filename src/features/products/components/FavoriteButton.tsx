"use client";

import { useState, useTransition } from "react";
import { Heart } from "lucide-react";

import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface FavoriteButtonProps {
    productId: string;
    initialFavorited?: boolean;
}

export function FavoriteButton(props: FavoriteButtonProps) {
    const { productId, initialFavorited = false } = props;
    const [favorited, setFavorited] = useState(initialFavorited);
    const [isPending, startTransition] = useTransition();

    const toggle = () => {
        // Optimistic update
        setFavorited((prev) => !prev);

        startTransition(async () => {
            try {
                // Replace with your real server action or API call:
                // await toggleFavorite(productId)
                await fetch(`/api/favorites/${productId}`, { method: "POST" });
            } catch {
                // Roll back on error
                setFavorited((prev) => !prev);
            }
        });
    };

    return (
        <button
            disabled={isPending}
            onClick={toggle}
            className="border border-[#DEE2E7] shadow-sm rounded-md p-2 hover:bg-gray-100"
            aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        >
            <Heart size={16} className={cn(
                "w-5 h-5",
                favorited ? "fill-blue-500 text-blue-500" : "text-[#0D6EFD]"
            )} />
        </button>
    );
}