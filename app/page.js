// /* eslint-disable react/no-unescaped-entities */
// import Image from 'next/image'
// import Link from 'next/link'
// import ferati from '../assets/ferati.png'
// import dejabijoux from '../assets/deja.png'
// import kikastoren from '../assets/kikastoren.png'
// import djraum from '../assets/djraum.png'
// import norges from '../assets/norges2.png'
// import waterfront from '../assets/waterfront.png'
// import infomentor from '../assets/info2.png'
// import sdw from '../assets/sdw.png'

// export default function Home() {
//   const emailAddress = 'sherifibesim@gmail.com';
//   const subject = '';
//   const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen font-pt-sans px-4">
//       <div className="text-center my-4">
//         <h1 className="text-4xl font-medium">Besim Sherifi</h1>
//         <h4 className='font-light text-[lightslategray]'>Full Stack & Mobile Entwickler</h4>
//       </div>

//       <p className="max-w-xl font-light text-center">
//         Hallo, ich bin Full-Stack- und Mobile-Entwickler mit Erfahrung in verschiedenen Technologien wie Node.js, Angular, React und Next.js. Im Bereich der mobilen Entwicklung bin ich spezialisiert auf die Erstellung nativer und plattformübergreifender Anwendungen mit Swift und Flutter (Dart).
//       </p>

//       <p className="text-center my-10 font-light">Meine Arbeit:</p>

//       {/* The layout similar to the screenshot */}
//       <div className="flex flex-col md:flex-row items-center md:items-center gap-10 my-10">
//         {/* Image Section */}
//         <div className="w-full md:w-1/2">
//           <Image src={ferati} alt="eharmony preview" className="rounded-xl" />
//         </div>

//         {/* Text Section */}
//         <div className="w-full md:w-1/2">
//           <h2 className="text-2xl font-semibold text-red-600">eharmony: dating app to find real love</h2>
//           <p className="mt-4 text-lg">
//             Junkies Coder ist stolz, das Management der eharmony-App anzukündigen – einer innovativen, KI-gestützten Plattform, die Menschen beim Dating und bei der Suche nach echter Liebe unterstützt.
//           </p>
//           <Link href="#" className="text-red-600 font-medium inline-block mt-4">
//             Read More →
//           </Link>
//         </div>
//       </div>



//       <div className="flex flex-col md:flex-row items-center md:items-center gap-10 my-10">
//         {/* Image Section */}
//         <div className="w-full md:w-1/2">
//           <Image src={dejabijoux} alt="eharmony preview" className="rounded-xl" />
//         </div>

//         {/* Text Section */}
//         <div className="w-full md:w-1/2">
//           <h2 className="text-2xl font-semibold text-red-600">eharmony: dating app to find real love</h2>
//           <p className="mt-4 text-lg">
//             Junkies Coder ist stolz, das Management der eharmony-App anzukündigen – einer innovativen, KI-gestützten Plattform, die Menschen beim Dating und bei der Suche nach echter Liebe unterstützt.
//           </p>
//           <Link href="#" className="text-red-600 font-medium inline-block mt-4">
//             Read More →
//           </Link>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row items-center md:items-center gap-10 my-10">
//         {/* Image Section */}
//         <div className="w-full md:w-1/2">
//           <Image src={kikastoren} alt="eharmony preview" className="rounded-xl " />
//         </div>

//         {/* Text Section */}
//         <div className="w-full md:w-1/2">
//           <h2 className="text-2xl font-semibold text-red-600">eharmony: dating app to find real love</h2>
//           <p className="mt-4 text-lg">
//             Junkies Coder ist stolz, das Management der eharmony-App anzukündigen – einer innovativen, KI-gestützten Plattform, die Menschen beim Dating und bei der Suche nach echter Liebe unterstützt.
//           </p>
//           <Link href="#" className="text-red-600 font-medium inline-block mt-4">
//             Read More →
//           </Link>
//         </div>
//       </div>


