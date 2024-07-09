import { Skeleton } from '@/components/ui/skeleton'

export function MovieListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full">
      <Skeleton className="h-[16rem] w-full" />
      <Skeleton className="h-[16rem] w-full" />
      <Skeleton className="h-[16rem] w-full" />
      <Skeleton className="h-[16rem] w-full" />
      <Skeleton className="h-[16rem] w-full" />
      <Skeleton className="h-[16rem] w-full" />
    </div>
  )
}
