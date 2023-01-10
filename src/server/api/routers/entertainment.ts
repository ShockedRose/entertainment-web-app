import { z } from "zod";
import entertainmentMedia from "data.json";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const entertainmentRouter = createTRPCRouter({
  getAll: publicProcedure.query(({}) => {
    return {
      moviesAndVideos: entertainmentMedia,
    };
  }),
});
