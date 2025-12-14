"use client";

import { ErrorFallback } from "@/components/modules/error-wrapper";

export default function ErrorPage({ error }: { error: Error }) {
    return (
        <ErrorFallback error={error} />
    )
}