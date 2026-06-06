"use client";

import Button, { ButtonGroup } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/FormChecks";
import { useState } from "react";

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
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
                >
                    <option value="featured">Featured</option>
                    <option value="price_low">Price: Low to High</option>
                    <option value="price_high">Price: High to Low</option>
                </select>

                {/* View Toggle */}
                <ButtonGroup>
                    <Button
                        variant={viewMode === "grid" ? "filled" : "outline"}
                        size="sm"
                        onClick={() => onViewChange("grid")}
                        aria-label="Grid view"
                    >
                        ☷
                    </Button>
                    <Button
                        variant={viewMode === "list" ? "filled" : "outline"}
                        size="sm"
                        onClick={() => onViewChange("list")}
                        aria-label="List view"
                    >
                        ☰
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
}