"use client";
import { largeList } from "@/data/large-list";
import { ListViewer } from "@/components/modules/list-viewer";
import { useDeferredValue, useMemo, useState } from "react";

export default function Page() {
    const [search, setSearch] = useState("");
    const deferredSearch = useDeferredValue(search);
    const filteredList = useMemo(() => {
        return largeList.filter((item) => item.name.toLowerCase()
            .includes(deferredSearch.toLowerCase())).slice(0, 10000);
    }, [deferredSearch]);


    return (
        <div className="grid gap-4">
            <input type="text" placeholder="Search"
                className="w-full p-2 rounded-md border border-gray-300" value={search} onChange={(e) => setSearch(e.target.value)} />
            <ListViewer
                loading={deferredSearch !== search}
                list={filteredList}
                footerText={`${filteredList.length} results`}
            />
        </div>
    )
}