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