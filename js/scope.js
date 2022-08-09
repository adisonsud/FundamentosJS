// Scope

const precio = 300

function unaFuncion() {
    const precio = 600
    console.log(precio) //600
}

if(true) {
    console.log(precio) // 300
}


unaFuncion()