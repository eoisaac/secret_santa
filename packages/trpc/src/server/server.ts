import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  secretSanta: t.router({
    createSecretSanta: publicProcedure.input(z.object({
      eventName: z.string().min(1, 'Event name is required'),

      budget: z
        .array(z.number().min(0, 'Budget values cannot be negative'))
        .length(2, 'Budget must have min and max values'),

      date: z.coerce.date(),

      message: z.string().optional(),
      participants: z
        .array(
          z.object({
            name: z.string().min(1, 'Name is required'),
            phone: z.string().min(1, 'Phone is required'),
          }),
        )
        .min(2, 'Add at least two participants.'),
    }).omit({})).output(z.object({
      eventName: z.string().min(1, 'Event name is required'),

      budget: z
        .array(z.number().min(0, 'Budget values cannot be negative'))
        .length(2, 'Budget must have min and max values'),

      date: z.coerce.date(),

      message: z.string().optional(),
      participants: z
        .array(
          z.object({
            name: z.string().min(1, 'Name is required'),
            phone: z.string().min(1, 'Phone is required'),
          }),
        )
        .min(2, 'Add at least two participants.'),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

