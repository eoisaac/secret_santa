import { initTRPC } from "@trpc/server";

const t = initTRPC.create();
const publicProcedure = t.procedure;

export const appRouter = t.router({
  hello: publicProcedure.query(() => {
    return "Hello World!";
  }),
});
export type AppRouter = typeof appRouter;
