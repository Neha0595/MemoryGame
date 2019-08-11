export default class ArrayUtility {
  static toggleArrayElements(array, currentItem) {
    const newArray = array.includes(currentItem)
      ? array.filter(item => item !== currentItem)
      : [...array, currentItem];
    return newArray;
  }

  static shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