//       <div className="flex flex-col md:flex-row items-center md:items-center gap-10 my-10">
//         {/* Image Section */}
//         <div className="w-full md:w-1/2">
//           <Image src={djraum} alt="eharmony preview" className="rounded-xl " />
//         </div>

//         {/* Text Section */}
//         <div className="w-full md:w-1/2">
//           <h2 className="text-2xl font-semibold text-red-600">eharmony: dating app to find real love</h2>
//           <p className="mt-4 text-lg">
//             Junkies Coder ist stolz, das Management der eharmony-App anzukündigen – einer innovativen, KI-gestützten Plattform, die Menschen beim Dating und bei der Suche nach echter Liebe unterstützt.
//           </p>
//           <Link href="#" className="text-red-600 font-medium inline-block mt-4">
//             Read More →
//           </Link>
//         </div>
//       </div>


//       <div className="flex flex-col md:flex-row items-center md:items-center gap-10 my-10">
//         {/* Image Section */}
//         <div className="w-full md:w-1/2">
//           <Image src={norges} alt="eharmony preview" className="rounded-xl " />
//         </div>

//         {/* Text Section */}
//         <div className="w-full md:w-1/2">
//           <h2 className="text-2xl font-semibold text-red-600">eharmony: dating app to find real love</h2>
//           <p className="mt-4 text-lg">
//             Junkies Coder ist stolz, das Management der eharmony-App anzukündigen – einer innovativen, KI-gestützten Plattform, die Menschen beim Dating und bei der Suche nach echter Liebe unterstützt.
//           </p>
//           <Link href="#" className="text-red-600 font-medium inline-block mt-4">
//             Read More →
//           </Link>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row items-center md:items-center gap-10 my-10">
//         {/* Image Section */}
//         <div className="w-full md:w-1/2">
//           <Image src={waterfront} alt="eharmony preview" className="rounded-xl " />
//         </div>

//         {/* Text Section */}
//         <div className="w-full md:w-1/2">
//           <h2 className="text-2xl font-semibold text-red-600">eharmony: dating app to find real love</h2>
//           <p className="mt-4 text-lg">
//             Junkies Coder ist stolz, das Management der eharmony-App anzukündigen – einer innovativen, KI-gestützten Plattform, die Menschen beim Dating und bei der Suche nach echter Liebe unterstützt.
//           </p>
//           <Link href="#" className="text-red-600 font-medium inline-block mt-4">
//             Read More →
//           </Link>
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row items-center md:items-center gap-10 my-10">
//         {/* Image Section */}
//         <div className="w-full md:w-1/2">
//           <Image src={infomentor} alt="eharmony preview" className="rounded-xl " />
//         </div>

//         {/* Text Section */}
//         <div className="w-full md:w-1/2">
//           <h2 className="text-2xl font-semibold text-red-600">eharmony: dating app to find real love</h2>
//           <p className="mt-4 text-lg">
//             Junkies Coder ist stolz, das Management der eharmony-App anzukündigen – einer innovativen, KI-gestützten Plattform, die Menschen beim Dating und bei der Suche nach echter Liebe unterstützt.
//           </p>
//           <Link href="#" className="text-red-600 font-medium inline-block mt-4">
//             Read More →
//           </Link>
//         </div>
//       </div>



//       <div className="flex flex-col md:flex-row items-center md:items-center gap-10 my-10">
//         {/* Image Section */}
//         <div className="w-full md:w-1/2">
//           <Image src={sdw} alt="eharmony preview" className="rounded-xl " />
//         </div>

//         {/* Text Section */}
//         <div className="w-full md:w-1/2">
//           <h2 className="text-2xl font-semibold text-red-600">eharmony: dating app to find real love</h2>
//           <p className="mt-4 text-lg">
//             Junkies Coder ist stolz, das Management der eharmony-App anzukündigen – einer innovativen, KI-gestützten Plattform, die Menschen beim Dating und bei der Suche nach echter Liebe unterstützt.
//           </p>
//           <Link href="#" className="text-red-600 font-medium inline-block mt-4">
//             Read More →
//           </Link>
//         </div>
//       </div>









