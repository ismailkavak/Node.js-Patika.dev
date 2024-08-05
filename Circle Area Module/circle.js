function circleArea(radius){
    let area = Math.PI * radius**2;
    console.log(area)
}

function circleCircumference(radius){
    let circumference = 2 * Math.PI * radius;
    console.log(circumference)
}

module.exports = {
    circleArea,
    circleCircumference
}