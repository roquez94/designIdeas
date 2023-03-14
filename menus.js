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

    function clearNav() {
        mainTab.querySelector('li').forEach(
            el => el.remove()
        );
    }

    function fillNav(){
        const WinWidth = window.innerWidth
            || documentElement.clientWidth
            || document.body.clientWidth;

            //create pseudo-element to get the width of an LI in mainTab
            const del = document.createElement('li');
            mainTab.appendChild(del);
            const tabWidth = del.getBoundingClientRect().width;
                del.remove();

            //calculate max number of tabs that can be made in nav bar
            const maxTabs = Math.floor(WinWidth / tabWidth);
            if (maxTabs >= tabs.length) {
        //there is enough space for all tabs in #main-tabs
        //insert all tabs in main tab. no need for dropdown.
                for (let i = 0; i < tabs.length; i++) {
                    const el = document.createElement('li');
                    el.textContent = tabs[i];
                    mainTab.appendChild(el);
                }
            } else {
                //create a dropdown menu for extra tabs
                const extraLI = document.createElement('li');
                extraLI.setAttribute('id', 'extraLI');
                extraLI.setAttribute('tabindex', '0');

                const span = document.createElement('span');
                span.textContent = 'More +';
                const extraTabsList = document.createElement('ul');
                extraTabsList.setAttribute('id', 'extra-tabs');
                extraLI.appendChild(span);
                extraLI.appendChild(extraTabsList);

                //insert as many tabs as possible and keep a tab for More+
                for (let i = 0; i < maxTabs -1; i++){
                    const el = document.createElement('li');
                    el.textContent = tabs[i];
                    mainTab.appendChild(el);
                }
                //place extra tabs in dropdown
                for (let i = maxTabs -1; i < tabs.length; i++){
                    const el = document.createElement('li');
                    el.textContent = tabs[i];
                    extraTabsList.insertBefore(el, extraTabsList.firstChild);
                    }

                    mainTab.appendChild(extraLI);

                    //display dropdown on Click
                    extraLI.addEventListener('click', ()=> {
                        extraTabsList.classList.add('display-dropdown');
                    });
            }
        }
        fillNav();
})();
