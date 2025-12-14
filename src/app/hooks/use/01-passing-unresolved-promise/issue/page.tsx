import { Table } from "./_components/table";
function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: 1, name: "John Doe" }]);
        }, 4000);
    });
}
export default async function Page() {
    const users = await fetchUsers();
    return (
        <div>
            <h1>Page</h1>
            <Table users={users as any[]} />
        </div>
    )
}