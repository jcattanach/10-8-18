let navBar = document.createElement("div")
let headerText = document.createElement("h2")
let navBarHome = document.createElement("a")
let navBarCategories = document.createElement("a")
let introArticle = document.createElement("div")
let introHeader = document.createElement("h2")
let introContent = document.createElement("p")
let articleContainer = document.createElement("div")
let articleTitle = document.createElement("h3")
let articleContent = document.createElement("p")
let articleLike = document.createElement("p")
let articleContainerTwo = document.createElement("div")
let articleTitleTwo = document.createElement("h3")
let articleContentTwo = document.createElement("p")
let articleLikeTwo = document.createElement("p")


let menu = document.getElementById("container")
menu.className = "container"
menu.appendChild(navBar)
navBar.className = "nav-bar"
navBar.appendChild(headerText)
headerText.innerHTML = "HighOnCoding"
headerText.className = "header-text"
navBar.appendChild(navBarHome)
navBarHome.innerHTML = "Home"
navBarHome.className = "header-content"
navBar.appendChild(navBarCategories)
navBarCategories.innerHTML = "Categories"
navBarCategories.className = "header-content"

menu.appendChild(introArticle)
introArticle.className = "intro-article"
introArticle.appendChild(introHeader)
introHeader.innerHTML = "Curse of the Current Reviews"
introArticle.appendChild(introContent)
introContent.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

menu.appendChild(articleContainer)
articleContainer.className = "article-content"
articleContainer.appendChild(articleTitle)
articleTitle.innerHTML = "Hello WatchKit"
articleContainer.appendChild(articleContent)
articleContent.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
articleContainer.appendChild(articleLike)
articleLike.innerHTML = "12 comments 124 comments"
articleLike.className = "orange-banner"

menu.appendChild(articleContainerTwo)
articleContainerTwo.className = "article-content"
articleContainerTwo.appendChild(articleTitleTwo)
articleTitleTwo.innerHTML = "Introduction to Swift"
articleContainerTwo.appendChild(articleContentTwo)
articleContentTwo.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
articleContainerTwo.appendChild(articleLikeTwo)
articleLikeTwo.innerHTML = "15 comments 45 likes"
articleLikeTwo.className = "orange-banner"
