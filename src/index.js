document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  //let s = document.createElement('select')
  //let o1 = document.createElement('option')
  //let o2 = document.createElement('option')
  //let o3 = document.createElement('option')
  //s.setAttribute('dropdown', "function")
 //let o1Text = document.createTextNode(" ")
  //o1.appendChild(o1Text)
  //o1.setAttribute('anytime', "regular")
 //let o2Text = document.createTextNode("AM")
  //o2.appendChild(o2Text)
  //o2.setAttribute('Morning',"Morning")
 //let o3Text = document.createTextNode("PM")
  //o3.appendChild(o3Text)
  //o3.setAttribute('Afternoon',"Afternoon")
  //form.appendChild(s)
  //s.appendChild(o1)
  //s.appendChild(o2)
  //s.appendChild(o3)
  //console.log(form)
 form.addEventListener('submit', (e) => {
    e.preventDefault()
    createNewDiv(e.target.new_task_description.value)
    form.reset()
  })
  //const dropdown = document.querySelector('dropdown');
})

 function createNewDiv(des) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${des} `
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
 }


 function handleDelete(e) {
  e.target.parentNode.remove()
 }