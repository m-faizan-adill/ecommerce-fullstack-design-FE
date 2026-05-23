interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({
  params,
}: ProductPageProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">
        Product: {params.slug}
      </h1>
    </div>
  );
}