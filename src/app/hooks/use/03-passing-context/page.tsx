import { DataViewer } from "./_components/data-viewer";
import { ThemeProvider } from "./_context";

export default function Page() {
    return (
        <ThemeProvider>
            <div className="flex justify-center items-start h-screen p-5">
                <div className="max-w-xl w-full mx-auto p-4 bg-white rounded-2xl border border-gray-200">
                    <DataViewer />
                </div>
            </div>
        </ThemeProvider>
    )
}