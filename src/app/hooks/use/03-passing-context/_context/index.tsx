"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext<{ theme: "light" | "dark", setTheme: (theme: "light" | "dark") => void }>({
    theme: "light",
    setTheme: () => { },
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    return (
        <ThemeContext value={{ theme, setTheme }}>
            {children}
        </ThemeContext>
    );
}