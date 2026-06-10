import ProductFilters from "@/features/products/components/ProductFilters";
import Header from "@/components/layout/Header";
import { getProducts } from "@/features/products/services/product.service";
import { Breadcrumbs, Container } from "@/components/ui";
import ProductListContainer from "@/features/products/components/ProductListContainer";

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div className="bg-[#F7FAFC]">
            <Header showBackButton={true} title="Mobile accessory" />

            <Container className="min-h-screen py-2">
                <Breadcrumbs />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Sidebar */}
                    <div className="hidden lg:block">
                        <ProductFilters />
                    </div>

                    {/* Right Content */}
                    <ProductListContainer products={products} />
                </div>
            </Container>
        </div >
    );
}