"use client";
import { cn } from "@/lib/utils";

import Button, { ButtonGroup } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/FormChecks";
import { useState } from "react";
import { Select } from "@/components/ui/FormSelect";

interface ProductToolbarProps {
    total: number;
    viewMode: 'grid' | 'list';
    onViewChange: (mode: 'grid' | 'list') => void;
}

export default function ProductToolbar(props: ProductToolbarProps) {
    const { total, viewMode, onViewChange } = props;
    const [sort, setSort] = useState("featured");

    return (
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between bg-[#FFFFFF] border border-gray-200 rounded-lg p-3">

            {/* Left */}
            <div className="flex items-center gap-3 text-sm text-gray-600">
                <span>
                    {total.toLocaleString()} items
                </span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">

                <Checkbox label="Verified only" />
                {/* Sort */}
                <Select
                    value={sort}
                    onChange={(val) => setSort(val)}
                    className="w-44"
                    options={[
                        { value: "featured", label: "Featured" },
                        { value: "price_low", label: "Price: Low to High" },
                        { value: "price_high", label: "Price: High to Low" },
                    ]}
                />

                {/* View Toggle */}
                <ButtonGroup>
                    <Button
                        variant={viewMode === "grid" ? "filled" : "outline"}
                        size="sm"
                        onClick={() => onViewChange("grid")}
                        aria-label="Grid view"
                    >
                        <GridIcon
                            className={
                                viewMode === "grid"
                                    ? "text-white"
                                    : "text-[#1C1C1C]"
                            }
                        />

                    </Button>
                    <Button
                        variant={viewMode === "list" ? "filled" : "outline"}
                        size="sm"
                        onClick={() => onViewChange("list")}
                        aria-label="List view"
                    >
                        <ListIcon
                            className={
                                viewMode === "list"
                                    ? "text-white"
                                    : "text-[#1C1C1C]"
                            }
                        />
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
}


interface IconProps {
    className?: string;
}

export function GridIcon({ className }: IconProps) {
    return (
        <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className={cn("size-3.75", className)}
        >
            <path d="M6.66667 0H0V6.66667H6.66667V0Z" fill="currentColor" />
            <path d="M6.66667 8.33333H0V15H6.66667V8.33333Z" fill="currentColor" />
            <path d="M15 0H8.33333V6.66667H15V0Z" fill="currentColor" />
            <path d="M15 8.33333H8.33333V15H15V8.33333Z" fill="currentColor" />
        </svg>
    );
}

export function ListIcon({ className }: IconProps) {
    return (
        <svg
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className={cn("w-3.75 h-3.5", className)}
        >
            <path
                d="M15 3.33333H0V0H15V3.33333ZM15 5H0V8.33333H15V5ZM15 10H0V13.3333H15V10Z"
                fill="currentColor"
            />
        </svg>
    );
}