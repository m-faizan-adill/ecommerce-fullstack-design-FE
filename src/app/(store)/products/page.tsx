import ProductGrid from "@/shared/components/ProductGrid";

import ProductFilters from "@/features/products/components/ProductFilters";
import { getProducts } from "@/features/products/services/product.service";
import Header from "@/components/layout/Header";
import { Breadcrumbs } from "@/components/ui";
import ProductToolbar from "@/features/products/components/ProductToolbar";

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div className="bg-[#F7FAFC]">
            <Header />

            <div className="max-w-7xl mx-auto min-h-screen py-2 px-4 sm:px-6 lg:px-8">
                <Breadcrumbs />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Sidebar */}
                    <div>
                        <ProductFilters />
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-3 flex flex-col gap-4">

                        {/* Toolbar */}
                        <ProductToolbar total={12911} />

                        {/* Products */}
                        <ProductGrid products={products} />

                    </div>

                </div>
            </div>
        </div>
    );
}