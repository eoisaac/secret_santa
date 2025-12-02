import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  secretSanta: t.router({
    createSecretSanta: publicProcedure.input(z.object({
      // id: z.uuidv4(),
      id: z.string(),

      eventName: z.string().min(1, 'Event name is required'),

      minBudget: z.number().min(0, 'Minimum budget cannot be negative').optional(),
      maxBudget: z.number().min(0, 'Maximum budget cannot be negative').optional(),

      date: z.coerce.date(),

      message: z.string().optional(),
      participants: z
        .array(
          z.object({
            name: z.string().min(1, 'Name is required'),
            phone: z.string().min(1, 'Phone number is required'),
          }),
        )
        .min(2, 'At least two participants are required'),
    }).omit({ id: true })).output(z.object({
      // id: z.uuidv4(),
      id: z.string(),

      eventName: z.string().min(1, 'Event name is required'),

      minBudget: z.number().min(0, 'Minimum budget cannot be negative').optional(),
      maxBudget: z.number().min(0, 'Maximum budget cannot be negative').optional(),

      date: z.coerce.date(),

      message: z.string().optional(),
      participants: z
        .array(
          z.object({
            name: z.string().min(1, 'Name is required'),
            phone: z.string().min(1, 'Phone number is required'),
          }),
        )
        .min(2, 'At least two participants are required'),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

