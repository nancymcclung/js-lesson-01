const x = 1
const y = 2
const a = 3
const b = 4

console.log('x=',x,'y=',y,'a=',a,'b=',b)

let z = (x + y +a+b)

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
