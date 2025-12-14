"use client";
import { use } from "react";
import { ThemeContext } from "../_context";

export function DataViewer() {
    const { theme, setTheme } = use(ThemeContext);
    return (
        <div className="grid gap-4">
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Theme:</span>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-md">{theme}</span>
            </div >
            <button type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
        </div>
    )
}