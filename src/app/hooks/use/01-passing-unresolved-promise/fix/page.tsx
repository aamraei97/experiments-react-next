import { Suspense } from "react";
import { Table } from "./_components/table";
function fetchUsers() {
    return new Promise<any[]>((resolve) => {
        setTimeout(() => {
            resolve([{ id: 1, name: "John Doe" }]);
        }, 4000);
    });
}
export default function Page() {
    return (
        <div>
            <h1>Page</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Table usersPromise={fetchUsers()} />
            </Suspense>
        </div>
    )
}