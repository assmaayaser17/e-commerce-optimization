import { getCategories } from "@/lib/api/categories/categories.api";
import { useQuery } from "@tanstack/react-query";

export default function CategoriesCard() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });

  if (isLoading)
    return <p className="text-white text-2xl font-bold">Loading…</p>;
  if (isError)
    return (
      <p>Error: {error instanceof Error ? error.message : "Unknown error"}</p>
    );

  if (!data || "error" in data) {
    return (
      <p className="text-white text-2xl font-bold">Error loading categories</p>
    );
  }

  // هنا الصح: الكاتيجوريز جوه data.data
  const categories = data.data ?? [];
  console.log("categories", categories);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">
        Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category: Category) => (
          <div
            key={category._id}
            className="cursor-pointer bg-white/20 rounded-lg p-4 flex flex-col items-center shadow-md hover:scale-105 transition duration-300"
            onClick={() => {
              // هنا هنحدد الكاتيجوري المختارة
            }}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-24 h-24 object-cover rounded-full"
            />
            <h3 className="mt-2 font-semibold text-red-600 text-center">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
