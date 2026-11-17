export type ToastPayload = {
  title?: string;
  desc?: string;
  icon?: string;
};

/** Fire a Minecraft-style advancement toast from anywhere in the client. */
export function toast(title: string, desc?: string, icon = "trophy") {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<ToastPayload>("ahqaf:toast", { detail: { title, desc, icon } }));
}
