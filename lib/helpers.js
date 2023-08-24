

export function slugFormatter(inputString, clean = false, removeSpace = true) {

  const cleanedString = clean ? String(inputString).replace(/[^a-zA-Z0-9\s]/g, '')
    : String(inputString);
  const slug = removeSpace ? cleanedString.replace(/\s+/g, '-').toLowerCase().replace(/&/g, '%26')
    : cleanedString.replace(/-/g, ' ').toLowerCase().replace(/%26/g, '&');

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

export function sortByAttribute(array, attribute) {
  const copyArray = [...array]; // Create a copy of the array
  return copyArray.sort((a, b) => {
    const valueA = a[attribute];
    const valueB = b[attribute];

    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }
    return 0;
  });
}

export function breadcrumbsFormatter(inputArray) {

  const breadcrumbs = {
    parent: '',
    child: ''
  }

  inputArray
    .forEach(item => {
      if (item.parent && item.parent.node && typeof item.parent.node.name === 'string') {
        breadcrumbs.parent = item.parent.node.name;
        breadcrumbs.child = item.name;
      }
    });

  return breadcrumbs
}






