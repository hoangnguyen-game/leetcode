class Sorting {
  constructor(array) {
    this.array = array;
  }

  bubbles() {
    let len = this.array.length;

    for (let i = 0; i < len; i++) {
      for (let j = len; j > i; j--) {
        if (this.array[i] > this.array[j]) {
          let temp = this.array[i];
          this.array[i] = this.array[j];
          this.array[j] = temp;
        }     
      }
    }

    selection(this.array) {
        let len = this.array.length;
    }

    return this.array;
  }
}

const numbers = [5, 3, 8, 4, 2];
const obj = new Sorting(numbers);
obj.bubbles();
console.log(obj);
console.log("haong");
