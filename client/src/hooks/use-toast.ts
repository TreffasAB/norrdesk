import { useState, useCallback } from "react";

interface Toast {
  id: string;
  title?: string;
  description?: string;
}

let toastCount = 0;

const listeners: Array<(toasts: Toast[]) => void> = [];
let memoryToasts: Toast[] = [];

function dispatch(toasts: Toast[]) {
  memoryToasts = toasts;
  listeners.forEach((l) => l(toasts));
}

export function toast({ title, description }: Omit<Toast, "id">) {
  const id = String(toastCount++);
  const newToast = { id, title, description };
  dispatch([...memoryToasts, newToast]);
  setTimeout(() => {
    dispatch(memoryToasts.filter((t) => t.id !== id));
  }, 3000);
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>(memoryToasts);

  useCallback(() => {
    listeners.push(setToasts);
    return () => {
      const idx = listeners.indexOf(setToasts);
      if (idx > -1) listeners.splice(idx, 1);
    };
  }, []);

  return { toasts, toast };
}
