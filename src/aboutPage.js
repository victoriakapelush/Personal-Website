/* eslint-disable no-unused-vars */
import homePage from './homePage'
import contactsPage from './contactsPage'
import projectsPage from './projectsPage'
import renderHeader from './renderHeader'
import renderFooter from './renderFooter'
import renderBody from './renderBody'

// const main = document.getElementById('main')
const body = document.getElementById('body')

function resetAbout () {
  while (body.firstChild) {
    body.firstChild.remove()
  }
}

function aboutPage () {
  resetAbout()
  renderHeader()
  renderBody()
  renderFooter()

  const main = document.createElement('main')
  body.appendChild(main)
  main.setAttribute('id', 'main')

  /* eslint-disable camelcase */
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

  main.style.backgroundImage = "url('https://www.lynnefinnigan.com/main-asset.svg')"
  main.style.backgroundRepeat = 'no-repeat'
  main.style.backgroundPosition = 'left'

  const container = document.createElement('div')
  const langs_box = document.createElement('div')
  const tools_box = document.createElement('div')

  main.appendChild(container)

  container.appendChild(langs_box)
  container.appendChild(tools_box)
  container.style.display = 'flex'
  container.style.flexDirection = 'column'

  langs_box.style.height = '20%'
  langs_box.style.width = '20%'
  langs_box.style.marginLeft = '70%'
  langs_box.style.marginTop = '10%'
  langs_box.style.border = '1px black dotted'
  langs_box.style.paddingTop = '1.5%'

  const langsUl = document.createElement('ul')
  langs_box.appendChild(langsUl)
  langsUl.style.textAlign = 'right'
  langsUl.style.paddingRight = '15px'
  langsUl.style.fontSize = '25px'

  const langsArray = ['HTML', 'CSS', 'JavaScript']

  for (let i = 0; i < langsArray.length; i++) {
  // eslint-disable-next-line prefer-const
    let langsLi = document.createElement('li')
    langsUl.appendChild(langsLi)
    langsLi.textContent = langsArray[i]
  }

  tools_box.style.height = '20%'
  tools_box.style.width = '20%'
  tools_box.style.marginLeft = '70%'
  tools_box.style.marginTop = '10%'
  tools_box.style.border = '1px black dotted'
  tools_box.style.marginTop = '0'
  tools_box.style.paddingTop = '1.5%'

  const ul = document.createElement('ul')
  tools_box.appendChild(ul)
  ul.style.textAlign = 'right'
  ul.style.paddingRight = '15px'
  ul.style.fontSize = '25px'

  const toolsArray = ['Webpack', 'Git', 'GitHub', 'Express', 'Node', 'React', 'Bootstrap']

  for (let i = 0; i < toolsArray.length; i++) {
  // eslint-disable-next-line prefer-const
    let li = document.createElement('li')
    ul.appendChild(li)
    li.textContent = toolsArray[i]
  }
}

export default aboutPage
