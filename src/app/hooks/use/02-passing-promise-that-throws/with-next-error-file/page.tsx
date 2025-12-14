import { Suspense } from "react";
import { DataViewer } from "./_components/data-viewer";
function fetchUsers() {
    return new Promise<any[]>((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Error from API"));
        }, 1000);
    });
}
export default function Page() {
    return (
        <div className="flex justify-center items-start">
            <div className="max-w-xl w-full mx-auto p-4 bg-white rounded-2xl border border-gray-200">

                <Suspense fallback={<div>Loading...</div>}>
                    <DataViewer usersPromise={fetchUsers()} />
                </Suspense>
            </div>
        </div>

    )
}