function generateArray(length, minValue, maxValue) {
    const array = [];
    for (let i = 0; i < length; i++) {
        const randomVal = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        array.push(randomVal);
    }
    return array;
}

function printArray(array) {
    const formatted = array.map((val, idx) => `[cell - ${idx}, value - ${val}]`).join(', ');
    console.log(`{${formatted}}`);
}

function bubbleSort(array, ascending) {
    const arr = [...array]; // Створюємо копію масиву
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            const needSwap = ascending ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1];
            if (needSwap) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function insertionSort(array, ascending) {
    const arr = [...array];
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && (ascending ? arr[j] > key : arr[j] < key)) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

function selectionSort(array, ascending) {
    const arr = [...array];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let targetIndex = i;
        for (let j = i + 1; j < n; j++) {
            const isBetter = ascending ? arr[j] < arr[targetIndex] : arr[j] > arr[targetIndex];
            if (isBetter) {
                targetIndex = j;
            }
        }
        const temp = arr[targetIndex];
        arr[targetIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}


const length = 8;
const minValue = 1;
const maxValue = 20;

console.log("=== ГЕНЕРАЦІЯ ТА ВИВІД ПОЧАТКОВОГО МАСИВУ ===");
const originalArray = generateArray(length, minValue, maxValue);
printArray(originalArray);
console.log();

console.log("=== BUBBLE SORT ===");
process.stdout?.write ? process.stdout.write("За зростанням: ") : console.log("За зростанням:");
printArray(bubbleSort(originalArray, true));
process.stdout?.write ? process.stdout.write("За спаданням:  ") : console.log("За спаданням:");
printArray(bubbleSort(originalArray, false));
console.log();

console.log("=== INSERTION SORT ===");
process.stdout?.write ? process.stdout.write("За зростанням: ") : console.log("За зростанням:");
printArray(insertionSort(originalArray, true));
process.stdout?.write ? process.stdout.write("За спаданням:  ") : console.log("За спаданням:");
printArray(insertionSort(originalArray, false));
console.log();

console.log("=== SELECTION SORT ===");
process.stdout?.write ? process.stdout.write("За зростанням: ") : console.log("За зростанням:");
printArray(selectionSort(originalArray, true));
process.stdout?.write ? process.stdout.write("За спаданням:  ") : console.log("За спаданням:");
printArray(selectionSort(originalArray, false));