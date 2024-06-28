const arr = [1, 3, 4, 5, 9, 23, 43, 99, 123, 124, 124, 165];

function binarySearch(arr, x) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === x) {
            return mid;
        } else if (arr[mid] < x) {
            //find half left
            left = mid + 1;
        } else {
            //find half right
            right = mid - 1;
        }
    }

    return "Not Found!";
}

let x = 123;
console.log(`index: ${binarySearch(arr, x)}`);
