function arguments(size, color){
    const element = document.createElement('div');
    document.body.append(element);

    element.style.height = size+'px';
    element.style.width = size+'px';
    element.style.backgroundColor = color;

    document.body.append(element);
}

arguments(30, 'blue');

//function square(x,){
    //const element = document.createElement('div');
    //document.body.append(element);
    //return x*x;
//}


/* 1. Matte med Array
a.) Definiera minst två funktioner som ska användas som callback funktioner.
i.) De ska båda ha en parameter (ett nummer)
ii.) De ska båda utföra någon form av matematisk beräkning på argumentet 
iii.) De ska båda returnera resultatet. */

function square(x){
    return x*x;
}

function subtraction(x){
    return x-2;
}

console.log(square(10));
console.log(subtraction(1198));


/* b.) Definiera en funktion som ska användas som en higher order funktion. 
i.) Den ska ha två parametrar: en array med nummer och en funktion. 
ii.) Den ska loopa igenom arrayen.
iii.) För varje nummer i arrayen ska den anropa callback-funktionen med numret som argument. */

function mapArray(array, callback){
    for (let i = 0; i < array.length; i++){
        array[i] = callback(array[i]);
        
    }
return array;
   
}

const numberArr = [3, 5, 8, 2];
const halfArray = mapArray(numberArr,

    function(x){
        return x+1;
    }
    );
console.log(halfArray); 


