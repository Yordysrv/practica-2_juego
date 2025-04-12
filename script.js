      let num1;
      let num2;
      let contador = 1

      num1 = Number(prompt('escriba un numero entre 1 y 10'))
      num2 = Math.round(Math.random()*10)

      while (num1 != num2){
      if (num1<num2){
        alert('El numero pensado es MAYOR')
     }else{
        alert('El numero pensado es MENOR')
     }
       num1 = Number(prompt('escriba otro numero'))
       contador++
     }
       alert('FELISIDADES!! El numero pensado era' +num2+ ' \n lo resolviste en' +contador+ ' intentos')  
