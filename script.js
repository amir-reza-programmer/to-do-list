toDoList  = document.querySelector('#to-do')
doingList = document.querySelector('#doing')
doneList  = document.querySelector('#done')



// toDoListBottomSection = document.querySelector('#to-do .list-bottom-section')
// doingListBottomSection = document.querySelector('#doing .list-bottom-section')
// doneListBottomSection = document.querySelector('#done .list-bottom-section')

toDoListBottomSection = toDoList.querySelector('.list-bottom-section')
doingListBottomSection = doingList.querySelector('.list-bottom-section')
doneListBottomSection = doneList.querySelector('.list-bottom-section')

toDoListAddCardButton = toDoList.querySelector('.add-card')
doingListAddCardButton = doingList.querySelector('.add-card')
doneListAddCardButton = doneList.querySelector('.add-card')



console.log(toDoList); console.log(doingList); console.log(doneList); console.log(toDoListBottomSection); console.log(doingListBottomSection);
console.log(doneListBottomSection); console.log(toDoListAddCardButton); console.log(doingListAddCardButton); console.log(doneListAddCardButton); 

// init(toDoListAddCardButton, toDoListBottomSection).then(
//     (onResolved) => {

//         init(doingListAddCardButton, doingListBottomSection).then(
//             (onResolved) => {init(doneListAddCardButton, doneListBottomSection)}

            
//         )
//     },
//     (onRejected) => {
//         // Some task on failure
//     }
    
// )


toDoListAddCardButton.addEventListener('click',()=> {
    // console.log(e);
    // console.log(e.target);
    // listBottomSection[indx].style.marginTop = '15px'
    // listBottomSection[indx].style.marginBottom = '15px'
    toDoListBottomSection.innerHTML = `<textarea name="text1" id="" cols="30" rows="5" placeholder="Enter Title..."></textarea>

    <div class="bottom-section">



        <div class="tag">




        <div class="dropdown">
                    
                    
                        <select class="importance-value dropbtn">
                            <div class="dropdown-content">
                            <option class="low"value="1">Low</option>
                            <option class="normal" value="2" selected="selected">Normal</option>
                            <option class="high" value="3">High</option>
                        </div>
                          </select>
             </div>




        </div>
        <button class="submit">Add Card</button>
        <button class="cancel">Cancel</button>`
        // e.target.classList.remove('before-click')
        setTimeout(() => {
            toDoList.querySelector('.cancel').addEventListener('click', () =>{
                toDoListBottomSection.innerHTML = ""
                toDoListBottomSection.appendChild(toDoListAddCardButton)}
            )
            toDoList.querySelector('.submit').addEventListener('click', () =>{
                console.log(toDoList.querySelector('textarea').value);
                console.log(toDoList.querySelector('.importance-value').value);
            }
            )
        }, false);
         
       
        // e.target.classList.remove('add-card')


// cb = 
// setInterval(() => {
//     console.log(cb.checked);
// }, 1000);
//     })

})

doingListAddCardButton.addEventListener('click',()=> {
    // console.log(e);
    // console.log(e.target);
    // listBottomSection[indx].style.marginTop = '15px'
    // listBottomSection[indx].style.marginBottom = '15px'
    doingListBottomSection.innerHTML = `<textarea name="text1" id="" cols="30" rows="5" placeholder="Enter Title..."></textarea>

    <div class="bottom-section">



        <div class="tag">




        <div class="dropdown">
                    
                    
                        <select class="importance-value dropbtn">
                            <div class="dropdown-content">
                            <option class="low"value="1">Low</option>
                            <option class="normal" value="2" selected="selected">Normal</option>
                            <option class="high" value="3">High</option>
                        </div>
                          </select>
             </div>




        </div>
        <button class="submit">Add Card</button>
        <button class="cancel">Cancel</button>`
        // e.target.classList.remove('before-click')
        setTimeout(() => {
            doingList.querySelector('.cancel').addEventListener('click', () =>{
                doingListBottomSection.innerHTML = ""
                doingListBottomSection.appendChild(doingListAddCardButton)}
            )
            doingList.querySelector('.submit').addEventListener('click', () =>{
                console.log(doingList.querySelector('textarea').value);
                console.log(doingList.querySelector('.importance-value').value);
            }
            )
        }, false);
         
       
        // e.target.classList.remove('add-card')


// cb = 
// setInterval(() => {
//     console.log(cb.checked);
// }, 1000);
//     })

})

