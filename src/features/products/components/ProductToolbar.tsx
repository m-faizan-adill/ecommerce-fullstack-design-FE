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
        <div className="flex items-center justify-between gap-2 w-full bg-[#FFFFFF] border border-gray-200 rounded-lg p-2 md:p-3 shadow-sm">

            {/* Desktop Only Side: Items Count */}
            <div className="hidden md:flex items-center text-sm font-medium text-gray-600">
                <span>{total.toLocaleString()} items</span>
            </div>

            {/* Main Responsive Controls Wrapper */}
            <div className="flex items-center justify-end gap-2.5 sm:gap-3 ml-auto w-full sm:w-auto">
                
                {/* Desktop Only Side: Checkbox */}
                <div className="hidden md:flex items-center shrink-0 mr-2">
                    <Checkbox label="Verified only" />
                </div>

                {/* Sort Filter Control */}
                <div className="flex-1 md:flex-none md:w-44">
                    <Select
                        value={sort}
                        onChange={(val) => setSort(val)}
                        className="w-full text-sm font-normal"
                        placeholder="Sort: Newest"
                        options={[
                            { value: "featured", label: "Sort: Newest" },
                            { value: "price_low", label: "Price: Low to High" },
                            { value: "price_high", label: "Price: High to Low" },
                        ]}
                    />
                </div>

                {/* Mobile Only: Filter Button */}
                <div className="flex-1 md:hidden">
                    <Button
                        type="button"
                        variant="outline"
                        block
                        className="text-gray-900 font-normal text-sm border-gray-300 h-9.5 rounded-lg justify-between px-3"
                        trailingIcon={
                            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                        }
                    >
                        <span>Filter (3)</span>
                    </Button>
                </div>
            </div>

            {/* View Mode Layout Action Toggles */}
            <div className="shrink-0 pl-1 md:pl-0 border-l border-gray-100 md:border-none">
                <ButtonGroup>
                    <Button
                        variant={viewMode === "grid" ? "filled" : "outline"}
                        size="sm"
                        className="h-9.5 px-3"
                        onClick={() => onViewChange("grid")}
                        aria-label="Grid view"
                    >
                        <GridIcon
                            className={cn(
                                viewMode === "grid" ? "text-white" : "text-[#1C1C1C]"
                            )}
                        />
                    </Button>
                    <Button
                        variant={viewMode === "list" ? "filled" : "outline"}
                        size="sm"
                        className="h-9.5 px-3"
                        onClick={() => onViewChange("list")}
                        aria-label="List view"
                    >
                        <ListIcon
                            className={cn(
                                viewMode === "list" ? "text-white" : "text-[#1C1C1C]"
                            )}
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