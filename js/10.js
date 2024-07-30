// const tecnologias = ['HTML','CSS','JAVASCRIPT','NODEJS','REACT.JS'];

// // tecnologias[1]='nest.js'
// tecnologias.push('larabel');
// tecnologias.pop('larabel');




// const nuevoArreglo = [...tecnologias, 'nest.js']
// console.table(tecnologias)
// console.table(nuevoArreglo)


// tecnologias.shift()
const tecnologias = ['HTML','CSS','JAVASCRIPT','NODEJS','REACT.JS'];
// const tecnologias2 = tecnologias.filter(function(tech){
//     if(tech !== 'HTML'){
//         return tech
//     }
// })
 const tecnologias2 = tecnologias.map(function(tech){
    if(tech === 'NODEJS'){
        return 'Nest.js'
    } else{
        return tech
    }
 })
console.log(tecnologias2);

