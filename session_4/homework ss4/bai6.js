//6.1
// console.log('Hi there, this is learning task to front -end developer career');
// let task=[
//     {
//         Name:'HTML',
//         Complete:'False',
//     },
//     {
//         Name:'CSS',
//         Complete:'False',
//     },
//     {
//         Name:'Basics of JavaScrip',
//         Complete:'Flase',
//     },
//     {
//         Name:'Node Package Manager(npm)',
//         Complete:'False',
//     },
//     {
//         Name:'Git',
//         Complete:'Flase',
//     },
// ]
//      6.1
// for(let i=0;i<=task.length;i++){
//     console.log(`${i+1}`,task[i])
// }
//      6.2
// let a=prompt('Enter your command(New, Delete, Update, Complete');
// if (a='New'){
//     let b=prompt('Enter new task');
//     let x={
//         Name:`${b}`,
//         Complete:'False',
//     };
//     task.push(x)
//     for(let i=0;i<=task.length;i++){
//         console.log(`${i+1}`,task[i])
//     }
// }
//      6.3
// let a=prompt('Enter your command(New, Delete, Update, Complete'); 
// if(a='Update'){
//     let number=prompt('Enter position')
//     let input=prompt('Enter new title')
//     task[number-1]={
//         Name:`${input}`,
//         Complete:'False'
//     };
//     for(let i=0;i<=task.length;i++){
//         console.log(`${i+1}`,task[i])
//     }
// }
//      6.4
// let a=prompt('Enter your command(New, Delete, Update, Complete'); 
// if(a='Complete'){
//     let number=prompt('Enter position')
//     task[number-1]={
//         Name:`${task[number-1].Name}`,
//         Complete:'True',
//     };
//     for(let i=0;i<=task.length;i++){
//         console.log(`${i+1}`,task[i])
//     }
// }