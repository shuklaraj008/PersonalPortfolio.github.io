console.log("script running")
document.querySelector('.cclass').style.display = 'none';

document.querySelector('.hamb').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');

    if( document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.hclass').style.display = 'inline'
        document.querySelector('.cclass').style.display = 'none'
    }
    else{
        document.querySelector('.hclass').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cclass').style.display = 'inline'


        },350);
        
    }

})