import React from "react"

export default () => (
  <div className="hello">
    <p className="hello__msg">Say Hello</p>
    <div className="hello__box">
      {
        [
          "1. BONJOUR – French", 
          "2. HOLA – Spanish", 
          "3. GUTEN TAG – German", 
          "4. CIAO – Italian", 
          "5. OLA – Portuguese", 
          "6. NAMASTE – Hindi", 
          "7. SALAAM – Persian (Farsi)",         
          "9.  KONNICHIWA Japanese",         
          "11. MERHABA – Turkish", 
          "12. SAIN BAINUU- Mongolian", 
          "14. SZIA – Hungarian",
          "15. MARHABA – Arabic", 
          "16. SALAMA ALEIKUM – Hausa", 
          "17. JAMBO – Swahili", 
          "18. NI HAU – Mandarin", 
          "19. NAY HOH – Cantonese (Yue)",
          "20. HALO – Bahasa Indonesia",
          "1. BONJOUR – French", 
          "2. HOLA – Spanish", 
          "3. GUTEN TAG – German", 
          "4. CIAO – Italian", 
          "5. OLA – Portuguese", 
          "6. NAMASTE – Hindi", 
          "7. SALAAM – Persian (Farsi)",         
          "9.  KONNICHIWA Japanese",         
          "11. MERHABA – Turkish", 
          "12. SAIN BAINUU- Mongolian", 
          "14. SZIA – Hungarian",
          "15. MARHABA – Arabic", 
          "16. SALAMA ALEIKUM – Hausa", 
          "17. JAMBO – Swahili", 
          "18. NI HAU – Mandarin", 
          "19. NAY HOH – Cantonese (Yue)",
          "20. HALO – Bahasa Indonesia",
          "1. BONJOUR – French", 
          "2. HOLA – Spanish", 
          "3. GUTEN TAG – German", 
          "4. CIAO – Italian", 
          "5. OLA – Portuguese", 
          "6. NAMASTE – Hindi", 
          "7. SALAAM – Persian (Farsi)",         
          "9.  KONNICHIWA Japanese",         
          "11. MERHABA – Turkish", 
          "12. SAIN BAINUU- Mongolian", 
          "14. SZIA – Hungarian",
          "15. MARHABA – Arabic", 
          "16. SALAMA ALEIKUM – Hausa", 
          "17. JAMBO – Swahili", 
          "18. NI HAU – Mandarin", 
          "19. NAY HOH – Cantonese (Yue)",
          "20. HALO – Bahasa Indonesia",
          "1. BONJOUR – French", 
          "2. HOLA – Spanish", 
          "3. GUTEN TAG – German", 
          "4. CIAO – Italian", 
          "5. OLA – Portuguese", 
          "6. NAMASTE – Hindi", 
          "7. SALAAM – Persian (Farsi)",         
          "9.  KONNICHIWA Japanese",         
          "11. MERHABA – Turkish", 
          "12. SAIN BAINUU- Mongolian", 
          "14. SZIA – Hungarian",
          "15. MARHABA – Arabic", 
          "16. SALAMA ALEIKUM – Hausa", 
          "17. JAMBO – Swahili", 
          "18. NI HAU – Mandarin", 
          "19. NAY HOH – Cantonese (Yue)",
          "20. HALO – Bahasa Indonesia",
        ].map(hello => (
          <span>{hello.match(/[A-Z]{2,}\s/g)}</span>
        ))
      }
    </div>
  </div>
)