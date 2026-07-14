export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
