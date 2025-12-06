const acordeon = document.getElementsByClassName('content');  // retorla los valores
for (i=0; i<acordeon.length; i++)
  {   
    acordeon[i].addEventListener('click' function()
    {
      this.classlist.toggle('activa')
    })
  }

