const username = document.getElementById('name');
const data1 = document.getElementById('note1');
const data2 = document.getElementById('note2');
const data3 = document.getElementById('note3');
const btncalculate = document.getElementById('btn-calculate');
const btnpredict = document.getElementById('btn-predict');
const response = document.getElementById('result');

btncalculate.addEventListener('click',calculatenote);
btnpredict.addEventListener('click',predictNote);
function calculatenote () {
    let user = username.value  //calcula solo el nombre del usuario se utiliza en los imput y el value
    let note1 = Number(data1.value)
    let note2 = Number(data2.value)
    let note3 = Number(data3.value)
    let result = (note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)
    //response.textContent = `Sr(a)(e)(i) ${user}, su nota es de: ${result}`
    
    if (result < 3.5) {
        response.textContent = `Sr(a)(e)(i) ${user}, su nota es de: ${result}. Perdió la materia`
        response.style.color= 'black';  //Response: parrafo
    }else if (result > 3.5 && result < 4.5){
        response.textContent = `Sr(a)(e)(i) ${user}, su nota es de: ${result}. Ganó la materia`
        response.style.color= 'orange';
    }else if (result > 4.5){
        response.textContent = `Sr(a)(e)(i) ${user}, su nota es de: ${result}. Su nota es sobresaliente`
        response.style.color= 'green';
    }

    //si la nota es negativa salir un mensaje de error
    //si la nota es mayor a 5 salir un mensaje de error

    //si la nota definitiva es menor a 3.5 debe informar al usuario que perdió la materia en color negro
//si la nota definitiva es está entre 3.5 y 4.5 debe informar al usuario que ganó la materia en color naranja
//si la nota definitiva es mayor a 4.5 debe informar al usuario que su nota es sobresaliente en color verde.

}
calculatenote()

function predictNote(){
    let note1 = Number(data1.value)
    let note2 = Number(data2.value)
    let requirednote = 3.5 - (note1 * 0.3 + note2 * 0.3) / 0.4;
    data3.value = requirednote.toFixed(2);
}