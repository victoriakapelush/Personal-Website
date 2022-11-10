/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import homePage from './homePage'
import aboutPage from './aboutPage'
import projectsPage from './projectsPage'
import renderHeader from './renderHeader'
import renderFooter from './renderFooter'
import renderBody from './renderBody'

const main = document.getElementById('main')
const body = document.getElementById('body')

function resetContacts () {
  while (body.firstChild) {
    body.firstChild.remove()
  }
}

function contactsPage () {
  resetContacts()
  renderHeader()
  renderBody()
  renderFooter()

  const main = document.createElement('main')
  body.appendChild(main)
  main.setAttribute('id', 'main')

  // const body = document.getElementById('body')
  main.style.backgroundImage = "url('https://cdni.iconscout.com/illustration/premium/thumb/female-developer-working-with-css-and-html-language-6015041-5054776.png')"
  main.style.backgroundSize = '35% 85%'
  main.style.backgroundRepeat = 'no-repeat'
  main.style.backgroundPosition = 'left'
  main.style.marginLeft = '10%'

  const aboutBtn = document.getElementsByClassName('aboutBtn')[0]
  aboutBtn.addEventListener('click', function () {
    aboutPage()
  })

  const homeBtn = document.getElementsByClassName('homeBtn')[0]
  homeBtn.addEventListener('click', function () {
    homePage()
  })

  const contactsBtn = document.getElementsByClassName('contactsBtn')[0]
  contactsBtn.addEventListener('click', function () {
    contactsPage()
  })

  const projectsBtn = document.getElementsByClassName('projectsBtn')[0]
  projectsBtn.addEventListener('click', function () {
    projectsPage()
  })

  // change color of navigation buttons when mouse is over them
  const header = document.getElementsByClassName('nav-img')
  for (let i = 0; i < header.length; i++) {
    header[i].addEventListener('mouseover', function () {
      header[i].style.backgroundColor = '#ffc107'
    })
    header[i].addEventListener('mouseout', function () {
      header[i].style.backgroundColor = 'transparent'
    })
  }
  // create contact form
  const form = document.createElement('form')
  form.style.height = '50%'
  form.style.width = '30%'
  form.style.marginLeft = '60%'
  form.style.marginTop = '8%'
  main.appendChild(form)
  const h4 = document.createElement('h4')
  form.appendChild(h4)
  h4.textContent = 'Contact me'
  h4.style.marginBottom = '4%'
  h4.style.textAlign = 'center'
  // name input
  const divName = document.createElement('div')
  form.appendChild(divName)
  divName.setAttribute('class', 'form-outline mb-4')
  const inputName = document.createElement('input')
  divName.appendChild(inputName)
  inputName.setAttribute('type', 'text')
  inputName.setAttribute('id', 'form4Example1')
  inputName.setAttribute('class', 'form-control')
  const labelName = document.createElement('label')
  divName.appendChild(labelName)
  labelName.setAttribute('class', 'form-label')
  labelName.setAttribute('for', 'form4Example1')
  labelName.textContent = 'Name'
  inputName.style.background = 'transparent'
  inputName.style.border = '1px solid orange'
  inputName.style.color = 'black'
  // email input
  const divEmail = document.createElement('div')
  form.appendChild(divEmail)
  divEmail.setAttribute('class', 'form-outline mb-4')
  const inputEmail = document.createElement('input')
  divEmail.appendChild(inputEmail)
  inputEmail.setAttribute('type', 'email')
  inputEmail.setAttribute('id', 'form4Example2')
  inputEmail.setAttribute('class', 'form-control')
  const labelEmail = document.createElement('label')
  divEmail.appendChild(labelEmail)
  labelEmail.setAttribute('class', 'form-label')
  labelEmail.setAttribute('for', 'form4Example2')
  labelEmail.textContent = 'Email'
  inputEmail.style.background = 'transparent'
  inputEmail.style.border = '1px solid orange'
  // message input
  const divMessage = document.createElement('div')
  form.appendChild(divMessage)
  divMessage.setAttribute('class', 'form-outline mb-4')
  const textarea = document.createElement('textarea')
  divMessage.appendChild(textarea)
  textarea.setAttribute('id', 'form4Example3')
  textarea.setAttribute('class', 'form-control')
  textarea.setAttribute('rows', '4')
  const labelMessage = document.createElement('label')
  divMessage.appendChild(labelMessage)
  labelMessage.setAttribute('class', 'form-label')
  labelMessage.setAttribute('for', 'form4Example3')
  labelMessage.textContent = 'Message'
  textarea.style.background = 'transparent'
  textarea.style.border = '1px solid orange'
  // button
  const button = document.createElement('button')
  form.appendChild(button)
  button.setAttribute('type', 'submit')
  button.setAttribute('class', 'btn btn-primary btn-block mb-4')
  button.textContent = 'Send'
  button.style.color = 'black'
  button.style.background = 'transparent'
  button.style.border = '1px #28a745 solid'
}

export default contactsPage
