//When user clicks on the button, toggle between hiding
//and showing the dropdown content links
function downButton() {
    document.getElementById("myDropdown").classList.toggle('show');
}

//Close the dropdown menu if the user clicks outside of it
window.onclick = function (e){
    if (!e.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName('dropDownLinks');

        for (let i =0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

//3/13/2023 
//creates collapsing menu (reusable module)
const dynamicNAVUI = (()=> {
    const tabs = ['Clothing', 'Shoes', 'Accesories', 'Baby',
    'Electronics', 'Garden', 'Sports', 'House', 'Bathroom'];

    const mainTab = document.querySelector('#main-tabs');

    window.addEventListener('resize', function (e) {
        clearNav();
        fillNav();

    }, true);
})
