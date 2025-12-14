import { createQueryKeys } from "@lukemorales/query-key-factory";

export const usersKeys = createQueryKeys("users", {
	all: () => ["all"],
	detail: (id: string) => [id],
});
