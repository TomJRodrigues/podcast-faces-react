import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import SortButtons from './SortButtons.js';
import FaceCard from './FaceCard.js';

// face images
import AilsaChang from './img/ailsa-chang-planet-money.jpg';
import JacobGoldsten from './img/jacob-goldstein-planet-money.jpg';
import KennyMalone from './img/kenny-malone-planet-money.jpeg';
import NoelKing from './img/noel-king-planet-money.jpg';
import RobertSmith from './img/robert-smith-planet-money.jpg';
import AlexGoldman from './img/alex-goldman-reply-all.jpg';
import PJVogt from './img/pj-vogt-reply-all.jpg';
import AshleySaupe from './img/ashley-saupe-the-sharp-end.jpg';
import AugustusYuan from './img/augustus-yuan-front-end-happy-hour.jpg';
import BrianHolt from './img/brian-holt-front-end-happy-hour.jpg';
import DerrickShowers from './img/derrick-showers-front-end-happy-hour.jpg';
import JemYoung from './img/jem-young-front-end-happy-hour.jpg';
import MarsJulian from './img/mars-jullian-front-end-happy-hour.jpg';
import RyanBurgess from './img/ryan-burgess-front-end-happy-hour.jpg';
import SarahFederman from './img/sarah-federman-front-end-happy-hour.jpg';
import StacyLondon from './img/stacy-london-front-end-happy-hour.jpg';
import ChrisHardwick from './img/chris-hardwick-the-nerdist.jpeg';
import BeccaCahall from './img/becca-cahall-the-dirtbag-diaries.jpeg';
import FitzCahall from './img/fitz-cahall-the-dirtbag-diaries.png';
import JenAltschul from './img/jen-altschul-the-dirtbag-diaries.jpg';
import ChrisKalous from './img/chris-kalous-the-enormocast.jpeg';
import ChuckBryant from './img/chuck-bryant-stuff-you-should-know.jpg';
import JoshClark from './img/josh-clark-stuff-you-should-know.jpg';
import GuyRaz from './img/guy-raz-ted-radio-hour.jpg';
import HrishkeshHirway from './img/hrishkesh-hirway-song-exploder.jpeg';
import IraGlass from './img/ira-glass-this-american-life.jpg';
import JadAbumrad from './img/jad-abumrad-radiolab.jpg';
import RobertKrulwich from './img/robert-krulwich-radiolab.jpg';
import JessicaWilliams from './img/jessica-williams-2-dope-queens.jpg';
import PhoebeRobinson from './img/phoebe-robinson-2-dope-queens.jpg';
import JoeRogan from './img/joe-rogan-joe-rogan-experience.jpeg';
import RomanMars from './img/roman-mars-99-percent-invisible.jpeg';
import SarahKoenig from './img/sarah-koenig-serial.jpg';
import StaceyVanekSmith from './img/stacey-vanek-smith-the-indicator.jpg';
import StephenJDubner from './img/stephen-j-dubner-freakanomics.jpg';
import WendyZukerman from './img/wendy-zukerman-science-vs.jpg';

// show images
import TwoDopeQueens from './img/show/2-dope-queens.png';
import NinetyNinePercentInvisible from './img/show/99-percent-invisible.png';
import JoeRoganExperience from './img/show/joe-rogan-experience.jpeg';
import Radiolab from './img/show/radiolab.png';
import ReplyAll from './img/show/reply-all.jpeg';
import ScienceVS from './img/show/science-vs.jpeg';
import SongExploder from './img/show/song-exploder.png';
import StuffYouShouldKnow from './img/show/stuff-you-should-know.jpeg';
import TEDRadioHour from './img/show/ted-radio-hour.jpeg';
import TheIndicator from './img/show/the-indicator.jpeg';
import TheNerdist from './img/show/the-nerdist.png';
import ThisAmericanLife from './img/show/this-american-life.jpeg';
import PlanetMoney from './img/show/planet-money.jpg';
import TheSharpEnd from './img/show/the-sharp-end.jpg';
import FrontEndHappyHour from './img/show/front-end-happy-hour.png';
import TheDirtbagDiaries from './img/show/the-dirtbag-diaries.jpg';
import TheEnormocast from './img/show/the-enormocast.jpeg';
import Serial from './img/show/serial.png';
import Freakanomics from './img/show/freakanomics.jpeg';