//       {/* Contact Links */}
//       <div className='flex justify-center text-[lightslategray] mt-10 space-x-4'>
//         <Link href={mailtoLink}><p className='font-light cursor-pointer'>email</p></Link>
//         <Link href='https://www.linkedin.com/in/besim-sherifi-019328193/' target="_blank"><p className='font-light cursor-pointer'>linkedin</p></Link>
//       </div>
//     </div>
//   )
// }



import Image from 'next/image'
import Link from 'next/link'

import ferati from '../assets/ferati.png'
import dejabijoux from '../assets/deja.png'
import kikastoren from '../assets/kikastoren.png'
import djraum from '../assets/djraum.png'
import norges from '../assets/norges2.png'
import waterfront from '../assets/waterfront.png'
import infomentor from '../assets/info2.png'
import sdw from '../assets/sdw.png'

export default function Home() {
  const emailAddress = 'sherifibesim@gmail.com';
  const subject = '';
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;



  const projects = [
    {
      image: ferati,
      title: 'Ferati Transporte',
      description: 'A comprehensive transport and logistics app developed specifically for a transportation company in Switzerland. It enables real-time tracking of deliveries, management of drivers, vehicles, and service intervals, as well as handling time-sensitive orders with automatic notifications. The app is divided into two parts – an admin interface for centralized control and a mobile application for employees.',
      link: 'https://apps.apple.com/us/app/ferati-transporte/id6743625017'
    },
    {
      image: dejabijoux,
      title: 'Deja Bijoux',
      description: 'Deja Bijoux is a modern e-commerce app specializing in the sale of high-quality jewelry. The platform offers an elegant design, user-friendly product navigation, and secure payment processing. Customers can browse various jewelry categories, save favorites, and place orders directly through the app. Developed with a focus on mobile usability and performance.',
      link: 'https://apps.apple.com/us/app/dejabijoux/id6477193818'
    },
    {
      image: kikastoren,
      title: 'Kika Storen',
      description: 'Kika Storen is a custom-built app for a company specializing in the installation and maintenance of sunshades. The app supports the team in managing customer inquiries, scheduling, quote handling, and documenting on-site operations. It simplifies internal workflows and improves communication between the office and field service — all through an intuitive mobile interface.',
      link: 'https://apps.apple.com/us/app/kika-storen/id6448458335'
    },
    {
      image: djraum,
      title: 'DJ Raumausstatter',
      description: 'DJ Raumausstatter is a specialized app for a company in the painting and interior construction sector. It assists employees with accurately capturing wall measurements on-site, automates quote generation, and enables easy invoice management. With integrated customer management, photo documentation, and a clear project overview, the app enhances efficiency and professionalism in daily operations.',
      link: 'https://apps.apple.com/us/app/dj-raumausstatter/id6475651787'
    },
    {
      image: waterfront,
      title: 'Waterfront Cabins',
      description: 'Waterfront Cabins is an innovative app for a modern residential complex in Gothenburg, Sweden. It enables residents to access their apartments keylessly directly via smartphone. The app connects with on-site door systems and offers additional features like digital guest codes, door-opening notifications, and management access for property administrators. Security, convenience, and technology combined in a stylish solution.',
      link: 'https://apps.apple.com/th/app/waterfront-cabins/id6444448809'
    },
    {
      image: norges,
      title: 'Norgesnett',
      description: 'NorgesNet is a user-friendly app that gives customers in Norway transparent insight into their electricity usage and energy contracts. Users can monitor their current usage in real time, view invoices, compare tariffs, and communicate directly with their electricity provider. It was designed to simplify energy management and raise awareness for sustainable consumption.',
      link: '#norges'
    },
    {
      image: infomentor,
      title: 'Infomentor',
      description: 'InfoMentor is a comprehensive student management system that helps schools, teachers, and parents organize and track learning progress. The app enables easy management of student data, performance evaluations, schedules, and announcements. With a focus on transparency and user-friendliness, InfoMentor improves communication between teachers, parents, and students — all in one central platform.',
      link: 'https://apps.apple.com/us/app/infomentor-hub/id1388965431'
    },
    {
      image: sdw,
      title: 'Stockholm Design Week',
      description: 'Stockholm Design Week is one of the leading platforms for Scandinavian design and takes place annually in the Swedish capital. The event brings together established brands, emerging talents, and design enthusiasts to celebrate innovation, sustainability, and craftsmanship. With exhibitions, workshops, and networking events, the week provides a comprehensive insight into the current Scandinavian design scene.',
      link: 'https://apps.apple.com/tr/app/stockholm-design-week/id590228998'
    }
  ];


  const ProjectCard = ({ image, title, description, link }) => (
    <div className="flex flex-col md:flex-row items-center gap-10 my-10">
      <div className="w-full md:w-1/2">
        <Image src={image} alt={title} className="rounded-xl" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="mt-4 text-lg">{description}</p>
        <Link href={link} className="text-white font-medium inline-block mt-4">
          Read More →
        </Link>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-pt-sans px-4">
      <div className="text-center my-4">
        <h1 className="text-4xl font-medium">Besim Sherifi</h1>
        <h4 className="font-light text-[lightslategray]">Full Stack & Mobile Developer</h4>
      </div>

      <p className="max-w-xl font-light text-center">
        Hello, I’m a Full-Stack and Mobile Developer with experience in technologies like Node.js, Angular, React, and Next.js. In mobile development, I specialize in creating native and cross-platform apps using Swift and Flutter (Dart).
      </p>

      <p className="text-center my-10 font-light">My work:</p>

      {projects.map((proj, idx) => (
        <div key={idx}>
          <ProjectCard
            image={proj.image}
            title={proj.title}
            description={proj.description}
            link={proj.link}
          />

          {idx === 3 && (
            <p className="text-center max-w-xl mx-auto text-2xl font-semibold my-10 mt-10">
              Scandinavian Partners
            </p>
          )}
        </div>
      ))}

      <div className="flex justify-center text-[lightslategray] mt-10 space-x-4">
        <Link href={mailtoLink}><p className="font-light cursor-pointer">email</p></Link>
        <Link href="https://www.linkedin.com/in/besim-sherifi-019328193/" target="_blank"><p className="font-light cursor-pointer">linkedin</p></Link>
      </div>
    </div>
  );
}


