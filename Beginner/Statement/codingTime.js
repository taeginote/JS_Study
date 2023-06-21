let odd = 0
let even = 0
let total = 0
for (let i = 1; i <= 50; i++) {
	if (i % 2 === 0) {
		even += i
	}
	if (i % 2 === 1) {
		odd += i
	}
}
total = odd + even

console.log({ total })
console.log({ odd })
console.log({ even })
