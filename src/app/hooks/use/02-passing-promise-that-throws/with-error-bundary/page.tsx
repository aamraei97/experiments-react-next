import { Suspense } from "react";
import { DataViewer } from "./_components/data-viewer";
import { ErrorWrapper } from "@/components/modules/error-wrapper";
function fetchUsers() {
    return new Promise<any[]>((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Error"));
        }, 1000);
    });
}
export default function Page() {
    return (
        <div className="flex justify-center items-start h-screen p-5">
            <div className="max-w-xl w-full mx-auto p-4 bg-white rounded-2xl border border-gray-200">
                <ErrorWrapper>
                    <Suspense fallback={<div>Loading...</div>}>
                        <DataViewer usersPromise={fetchUsers()} />
                    </Suspense>
                </ErrorWrapper>
            </div>
        </div>

    )
}