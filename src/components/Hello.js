import React from "react"

export default () => (
  <div className="hello">
    <p className="hello__msg">Say Hello</p>
    <div className="hello__box">
      {
        [
          "BONJOUR", 
          "HOLA", 
          "GUTEN TAG", 
          "CIAO", 
          "OLÀ",
          "NAMASTE",
          "SALAAM",
          "ZDRAS-TVUY-TE",
          "KONNICHIWA",
          "AHN-YOUNG-HA-SE-YO",
          "MERHABA",
          "SAIN BAINUU",
          "MERHABA",
          "SZIA", 
          "MARHABA",
          "SALAMA ALEIKUM",
          "JAMBO",
          "NI HAU",
          "NAY HOH", 
          "HALO",
          "BONJOUR",            
          "HOLA", 
          "GUTEN TAG", 
          "CIAO", 
          "OLÀ",
          "NAMASTE",
          "SALAAM",
          "ZDRAS-TVUY-TE",
          "KONNICHIWA",
          "AHN-YOUNG-HA-SE-YO",
          "MERHABA",
          "SAIN BAINUU",
          "MERHABA",
          "SZIA", 
          "MARHABA",
          "SALAMA ALEIKUM",
          "JAMBO",
          "NI HAU",
          "NAY HOH", 
          "HALO",
          "BONJOUR", 
          "HOLA", 
          "GUTEN TAG", 
          "CIAO", 
          "OLÀ",
          "NAMASTE",
          "SALAAM",
          "ZDRAS-TVUY-TE",
          "KONNICHIWA",
          "AHN-YOUNG-HA-SE-YO",
          "MERHABA",
          "SAIN BAINUU",
          "MERHABA",
          "SZIA", 
          "MARHABA",
          "SALAMA ALEIKUM",
          "JAMBO",
          "NI HAU",
          "NAY HOH", 
          "HALO"
        ].map(hello => (
          <span>{hello}</span>
        ))
      }
    </div>
  </div>
)