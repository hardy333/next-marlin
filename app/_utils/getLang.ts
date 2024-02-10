import { cookies } from "next/headers";

export function getLang() {
  const cookieStore = cookies();

  let lang = cookieStore.get("lang")?.value;
  if (lang === "geo") return "geo";
  return "en";
}
