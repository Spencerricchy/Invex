const body = document.querySelector("body"),
   header = body.querySelector("header"),
   toggle = body.querySelector(".toggle"),
   modeSwitch = body.querySelector(".toggle-switch"),
   sidebar= body.querySelector(".sidebar");

   modeSwitch.addEventListener("click" , () => {
    body.classList.toggle("dark");
   })

     toggle.addEventListener("click" , () => {
      sidebar.classList.toggle('close');
     })


   