import { useLocation } from "react-router-dom";

export function usePreviewRoutes() {
  const { pathname } = useLocation();
  const isPreviewRoute = pathname === "/test-home" || pathname.startsWith("/test-home/");
  const sitePath = (path: string) => {
    if (
      !isPreviewRoute ||
      !/^\/(?:$|#|about(?:$|#)|catalog(?:$|[/?#])|brands\/|product\/)/.test(path)
    )
      return path;
    return `/test-home${path === "/" ? "" : path.startsWith("/#") ? path.slice(1) : path}`;
  };
  // The approved design now runs on public routes too; only the URL prefix is experimental.
  return { preview: true, isPreviewRoute, sitePath };
}
