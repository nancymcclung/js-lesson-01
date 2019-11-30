const x = 1
const y = 2
const a = 3
const b = 5
const r = Math.random() // Random decimal between 0-1

const c = parseInt(r * 100)

console.log('x=',x,'y=',y,'a=',a,'b=',b,'r=',r,'c=',c)

let z = (x + y +a+b+c)

console.log('z=',z)

z = z * 5

console.log('z=',z)

if (z > 40) {
  console.log('wow, z is huge', z)
} else if (z>25){
  console.log('nice z is just right', z)
} else {
  console.log('little z', z)
}

z = z *1

console.log('z=', z)

if (z > 75) {
    console.log('z is bigger than before', z)
} else if (z>50){
    console.log('z is in the middle', z)
} else {
    console.log('z is smaller than i hoped',z)
}
