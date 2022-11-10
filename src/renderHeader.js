function renderHeader () {
  // create element -nav-
  const body = document.getElementById('body')
  const nav = document.createElement('nav')
  body.appendChild(nav)
  nav.setAttribute('class', 'navbar d-flex justify-content-end')
  nav.style.backgroundColor = 'transparent'
  nav.style.margin = '0 0'
  nav.style.paddingTop = '0 0'
  nav.style.top = '0'
  // create element -form-
  const form = document.createElement('form')
  nav.appendChild(form)
  form.setAttribute('class', 'd-flex justify-content-center')
  form.style.gap = '30px'
  form.style.marginTop = '10px'
  form.style.marginRight = '10px'
  // create 5 buttons for each tab
  // home tab
  const homeLink = document.createElement('button')
  form.appendChild(homeLink)
  homeLink.setAttribute('id', 'nav-img')
  homeLink.setAttribute('class', 'btn btn-outline-light homeBtn nav-img')
  homeLink.setAttribute('type', 'button')
  homeLink.textContent = 'Home'
  homeLink.style.fontSize = '20px'
  homeLink.style.padding = '5px 10px'
  homeLink.color = 'black'
  homeLink.style.borderColor = 'black'
  const imgHome = document.createElement('img')
  homeLink.appendChild(imgHome)
  imgHome.setAttribute('src', 'https://img.icons8.com/wired/64/null/home-page.png')
  imgHome.style.height = '30px'
  imgHome.style.width = '30px'

  // about tab
  const aboutLink = document.createElement('button')
  form.appendChild(aboutLink)
  aboutLink.setAttribute('id', 'nav-img')
  aboutLink.setAttribute('class', 'btn btn-outline-light aboutBtn nav-img')
  aboutLink.setAttribute('type', 'button')
  aboutLink.textContent = 'About'
  aboutLink.style.fontSize = '20px'
  aboutLink.style.padding = '5px 10px'
  aboutLink.color = 'black'
  aboutLink.style.borderColor = 'black'
  const imgAbout = document.createElement('img')
  aboutLink.appendChild(imgAbout)
  imgAbout.setAttribute('src', 'https://img.icons8.com/dotty/80/null/about-us-female.png')
  imgAbout.style.height = '30px'
  imgAbout.style.width = '30px'

  // resume tab
  const resumeLink = document.createElement('button')
  form.appendChild(resumeLink)
  resumeLink.setAttribute('id', 'nav-img')
  resumeLink.setAttribute('class', 'btn btn-outline-light nav-img resumeBtn')
  resumeLink.setAttribute('type', 'button')
  resumeLink.textContent = 'Resume'
  resumeLink.style.fontSize = '20px'
  resumeLink.style.padding = '5px 10px'
  resumeLink.color = 'black'
  resumeLink.style.borderColor = 'black'
  const imgResume = document.createElement('img')
  resumeLink.appendChild(imgResume)
  imgResume.setAttribute('src', 'https://img.icons8.com/dotty/80/null/parse-from-clipboard.png')
  imgResume.style.height = '30px'
  imgResume.style.width = '30px'

  // projects tab
  const projectsLink = document.createElement('button')
  form.appendChild(projectsLink)
  projectsLink.setAttribute('id', 'nav-img')
  projectsLink.setAttribute('class', 'btn btn-outline-light nav-img projectsBtn')
  projectsLink.setAttribute('type', 'button')
  projectsLink.textContent = 'Projects'
  projectsLink.style.fontSize = '20px'
  projectsLink.style.padding = '5px 10px'
  projectsLink.color = 'black'
  projectsLink.style.borderColor = 'black'
  const imgProjects = document.createElement('img')
  projectsLink.appendChild(imgProjects)
  imgProjects.setAttribute('src', 'https://img.icons8.com/dotty/80/null/concept.png')
  imgProjects.style.height = '30px'
  imgProjects.style.width = '30px'

  // contacts tab
  const contactsLink = document.createElement('button')
  form.appendChild(contactsLink)
  contactsLink.setAttribute('id', 'nav-img')
  contactsLink.setAttribute('class', 'btn btn-outline-light nav-img contactsBtn')
  contactsLink.setAttribute('type', 'button')
  contactsLink.textContent = 'Contacts'
  contactsLink.style.fontSize = '20px'
  contactsLink.style.padding = '5px 10px'
  contactsLink.color = 'black'
  contactsLink.style.borderColor = 'black'
  const imgContacts = document.createElement('img')
  contactsLink.appendChild(imgContacts)
  imgContacts.setAttribute('src', 'https://img.icons8.com/ios/50/null/phone-contact.png')
  imgContacts.style.height = '30px'
  imgContacts.style.width = '30px'
}

export default renderHeader
