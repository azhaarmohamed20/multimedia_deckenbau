import image3 from '../images/IMG_0043.JPG';

export default function About(){
    return(
        <>
        <div className="absolute top-0 left-0 right-0 z-10 overflow-hidden h-[40vh] ">
          <img src={image3} alt="Header" className="w-full h-auto object-cover object-center" />
        </div>
        <div className="p-auto relative m-auto w-[85%] bg-white z-20 mt-[28%] text-center">
            <br></br>
          <h1 className='font-bold text-[40px]'>Wir sind ein funktionales Team </h1>
          <br></br>
          <p className='text-[20px] text-left'>Bei uns dreht sich alles um Deckenmontagen und wir sind stolz darauf, Ihnen hochwertige Lösungen und erstklassigen Service anzubieten. Unser Unternehmen wurde mit dem Ziel gegründet, Ihre Deckenprojekte professionell und effizient umzusetzen.<br></br><br></br>

            Unser erfahrenes Team besteht aus qualifizierten Fachleuten, die über umfangreiche Kenntnisse und Fähigkeiten in der Deckenmontage verfügen. Wir nehmen uns die Zeit, Ihre individuellen Anforderungen zu verstehen und maßgeschneiderte Lösungen anzubieten, die Ihren Bedürfnissen gerecht werden. Mit unserer Expertise und unserem Engagement stellen wir sicher, dass Ihre Deckenmontageprojekte reibungslos und termingerecht ablaufen.<br></br><br></br>

            Qualität steht bei uns an erster Stelle. Wir arbeiten nur mit hochwertigen Materialien und verwenden moderne Techniken, um langlebige und ästhetisch ansprechende Decken zu installieren. Unser Ziel ist es, ein Ergebnis zu erzielen, das sowohl funktional als auch ästhetisch beeindruckend ist und Ihren Räumen einen Mehrwert verleiht.<br></br><br></br>

            Kundenzufriedenheit ist für uns von größter Bedeutung. Wir legen Wert auf offene Kommunikation und enge Zusammenarbeit mit unseren Kunden, um sicherzustellen, dass Ihre Erwartungen übertroffen werden. Unser freundliches und kompetentes Team steht Ihnen jederzeit zur Verfügung, um Ihre Fragen zu beantworten, Ratschläge zu geben und Sie durch den gesamten Prozess zu begleiten.<br></br><br></br>

            Unsere Leistungen umfassen die Deckenmontage für verschiedene Bereiche, sei es im privaten oder gewerblichen Umfeld. Wir sind mit unterschiedlichen Deckenarten und -systemen vertraut und können Ihnen bei der Auswahl der richtigen Option für Ihr Projekt helfen. Egal, ob es sich um abgehängte Decken, Spanndecken, Akustikdecken oder spezielle Designs handelt, wir haben das Wissen und die Erfahrung, um Ihre Vorstellungen umzusetzen.</p><br></br>
        </div>
      </>
    )
}