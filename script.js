function toggleMode(){
    const html = document.documentElement

    if(html.classList.contains('lightColor')){
        html.classList.remove('lightColor')
    } else{
       html.classList.add('lightColor') 
    }
}