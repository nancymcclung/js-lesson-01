const x = 1
const y = 2
const a = 3
const b = 4

console.log('x=',x,'y=',y,'a=',a,'b=',b)

let z = ((b+a)*y*x)

console.log('z=',z)

z = z * 3

console.log('z=',z)

if (z > 30) {
  console.log('wow, z is huge', z)
} else if (z>15){
  console.log('nice z is just right', z)
} else {
  console.log('little z', z)
}