doneListAddCardButton.addEventListener('click',()=> {
    // console.log(e);
    // console.log(e.target);
    // listBottomSection[indx].style.marginTop = '15px'
    // listBottomSection[indx].style.marginBottom = '15px'
    doneListBottomSection.innerHTML = `<textarea name="text1" id="" cols="30" rows="5" placeholder="Enter Title..."></textarea>

    <div class="bottom-section">



        <div class="tag">




        <div class="dropdown">
                    
                    
                        <select class="importance-value dropbtn">
                            <div class="dropdown-content">
                            <option class="low"value="1">Low</option>
                            <option class="normal" value="2" selected="selected">Normal</option>
                            <option class="high" value="3">High</option>
                        </div>
                          </select>
             </div>




        </div>
        <button class="submit">Add Card</button>
        <button class="cancel">Cancel</button>`
        // e.target.classList.remove('before-click')
        setTimeout(() => {
            doneList.querySelector('.cancel').addEventListener('click', () =>{
                doneListBottomSection.innerHTML = ""
                doneListBottomSection.appendChild(doneListAddCardButton)}
            )
            doneList.querySelector('.submit').addEventListener('click', () =>{
                console.log(doneList.querySelector('textarea').value);
                console.log(doneList.querySelector('.importance-value').value);
            }
            )
        }, false);
         
       
        // e.target.classList.remove('add-card')


// cb = 
// setInterval(() => {
//     console.log(cb.checked);
// }, 1000);
//     })

})









// init(toDoListAddCardButton, toDoListBottomSection)
// init(doingListAddCardButton, doingListBottomSection)
// init(doneListAddCardButton, doneListBottomSection)

function init(element, other) {
    element.addEventListener('click',()=> {
        // console.log(e);
        // console.log(e.target);
        // listBottomSection[indx].style.marginTop = '15px'
        // listBottomSection[indx].style.marginBottom = '15px'
        other.innerHTML = `<textarea name="text1" id="" cols="30" rows="5" placeholder="Enter Title..."></textarea>

        <div class="bottom-section">



            <div class="tag">




            <div class="dropdown">
                    <button class="dropbtn">Dropdown</button>
                    <div class="dropdown-content">
                      <!-- <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a> -->
                      <label><input type="checkbox" class="radio" value="1" name="fooby[2][]" />Low</label>
                      <label><input type="checkbox" class="radio" value="1" name="fooby[2][]" />Normal</label>
                      <label><input type="checkbox" class="radio" value="1" name="fooby[2][]" />High</label>
                    </div>
                  </div>




            </div>
            <button class="submit">Add Card</button>
            <button class="cancel">Cancel</button>`
            // e.target.classList.remove('before-click')
            setTimeout(() => {
                deleteAddButton(element.querySelector('.cancel'), other)
            }, false);
             
           
            // e.target.classList.remove('add-card')


// cb = 
// setInterval(() => {
//     console.log(cb.checked);
// }, 1000);
//     })
    
})

setTimeout(() => {
    return Promise.resolve("Success");
}, false);
}

function deleteAddButton(element, other) {
    element.addEventListener('click', ()=>{
        other.innerHTML = '<div class="add-card before-click">+ Add Card</div>'
    })
}



// addCardButtons.forEach((button, indx)=>{
//     button.addEventListener('click',function(e) {
//         console.log(e);
//         console.log(e.target);
//         listBottomSection[indx].style.marginTop = '15px'
//         listBottomSection[indx].style.marginBottom = '15px'
//         listBottomSection[indx].innerHTML = `<textarea name="text1" id="" cols="30" rows="5" placeholder="Enter Title..."></textarea>

//         <div class="bottom-section">



//             <div class="tag">




//             <div class="dropdown">
//                     <button class="dropbtn">Dropdown</button>
//                     <div class="dropdown-content">
//                       <!-- <a href="#">Link 1</a>
//                       <a href="#">Link 2</a>
//                       <a href="#">Link 3</a> -->
//                       <label><input type="checkbox" class="radio" value="1" name="fooby[2][]" />Low</label>
//                       <label><input type="checkbox" class="radio" value="1" name="fooby[2][]" />Normal</label>
//                       <label><input type="checkbox" class="radio" value="1" name="fooby[2][]" />High</label>
//                     </div>
//                   </div>




//             </div>
//             <button id="submit">Add Card</button>
//             <button id="cancel">Cancel</button>`
//             e.target.classList.remove('before-click')
//             cancelButton = document.
//             // e.target.classList.remove('add-card')


// cb = 
// setInterval(() => {
//     console.log(cb.checked);
// }, 1000);
//     })
    
// })




// });




// var checkList = document.getElementById('list1');
// checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
//   if (checkList.classList.contains('visible'))
//     checkList.classList.remove('visible');
//   else
//     checkList.classList.add('visible');
// }








// btn = document.getElementById('ddlViewBy')
// setInterval(() => {
//     console.log(btn.value);
// }, 1000);
























{/* <div class="sec-center">       
<input class="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
<label class="for-dropdown" for="dropdown">importance: DEFAULT<i class="uil uil-arrow-down"></i></label>
<div class="section-dropdown"> 
<a href="#" id="low">LOW<i class="uil uil-arrow-right"></i></a>
<a href="#" id="default">DEFAULT<i class="uil uil-arrow-right"></i></a>
<a href="#" id="high">HIGH<i class="uil uil-arrow-right"></i></a>
</div>
</div> */}