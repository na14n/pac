

export function slugFormatter(inputString, clean = false, removeSpace = true) {

  const cleanedString = clean ? String(inputString).replace(/[^a-zA-Z0-9\s]/g, '')
    : String(inputString);
  const slug = removeSpace ? cleanedString.replace(/\s+/g, '-').toLowerCase().replace(/&/g, '%26')
    : cleanedString.replace(/-/g, ' ').toLowerCase().replace(/%26/g, '&');

  return slug;
}

export function idFormatter(inputString, clean = true) {

  const slug = clean ? String(inputString).replace(/=/g, '') : String(inputString);

  return slug
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

export function pTagRemover(inputString){
  // Use a regular expression to find and remove <p> tags
  const regex = /<p>(.*?)<\/p>/g;
  const result = inputString.replace(regex, "$1");
  
  return result;
}

export function partString(inputString) {
  // Split the input string at commas and trim each substring
  const arrayOfStrings = inputString.split(',').map(str => str.trim());

  return arrayOfStrings;
}


export function extractNamesFromArray(arr) {
  // Use the map() method to extract the 'name' property from each object
  const namesArray = arr.map((obj) => obj.name);
  
  return namesArray;
}

export function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}

export function generateDateString() {
  const currentDate = new Date();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so we add 1 and pad with 0 if necessary.
  const day = String(currentDate.getDate()).padStart(2, '0');
  const year = String(currentDate.getFullYear()).slice(-2);
  const randomString = generateRandomString(4);
  
  return `${month}${day}${year}${randomString}`;
}

export function capitalizeFLetter(string) {
	return string.replace(/^./, string[0].toUpperCase());
}

export function transformArrayToColorsObject(data) {
  const colors = data.reduce((acc, item) => {
    const { styleName, styleDetails } = item;
    if (styleName && styleDetails) {
      acc[styleName] = styleDetails;
    }
    return acc;
  }, {});

  return colors;
}

export function formatWordPressDate(inputDateString) {
  // Parse the original date string into a Date object
  var dateObject = new Date(inputDateString);

  // Format the date as "Month, DD YYYY"
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var formattedDate = monthNames[dateObject.getMonth()] + ', ' + dateObject.getDate() + ' ' + dateObject.getFullYear();

  return formattedDate
}

export function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num) + "...";
  }
}


