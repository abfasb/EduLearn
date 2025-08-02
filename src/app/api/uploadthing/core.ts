// app/api/uploadthing/core.ts
import { createUploadthing, type FileRouter } from "uploadthing/server";
import type { NextRequest } from "next/server";

const f = createUploadthing();

export const uploadRouter = {
  courseMedia: f({ image: { maxFileSize: "4MB" }, video: { maxFileSize: "512MB" } })
    .onUploadComplete(async ({ file }) => {
      console.log("File uploaded:", file.url);
      // Save this file.url to Prisma if needed
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;
