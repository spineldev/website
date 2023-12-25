import React from "react"

const ImportantInfoBlock = () => (
  <>
    <div className="block--latest-post">W dniach 25.12.2023 - 01.01.2024 firma nieczynna (inwentaryzacja).</div>
    <div className="block--important-info">
      <strong>UWAGA!</strong> W dniu 21.12.2023 po całej Polsce zostały rozesłane przez hakerów
      fałszywe, zainfekowane Trojanem maile w którym ktoś podszywając się pod
      naszą firmę wysyła zapytanie. Włamano się do poczty firmy z Warszawy
      i wysyłane są z niej wiadomości zawierające pobrane z naszej strony internetowej logo i dane adresowe.
      Proszę nie otwierać załączników. Proszę sprawdzać rozszerzenia
      załączników. Proszę sprawdzać nadawcę z podpisem w mailu. Z naszej firmy
      wychodzą maile tylko z domeny spinel.pl. Ataki proszę zgłaszać na
      stronie <a href="https://incydent.cert.pl" target="_blank" rel="noreferrer">incydent.cert.pl</a>. Jeśli otworzyłeś załącznik i poniosłeś jakieś
      straty, proszę zgłaszać na policję.
    </div>
  </>
)

export default ImportantInfoBlock
