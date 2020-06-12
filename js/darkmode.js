
window.addEventListener('DOMContentLoaded', (event) => {
    button=document.getElementById("darkmode");
    button.onclick=function(){
        cur_theme=document.documentElement.getAttribute('data-theme')
            b=document.getElementById("darkmode");
            i=b.children[0];

            if (cur_theme=='dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                b.classList.remove('light')
                b.classList.add('dark')
                i.classList.remove('fa-sun')
                i.classList.add('fa-moon')
                
            }
            else {
                document.documentElement.setAttribute('data-theme', 'dark');
                b.classList.remove('dark')
                b.classList.add('light')
                i.classList.remove('fa-moon')
                i.classList.add('fa-sun')
            }    
        }
    })