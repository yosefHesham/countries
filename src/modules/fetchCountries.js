import baseUrl from './public.js';

const cache = {};
export default async function fetchCountries(segment) {
  if (cache[segment]) {
    return cache[segment];
  }
  const resp = await fetch(`${baseUrl}/${segment}`);
  const data = await resp.json();
  cache[segment] = data;
  return data;
}
