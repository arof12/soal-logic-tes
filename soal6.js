let kata = "I am the gratest Man";
let arr = kata.split(" ");

let newArr = [];
for (let i = 0; i < arr.length; i++) {
    let kataBaru = [];
    for (let j = 0; j < arr[i].length; j++) {
        kataBaru.unshift(arr[i][j]);
    }
    newArr.push(kataBaru.join(""));
}

let kataJoin = newArr.join(" ");
console.log(kataJoin);

// metode utk memodifikasi array
// push, unshift, pop, shift

// push utk memasukkan
// misal: arr = ['a']
// arr.push(1)
// hasil -> arr = ['a', 1]

// unshift -> kebalikan push
// misal: arr = ['a']
// arr.unshift(1)
// hasil -> arr = [ 1, 'a']

// pop -> mengeluarkan elemen terakhir
// misal: arr = ['a', 1]
// arr.pop()
// hasil -> arr = ['a']

// shift -> mengeluarkan elemen pertama
// misal: arr = ['a', 1]
// arr.shift()
// hasil -> arr = [1]