import { getProducts } from "@/lib/api/products/products.api";
import { useQuery } from "@tanstack/react-query";

export default function ProductCard() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });

  if (isLoading) return <p className="text-white text-2xl font-bold">Loading…</p>;
  if (isError)
    return (
      <p>Error: {error instanceof Error ? error.message : "Unknown error"}</p>
    );
  if (!data || !data.payload) return <p>No products found</p>;

  const products = data.payload.data ?? [];

  return (
    <div className="p-4">
      {/* عنوان المنتجات */}
      <h2 className="text-3xl font-bold text-white  underline mb-6 text-center">
        Watch Products
      </h2>

      {/* Grid الكروت */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <div
            key={product._id}
            className="bg-white/20 rounded-lg p-4 flex flex-col justify-center items-center shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <div className="relative">
              <img
                src={product.imageCover}
                alt={product.title}
                className="w-40 h-40 rounded-full object-cover"
              />
              <div className="absolute inset-0 bg-purple-500/45 rounded-full bg-opacity-30 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-center font-semibold text-lg">
                  More details
                </p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-white text-center font-semibold text-lg">
                {product.title}
              </p>
              <p className="text-white text-center">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
