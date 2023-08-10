

export function slugFormatter(inputString, removeSpace = true) {

  const slug = removeSpace ? String(inputString).replace(/\s+/g, '-').toLowerCase().replace(/&/g, '%26')
    : String(inputString).replace(/-/g, ' ').toLowerCase().replace(/%26/g, '&');

  return slug;
}

export function bgAccentFormatter(color) {
  return `bg-[${color}]`
}

export function hoverTextAccentFormatter(color) {
  return `hover:text-[${color}]`
}

export function hoverBorderAccentFormatter(color) {
  return `hover:border-[${color}]`
}

export function focusBorderAccentFormatter(color) {
  return `focus:border-[${color}]`
}