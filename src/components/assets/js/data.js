import enterTitleHere from '../images/enterTitleHere.gif';
import youTripToPara from '../images/youTripToPara.gif';
import spaceRage from '../images/spaceRage.gif';

import { MdOutlineHomeRepairService } from "react-icons/md"
import { GiGrass } from "react-icons/gi"
import { BsCardChecklist } from "react-icons/bs"
import { BiStoreAlt } from "react-icons/bi"

export const projects = [
  {
    title: "Enter Title Here",
    subtitle: "Java",
    description: "Made this with a friend, Dexter Yan, in grade 11, the game is very similar to Boogle",
    image: enterTitleHere,
    alt: "enterTitleHere",
    width: "494",
    link: "https://github.com/ggruenspan/Enter-Title-Here",
  },
  {
    title: "Your Trip To Paradise",
    subtitle: "Html, Java, CSS",
    description: "This is a personal project, which I am still working on. It will be like a travel planner website, similar to redtag.ca or booking.com",
    image: youTripToPara,
    alt: "yourTripToPara",
    width: "600",
    link: "https://your-trip-to-paradise.herokuapp.com/",
  },
  {
    title: "Space Rage",
    subtitle: "Python",
    description: "Made this with a friend back in grade 10, the game is very similar space invaders",
    image: spaceRage,
    alt: "spaceRage",
    width: "500",
    link: "https://github.com/ggruenspan/Space-Rage",
  },
];

export const jobs = [
  {
    id: "job1",
    haveIcon: "icon",
    icon: <MdOutlineHomeRepairService style={{marginLeft: '6px', marginTop: '4px', fontSize: '30px', color: 'white'}}/>,
    haveRect: "rectangle",
    style: 0,
    color: "lightgray",
    title: "Service Technician",
    when: "April 2021 - October 2022",
    where: "Green Grass Lawn Sprinklers Ltd",
    desc: "Green Grass Lawn Sprinklers, is a company with an expertise in installation and servicing of professional sprinkler systems and landscape lighting.",
    acomp : [ {
      key: "Installed in-ground sprinkler systems"
    }, {
      key: "Installed landscape lighting"
    }, {
      key: "Serviced / repaired sprinkler systems"
    }, {
      key: "Customer service"
    } ],
    heightBox: 304
  },
  {
    id: "job2",
    haveIcon: "icon",
    icon: <GiGrass style={{marginLeft: '6px', marginTop: '-1px', fontSize: '30px', color: 'white'}}/>,
    haveRect: "rectangle",
    style: 80,
    color: "lightgreen",
    title: "Gardener / Landscaper",
    when: "May 2020 - September 2020",
    where: "Mount Sinai Memorial Park",
    desc: "Mount Sinai Memorial Park, is cemetery that offers burial, funeral and unveiling services.",
    acomp : [ {
      key: "Operated machinery such as Kubota’s Track Carrier"
    }, {
      key: "Kept grounds up to standards"
    }, {
      key: "Planted / Watered flowers"
    } ]
  },
  {
    id: "job3",
    haveIcon: "icon",
    icon: <BsCardChecklist style={{marginLeft: '6px', marginTop: '4.5px', fontSize: '30px', color: 'white'}}/>,
    haveRect: "rectangle",
    style: 80,
    color: "lightskyblue",
    title: "Quality Assurance",
    when: "February 2020 - March 2020",
    where: "Edsby, Co-op",
    desc: "Edsby, is a software application that combines social networking with class and student management features.",
    acomp : [ {
      key: "Followed test scripts to find bugs in the website"
    }, {
      key: "Create / Edited test scripts for new parts of the website"
    }, {
      key: "Reported any bugs/problems to the appropriate team"
    } ]
  },
  {
    id: "job4",
    haveIcon: "icon",
    icon: <BiStoreAlt style={{marginLeft: '6px', marginTop: '5px', fontSize: '30px', color: 'white'}}/>,
    haveRect: "rectangle",
    style: 80,
    color: "rgb(202, 52, 52)",
    title: "Store Associate",
    when: "May 2019 - September 2019",
    where: "Winners/Homesense",
    desc: "Winners and Homesense, are both Canadian stores owned by TJX companies. Winners, is a department store and Homesense, is a discount home furnishing store.",
    acomp : [ {
      key: "Assisted customers in finding or selecting items, and provided recommendations"
    }, {
      key: "Stocked, replenished, and organized inventory"
    }, {
      key: "Processed and prepared merchandise for the sales floor"
    }, {
      key: "Assisted customers in processing all refunds, exchanges, and purchases"
    } ],
    heightBox: 304
  }
];
