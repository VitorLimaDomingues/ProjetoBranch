// Estrutura de repetição

for (let i=0; i<10;i++){
    // console.log(i)
}

// While

let f =0;
while (f <10){
    // console.log(f)
    f++;    
}

// do while

let w=0;

do{
    // console.log(w);
    w++;

}
while (w<5);

// Funções

function Ola(nome){
    // `` (Strings literal ou template string)
    console.log(`Seja bem-vindo a ${nome}`)
    alert(`Seja bem-vindo a ${nome}`)
    document.write(`Seja bem-vindo a ${nome}`)
}
// Executando a função Ola passando o valor
Ola('FIAP')