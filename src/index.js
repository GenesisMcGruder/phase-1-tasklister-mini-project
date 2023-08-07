document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
 form.addEventListener('submit', (e) => {
    e.preventDefault()
    createNewDiv(e.target.new_task_description.value)
    form.reset()
  })
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