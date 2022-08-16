export function genCustomIdentifier(label = "") {
  return `${label}${Math.floor(Math.random() * 100000)}`;
}
