import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

/**
 * Cloudflare (OpenNext) adapter configuration.
 *
 * Every route on this site is prerendered at build time and nothing
 * revalidates, so the prerendered pages are read straight from the Worker's
 * static assets. That needs no R2 bucket, KV namespace or D1 database.
 *
 * `enableCacheInterception` serves those pages without booting the Next.js
 * server for the request, which keeps cold starts short.
 *
 * If a route ever starts using `revalidate` or `use cache`, switch to an R2 or
 * KV incremental cache: https://opennext.js.org/cloudflare/caching
 */
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
