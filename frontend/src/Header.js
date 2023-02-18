
export default function Header({nome, children}){//isso é desestruturação, pegar o conteudo que tem dentro de um objeto e retornar em json, assim, so pega as variaveis, necessarias    
    return (
        <header>
            <h1>{nome} - {children}</h1>    
        </header>
    );
}


//props.nome pega o conteudo que veio da dentro do atributo nome <Header nome="aqui"></Header>

// export default function Header(props){
//     return (
//         <header>
//             <h1>{props.nome}</h1>    
//         </header>
//     );
// }

//props.children pega o conteudo que veio da dentro da tag <Header>aqui</Header>

// export default function Header(props){
//     return (
//         <header>
//             <h1>{props.children}</h1>    
//         </header>
//     );
// }