//   const projects = [
//     {
//       image: ferati,
//       title: 'Ferati Transporte',
//       description: 'Eine umfassende Transport- und Logistik-App, die speziell für ein Transportunternehmen in der Schweiz entwickelt wurde. Sie ermöglicht die Echtzeitverfolgung von Lieferungen, die Verwaltung von Fahrern, Fahrzeugen und Serviceintervallen sowie die Erfassung von zeitkritischen Aufträgen mit automatischer Benachrichtigung. Die App ist in zwei Teile gegliedert – eine Admin-Oberfläche zur zentralen Steuerung und eine mobile Anwendung für Mitarbeiter.',
//       link: 'https://apps.apple.com/us/app/ferati-transporte/id6743625017'
//     },
//     {
//       image: dejabijoux,
//       title: 'Deja Bijoux',
//       description: 'Deja Bijoux ist eine moderne E-Commerce-App, die sich auf den Verkauf von hochwertigem Schmuck spezialisiert. Die Plattform bietet ein elegantes Design, eine benutzerfreundliche Produktnavigation und eine sichere Zahlungsabwicklung. Kund:innen können verschiedene Schmuckkategorien durchsuchen, Favoriten speichern und Bestellungen direkt über die App aufgeben. Entwickelt mit Fokus auf mobile Nutzerfreundlichkeit und Performance.',
//       link: 'https://apps.apple.com/us/app/dejabijoux/id6477193818'
//     },
//     {
//       image: kikastoren,
//       title: 'Kika Storen',
//       description: 'Kika Storen ist eine maßgeschneiderte App für ein Unternehmen, das sich auf die Montage und Wartung von Sonnenstoren spezialisiert hat. Die Anwendung unterstützt das Team bei der Verwaltung von Kundenanfragen, Terminplanung, Angebotsverwaltung und der Dokumentation von Einsätzen vor Ort. Sie vereinfacht interne Abläufe und verbessert die Kommunikation zwischen Büro und Außendienst – alles über eine intuitive mobile Oberfläche.',
//       link: 'https://apps.apple.com/us/app/kika-storen/id6448458335'
//     },
//     {
//       image: djraum,
//       title: 'DJ Raumausstatter',
//       description: 'DJ Raumausstatter ist eine spezialisierte App für ein Unternehmen im Bereich Maler- und Innenausbauarbeiten. Sie unterstützt Mitarbeiter bei der präzisen Erfassung von Wandmaßen direkt vor Ort, automatisiert die Angebotserstellung und ermöglicht eine einfache Verwaltung von Rechnungen. Mit integriertem Kundenmanagement, Fotodokumentation und einer klaren Übersicht über alle Projekte verbessert die App Effizienz und Professionalität im täglichen Ablauf.',
//       link: 'https://apps.apple.com/us/app/dj-raumausstatter/id6475651787'
//     },
//     {
//       image: waterfront,
//       title: 'Waterfront Cabins',
//       description: 'Waterfront Cabins ist eine innovative App für ein modernes Wohnkomplex in Göteborg, Schweden. Sie ermöglicht Bewohner:innen den schlüssellosen Zugang zu ihren Apartments direkt über das Smartphone. Die App verbindet sich mit den Türsystemen vor Ort und bietet zusätzliche Funktionen wie digitale Gästecodes, Benachrichtigungen bei Türöffnungen und Verwaltungszugang für die Hausverwaltung. Sicherheit, Komfort und Technologie in einer stilvollen Lösung vereint.',
//       link: 'https://apps.apple.com/th/app/waterfront-cabins/id6444448809'
//     }
//     ,
//     {
//       image: norges,
//       title: 'Norgesnett',
//       description: 'NorgesNet ist eine benutzerfreundliche App, die Kund:innen in Norwegen einen transparenten Einblick in ihren Stromverbrauch und ihre Energieverträge bietet. Mit der App können Nutzer:innen ihren aktuellen Verbrauch in Echtzeit überwachen, Rechnungen einsehen, Tarife vergleichen und direkt mit dem Stromanbieter kommunizieren. Sie wurde entwickelt, um das Energiemanagement zu vereinfachen und Bewusstsein für nachhaltigen Verbrauch zu fördern.',
//       link: '#norges'
//     },
//     {
//       image: infomentor,
//       title: 'Infomentor',
//       description: 'InfoMentor ist ein umfassendes Schülermanagement-System, das Schulen, Lehrer:innen und Eltern bei der Organisation und Nachverfolgung des Lernfortschritts unterstützt. Die App ermöglicht eine einfache Verwaltung von Schülerdaten, Leistungsbewertungen, Stundenplänen und Mitteilungen. Mit einem Fokus auf Transparenz und Benutzerfreundlichkeit trägt InfoMentor zur besseren Kommunikation zwischen Lehrkräften, Eltern und Schüler:innen bei – alles in einer zentralen Plattform.',
//       link: 'https://apps.apple.com/us/app/infomentor-hub/id1388965431'
//     },
//     {
//       image: sdw,
//       title: 'Stockholm Design Week',
//       description: 'Stockholm Design Week ist eine der führenden Plattformen für skandinavisches Design und findet jährlich in der schwedischen Hauptstadt statt. Die Veranstaltung bringt etablierte Marken, aufstrebende Talente und Designbegeisterte zusammen, um Innovationen, Nachhaltigkeit und Handwerkskunst zu feiern. Mit Ausstellungen, Workshops und Networking-Events bietet die Woche einen umfassenden Einblick in die aktuelle Designszene Skandinaviens.',
//       link: 'https://apps.apple.com/tr/app/stockholm-design-week/id590228998'
//     }
//   ];


