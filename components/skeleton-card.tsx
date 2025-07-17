import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function SkeletonCard() {
  return (
    <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm animate-pulse">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="flex gap-2">
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="h-9 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
            <div className="h-9 bg-gray-200 dark:bg-gray-700 rounded w-28"></div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-11/12"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-10/12"></div>
        </div>

        <div>
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-3"></div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>

        <div>
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-3"></div>
          <div className="flex flex-wrap gap-2">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function SkeletonCertificationCard() {
  return (
    <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm animate-pulse">
      <CardHeader className="text-center pb-4">
        <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto"></div>
        <div className="flex items-center justify-center gap-2 mt-2">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-11/12"></div>
        <div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
          <div className="flex flex-wrap gap-2">
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
