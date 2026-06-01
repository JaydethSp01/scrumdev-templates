const API = process.env.NEXT_PUBLIC_API_URL || '';

export async function fetcher(url: string) {
  const res = await fetch(`${API}/${url}`);
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
}