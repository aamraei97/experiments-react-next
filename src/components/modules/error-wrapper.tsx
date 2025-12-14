import { ErrorBoundary } from "react-error-boundary";

export function ErrorWrapper({ children }: { children: React.ReactNode }) {
    return (
        <ErrorBoundary fallback={<ErrorFallback />}>
            {children}
        </ErrorBoundary>
    )
}

export function ErrorFallback({ error }: { error?: Error }) {
    return (
        <div className="p-3 bg-red-100 text-red-800 rounded-xl border border-red-400">
            <h1 className="text-lg font-bold mb-2">Error</h1>
            <p className="text-sm">{error?.message || "An error occurred while loading the data."}</p>
        </div>
    )
}