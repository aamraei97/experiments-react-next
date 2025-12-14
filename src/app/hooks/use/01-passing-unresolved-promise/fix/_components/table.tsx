

import { use } from "react";

type Props = {
    usersPromise: Promise<any[]>;
}
export function Table({ usersPromise }: Props) {
    const users = use(usersPromise);
    return (
        <div>
            <h1>Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}