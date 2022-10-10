// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

// 8 / 5 = x
// 8 = 5 * x

// 5 * (1 + sqrt(5)) / 2 => 8

const nextFib = (num) => {
    let last = 1
    let newfib = 2;

    for (let i = 0; i <= num; i++) {
        if (i == newfib) {
            newfib = last + newfib // 1 + 2 => newfib = 3
            last = newfib - last  // a + b = c <==> c - a = b, 
        }
    }

    return newfib;

}

const nextFib2 = (num) => Math.round(num * ((1 + Math.sqrt(5)) / 2.0))

console.log(
    nextFib2(8)
)

