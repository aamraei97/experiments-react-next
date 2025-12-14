

import { use } from "react";

type Props = {
    usersPromise: Promise<any[]>;
}
export function DataViewer({ usersPromise }: Props) {
    const users = use(usersPromise);
    return (
        <div>
            <h1>Data Viewer</h1>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </div >
    )
}