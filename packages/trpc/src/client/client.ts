import { QueryClient } from "@tanstack/react-query";
import type {
  CreateTRPCReact
} from "@trpc/react-query";
import {
  createTRPCReact, httpBatchLink
} from "@trpc/react-query";
import type { AppRouter } from "../server/server";

export const trpc: CreateTRPCReact<AppRouter, object> = createTRPCReact<
  AppRouter,
  object
>();

export const queryClient = new QueryClient();

export const createTrpcClient = (url: string) => trpc.createClient({
    links: [ httpBatchLink({ url }) ],
  })