//   const ProjectCard = ({ image, title, description, link }) => (
//     <div className="flex flex-col md:flex-row items-center gap-10 my-10">
//       <div className="w-full md:w-1/2">
//         <Image src={image} alt={title} className="rounded-xl" />
//       </div>
//       <div className="w-full md:w-1/2">
//         <h2 className="text-2xl font-semibold text-white">{title}</h2>
//         <p className="mt-4 text-lg">{description}</p>
//         <Link href={link} className="text-white font-medium inline-block mt-4">
//           Mehr Lesen →
//         </Link>
//       </div>
//     </div>
//   );

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen font-pt-sans px-4">
//       <div className="text-center my-4">
//         <h1 className="text-4xl font-medium">Besim Sherifi</h1>
//         <h4 className="font-light text-[lightslategray]">Full Stack & Mobile Entwickler</h4>
//       </div>

//       <p className="max-w-xl font-light text-center">
//         Hallo, ich bin Full-Stack- und Mobile-Entwickler mit Erfahrung in verschiedenen Technologien wie Node.js, Angular, React und Next.js. Im Bereich der mobilen Entwicklung bin ich spezialisiert auf die Erstellung nativer und plattformübergreifender Anwendungen mit Swift und Flutter (Dart).
//       </p>

//       <p className="text-center my-10 font-light">Meine Arbeit:</p>

