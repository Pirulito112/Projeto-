function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem

  if (html.classList.contains("light")) {
    // se tiver ligth mode adicionar imagem light
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute("alt", "Mayk rei delas")
  } else {
    // se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute("alt", "Mayk Nerd")
  }
}
