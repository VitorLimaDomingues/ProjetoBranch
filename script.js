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
    // alert(`Seja bem-vindo a ${nome}`)
    document.write(`Seja bem-vindo a ${nome}`)
}
// Executando a função Ola passando o valor
Ola('FIAP')

// Arrow Function

const hello=()=>(console.log("Função arrow function"))

hello()

// array [], objeto {} e metodos()

let jogadores =[                  // array
    {nome:'Huguinho', idade:17},  // objeto
    {nome:'Zezinho', idade:18},   // objeto
    {nome:'Luizinho', idade:19}   // objeto
]

let listarjogadores = jogadores.map(function(item){
    return item.idade             // metodos
})
console.log(listarjogadores)