class App extends Component {
  constructor() {
    super();

    //function binding
    this.showByName = this.showByName.bind(this);
    this.showByShow = this.showByShow.bind(this);
    this.showHome = this.showHome.bind(this);

    this.state = {
      resources: [
        {
          show: "Planet Money",
          showurl: PlanetMoney,
          hosts: [
            {
              firstName: "Ailsa",
              lastName: "Chang",
              personurl: "ailsa-chang-planet-money.jpg"
            },
            {
              firstName: "Jacob",
              lastName: "Goldstein",
              personurl: "jacob-goldstein-planet-money.jpg"
            },
            {
              firstName: "Kenny",
              lastName: "Malone",
              personurl: "kenny-malone-planet-money.jpeg"
            },
            {
              firstName: "Noel",
              lastName: "King",
              personurl: "noel-king-planet-money.jpg"
            },
            {
              firstName: "Robert",
              lastName: "Smith",
              personurl: "robert-smith-planet-money.jpg"
            }
          ]
        },
        {
          show: "Reply All",
          showurl: ReplyAll,
          hosts: [
            {
              firstName: "Alex",
              lastName: "Goldman",
              personurl: "alex-goldman-reply-all.jpg"
            },
            {
              firstName: "PJ",
              lastName: "Vogt",
              personurl: "pj-vogt-reply-all.jpg"
            }
          ]
        },
        {
          show: "The Sharp End",
          showurl: TheSharpEnd,
          hosts: [
            {
              firstName: "Ashley",
              lastName: "Saupe",
              personurl: "ashley-saupe-the-sharp-end.jpg"
            }
          ]
        },
        {
          show: "Front End Happy Hour",
          showurl: FrontEndHappyHour,
          hosts: [
            {
              firstName: "Augustus",
              lastName: "Yuan",
              personurl: "augustus-yuan-front-end-happy-hour.jpg"
            },
            {
              firstName: "Brian",
              lastName: "Holt",
              personurl: "brian-holt-front-end-happy-hour.jpg"
            },
            {
              firstName: "Derrick",
              lastName: "Showers",
              personurl: "derrick-showers-front-end-happy-hour.jpg"
            },
            {
              firstName: "Jem",
              lastName: "Young",
              personurl: "jem-young-front-end-happy-hour.jpg"
            },
            {
              firstName: "Mars",
              lastName: "Jullian",
              personurl: "mars-jullian-front-end-happy-hour.jpg"
            },
            {
              firstName: "Ryan",
              lastName: "Anklem",
              personurl: "ryan-anklem-front-end-happy-hour.jpg"
            },
            {
              firstName: "Ryan",
              lastName: "Burgess",
              personurl: "ryan-burgess-front-end-happy-hour.jpg"
            },
            {
              firstName: "Sarah",
              lastName: "Federman",
              personurl: "sarah-federman-front-end-happy-hour.jpg"
            },
            {
              firstName: "Stacy",
              lastName: "London",
              personurl: "stacy-london-front-end-happy-hour.jpg"
            }
          ]
        },
        {
          show: "The Nerdist",
          showurl: TheNerdist,
          hosts: [
            {
              firstName: "Chris",
              lastName: "Hardwick",
              personurl: "chris-hardwick-the-nerdist.jpeg"
            }
          ]
        },
        {
          show: "The Dirtbag Diaries",
          showurl: TheDirtbagDiaries,
          hosts: [
            {
              firstName: "Becca",
              lastName: "Cahall",
              personurl: "becca-cahall-the-dirtbag-diaries.jpeg"
            },
            {
              firstName: "Fitz",
              lastName: "Cahall",
              personurl: "fitz-cahall-the-dirtbag-diaries.png"
            },
            {
              firstName: "Jen",
              lastName: "Altschul",
              personurl: "jen-altschul-the-dirtbag-diaries.jpg"
            }
          ]
        },
        {
          show: "The Enormocast",
          showurl: TheEnormocast,
          hosts: [
            {
              firstName: "Chris",
              lastName: "Kalous",
              personurl: "chris-kalous-the-enormocast.jpeg"
            }
          ]
        },
        {
          show: "Stuff You Should Know",
          showurl: StuffYouShouldKnow,
          hosts: [
            {
              firstName: "Chuck",
              lastName: "Bryant",
              personurl: "chuck-bryant-stuff-you-should-know.jpg"
            },
            {
              firstName: "Josh",
              lastName: "Clark",
              personurl: "josh-clark-stuff-you-should-know.jpg"
            }
          ]
        },
        {
          show: "TED Radio Hour",
          showurl: TEDRadioHour,
          hosts: [
            {
              firstName: "Guy",
              lastName: "Raz",
              personurl: "guy-raz-ted-radio-hour.jpg"
            }
          ]
        },
        {
          show: "Song Exploder",
          showurl: SongExploder,
          hosts: [
            {
              firstName: "Hrishkesh",
              lastName: "Hirway",
              personurl: "hrishkesh-hirway-song-exploder.jpeg"
            }
          ]
        },
        {
          show: "This American Life",
          showurl: ThisAmericanLife,
          hosts: [
            {
              firstName: "Ira",
              lastName: "Glass",
              personurl: "ira-glass-this-american-life.jpg"
            }
          ]
        },
        {
          show: "Radiolab",
          showurl: Radiolab,
          hosts: [
            {
              firstName: "Jad",
              lastName: "Abumrad",
              personurl: "jad-abumrad-radiolab.jpg"
            },
            {
              firstName: "Robert",
              lastName: "Krulwich",
              personurl: "robert-krulwich-radiolab.jpg"
            }
          ]
        },
        {
          show: "2 Dope Queens",
          showurl: TwoDopeQueens,
          hosts: [
            {
              firstName: "Jessica",
              lastName: "Williams",
              personurl: "jessica-williams-2-dope-queens.jpg"
            },
            {
              firstName: "Phoebe",
              lastName: "Robinson",
              personurl: "phoebe-robinson-2-dope-queens.jpg"
            }
          ]
        },
        {
          show: "Joe Rogan Experience",
          showurl: JoeRoganExperience,
          hosts: [
            {
              firstName: "Joe",
              lastName: "Rogan",
              personurl: "joe-rogan-joe-rogan-experience.jpeg"
            }
          ]
        },
        {
          show: "99 Percent Invisible",
          showurl: NinetyNinePercentInvisible,
          hosts: [
            {
              firstName: "Roman",
              lastName: "Mars",
              personurl: "roman-mars-99-percent-invisible.jpeg"
            }
          ]
        },
        {
          show: "Serial",
          showurl: Serial,
          hosts: [
            {
              firstName: "Sarah",
              lastName: "Koenig",
              personurl: "sarah-koenig-serial.jpg"
            }
          ]
        },
        {
          show: "The Indicator",
          showurl: TheIndicator,
          hosts: [
            {
              firstName: "Stacey",
              lastName: "Vanek-Smith",
              personurl: "stacey-vanek-smith-the-indicator.jpg"
            }
          ]
        },
        {
          show: "Freakanomics",
          showurl: Freakanomics,
          hosts: [
            {
              firstName: "Stephen J",
              lastName: "Dubner",
              personurl: "stephen-j-dubner-freakanomics.jpg"
            }
          ]
        },
        {
          show: "Science Vs",
          showurl: ScienceVS,
          hosts: [
            {
              firstName: "Wendy",
              lastName: "Zukerman",
              personurl: "wendy-zukerman-science-vs.jpg"
            }
          ]
        }
      ]
    }
  }

  showByName(host) {
    console.log("helloName");
  }

  showByShow(show) {
    console.log("helloShow");
  }

  showHome() {
    console.log("helloHome");
  }

  render() {
    return (
      <div className="container container-small">
        <Header />
        <SortButtons 
          showByName = {this.showByName}
          showByShow = {this.showByShow}
          showHome = {this.showHome}
        />
        {
          this.state.resources.map((resource, index) => {
            return (
              <FaceCard
                index={index}
                showByName={this.showByName}
                showByShow={this.showByShow}
                showHome={this.showHome}
                items={resource}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;