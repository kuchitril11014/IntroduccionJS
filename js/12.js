const tecnologias = ['Html','Css','Javascript','Node.js','React.js', 'Nest.js', 'larabel',''];

// for(let i = 0; i < tecnologias.length; i++){
//     console.log(tecnologias[i]);
// }

//Foreach
//NORMAL

// tecnologias.forEach(function(tech){
//     console.log(tech);
// })

// //CON ARROYFUNCTION
// tecnologias.forEach(tech => {
//     console.log(tech);
// });

// //MAP

const arrayMap = tecnologias.map(tech => {
    return tech
});
// // console.log(arrayforEach);
// console.log(arrayMap);

//for ... of
for (let tech of tecnologias) {
    console.log(tech);
}