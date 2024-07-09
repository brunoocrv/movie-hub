import { Skeleton } from '@/components/ui/skeleton'

export function MovieDetailSkeleton() {
  return (
    <div className="flex w-full gap-4 items-start justify-between">
      <Skeleton className="h-20 w-[40rem] place-self-start" />
      <div className="flex flex-col w-full items-start justify-start gap-4">
        <div className="space-y-1 w-full flex flex-col">
          <Skeleton className="h-4 w-64" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="space-y-1 w-full flex flex-col">
          <Skeleton className="h-4 w-64" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="space-y-1 w-full flex flex-col">
          <Skeleton className="h-4 w-64" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="grid grid-cols-2 w-full gap-4">
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
        </div>
      </div>
    </div>
  )
}
