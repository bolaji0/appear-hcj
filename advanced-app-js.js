const container = document.querySelector('.vor');
const btn = document.querySelector('.but');
const iam = document.querySelector('.iam');
const da = document.querySelector('.da');
const ol = document.querySelector('.ol');
const mi = document.querySelector('.mi');
const mu = document.querySelector('.mu');
const we = document.querySelector('.we');
const bi = document.querySelector('.bi');
const all = document.querySelectorAll('.all');


btn.addEventListener('click', ()=>{
    container.style.display = 'block'
 })

// bi.addEventListener('click', ()=>{
//     iam.style.display = 'block'
//     container.style.display = 'none'

//  })
//  we.addEventListener('click', ()=>{
//     iam.style.display = 'block'
//     container.style.display = 'none'
//  })
//  mu.addEventListener('click', ()=>{
//     iam.style.display = 'block'
//     container.style.display = 'none'
//  })
//  mi.addEventListener('click', ()=>{
//     iam.style.display = 'block'
//     container.style.display = 'none'
//  })
//  ol.addEventListener('click', ()=>{
//     iam.style.display = 'block'
//     container.style.display = 'none'
//  })
//  da.addEventListener('click', ()=>{
//     iam.style.display = 'block'
//     container.style.display = 'none'
//  })


    all.forEach((i)=>{
        i.addEventListener('click', ()=>{
            iam.style.display = 'block'
            container.style.display = 'none'
        })
    })



    

    // //  console.log(typeof 2);


    // const arr = ['hello',2,3,4,'hi', 4, 77, 'Hey']

    // arr.forEach((arrItem)=>{
    // if(typeof arrItem == 'number'){
    //     console.log('I am a number' + arrItem);
    // }
    // })






    // function getFormatedName(fullName){
    // const splittedName = fullName.split(' ')
    // //  return splittedName;
    // const fName = splittedName[0]
    // const lName = splittedName[1]


    // return fName
    // }


    // function formatName(_name)




    // const fullName = formatName('Mustapha Fathiu')
    // console.log(firstName)


