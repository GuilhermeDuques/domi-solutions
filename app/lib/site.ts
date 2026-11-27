const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

export const siteUrl = configuredSiteUrl || undefined;
export const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export function absoluteUrl(path = "/") {
  return siteUrl ? new URL(path, `${siteUrl}/`).toString() : undefined;
}
