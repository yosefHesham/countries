import baseUrl from './public.js';

export default async function fetchCountries(segment) {
  const resp = await fetch(`${baseUrl}/${segment}`);
  const data = await resp.json();
  console.log(data);
  return data;
}
