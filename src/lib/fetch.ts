/**
 * Encapsulates fetch request to Github API
 * @param token authentication token
 * @param url request url
 * @param options fetch request options
 * @returns
 */
export function fetchGithub(token: string | undefined, url: string, options: RequestInit = {}): Promise<Response> {
  const baseUrl = "https://api.github.com";
  const markdownHeader = "application/vnd.github.raw+json";
  const headers = new Headers(options.headers);
  headers.set("Accept", markdownHeader);
  headers.set("Authorization", `token ${token}`);

  const endPoint = new URL(url, baseUrl).toString();
  options.headers = headers;
  return fetch(endPoint, options);
}
