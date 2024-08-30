/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenInput = (inputOverlay, inputPass, inputIcon) =>{
    const overlay = document.getElementById(inputOverlay), 
            input = document.getElementById(inputPass),
            iconEye = document.getElementById(inputIcon)
    iconEye.addEventListener('click', () =>{
        //change password to text
        if(input.type === 'password'){
            // switch to text
            input.type = 'text'

            //change icon
            iconEye.classList.add('bx-show')
        }else{
            //change to password
            input.type = 'password'

            //remove icon
            iconEye.classList.remove('bx-show')
        }

        //Toggle the overlay
        overlay.classList.toggle('overlay-content')
    })

}

showHiddenInput('input-overlay','input-pass','input-icon')

showHiddenInput('input-overlays','input-passs','input-icons')



//////////////////////////////////////////////////////////////////////////////

// validate button 

function validateForm() {
    let userName = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let age = document.getElementById("age").value;
    let pass = document.getElementById("input-pass").value;
    let passConfirm = document.getElementById("input-passs").value;
  
    if (userName == "" || email == "" || phone == "" || age == "" || pass == "" || passConfirm == "") {
      alert("Please fill in all fields");
      return false;
    } else if (pass != passConfirm) {
      alert("Passwords do not match");
      return false;
    } else {
      return true;
    }
  }
  
  document.querySelector('.login__button').addEventListener('click', function() {
    if (validateForm()) {
        window.location.href = '/signup2.html';

    }
  });


////////////////////////////////////////////////////////////////////////////

  // validate button 


            function validateForm1() {
              let weight = document.getElementById("weight").value;
              let height = document.getElementById("height").value;
              let fat = document.getElementById("fat").value;
          
              if (weight == "" || height == "" || fat == "") {
                alert("Please fill in all fields");
                return false;
              } else {
                return true;
              }
            }
          
            document.querySelector('.login__button').addEventListener('click', function() {
                if (validateForm1()) {
                    window.location.href = '/signup3.html';
            
                }
              });

////////////////////////////////////////////////////////////////////////////

document.getElementById('fileButton').addEventListener('click', function() {
  document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function() {
  var fileName = this.value.split('\\').pop();
  if (fileName) {
    // Display the selected file name or perform any other desired action
    console.log('Selected file:', fileName);
  }
});
