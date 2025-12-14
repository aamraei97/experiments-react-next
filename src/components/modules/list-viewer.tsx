import { memo } from "react";

type Props = {
    loading: boolean;
    list: {
        id: number;
        name: string;
    }[];
    footerText?: string
}

const ListViewerComponent = ({ loading, list, footerText }: Props) => {
    return (
        <div className="grid gap-4 relative">
            {loading && <div className="animate-pulse bg-gray-100 h-full absolute top-0 left-0 w-full rounded-md" />}
            {
                list.length > 0 && (
                    <div className="grid gap-1 max-h-[300px] overflow-y-auto relative">
                        {list.map((item) => (
                            <div className="bg-gray-50 border border-gray-200 p-2 rounded-md" key={item.id}>
                                <h1 className="text-sm font-medium">{item.name}</h1>
                            </div>
                        ))}
                    </div>
                )
            }


            {footerText && <div className="bg-gray-50 border border-gray-200 p-2 rounded-md">
                <p className="text-sm text-gray-500">{footerText}</p>
            </div>}
        </div>
    )
}


export const ListViewer = memo(ListViewerComponent);