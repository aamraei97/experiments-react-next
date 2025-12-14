module.exports = {
	"**/*.ts?(x)": () => "pnpm run type-check",
	"*.{js,jsx,ts,tsx}": ["biome check --write", "biome lint --write"],
};
