import Image from 'next/image'
import Link from 'next/link'
import { FaApple, FaGooglePlay } from "react-icons/fa";


import ferati from '../assets/ferati.png'
import dejabijoux from '../assets/deja.png'
import kikastoren from '../assets/kikastoren.png'
import djraum from '../assets/djraum.png'
import norges from '../assets/norges2.png'
import waterfront from '../assets/waterfront.png'
import infomentor from '../assets/info2.png'
import sdw from '../assets/sdw.png'
import rema from '../assets/rema.png'
import apotea from '../assets/apotea.png'

export default function Home() {
  const emailAddress = 'sherifibesim@gmail.com';
  const subject = '';
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;



  const projects = [
    {
      image: kikastoren,
      title: 'Kika Storen',
      description: 'Kika Storen is a custom-built app for a company specializing in the installation and maintenance of sunshades. The app supports the team in managing customer inquiries, scheduling, quote handling, and documenting on-site operations. It simplifies internal workflows and improves communication between the office and field service — all through an intuitive mobile interface.',
      link: 'https://apps.apple.com/us/app/kika-storen/id6448458335',
      appleLink: 'https://apps.apple.com/us/app/kika-storen/id6448458335',
      androidLink: 'https://play.google.com/store/apps/details?id=com.kikastoren.kikastoren'
    },
    {
      image: ferati,
      title: 'Ferati Transporte',
      description: 'A comprehensive transport and logistics app developed specifically for a transportation company in Switzerland. It enables real-time tracking of deliveries, management of drivers, vehicles, and service intervals, as well as handling time-sensitive orders with automatic notifications. The app is divided into two parts – an admin interface for centralized control and a mobile application for employees.',
      appleLink: 'https://apps.apple.com/us/app/ferati-transporte/id6743625017',
      androidLink: 'https://play.google.com/store/apps/details?id=com.ferati-transporte.app',
    },
    {
      image: dejabijoux,
      title: 'Deja Bijoux',
      description: 'Deja Bijoux is a modern e-commerce app specializing in the sale of high-quality jewelry. The platform offers an elegant design, user-friendly product navigation, and secure payment processing. Customers can browse various jewelry categories, save favorites, and place orders directly through the app. Developed with a focus on mobile usability and performance.',
      link: 'https://apps.apple.com/us/app/dejabijoux/id6477193818',
      appleLink: 'https://apps.apple.com/us/app/dejabijoux/id6477193818',
      androidLink: ''

    },
    {
      image: djraum,
      title: 'DJ Raumausstatter',
      description: 'DJ Raumausstatter is a specialized app for a company in the painting and interior construction sector. It assists employees with accurately capturing wall measurements on-site, automates quote generation, and enables easy invoice management. With integrated customer management, photo documentation, and a clear project overview, the app enhances efficiency and professionalism in daily operations.',
      link: 'https://apps.apple.com/us/app/dj-raumausstatter/id6475651787',
      appleLink: 'https://apps.apple.com/us/app/dj-raumausstatter/id6475651787',
      androidLink: ''
    },
    {
      image: apotea,
      title: 'Apotea',
      description: 'Apotea is Sweden’s largest online pharmacy, serving millions of customers nationwide. The platform focuses on performance, scalability, and seamless user experience across mobile and web. The collaboration involved contributing to mobile-first solutions with a strong emphasis on reliability, accessibility, and modern e-commerce standards in the Scandinavian market.',
      link: 'https://apps.apple.com/se/app/apotea-apotek-recept-online/id6504614705',
      appleLink: 'https://apps.apple.com/se/app/apotea-apotek-recept-online/id6504614705',
      androidLink: 'https://play.google.com/store/apps/details?id=se.apotea.app&hl=en'
    },
    {
      image: rema,
      title: 'REMA 1000',
      description: 'REMA 1000 is a modern grocery shopping app from one of Norway’s largest supermarket chains. It offers weekly discounts on fresh fruit and vegetables, personalized deals, and convenient tools like shared shopping lists and purchase overviews. With features such as “Scan & Pay” in selected stores and digital coupon activation, the app makes everyday shopping simpler, faster, and more rewarding.',
      link: 'https://apps.apple.com/no/app/rema-1000/id1184277401',
      appleLink: 'https://apps.apple.com/no/app/rema-1000/id1184277401',
      androidLink: 'https://play.google.com/store/apps/details?id=dk.iroots.rema1000&hl=en'
    },
    {
      image: waterfront,
      title: 'Waterfront Cabins',
      description: 'Waterfront Cabins is an innovative app for a modern residential complex in Gothenburg, Sweden. It enables residents to access their apartments keylessly directly via smartphone. The app connects with on-site door systems and offers additional features like digital guest codes, door-opening notifications, and management access for property administrators. Security, convenience, and technology combined in a stylish solution.',
      link: 'https://apps.apple.com/th/app/waterfront-cabins/id6444448809',
      appleLink: 'https://apps.apple.com/th/app/waterfront-cabins/id6444448809',
      androidLink: 'https://play.google.com/store/apps/details?id=se.waterfrontcabins.waterfrontcabins&hl=en'
    },
    {
      image: norges,
      title: 'Norgesnett',
      description: 'NorgesNet is a user-friendly app that gives customers in Norway transparent insight into their electricity usage and energy contracts. Users can monitor their current usage in real time, view invoices, compare tariffs, and communicate directly with their electricity provider. It was designed to simplify energy management and raise awareness for sustainable consumption.',
      link: 'https://apps.apple.com/no/app/norgesnett-kundeapp/id1661947020',
      appleLink: 'https://apps.apple.com/no/app/norgesnett-kundeapp/id1661947020',
      androidLink: 'https://play.google.com/store/apps/details?id=no.norgesnett.energiapp.android&hl=en'
    },
    {
      image: infomentor,
      title: 'Infomentor',
      description: 'InfoMentor is a comprehensive student management system that helps schools, teachers, and parents organize and track learning progress. The app enables easy management of student data, performance evaluations, schedules, and announcements. With a focus on transparency and user-friendliness, InfoMentor improves communication between teachers, parents, and students — all in one central platform.',
      link: 'https://apps.apple.com/us/app/infomentor-hub/id1388965431',
      appleLink: 'https://apps.apple.com/us/app/infomentor-hub/id1388965431',
      androidLink: 'https://play.google.com/store/apps/details?id=net.infomentor.android&hl=en'
    },
    {
      image: sdw,
      title: 'Stockholm Design Week',
      description: 'Stockholm Design Week is one of the leading platforms for Scandinavian design and takes place annually in the Swedish capital. The event brings together established brands, emerging talents, and design enthusiasts to celebrate innovation, sustainability, and craftsmanship. With exhibitions, workshops, and networking events, the week provides a comprehensive insight into the current Scandinavian design scene.',
      link: 'https://apps.apple.com/tr/app/stockholm-design-week/id590228998',
      appleLink: 'https://apps.apple.com/tr/app/stockholm-design-week/id590228998',
      androidLink: 'https://play.google.com/store/apps/details?id=se.stockholmsmassan.design&hl=en'
    }
  ];


  const ProjectCard = ({ image, title, description, appleLink, androidLink }) => (
    <div className="flex flex-col md:flex-row items-center gap-10 my-10">
      <div className="w-full md:w-1/2">
        <Image src={image} alt={title} className="rounded-xl" />
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="mt-4 text-lg">{description}</p>

        {/* NEW ICON SECTION */}
        <div className="flex gap-4 mt-6">
          {appleLink && (
            <Link href={appleLink} target="_blank">
              <FaApple className="text-white text-3xl hover:scale-110 transition cursor-pointer" />
            </Link>
          )}

          {androidLink && (
            <Link href={androidLink} target="_blank">
              <FaGooglePlay className="text-white text-3xl hover:scale-110 transition cursor-pointer" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );


  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-pt-sans px-4">
      <div className="text-center my-4">
        <h1 className="text-4xl font-medium">Besim Sherifi</h1>
        <h4 className="font-light text-[lightslategray]">Software Engineer</h4>
      </div>

      <p className="max-w-xl font-light text-center">
        {/* Hello, I’m a Full-Stack and Mobile Developer with experience in technologies like Node.js, Angular, React, and Next.js. In mobile development, I specialize in creating native and cross-platform apps using Swift, React Native and Flutter(Dart). */}
        Hello, I’m a Mobile Developer with experience building native and cross-platform applications using Flutter (Dart), Swift, and React Native. I focus on creating responsive, high-quality mobile experiences and scalable app architectures, while also having a background in web technologies such as Node.js, Angular, React, and Next.js.
      </p>

      <p className="text-center my-10 font-light">My work:</p>

      {projects.map((proj, idx) => (
        <div key={idx}>
          <ProjectCard
            image={proj.image}
            title={proj.title}
            description={proj.description}
            appleLink={proj.appleLink}
            androidLink={proj.androidLink}
          />


          {idx === 3 && (
            <p className="text-center max-w-xl mx-auto text-2xl font-semibold my-28">
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