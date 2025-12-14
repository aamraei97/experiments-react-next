"use client";
import { largeList } from "@/data/large-list";
import { ListViewer } from "@/components/modules/list-viewer";
import { useMemo, useState } from "react";

export default function Page() {
    const [search, setSearch] = useState("");
    const filteredList = useMemo(() => {
        return largeList.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    }, [search]);
    return (
        <div className="grid gap-4">
            <input type="text" placeholder="Search"
                className="w-full p-2 rounded-md border border-gray-300" value={search} onChange={(e) => setSearch(e.target.value)} />
            <ListViewer loading={false} list={filteredList} footerText={`${filteredList.length} results`} />
        </div>
    )
}