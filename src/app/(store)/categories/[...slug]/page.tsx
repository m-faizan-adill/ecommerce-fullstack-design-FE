import { Breadcrumbs, Container } from "@/components/ui";
import { getProducts } from "@/features/products/services/product.service";
import ProductGrid from "@/shared/components/ProductGrid";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const products = await getProducts();
  console.log("slug:", slug);
  const categoryPath = slug;
  const currentCategory = slug.at(-1);
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <Container className="py-6">
        {/* Breadcrumb */}
        <Breadcrumbs />

        {/* Header */}
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-xl sm:text-2xl font-semibold capitalize">
            {slug}
          </h1>

          <p className="text-sm text-gray-500">
            Showing {products.length} products
          </p>
        </div>

        {/* Layout */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Sidebar Filters */}
          <aside className="hidden lg:block bg-white rounded-xl p-4 shadow-sm h-fit">
            <h2 className="font-medium mb-3">Filters</h2>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium mb-2">Price</p>
                <div className="space-y-1 text-gray-600">
                  <p>Under $50</p>
                  <p>$50 - $200</p>
                  <p>$200+</p>
                </div>
              </div>

              <div>
                <p className="font-medium mb-2">Brand</p>
                <div className="space-y-1 text-gray-600">
                  <p>Apple</p>
                  <p>Samsung</p>
                  <p>Sony</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Products */}
          <main className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full sm:w-72 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
              />

              <select className="w-full sm:w-48 px-3 py-2 border rounded-lg text-sm">
                <option>Sort: Popular</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <ProductGrid products={products} />
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}