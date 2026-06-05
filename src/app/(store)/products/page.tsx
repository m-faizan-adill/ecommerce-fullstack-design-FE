import ProductFilters from "@/features/products/components/ProductFilters";
import Header from "@/components/layout/Header";
import { getProducts } from "@/features/products/services/product.service";
import { Breadcrumbs } from "@/components/ui";
import ProductListContainer from "@/features/products/components/ProductListContainer";

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
                    <ProductListContainer products={products} />
                </div>
            </div>
        </div >
    );
}