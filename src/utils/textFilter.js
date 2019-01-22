export const basicFilter = text => {
  const splittedText = text.split('ঃ');
  return splittedText[1].trim(); 
}
