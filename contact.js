function checkSendForm() { 

    var nam = document.neu.name.value; 
    var inf = document.neu.info.value; 
    var ret = true; 
        if (nam.length < 3) { 
            window.alert("Eingegebener Name zu klein!"); 
                ret = false; 
        }  
    if (ret) { 
        window.alert("Eintrag in Ordnung."); 
    }   
    return ret;   

  }     
