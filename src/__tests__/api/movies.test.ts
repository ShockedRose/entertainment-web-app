import { type inferProcedureInput } from "@trpc/server";
import { createInnerTRPCContext } from "@/server/api/trpc";
import { appRouter, type AppRouter } from "@/server/api/root";
import { expect, test } from "vitest";

test("example router", async () => {
  const ctx = await createInnerTRPCContext({});
  const caller = appRouter.createCaller(ctx);

  // type Input = inferProcedureInput<AppRouter["entertainment"]["getAll"]>;

  const data = await caller.entertainment.getAll();

  expect(data.moviesAndVideos.length).toBeGreaterThan(1);
});
