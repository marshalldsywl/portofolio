export default function Loading() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-neutral-50 dark:bg-neutral-950 z-50">
            <div className="flex flex-col items-center gap-4">
                {/* Custom Spinner */}
                <div className="relative h-12 w-12">
                    <div className="absolute inset-0 rounded-full border-4 border-neutral-200 dark:border-neutral-800 opacity-25"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 border-r-blue-600 animate-spin"></div>
                </div>

                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
}