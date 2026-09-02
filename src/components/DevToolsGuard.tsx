"use client";

import { useEffect } from "react";

/**
 * DevToolsGuard - Protects the educational portal by disabling
 * right-click context menu, DevTools shortcut keys (F12, Ctrl+Shift+I/J/C, Ctrl+U),
 * and console inspection.
 */
export function DevToolsGuard() {
  useEffect(() => {
    // 1. Disable Right-Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      // Allow right-click on input/textarea if user needs standard paste/cut
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }
      e.preventDefault();
      return false;
    };

    // 2. Disable DevTools and Source-Viewing Keyboard Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const isShift = e.shiftKey;
      const key = e.key.toUpperCase();

      // F12 -> DevTools
      if (e.key === "F12") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+Shift+I or Cmd+Option+I -> Inspect
      // Ctrl+Shift+J or Cmd+Option+J -> Console
      // Ctrl+Shift+C or Cmd+Option+C -> Element Picker
      if (isCtrlOrCmd && isShift && (key === "I" || key === "J" || key === "C")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+U or Cmd+Option+U -> View Page Source
      if (isCtrlOrCmd && key === "U") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+S or Cmd+S -> Save Page
      if (isCtrlOrCmd && key === "S") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // 3. Clear and protect console in production
    if (process.env.NODE_ENV === "production") {
      try {
        const noop = () => {};
        window.console.log = noop;
        window.console.debug = noop;
        window.console.info = noop;
        window.console.warn = noop;
      } catch {
        // Ignore errors
      }
    }

    document.addEventListener("contextmenu", handleContextMenu, { capture: true });
    window.addEventListener("keydown", handleKeyDown, { capture: true });

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
    };
  }, []);

  return null;
}
