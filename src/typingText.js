const main = document.getElementById('body')
const message = "console.log ('Hello, World! My name is Victoria.')"

function reset () {
  if (main.children.length === 0) return true

  const field = document.getElementById('typingDemo')
  if (field != null && field.textContent.length !== message.length) {
    return false
  }

  for (const child of main.children) {
    child.remove()
  }

  return true
}

function typingText () {
  if (!reset()) return

  const wrapper = document.createElement('div')
  main.appendChild(wrapper)
  wrapper.setAttribute('class', 'wrapper')

  const typingDemo = document.createElement('div')
  wrapper.appendChild(typingDemo)
  typingDemo.setAttribute('id', 'typingDemo')

  typingDemo.style.textAlign = 'right'
  typingDemo.style.fontSize = '25px'
  typingDemo.style.marginTop = '15%'
  typingDemo.style.marginRight = '10%'

  let i = 0
  const speed = 50

  function typeWriter () {
    if (i < message.length) {
      const field = document.getElementById('typingDemo')
      if (field == null) return
      field.textContent += message.charAt(i)
      i++

      setTimeout(typeWriter, speed)
    }
  }
  typeWriter()
}

export default typingText
