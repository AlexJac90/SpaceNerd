/** Prefix a site-root path with Astro's configured base (for GitHub Pages subpaths). */
export function withBase(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  const base = import.meta.env.BASE_URL;
  const segment = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${segment}`;
}

/** Current route without the configured base prefix (for nav active states). */
export function routePathFromUrl(pathname: string): string {
  const base = import.meta.env.BASE_URL;

  if (base !== '/') {
    const prefix = base.endsWith('/') ? base.slice(0, -1) : base;
    if (pathname.startsWith(prefix)) {
      const rest = pathname.slice(prefix.length) || '/';
      return rest.endsWith('/') && rest.length > 1 ? rest.slice(0, -1) : rest;
    }
  }

  return pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
}
