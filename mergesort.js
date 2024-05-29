class mergeSort {
    constructor() {}

    merge(left, right) {
        const merged = [];
        let i = 0,
            j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                merged.push(left[i]);
                i++;
            } else {
                merged.push(right[j]);
                j++;
            }
        }

        while (i < left.length) {
            merged.push(left[i]);
            i++;
        }

        while (j < right.length) {
            merged.push(right[j]);
            j++;
        }

        return [...merged, ...left.slice(i), ...right.slice(j)];
    }

    sorting(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        // Tìm điểm giữa của mảng
        const mid = Math.floor(arr.length / 2);

        // Chia mảng thành hai nửa trái và phải
        const leftHalf = arr.slice(0, mid);
        const rightHalf = arr.slice(mid);

        // Sắp xếp đệ quy hai nửa
        return this.merge(this.sorting(leftHalf), this.sorting(rightHalf));
    }
}

const arr = [4, 5, 7, 4, 7, 8, 6, 7, 1, 1, 2, 3, 3, 4, 7, 8, 8, 9, 9];

const merge = new mergeSort();
console.log(merge.sorting(arr));
