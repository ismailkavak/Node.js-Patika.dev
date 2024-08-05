const fs = require('fs');

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf-8', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("File created!")
    }
})

fs.readFile('employees.json', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data)
        console.log("File read!")
    }
})

fs.writeFile('employees.json', '{"name": "Employee 2 Name", "salary": 2000}', 'utf-8', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("File updated!")
    }
})

fs.unlink('employees.json', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("File deleted!")
    }
})