/* eslint-disable no-unused-vars */
import aboutPage from './aboutPage'
import contactsPage from './contactsPage'
import typingText from './typingText'
import projectsPage from './projectsPage'
import renderHeader from './renderHeader'
import renderBody from './renderBody'
import renderFooter from './renderFooter'

const body = document.getElementById('body')
// const main = document.getElementById('main')

function resetHome () {
  while (body.firstChild) {
    body.firstChild.remove()
  }
}

function homePage () {
  resetHome()
  renderHeader()
  renderBody()
  renderFooter()

  const main = document.createElement('main')
  body.appendChild(main)
  main.setAttribute('id', 'main')

  main.style.backgroundImage = "url('https://macocu.eu/static/media/cool_girl_coding.edab52e6d6684d1b5957ccd1fcd76b67.svg')"
  main.style.backgroundRepeat = 'no-repeat'
  main.style.backgroundPosition = 'left'
  main.style.height = '700px'
  main.style.width = '900px'

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
}

export default homePage
