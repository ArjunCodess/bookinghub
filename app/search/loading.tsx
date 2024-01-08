import { Skeleton } from "@/components/ui/skeleton";

function LoadingResults() {
  return (
    <section>
      <div className="space-y-2 p-5">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex space-x-2 mx-auto max-w-7xl">
            <Skeleton className="h-20 w-20 md:h-44 md:w-44 rounded-lg" />
            <Skeleton className="h-44 w-full rounded-lg" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LoadingResults;