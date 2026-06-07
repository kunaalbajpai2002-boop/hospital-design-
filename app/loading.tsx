export default function Loading() {
  return (
    <div className="min-h-screen bg-background pt-24 md:pt-32 animate-pulse">
      {/* Hero Skeleton */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-6">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2">
                <div className="h-4 w-16 bg-muted rounded-full" />
                <div className="h-4 w-1 bg-muted rounded-full" />
                <div className="h-4 w-24 bg-muted rounded-full" />
              </div>
              {/* Title */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex-shrink-0" />
                <div className="space-y-3 flex-1">
                  <div className="h-10 bg-muted rounded-xl w-3/4" />
                </div>
              </div>
              {/* Subtitle */}
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded-full w-full" />
                <div className="h-4 bg-muted rounded-full w-4/5" />
              </div>
              {/* Button */}
              <div className="h-12 bg-muted rounded-lg w-40" />
            </div>

            {/* Image Skeleton */}
            <div className="md:col-span-5 hidden md:block">
              <div className="h-72 bg-muted rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="h-8 bg-muted rounded-xl w-1/2" />
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded-full" />
                <div className="h-4 bg-muted rounded-full" />
                <div className="h-4 bg-muted rounded-full w-4/5" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-36 bg-muted rounded-2xl" />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="h-64 bg-muted rounded-2xl" />
            <div className="h-48 bg-primary/20 rounded-2xl" />
          </div>
        </div>
      </section>
    </div>
  )
}
