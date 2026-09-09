const baseUrl = process.env.NEXT_PUBLIC_BASE_API ?? "";

export type ApiInit = Omit<RequestInit, "body"> & {
  body?: RequestInit["body"] | Record<string, unknown>;
};

// A basic version of the original project's api<T>() wrapper.
export async function api<T>(path: string, init: ApiInit = {}): Promise<T> {
  const url = path.startsWith("http") ? path : `${baseUrl}${path}`;
  const body = init.body && typeof init.body === "object" && !(init.body instanceof FormData)
    ? JSON.stringify(init.body)
    : init.body;

  const response = await fetch(url, {
    ...init,
    body,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Requested-With": "ESIM-NEXT",
      "X-Requested-With-Version": "1",
      "X-Requested-With-Platform": "web",
      "X-Requested-With-Package": "server",
      ...init.headers,
    },
  });

  if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
  return response.json() as Promise<T>;
}
