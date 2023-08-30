import React, { useState } from "react";
import InfoModal from "./InfoModal";
const Model = () => {
  const [showmodel, setshowmodel] = useState(false);
  const CloseModal = () => setshowmodel(false);

  return (
    <div>
      <button className="btn" onClick={() => setshowmodel(true)}>
        ShowModel
      </button>

      {showmodel && <InfoModal CloseModal={CloseModal} />}

      <p>
        Cos’è Lorem Ipsum? Lorem Ipsum è un testo segnaposto utilizzato nel
        settore della tipografia e della stampa. Lorem Ipsum è considerato il
        testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo
        tipografo prese una cassetta di caratteri e li assemblò per preparare un
        testo campione. È sopravvissuto non solo a più di cinque secoli, ma
        anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente
        inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei
        fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del
        Lorem Ipsum, e più recentemente da software di impaginazione come Aldus
        ironici). Da dove viene? Al contrario di quanto si pensi, Lorem Ipsum
        non è semplicemente una sequenza casuale di caratteri. Risale ad un
        classico della letteratura latina del 45 AC, cosa che lo rende vecchio
        di 2000 anni. Richard McClintock, professore di latino al Hampden-Sydney
        College in Virginia, ha ricercato una delle più oscure parole latine,
        consectetur, da un passaggio del Lorem Ipsum e ha scoperto tra i vari
        testi in cui è citata, la fonte da cui è tratto il testo, le sezioni
        1.10.32 and 1.10.33 del "de Finibus Bonorum et Malorum" di Cicerone.
        Questo testo è un trattato su teorie di etica, molto popolare nel
        Rinascimento. La prima riga del Lorem Ipsum, "Lorem ipsum dolor sit
        amet..", è tratta da un passaggio della sezione 1.10.32. Il brano
        standard del Lorem Ipsum usato sin dal sedicesimo secolo è riprodotto
        qui di seguito per coloro che fossero interessati. Anche le sezioni
        1.10.32 e 1.10.33 del "de Finibus Bonorum et Malorum" di Cicerone sono
        riprodotte nella loro forma originale, accompagnate dalla traduzione
        inglese del 1914 di H. Rackham. Dove posso trovarlo? Esistono
        innumerevoli variazioni dei passaggi del Lorem Ipsum, ma la maggior
        parte hanno subito delle variazioni del tempo, a causa dell’inserimento
        di passaggi ironici, o di sequenze casuali di caratteri palesemente poco
        verosimili. Se si decide di utilizzare un passaggio del Lorem Ipsum, è
        bene essere certi che non contenga nulla di imbarazzante. In genere, i
        generatori di testo segnaposto disponibili su internet tendono a
        ripetere paragrafi predefiniti, rendendo questo il primo vero generatore
        automatico su intenet. Infatti utilizza un dizionario di oltre 200
        vocaboli latini, combinati con un insieme di modelli di strutture di
        periodi, per generare passaggi di testo verosimili. Il testo così
        utilizzato sin dal sedicesimo secolo "Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum." La sezione 1.10.32 del "de Finibus Bonorum et Malorum",
        scritto da Cicerone nel 45 AC "Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
        aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
        qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
        illum qui dolorem eum fugiat quo voluptas nulla pariatur?" Traduzione
        itself, because it is pain, but because occasionally circumstances occur
        in which toil and pain can procure him some great pleasure. To take
        delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
        perferendis doloribus asperiores repellat.</p>
      <h2>
        Cos’è Lorem Ipsum? Lorem Ipsum è un testo segnaposto utilizzato nel
        settore della tipografia e della stampa. Lorem Ipsum è considerato il
        testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo
        tipografo prese una cassetta di caratteri e li assemblò per preparare un
        testo campione. È sopravvissuto non solo a più di cinque secoli, ma
        anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente
        inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei
        fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del
        Lorem Ipsum, e più recentemente da software di impaginazione come Aldus
        PageMaker, che includeva versioni del Lorem Ipsum. Perchè lo
        utilizziamo? È universalmente riconosciuto che un lettore che osserva il
        layout di una pagina viene distratto dal contenuto testuale se questo è
        leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una
        normale distribuzione delle lettere (al contrario di quanto avviene se
        si utilizzano brevi frasi ripetute, ad esempio “testo qui”), apparendo
        come un normale blocco di testo leggibile. Molti software di
        impaginazione e di web design utilizzano Lorem Ipsum come testo modello.
        Molte versioni del testo sono state prodotte negli anni, a volte
        casualmente, a volte di proposito (ad esempio inserendo passaggi
        ironici). Da dove viene? Al contrario di quanto si pensi, Lorem Ipsum
        non è semplicemente una sequenza casuale di caratteri. Risale ad un
        classico della letteratura latina del 45 AC, cosa che lo rende vecchio
        di 2000 anni. Richard McClintock, professore di latino al Hampden-Sydney
        College in Virginia, ha ricercato una delle più oscure parole latine,
        consectetur, da un passaggio del Lorem Ipsum e ha scoperto tra i vari
        testi in cui è citata, la fonte da cui è tratto il testo, le sezioni
        1.10.32 and 1.10.33 del "de Finibus Bonorum et Malorum" di Cicerone.
        Questo testo è un trattato su teorie di etica, molto popolare nel
        Rinascimento. La prima riga del Lorem Ipsum, "Lorem ipsum dolor sit
        amet..", è tratta da un passaggio della sezione 1.10.32. Il brano
        standard del Lorem Ipsum usato sin dal sedicesimo secolo è riprodotto
        qui di seguito per coloro che fossero interessati. Anche le sezioni
        1.10.32 e 1.10.33 del "de Finibus Bonorum et Malorum" di Cicerone sono
        riprodotte nella loro forma originale, accompagnate dalla traduzione
        inglese del 1914 di H. Rackham. Dove posso trovarlo? Esistono
        innumerevoli variazioni dei passaggi del Lorem Ipsum, ma la maggior
        parte hanno subito delle variazioni del tempo, a causa dell’inserimento
        di passaggi ironici, o di sequenze casuali di caratteri palesemente poco
        verosimili. Se si decide di utilizzare un passaggio del Lorem Ipsum, è
        bene essere certi che non contenga nulla di imbarazzante. In genere, i
        generatori di testo segnaposto disponibili su internet tendono a
        ripetere paragrafi predefiniti, rendendo questo il primo vero generatore
        automatico su intenet. Infatti utilizza un dizionario di oltre 200
        vocaboli latini, combinati con un insieme di modelli di strutture di
        periodi, per generare passaggi di testo verosimili. Il testo così
        generato è sempre privo di ripetizioni, parole imbarazzanti o fuori
        luogo ecc. 5 paragrafi parole byte elenchi Inizia con 'Lorem ipsum dolor
        sit amet...' Traduzioni: Ci puoi aiutare a tradurre questo sito in una
        lingua straniera? Scrivici una email con i dettagli. È disponibile qui
        un set di banner, in tre colori e in diverse dimensioni standard.
        BannersBannersBanners Supporta il sito: se utilizzi questo sito
        regolarmente e vorresti aiutarci a mantenerlo attivo, puoi versare una
        piccolo somma per contribuire alle spese di hosting e di traffico. Non
        c’è una somma minima, ogni importo è apprezzato. Clicca qui per
        contribuire utilizzando PayPal. Grazie per la collaborazione. Donate
        Bitcoin: 16UQLq1HZ3CNwhvgrarV6pMoA2CDjb4tyF NodeJS Python Interface GTK
        Lipsum Rails .NET Groovy freestar Il passaggio standard del Lorem Ipsum,
        utilizzato sin dal sedicesimo secolo "Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum." La sezione 1.10.32 del "de Finibus Bonorum et Malorum",
        scritto da Cicerone nel 45 AC "Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
        aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
        qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
        illum qui dolorem eum fugiat quo voluptas nulla pariatur?" Traduzione
        
  
      </h2>
    </div>
  );
};
export default Model;
