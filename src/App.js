import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import SortButtons from './SortButtons.js';
import Content from './Content.js';
import TypeAheadContainer from './TypeAheadContainer.js';

// host images
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
import AaronMahnke from 'aaron-mahnke-lore.jpg';
import AliceLevine from 'alice-levine-my-dad-wrote-a-porno.jpeg';
import AlixSpiegel from 'alix-spiegel-invisibilia.jpeg';
import AmberALeeFrost from 'amber-alee-frost-chapo-trap-house.jpeg';
import BenKissel from 'ben-kissel-the-last-podcast-on-the-left.jpeg';
import BenShapiro from 'ben-shapiro-the-ben-shapiro-show.jpeg';
import BrianReed from 'brian-reed-s-town.jpeg';
import Captain from 'captain-true-crime-garage.jpeg';
import ConanOBrien from 'conan-obrien-conan-obrien-needs-a-friend.jpeg';
import CorinneFisher from 'corinne-fisher-guys-we-fucked.jpeg';
import DanCarlin from 'dan-carlin-dan-carlins-hardcore-history.jpeg';
import DanPfeiffer from 'dan-pfeiffer-pod-save-america.jpg';
import DanSavage from 'dan-savage-savage-lovecast.jpeg';
import DrewAckerman from 'drew-ackerman-sleep-with-me.jpeg';
import EarlonneWoods from 'earlonne-woods-ear-hustle.jpeg';
import EzraKlein from 'ezra-klien-the-ezra-klein-show.jpeg';
import FelixBiederman from 'felix-biederman-chapo-trap-house.jpeg';
import GeorgeDawes from 'george-dawes-green-the-moth.jpeg';
import GeorgiaHardstark from 'georgia-hardstark-my-favorite-murder.jpeg';
import GlynnWashington from 'glynn-washington-snap-judgement.jpeg';
import GriffinMcelroyfrom 'griffin-mcelroy-my-brother-my-brother-and-me.jpeg';
import HannaRosin from 'hanna-rosin-invisibilia.jpeg';
import HenryZebrowski from 'henry-zebrowski-the-last-podcast-on-the-left.jpg';
import HollyFrey from 'holly-frey-stuff-you-missed-in-history-class.jpg';
import JamesCooper from 'james-cooper-my-dad-wrote-a-porno.jpeg';
import JamieMorton from 'jamie-morton-my-dad-wrote-a-porno.jpeg';
import JodyAvirgan from 'jody-avirgan-fivethirtyeight-politics.jpeg';
import JonFavreau from 'jon-favreau-pod-save-america.jpg';
import JonLovett from 'jon-lovett-pod-save-america.jpg';
import JonathanGoldstein from 'jonathan-goldstein-heavyweight.jpeg';
import JustinMcelroy from 'justin-mcelroy-my-brother-my-brother-and-me.jpeg';
import KarenKilgariff from 'karen-kilgariff-my-favorite-murder.jpeg';
import KrystynaHutchinson from 'krystyna-hutchinson-guys-we-fucked.jpeg';
import LauraBeil from 'laura-beil-dr-death.jpeg';
import LindaHolmes from 'linda-holmes-pop-culture-happy-hour.jpeg';
import LindsayGraham from 'lindsay-graham-american-scandal.jpeg';
import LuluMiller from 'lulu-miller-invisibilia.jpeg';
import MalcolmGladwell from 'malcolm-gladwell-revisionist-history.jpeg';
import MarcMaron from 'marc-maron-wtf-with-marc-maron.jpeg';
import MarcusParks from 'marcus-parks-the-last-podcast-on-the-left.jpeg';
import MattChristman from 'matt-christman-chapo-trap-house.jpeg';
import MichaelBarbaro from 'michael-barbaro-the-daily.jpeg';
import MikeBoudet from 'mike-boudet-sword-and-scale.jpeg';
import NateSilver from 'nate-silver-fivethirtyeight-politics.jpeg';
import NeilDegrasseTyson from 'neil-degrasse-tyson-startalk-radio.jpeg';
import Nic from 'nic-true-crime-garage.jpeg';
import NickVanDerKolk from 'nick-van-der-kolk-love-and-radio.jpeg';
import NigelPoor from 'nigel-poor-ear-hustle.jpeg';
import PeterSagal from 'peter-sagal-wait-wait-dont-tell-me.jpg';
import RachelMaddow from 'rachel-maddow-the-rachel-maddow-show.jpeg';
import ShankarVedantam from 'shankar-vedantam-hidden-brain.jpg';
import TerryGross from 'terry-gross-fresh-air.jpeg';
import TimFerriss from 'tim-ferriss-the-tim-ferriss-show.jpeg';
import TommyVietor from 'tommy-vietor-pod-save-america.jpg';
import TracyVWilson from 'tracy-v-wilson-stuff-you-missed-in-history-class.jpg';
import Travis Mcelroyfrom 'travis-mcelroy-my-brother-my-brother-and-me.jpeg';
import VirgilTexas from 'virgil-texas-chapo-trap-house.jpeg';
import WillMenaker from 'will-menaker-chapo-trap-house.jpg';


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
import AmericanScandal from 'american-scandal.jpeg';
import ChapoTrapHouse from 'chapo-trap-house.png';
import ConanOBrienNeedsAFriend from 'conan-obrien-needs-a-friend.jpeg';
import DanCarlinsHardcoreHistory from 'dan-carlins-hardcore-history.jpeg';
import DrDeath from 'dr-death.jpeg';
import EarHustle from 'ear-hustle.jpeg';
import FiveThirtyEightPolitics from 'fivethirtyeight-politics.png';
import FreshAir from 'fresh-air.png';
import GuysWeFucked from 'guys-we-fucked.jpeg';
import HeavyWeight from 'heavyweight.png';
import HiddenBrain from 'hidden-brain.png';
import HowIBuiltThis from 'how-i-built-this.png';
import Invisibilia from 'invisibilia.png';
import Lore from 'lore.png';
import LoveAndRadio from 'love-and-radio.png';
import MyBrotherMyBrotherAndMe from 'my-brother-my-brother-and-me.jpeg';
import MyDadWroteAPorno from 'my-dad-wrote-a-porno.jpg';
import MyFavoriteMurder from 'my-favorite-murder.jpeg';
import PodSaveAmerica from 'pod-save-america.jpg';
import PopCultureHappyHour from 'pop-culture-happy-hour.png';
import RachelMaddowShow from 'rachel-maddow-show.jpeg';
import RadiolabPresentsMorePerfect from 'radiolab-presents-more-perfect.jpeg';
import RevisionistHistory from 'revisionist-history.png';
import STown from 's-town.jpeg';
import SavageLovecast from 'savage-lovecast.jpeg';
import SleepWithMe from 'sleep-with-me.jpeg';
import SnapJudgement from 'snap-judgement.jpeg';
import StartalkRadio from 'startalk-radio.jpeg';
import StuffYouMissedInHistoryClass from 'stuff-you-missed-in-history-class.jpeg';
import SwordAndScale from 'sword-and-scale.jpeg';
import TheBenShapiroShow from 'the-ben-shapiro-show.jpeg';
import TheDaily from 'the-daily.jpeg';
import TheEzraKleinShow from 'the-ezra-klein-show.jpeg';
import TheLastPodcastOnTheLeft from 'the-last-podcast-on-the-left.jpeg';
import TheMoth from 'the-moth.jpeg';
import TheTimeFerrissShowfrom 'the-tim-ferriss-show.jpeg';
import TrueCrimeGarage from 'true-crime-garage.jpeg';
import WaitWaitDontTellMe from 'wait-wait-dont-tell-me.png';
import WTFWithMarcMaron from 'wtf-with-marc-maron.jpeg';

