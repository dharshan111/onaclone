//navbar menu

const menu=document.getElementById('menu-button')
const navlinks=document.getElementById('mobile-navbar-links')
const section_piller_form=document.getElementById('four-form')
const footer=document.getElementById('footer-section')


menu.addEventListener('click',()=>{
    if(menu.textContent==="Menu"){
        menu.textContent='close';
        navlinks.classList.add('mobile_navbar-navlinks-open')


         section_piller_form.style.display='none';
         footer.style.display='none';
    }
    else{
        menu.textContent='Menu';
        navlinks.classList.remove('mobile_navbar-navlinks-open')
        section_piller_form.style.display='grid';
         footer.style.display='grid';
    }
})


const logo_head_NA=document.getElementById('head-logo')
const replacement_image=document.getElementById('replace-logo')
const navlists_transform=document.getElementById('port-nav')

window.addEventListener('scroll',()=>{
    if(window.scrollY>80){
        logo_head_NA.classList.remove('heading-logo-visible')
         logo_head_NA.classList.add('heading-logo-hidden')

         //replace logo
         replacement_image.classList.add('replace-logo-visible')
         replacement_image.classList.remove('replace-logo-hidden')

         //navlists transition
        navlists_transform.classList.add('unorder')
        navlists_transform.classList.remove()
    }
    else{
        logo_head_NA.classList.remove('heading-logo-hidden')
        logo_head_NA.classList.add('heading-logo-visible')

        //replace logo
        replacement_image.classList.add('replace-logo-hidden')
        replacement_image.classList.remove('replace-logo-visible')

        //navlists transition
        navlists_transform.classList.remove('unorder')
    }
})




window.addEventListener("scroll", () => {
  const unorder = document.querySelector(".unorder");

  if (window.scrollY > 80) {
    unorder.classList.add("unorder-move-left");
  } else {
    unorder.classList.remove("unorder-move-left");
  }
});










function validation(event){
    event.preventDefault();

    emailValidation();
    companyValidation();
    engineerValidation(); 
    selectValidation();

    if(emailValidation() && companyValidation() && engineerValidation() && selectValidation())
    {
        form.submit();
        alert('submitted successfully')
    }

}

let valid = true;


function emailValidation() {
    const email = document.getElementById('email-inp').value.trim();
    const emailError = document.getElementById('error-email');
    valid = true;
    if(email === ''|| !email.includes('@')){
        emailError.textContent = 'This field is required';
        document.getElementById('email-inp').style.border = '1px solid red'
    }
    

    else{
        emailError.textContent = '';
        document.getElementById('email-inp').style.border = '1px solid green'       
    }
    return valid
}

function companyValidation(){
    const company = document.getElementById('company-inp').value.trim();
    const companyError = document.getElementById('error-company');
    valid = true;

    if(company === ''){
        companyError.textContent = 'This field is required';
        document.getElementById('company-inp').style.border = '1px solid red'   
    }else if(!isValid(company)){
        companyError.textContent = 'Enter a valid website';
        document.getElementById('company-inp').style.border = '1px solid red'   
    }else{
        companyError.textContent = '';
        document.getElementById('company-inp').style.border = '1px solid green'   
        
    }
    return valid
}

function isValid(str){
    try {
        const url = new URL(str)
        return url.protocol === 'http:' || url.protocol === 'https:'; 
    } catch (error) {
        return false;
    }
}

function engineerValidation(){
    const engineer = document.getElementById('dropdown-inp');
    const engineerError = document.getElementById('error-drop');
    valid = true;

    if(engineer.value === ''){
        engineerError.textContent = 'This field is required';
        document.getElementById('dropdown-inp').style.border = '1px solid red';
    }else{
        engineerError.textContent = '';
        document.getElementById('dropdown-inp').style.border = '1px solid green';
    }
    return valid
}

function selectValidation(){
    const select = document.getElementsByClassName('select')
    const selectError = document.getElementById('error-select');
    let selected = false;

    for(let i = 0; i < select.length; i++){
        if(select[i].checked){
            selected = true;
            break;
        }
    }

    if(!selected){
        selectError.textContent = 'This field is required';
        return false;
    }else{
        selectError.textContent = '';
        return true;
    }
}


const form = document.getElementById('form');
form.addEventListener("submit", validation)

document.getElementById('email-inp').addEventListener('input', emailValidation)
document.getElementById('company-inp').addEventListener('input', companyValidation)
document.getElementById('dropdown-inp').addEventListener('input', engineerValidation)
document.getElementById('dropdown-inp').addEventListener('input', selectValidation)

const radios = document.querySelectorAll('.select');
radios.forEach(radio => {
  radio.addEventListener('change', () => {
    document.getElementById('error-select').textContent = '';
  });
});

