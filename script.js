
  // Ottieni riferimenti agli elementi
    const slider = document.getElementById("ammamata");
    const toggleButton = document.getElementsById("pippo");
    // Aggiungi l'event listener per il click sul bottone
    toggleButton.addEventListener("click", function () {
     //  Verifica lo stato corrente dello slider
      if (slider.style.display === "block") {
      //   Se lo slider è nascosto, visualizzalo
        slider.style.display = "none";
    
      } else {
         Altrimenti, nascondilo
        slider.style.display = "block";
      
      }
    }); 


  


  

