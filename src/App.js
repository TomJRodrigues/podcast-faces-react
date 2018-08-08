import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import SortButtons from './SortButtons.js';
import DisplayCards from './DisplayCards.js';

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
import RyanAnklem from './img/ryan-anklem-front-end-happy-hour.jpg'
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
      showByName: false,
      showByShow: true,
      showHome: false,
      resources: [
        {
          show: "Planet Money",
          showurl: PlanetMoney,
          hosts: [
            {
              firstName: "Ailsa",
              lastName: "Chang",
              personurl: AilsaChang
            },
            {
              firstName: "Jacob",
              lastName: "Goldstein",
              personurl: JacobGoldsten
            },
            {
              firstName: "Kenny",
              lastName: "Malone",
              personurl: KennyMalone
            },
            {
              firstName: "Noel",
              lastName: "King",
              personurl: NoelKing
            },
            {
              firstName: "Robert",
              lastName: "Smith",
              personurl: RobertSmith
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
              personurl: AlexGoldman
            },
            {
              firstName: "PJ",
              lastName: "Vogt",
              personurl: PJVogt
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
              personurl: AshleySaupe
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
              personurl: AugustusYuan
            },
            {
              firstName: "Brian",
              lastName: "Holt",
              personurl: BrianHolt
            },
            {
              firstName: "Derrick",
              lastName: "Showers",
              personurl: DerrickShowers
            },
            {
              firstName: "Jem",
              lastName: "Young",
              personurl: JemYoung
            },
            {
              firstName: "Mars",
              lastName: "Jullian",
              personurl: MarsJulian
            },
            {
              firstName: "Ryan",
              lastName: "Anklem",
              personurl: RyanAnklem
            },
            {
              firstName: "Ryan",
              lastName: "Burgess",
              personurl: RyanBurgess
            },
            {
              firstName: "Sarah",
              lastName: "Federman",
              personurl: SarahFederman
            },
            {
              firstName: "Stacy",
              lastName: "London",
              personurl: StacyLondon
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
              personurl: ChrisHardwick
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
              personurl: BeccaCahall
            },
            {
              firstName: "Fitz",
              lastName: "Cahall",
              personurl: FitzCahall
            },
            {
              firstName: "Jen",
              lastName: "Altschul",
              personurl: JenAltschul
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
              personurl: ChrisKalous
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
              personurl: ChuckBryant
            },
            {
              firstName: "Josh",
              lastName: "Clark",
              personurl: JoshClark
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
              personurl: GuyRaz
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
              personurl: HrishkeshHirway
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
              personurl: IraGlass
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
              personurl: JadAbumrad
            },
            {
              firstName: "Robert",
              lastName: "Krulwich",
              personurl: RobertKrulwich
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
              personurl: JessicaWilliams
            },
            {
              firstName: "Phoebe",
              lastName: "Robinson",
              personurl: PhoebeRobinson
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
              personurl: JoeRogan
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
              personurl: RomanMars
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
              personurl: SarahKoenig
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
              personurl: StaceyVanekSmith
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
              personurl: StephenJDubner
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
              personurl: WendyZukerman
            }
          ]
        }
      ],
      hosts: []
    }
  }

  showByName(host) {
    const tempState = this.state;
    tempState.showByName = true;
    tempState.showByShow = false;
    tempState.showHome = false;
    this.setState(tempState);
  }

  showByShow(show) {
    const tempState = this.state;
    tempState.showByName = false;
    tempState.showByShow = true;
    tempState.showHome = false;
    this.setState(tempState);
  }

  showHome() {
    const tempState = this.state;
    tempState.showByName = false;
    tempState.showByShow = false;
    tempState.showHome = true;
    this.setState(tempState);
  }

  render() {

            // sorting state so that results are alphabetical
            if (this.state.showByShow === true) {  // sorts by show name alphabetically
            const tempState = this.state;
            tempState.resources.sort(function(a, b) {
              var nameA = a.show.toUpperCase(); // ignore upper and lowercase
              var nameB = b.show.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              // names must be equal
              return 0;
            } );
          }

          if (this.state.showByName === true) {  // sorts by host name alphabetically
            const tempState = this.state;
            tempState.resources.map((resource, index) => {
              resource.hosts.map((host, index) => {
                this.state.hosts.push(host);
                this.state.hosts.sort(function(a, b) {
                  var nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
                  var nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }
                  // names must be equal
                  return 0;
                } );
              })
            })
          }
          else {}  // no sorting

    return (
      <div className="container container-small">
        <Header />
        <SortButtons 
          showByName = {this.showByName}
          showByShow = {this.showByShow}
          showHome = {this.showHome}
        />
        <div className="row">
          {
            this.state.resources.map((host, index) => {
              return(
                  <DisplayCards
                    index={index}
                    isShowByName={this.state.showByName}
                    isShowByShow={this.state.showByShow}
                    isShowHome={this.state.showHome}
                    hosts={host}
                    state={this.state}
                  />
                
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;