//       {projects.map((proj, idx) => (
//         <div key={idx}>
//           <ProjectCard
//             image={proj.image}
//             title={proj.title}
//             description={proj.description}
//             link={proj.link}
//           />

//           {idx === 3 && (
//             <p className="text-center max-w-xl mx-auto text-2xl font-semibold my-10 mt-10">
//               Skandinavische Partner
//             </p>
//           )}
//         </div>
//       ))}


//       <div className="flex justify-center text-[lightslategray] mt-10 space-x-4">
//         <Link href={mailtoLink}><p className="font-light cursor-pointer">email</p></Link>
//         <Link href="https://www.linkedin.com/in/besim-sherifi-019328193/" target="_blank"><p className="font-light cursor-pointer">linkedin</p></Link>
//       </div>
//     </div>
//   );
// }

























//pre update



{/* <div className="text-center font-medium">
            <div className="flex mx-auto text-center justify-center items-center mb-3" >
              <Link href='https://dejabijoux.ch/' target='_blank'><p className='max-w-fit  text-sm font-medium transition-colors underline-animation cursor-pointer'>dejabijoux</p></Link>
              <Link href='https://apps.apple.com/us/app/dejabijoux/id6477193818' target='_blank'>
                <Image
                  className='ml-2 cursor-pointer'
                  src={appstore}
                  width={20}
                  height={20}
                  alt="appstore"
                />
              </Link>
            </div>
            <div className='flex mx-auto text-center justify-center mb-3'>
              <Link href='' className='cursor-default'>
                <p className='max-w-fit mx-auto text-center text-sm font-medium transition-colors '>ferati transporte</p>
              </Link>
              <Link href='https://apps.apple.com/us/app/ferati-transporte/id6476165489?platform=iphone' target='_blank'>
                <Image
                  className='cursor-pointer  ml-2'
                  src={appstore}
                  width={20}
                  height={20}
                  alt="appstore"
                />
              </Link>
            </div>


            <Link href='https://www.besi-storen.ch/' target='_blank'><p className='max-w-fit mx-auto text-center text-sm font-medium transition-colors underline-animation cursor-pointer mb-2'>besi storen</p></Link>
            <Link href='https://neo.swiss/home' target='_blank'><p className='max-w-fit mx-auto text-center text-sm font-medium transition-colors underline-animation cursor-pointer mb-2'>neo swiss</p></Link>

          </div> */}