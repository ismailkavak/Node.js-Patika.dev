const arguments = process.argv.slice(2)

function circleArea(radius){
    let area = Math.PI * (radius**2)
    console.log(area)
}
circleArea(arguments[0])
// Write 'node circle 3' on terminal