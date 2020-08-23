// procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', coloneField);

// Executar uma ação
function coloneField() {
       // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input');

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpar ele
        field.value = "";
    });

    // Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);

}

