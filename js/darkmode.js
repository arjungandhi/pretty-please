
window.addEventListener('DOMContentLoaded', (event) => {
    button=document.getElementById("darkmode");
    button.onclick=function(){
        cur_theme=document.documentElement.getAttribute('data-theme')

            if (cur_theme=='dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                
            }
            else {
                document.documentElement.setAttribute('data-theme', 'dark');
            }    
        }
    })