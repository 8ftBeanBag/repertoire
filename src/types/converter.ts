import type { Database } from "./supabase";

type Row<T extends keyof Database["public"]["Tables"]> =
    Database["public"]["Tables"][T]["Row"];

export type TSongs = Row<"songs">;
export type TBooks = Row<"books">
