const navBar = document.getElementById('navBar')
const  toggleBtn = document.getElementById('toggleIcon')
const closeBtn = document.getElementById('closeIcon')
const searchDiv = document.getElementById('searchDiv')
const searchIcon = document.getElementById('searchIcon')
const closeSearchIcon = document.getElementById('closeSearchIcon')

toggleBtn.onclick = ()=>{
    navBar.classList.add('showNavBar')
}
closeBtn.onclick = ()=>{
    navBar.classList.remove('showNavBar')
   
}

searchIcon.onclick = ()=>{
    searchDiv.style.display = 'flex'
    
}
closeSearchIcon.onclick = ()=>{
    searchDiv.style.display = 'none'
    
}