class App extends Component {
  constructor() {
    super();

    //function binding
    this.showByName = this.showByName.bind(this);
    this.showByShow = this.showByShow.bind(this);
    this.handleChangeHelper = this.handleChangeHelper.bind(this);

    this.state = {
      showByName: false,
      showByShow: true,
      resources: [
        {
          show: "Planet Money",
          showurl: PlanetMoney,
          hosts: [
            {
              firstName: "Ailsa",
              lastName: "Chang",
              personurl: AilsaChang,
              show: "Planet Money"
            },
            {
              firstName: "Jacob",
              lastName: "Goldstein",
              personurl: JacobGoldsten,
              show: "Planet Money"
            },
            {
              firstName: "Kenny",
              lastName: "Malone",
              personurl: KennyMalone,
              show: "Planet Money"
            },
            {
              firstName: "Noel",
              lastName: "King",
              personurl: NoelKing,
              show: "Planet Money"
            },
            {
              firstName: "Robert",
              lastName: "Smith",
              personurl: RobertSmith,
              show: "Planet Money"
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
              personurl: AlexGoldman,
              show: "Reply All"
            },
            {
              firstName: "PJ",
              lastName: "Vogt",
              personurl: PJVogt,
              show: "Reply All"
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
              personurl: AshleySaupe,
              show: "The Sharp End"
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
              personurl: AugustusYuan,
              show: "Front End Happy Hour"
            },
            {
              firstName: "Brian",
              lastName: "Holt",
              personurl: BrianHolt,
              show: "Front End Happy Hour"
            },
            {
              firstName: "Derrick",
              lastName: "Showers",
              personurl: DerrickShowers,
              show: "Front End Happy Hour"
            },
            {
              firstName: "Jem",
              lastName: "Young",
              personurl: JemYoung,
              show: "Front End Happy Hour"
            },
            {
              firstName: "Mars",
              lastName: "Jullian",
              personurl: MarsJulian,
              show: "Front End Happy Hour"
            },
            {
              firstName: "Ryan",
              lastName: "Anklem",
              personurl: RyanAnklem,
              show: "Front End Happy Hour"
            },
            {
              firstName: "Ryan",
              lastName: "Burgess",
              personurl: RyanBurgess,
              show: "Front End Happy Hour"
            },
            {
              firstName: "Sarah",
              lastName: "Federman",
              personurl: SarahFederman,
              show: "Front End Happy Hour"
            },
            {
              firstName: "Stacy",
              lastName: "London",
              personurl: StacyLondon,
              show: "Front End Happy Hour"
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
              personurl: ChrisHardwick,
              show: "The Nerdist"
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
              personurl: BeccaCahall,
              show: "The Dirtbag Diaries"
            },
            {
              firstName: "Fitz",
              lastName: "Cahall",
              personurl: FitzCahall,
              show: "The Dirtbag Diaries"
            },
            {
              firstName: "Jen",
              lastName: "Altschul",
              personurl: JenAltschul,
              show: "The Dirtbag Diaries"
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
              personurl: ChrisKalous,
              show: "The Enormocast"
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
              personurl: ChuckBryant,
              show: "Stuff You Should Know"
            },
            {
              firstName: "Josh",
              lastName: "Clark",
              personurl: JoshClark,
              show: "Stuff You Should Know"
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
              personurl: GuyRaz,
              show: "TED Radio Hour"
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
              personurl: HrishkeshHirway,
              show: "Song Exploder"
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
              personurl: IraGlass,
              show: "This American Life"
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
              personurl: JadAbumrad,
              show: "Radiolab"
            },
            {
              firstName: "Robert",
              lastName: "Krulwich",
              personurl: RobertKrulwich,
              show: "Radiolab"
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
              personurl: JessicaWilliams,
              show: "2 Dope Queens"
            },
            {
              firstName: "Phoebe",
              lastName: "Robinson",
              personurl: PhoebeRobinson,
              show: "2 Dope Queens"
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
              personurl: JoeRogan,
              show: "Joe Rogan Experience"
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
              personurl: RomanMars,
              show: "99 Percent Invisible"
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
              personurl: SarahKoenig,
              show: "Serial"
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
              personurl: StaceyVanekSmith,
              show: "The Indicator"
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
              personurl: StephenJDubner,
              show: "Freakanomics"
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
              personurl: WendyZukerman,
              show: "Science Vs"
            }
          ]
        }
      ],
      contentToRender: [],
      typeAheadOptions: [],
      selected: []
    }
  }

