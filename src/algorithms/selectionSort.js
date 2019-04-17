const selectionSort = (array) => {
    let min, temp;

    array.forEach((item, index) => {
        min = index;
        for (let y = index + 1; y < array.length; y++) {
            if (array[y] < array[min]) {
                min = y
            }
        }
        temp = array[index];
        array[index] = array[min];
        array[min] = temp;
    });
    return array;
}

const items = [5, 1, 12, -5, 16, 2, 12, 14]
console.log(selectionSort(items));