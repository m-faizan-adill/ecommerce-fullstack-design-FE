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
        <Button
            variant="ghost"
            shape="icon"
            size="md"
            onClick={toggle}
            aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
            disabled={isPending}
            className={cn("border border-[#DEE2E7] shadow-sm hover:bg-gray-100", isPending ? "opacity-60 cursor-not-allowed" : "cursor-pointer")}
        >
            <Heart
                size={16}
                className={cn(
                    "w-5 h-5",
                    favorited
                        ? "fill-blue-500 text-blue-500"
                        : "text-[#0D6EFD]"
                )}
            />
        </Button>
    );
}