  showByName(host) {
    const tempState = this.state;
    tempState.showByName = true;
    tempState.showByShow = false;
    tempState.selected = [];
    this.setState(tempState);
  }

  showByShow(show) {
    const tempState = this.state;
    tempState.showByName = false;
    tempState.showByShow = true;
    tempState.selected = [];
    this.setState(tempState);
  }

  handleChangeHelper(selected) {
    const tempState = this.state;
    tempState.contentToRender.length = 0;
    tempState.contentToRender = selected;
    tempState.selected = selected;
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
              this.state.typeAheadOptions.length = 0;  // resets typeAhead options
              tempState.resources.map((resource, index) => {
                var resourceObject = Object.assign({}, resource)
                this.state.typeAheadOptions.push(resourceObject);
                this.state.contentToRender = this.state.typeAheadOptions;
                if (this.state.selected.length > 0) {
                  this.state.contentToRender = this.state.selected;
                }
              })
            }

          if ((this.state.showByName === true)) {  // sorts by host name alphabetically
            this.state.typeAheadOptions.length = 0; // resets typeAhead options
            const tempState = this.state;
            tempState.resources.map((resource, index) => {
              resource.hosts.map((host, index) => {
                this.state.typeAheadOptions.push(host);
                this.state.typeAheadOptions.sort(function(a, b) {
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
            this.state.contentToRender = this.state.typeAheadOptions;
            if (this.state.selected.length > 0) {
                  this.state.contentToRender = this.state.selected;
                }
          }
          else {}  // no sorting

    return (
      <div className="container container-small">
        <Header />
        <SortButtons
          showByName={this.showByName}
          showByShow={this.showByShow}
        />
        <TypeAheadContainer
          state={this.state}
          handleChangeHelper={this.handleChangeHelper}
          clearSelected={this.clearSelected}
        />
        
        <Content
          state={this.state}
          showByName={this.showByName}
          showByShow={this.showByShow}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
