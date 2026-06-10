export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log("slug:", slug);

  return <h1>{slug}</h1>;
}