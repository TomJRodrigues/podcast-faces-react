import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import SortButtons from './SortButtons.js';
import Content from './Content.js';
import TypeAheadContainer from './TypeAheadContainer.js';
import _ from 'lodash';

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
import AaronMahnke from './img/aaron-mahnke-lore.jpg';
import AliceLevine from './img/alice-levine-my-dad-wrote-a-porno.jpeg';
import AlixSpiegel from './img/alix-spiegel-invisibilia.jpeg';
import AmberALeeFrost from './img/amber-alee-frost-chapo-trap-house.jpeg';
import BenKissel from './img/ben-kissel-the-last-podcast-on-the-left.jpeg';
import BenShapiro from './img/ben-shapiro-the-ben-shapiro-show.jpeg';
import BrianReed from './img/brian-reed-s-town.jpeg';
import Captain from './img/captain-true-crime-garage.jpeg';
import ConanOBrien from './img/conan-obrien-conan-obrien-needs-a-friend.jpeg';
import CorinneFisher from './img/corinne-fisher-guys-we-fucked.jpeg';
import DanCarlin from './img/dan-carlin-dan-carlins-hardcore-history.jpeg';
import DanPfeiffer from './img/dan-pfeiffer-pod-save-america.jpg';
import DanSavage from './img/dan-savage-savage-lovecast.jpeg';
import DrewAckerman from './img/drew-ackerman-sleep-with-me.jpeg';
import EarlonneWoods from './img/earlonne-woods-ear-hustle.jpeg';
import EzraKlein from './img/ezra-klien-the-ezra-klein-show.jpeg';
import FelixBiederman from './img/felix-biederman-chapo-trap-house.jpeg';
import GeorgeDawes from './img/george-dawes-green-the-moth.jpeg';
import GeorgiaHardstark from './img/georgia-hardstark-my-favorite-murder.jpeg';
import GlynnWashington from './img/glynn-washington-snap-judgement.jpeg';
import GriffinMcelroy from './img/griffin-mcelroy-my-brother-my-brother-and-me.jpeg';
import HannaRosin from './img/hanna-rosin-invisibilia.jpeg';
import HenryZebrowski from './img/henry-zebrowski-the-last-podcast-on-the-left.jpg';
import HollyFrey from './img/holly-frey-stuff-you-missed-in-history-class.jpg';
import JamesCooper from './img/james-cooper-my-dad-wrote-a-porno.jpeg';
import JamieMorton from './img/jamie-morton-my-dad-wrote-a-porno.jpeg';
import JodyAvirgan from './img/jody-avirgan-fivethirtyeight-politics.jpeg';
import JonFavreau from './img/jon-favreau-pod-save-america.jpg';
import JonLovett from './img/jon-lovett-pod-save-america.jpg';
import JonathanGoldstein from './img/jonathan-goldstein-heavyweight.jpeg';
import JustinMcelroy from './img/justin-mcelroy-my-brother-my-brother-and-me.jpeg';
import KarenKilgariff from './img/karen-kilgariff-my-favorite-murder.jpeg';
import KrystynaHutchinson from './img/krystyna-hutchinson-guys-we-fucked.jpeg';
import LauraBeil from './img/laura-beil-dr-death.jpeg';
import LindaHolmes from './img/linda-holmes-pop-culture-happy-hour.jpeg';
import LindsayGraham from './img/lindsay-graham-american-scandal.jpeg';
import LuluMiller from './img/lulu-miller-invisibilia.jpeg';
import MalcolmGladwell from './img/malcolm-gladwell-revisionist-history.jpeg';
import MarcMaron from './img/marc-maron-wtf-with-marc-maron.jpeg';
import MarcusParks from './img/marcus-parks-the-last-podcast-on-the-left.jpeg';
import MattChristman from './img/matt-christman-chapo-trap-house.jpeg';
import MichaelBarbaro from './img/michael-barbaro-the-daily.jpeg';
import MikeBoudet from './img/mike-boudet-sword-and-scale.jpeg';
import NateSilver from './img/nate-silver-fivethirtyeight-politics.jpeg';
import NeilDegrasseTyson from './img/neil-degrasse-tyson-startalk-radio.jpeg';
import Nic from './img/nic-true-crime-garage.jpeg';
import NickVanDerKolk from './img/nick-van-der-kolk-love-and-radio.jpeg';
import NigelPoor from './img/nigel-poor-ear-hustle.jpeg';
import PeterSagal from './img/peter-sagal-wait-wait-dont-tell-me.jpg';
import RachelMaddow from './img/rachel-maddow-the-rachel-maddow-show.jpeg';
import ShankarVedantam from './img/shankar-vedantam-hidden-brain.jpg';
import TerryGross from './img/terry-gross-fresh-air.jpeg';
import TimFerriss from './img/tim-ferriss-the-tim-ferriss-show.jpeg';
import TommyVietor from './img/tommy-vietor-pod-save-america.jpg';
import TracyVWilson from './img/tracy-v-wilson-stuff-you-missed-in-history-class.jpg';
import TravisMcelroy from './img/travis-mcelroy-my-brother-my-brother-and-me.jpeg';
import VirgilTexas from './img/virgil-texas-chapo-trap-house.jpeg';
import WillMenaker from './img/will-menaker-chapo-trap-house.jpg';


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
import AmericanScandal from './img/show/american-scandal.jpeg';
import ChapoTrapHouse from './img/show/chapo-trap-house.png';
import ConanOBrienNeedsAFriend from './img/show/conan-obrien-needs-a-friend.jpeg';
import DanCarlinsHardcoreHistory from './img/show/dan-carlins-hardcore-history.jpeg';
import DrDeath from './img/show/dr-death.jpeg';
import EarHustle from './img/show/ear-hustle.jpeg';
import FiveThirtyEightPolitics from './img/show/fivethirtyeight-politics.png';
import FreshAir from './img/show/fresh-air.png';
import GuysWeFucked from './img/show/guys-we-fucked.jpeg';
import HeavyWeight from './img/show/heavyweight.jpeg';
import HiddenBrain from './img/show/hidden-brain.png';
import HowIBuiltThis from './img/show/how-i-built-this.png';
import Invisibilia from './img/show/invisibilia.png';
import Lore from './img/show/lore.png';
import LoveAndRadio from './img/show/love-and-radio.png';
import MyBrotherMyBrotherAndMe from './img/show/my-brother-my-brother-and-me.jpeg';
import MyDadWroteAPorno from './img/show/my-dad-wrote-a-porno.jpg';
import MyFavoriteMurder from './img/show/my-favorite-murder.jpeg';
import PodSaveAmerica from './img/show/pod-save-america.jpg';
import PopCultureHappyHour from './img/show/pop-culture-happy-hour.png';
import RachelMaddowShow from './img/show/rachel-maddow-show.jpeg';
import RadiolabPresentsMorePerfect from './img/show/radiolab-presents-more-perfect.jpeg';
import RevisionistHistory from './img/show/revisionist-history.png';
import STown from './img/show/s-town.jpeg';
import SavageLovecast from './img/show/savage-lovecast.jpeg';
import SleepWithMe from './img/show/sleep-with-me.jpeg';
import SnapJudgement from './img/show/snap-judgement.jpeg';
import StartalkRadio from './img/show/startalk-radio.jpeg';
import StuffYouMissedInHistoryClass from './img/show/stuff-you-missed-in-history-class.jpeg';
import SwordAndScale from './img/show/sword-and-scale.jpeg';
import TheBenShapiroShow from './img/show/the-ben-shapiro-show.jpeg';
import TheDaily from './img/show/the-daily.jpeg';
import TheEzraKleinShow from './img/show/the-ezra-klein-show.jpeg';
import TheLastPodcastOnTheLeft from './img/show/the-last-podcast-on-the-left.jpeg';
import TheMoth from './img/show/the-moth.jpeg';
import TheTimFerrissShow from './img/show/the-tim-ferriss-show.jpeg';
import TrueCrimeGarage from './img/show/true-crime-garage.jpeg';
import WaitWaitDontTellMe from './img/show/wait-wait-dont-tell-me.png';
import WTFWithMarcMaron from './img/show/wtf-with-marc-maron.jpeg';

class App extends Component {
  constructor() {
    super();

    //function binding
    this.showByName = this.showByName.bind(this);
    this.showByShow = this.showByShow.bind(this);
    this.handleChangeHelper = this.handleChangeHelper.bind(this);
    this.alphabetizeShowList = this.alphabetizeShowList.bind(this);
    this.alphabetizeHostList = this.alphabetizeHostList.bind(this);
    this.pushShowsToTypeAheadList = this.pushShowsToTypeAheadList.bind(this);
    this.pullContentToRenderFromTypeAheadList = this.pullContentToRenderFromTypeAheadList.bind(this);
    this.populateDuplicateHostIndices = this.populateDuplicateHostIndices.bind(this);
    this.removeDuplicateHosts = this.removeDuplicateHosts.bind(this);

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
              hostshow: "Planet Money"
            },
            {
              firstName: "Jacob",
              lastName: "Goldstein",
              personurl: JacobGoldsten,
              hostshow: "Planet Money"
            },
            {
              firstName: "Kenny",
              lastName: "Malone",
              personurl: KennyMalone,
              hostshow: "Planet Money"
            },
            {
              firstName: "Noel",
              lastName: "King",
              personurl: NoelKing,
              hostshow: "Planet Money"
            },
            {
              firstName: "Robert",
              lastName: "Smith",
              personurl: RobertSmith,
              hostshow: "Planet Money"
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
              hostshow: "Reply All"
            },
            {
              firstName: "PJ",
              lastName: "Vogt",
              personurl: PJVogt,
              hostshow: "Reply All"
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
              hostshow: "The Sharp End"
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
              hostshow: "Front End Happy Hour"
            },
            {
              firstName: "Brian",
              lastName: "Holt",
              personurl: BrianHolt,
              hostshow: "Front End Happy Hour"
            },
            {
              firstName: "Derrick",
              lastName: "Showers",
              personurl: DerrickShowers,
              hostshow: "Front End Happy Hour"
            },
            {
              firstName: "Jem",
              lastName: "Young",
              personurl: JemYoung,
              hostshow: "Front End Happy Hour"
            },
            {
              firstName: "Mars",
              lastName: "Jullian",
              personurl: MarsJulian,
              hostshow: "Front End Happy Hour"
            },
            {
              firstName: "Ryan",
              lastName: "Anklem",
              personurl: RyanAnklem,
              hostshow: "Front End Happy Hour"
            },
            {
              firstName: "Ryan",
              lastName: "Burgess",
              personurl: RyanBurgess,
              hostshow: "Front End Happy Hour"
            },
            {
              firstName: "Sarah",
              lastName: "Federman",
              personurl: SarahFederman,
              hostshow: "Front End Happy Hour"
            },
            {
              firstName: "Stacy",
              lastName: "London",
              personurl: StacyLondon,
              hostshow: "Front End Happy Hour"
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
              hostshow: "The Nerdist"
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
              hostshow: "The Dirtbag Diaries"
            },
            {
              firstName: "Fitz",
              lastName: "Cahall",
              personurl: FitzCahall,
              hostshow: "The Dirtbag Diaries"
            },
            {
              firstName: "Jen",
              lastName: "Altschul",
              personurl: JenAltschul,
              hostshow: "The Dirtbag Diaries"
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
              hostshow: "The Enormocast"
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
              hostshow: "Stuff You Should Know"
            },
            {
              firstName: "Josh",
              lastName: "Clark",
              personurl: JoshClark,
              hostshow: "Stuff You Should Know"
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
              hostshow: "TED Radio Hour"
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
              hostshow: "Song Exploder"
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
              hostshow: "This American Life"
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
              hostshow: "Radiolab"
            },
            {
              firstName: "Robert",
              lastName: "Krulwich",
              personurl: RobertKrulwich,
              hostshow: "Radiolab"
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
              hostshow: "2 Dope Queens"
            },
            {
              firstName: "Phoebe",
              lastName: "Robinson",
              personurl: PhoebeRobinson,
              hostshow: "2 Dope Queens"
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
              hostshow: "Joe Rogan Experience"
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
              hostshow: "99 Percent Invisible"
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
              hostshow: "Serial"
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
              hostshow: "The Indicator"
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
              hostshow: "Freakanomics"
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
              hostshow: "Science Vs"
            }
          ]
        },
        {
          show: "American Scandal",
          showurl: AmericanScandal,
          hosts: [
            {
              firstName: "Lindsay",
              lastName: "Graham",
              personurl: LindsayGraham,
              hostshow: "American Scandal"
            }
          ]
        },
        {
          show: "Chapo Trap House",
          showurl: ChapoTrapHouse,
          hosts: [
            {
              firstName: "Amber",
              lastName: "A'Lee Frost",
              personurl: AmberALeeFrost,
              hostshow: "Chapo Trap House"
            },
            {
              firstName: "Felix",
              lastName: "Biederman",
              personurl: FelixBiederman,
              hostshow: "Chapo Trap House"
            },
            {
              firstName: "Matt",
              lastName: "Christman",
              personurl: MattChristman,
              hostshow: "Chapo Trap House"
            },
            {
              firstName: "Virgil",
              lastName: "Texas",
              personurl: VirgilTexas,
              hostshow: "Chapo Trap House"
            },
            {
              firstName: "Will",
              lastName: "Menaker",
              personurl: WillMenaker,
              hostshow: "Chapo Trap House"
            }
          ]
        },
        {
          show: "Conan O'Brien Needs a Friend",
          showurl: ConanOBrienNeedsAFriend,
          hosts: [
            {
              firstName: "Conan",
              lastName: "O'Brien",
              personurl: ConanOBrien,
              hostshow: "Conan O'Brien Needs a Friend"
            }
          ]
        },
        {
          show: "Dan Carlin's Hardcore History",
          showurl: DanCarlinsHardcoreHistory,
          hosts: [
            {
              firstName: "Dan",
              lastName: "Carlin",
              personurl: DanCarlin,
              hostshow: "Dan Carlin's Hardcore History"
            }
          ]
        },
        {
          show: "Dr. Death",
          showurl: DrDeath,
          hosts: [
            {
              firstName: "Laura",
              lastName: "Beil",
              personurl: LauraBeil,
              hostshow: "Dr. Death"
            }
          ]
        },
        {
          show: "Ear Hustle",
          showurl: EarHustle,
          hosts: [
            {
              firstName: "Earlonne",
              lastName: "Woods",
              personurl: EarlonneWoods,
              hostshow: "Ear Hustle"
            },
            {
              firstName: "Nigel",
              lastName: "Poor",
              personurl: NigelPoor,
              hostshow: "Ear Hustle"
            }
          ]
        },
        {
          show: "FiveThirtyEight Politics",
          showurl: FiveThirtyEightPolitics,
          hosts: [
            {
              firstName: "Jody",
              lastName: "Avirgan",
              personurl: JodyAvirgan,
              hostshow: "FiveThirtyEight Politics"
            },
            {
              firstName: "Nate",
              lastName: "Silver",
              personurl: NateSilver,
              hostshow: "FiveThirtyEight Politics"
            }
          ]
        },
        {
          show: "Fresh Air",
          showurl: FreshAir,
          hosts: [
            {
              firstName: "Terry",
              lastName: "Gross",
              personurl: TerryGross,
              hostshow: "Fresh Air"
            }
          ]
        },
        {
          show: "Guys We Fucked",
          showurl: GuysWeFucked,
          hosts: [
            {
              firstName: "Corinne",
              lastName: "Fisher",
              personurl: CorinneFisher,
              hostshow: "Guys We Fucked"
            },
            {
              firstName: "Krystyna",
              lastName: "Hutchinson",
              personurl: KrystynaHutchinson,
              hostshow: "Guys We Fucked"
            }
          ]
        },
        {
          show: "Heavyweight",
          showurl: HeavyWeight,
          hosts: [
            {
              firstName: "Jonathan",
              lastName: "Goldstein",
              personurl: JonathanGoldstein,
              hostshow: "Heavyweight"
            }
          ]
        },
        {
          show: "Hidden Brain",
          showurl: HiddenBrain,
          hosts: [
            {
              firstName: "Shankar",
              lastName: "Vedantim",
              personurl: ShankarVedantam,
              hostshow: "Hidden Brain"
            }
          ]
        },
        {
          show: "How I Built This",
          showurl: HowIBuiltThis,
          hosts: [
            {
              firstName: "Guy",
              lastName: "Raz",
              personurl: GuyRaz,
              hostshow: "How I Built This"
            }
          ]
        },
        {
          show: "Invisibilia",
          showurl: Invisibilia,
          hosts: [
            {
              firstName: "Alix",
              lastName: "Spiegel",
              personurl: AlixSpiegel,
              hostshow: "Invisibilia"
            },
            {
              firstName: "Hanna",
              lastName: "Rosin",
              personurl: HannaRosin,
              hostshow: "Invisibilia"
            },
            {
              firstName: "Lulu",
              lastName: "Miller",
              personurl: LuluMiller,
              hostshow: "Invisibilia"
            }
          ]
        },
        {
          show: "Lore",
          showurl: Lore,
          hosts: [
            {
              firstName: "Aaron",
              lastName: "Mahnke",
              personurl: AaronMahnke,
              hostshow: "Lore"
            }
          ]
        },
        {
          show: "Love and Radio",
          showurl: LoveAndRadio,
          hosts: [
            {
              firstName: "Nick",
              lastName: "Van Der Kolk",
              personurl: NickVanDerKolk,
              hostshow: "Love and Radio"
            }
          ]
        },
        {
          show: "My Brother and My Brother and Me",
          showurl: MyBrotherMyBrotherAndMe,
          hosts: [
            {
              firstName: "Griffin",
              lastName: "McElroy",
              personurl: GriffinMcelroy,
              hostshow: "My Brother and My Brother and Me"
            },
            {
              firstName: "Justin",
              lastName: "McElroy",
              personurl: JustinMcelroy,
              hostshow: "My Brother and My Brother and Me"
            },
            {
              firstName: "Travis",
              lastName: "McElroy",
              personurl: TravisMcelroy,
              hostshow: "My Brother and My Brother and Me"
            }
          ]
        },
        {
          show: "My Dad Wrote a Porno",
          showurl: MyDadWroteAPorno,
          hosts: [
            {
              firstName: "Alice",
              lastName: "Levine",
              personurl: AliceLevine,
              hostshow: "My Dad Wrote a Porno"
            },
            {
              firstName: "James",
              lastName: "Cooper",
              personurl: JamesCooper,
              hostshow: "My Dad Wrote a Porno"
            },
            {
              firstName: "Jamie",
              lastName: "Morton",
              personurl: JamieMorton,
              hostshow: "My Dad Wrote a Porno"
            }
          ]
        },
        {
          show: "My Favorite Murder",
          showurl: MyFavoriteMurder,
          hosts: [
            {
              firstName: "Georgia",
              lastName: "Hardstark",
              personurl: GeorgiaHardstark,
              hostshow: "My Favorite Murder"
            },
            {
              firstName: "Karen",
              lastName: "Kilgariff",
              personurl: KarenKilgariff,
              hostshow: "My Favorite Murder"
            }
          ]
        },
        {
          show: "Pod Save America",
          showurl: PodSaveAmerica,
          hosts: [
            {
              firstName: "Dan",
              lastName: "Pfeiffer",
              personurl: DanPfeiffer,
              hostshow: "Pod Save America"
            },
            {
              firstName: "Jon",
              lastName: "Favreau",
              personurl: JonFavreau,
              hostshow: "Pod Save America"
            },
            {
              firstName: "Jon",
              lastName: "Lovett",
              personurl: JonLovett,
              hostshow: "Pod Save America"
            },
            {
              firstName: "Tommy",
              lastName: "Vietor",
              personurl: TommyVietor,
              hostshow: "Pod Save America"
            }
          ]
        },
        {
          show: "Pop Culture Happy Hour",
          showurl: PopCultureHappyHour,
          hosts: [
            {
              firstName: "Linda",
              lastName: "Holmes",
              personurl: LindaHolmes,
              hostshow: "Pop Culture Happy Hour"
            }
          ]
        },
        {
          show: "The Rachel Maddow Show",
          showurl: RachelMaddowShow,
          hosts: [
            {
              firstName: "Rachel",
              lastName: "Maddow",
              personurl: RachelMaddow,
              hostshow: "The Rachel Maddow Show"
            }
          ]
        },
        {
          show: "Radiolab Presents: More Perfect",
          showurl: RadiolabPresentsMorePerfect,
          hosts: [
            {
              firstName: "Jad",
              lastName: "Abumrad",
              personurl: JadAbumrad,
              hostshow: "Radiolab Presents: More Perfect"
            }
          ]
        },
        {
          show: "Revisionist History",
          showurl: RevisionistHistory,
          hosts: [
            {
              firstName: "Malcolm",
              lastName: "Gladwell",
              personurl: MalcolmGladwell,
              hostshow: "Revisionist History"
            }
          ]
        },
        {
          show: "S-Town",
          showurl: STown,
          hosts: [
            {
              firstName: "Brian",
              lastName: "Reed",
              personurl: BrianReed,
              hostshow: "S-Town"
            }
          ]
        },
        {
          show: "Savage Lovecast",
          showurl: SavageLovecast,
          hosts: [
            {
              firstName: "Dan",
              lastName: "Savage",
              personurl: DanSavage,
              hostshow: "Savage Lovecast"
            }
          ]
        },
        {
          show: "Sleep With Me",
          showurl: SleepWithMe,
          hosts: [
            {
              firstName: "Drew",
              lastName: "Ackerman",
              personurl: DrewAckerman,
              hostshow: "Sleep With Me"
            }
          ]
        },
        {
          show: "Snap Judgement",
          showurl: SnapJudgement,
          hosts: [
            {
              firstName: "Glynn",
              lastName: "Washington",
              personurl: GlynnWashington,
              hostshow: "Snap Judgement"
            }
          ]
        },
        {
          show: "Startalk Radio",
          showurl: StartalkRadio,
          hosts: [
            {
              firstName: "Neil",
              lastName: "Degrasse Tyson",
              personurl: NeilDegrasseTyson,
              hostshow: "Startalk Radio"
            }
          ]
        },
        {
          show: "Stuff You Missed In History Class",
          showurl: StuffYouMissedInHistoryClass,
          hosts: [
            {
              firstName: "Holly",
              lastName: "Frey",
              personurl: HollyFrey,
              hostshow: "Stuff You Missed In History Class"
            },
            {
              firstName: "Tracy",
              lastName: "V. Wilson",
              personurl: TracyVWilson,
              hostshow: "Stuff You Missed In History Class"
            }
          ]
        },
        {
          show: "Sword and Scale",
          showurl: SwordAndScale,
          hosts: [
            {
              firstName: "Mike",
              lastName: "Boudet",
              personurl: MikeBoudet,
              hostshow: "Sword and Scale"
            }
          ]
        },
        {
          show: "The Ben Shapiro Show",
          showurl: TheBenShapiroShow,
          hosts: [
            {
              firstName: "Ben",
              lastName: "Shapiro",
              personurl: BenShapiro,
              hostshow: "The Ben Shapiro Show"
            }
          ]
        },
        {
          show: "The Daily",
          showurl: TheDaily,
          hosts: [
            {
              firstName: "Michael",
              lastName: "Barbaro",
              personurl: MichaelBarbaro,
              hostshow: "The Daily"
            }
          ]
        },
        {
          show: "The Ezra Klein Show",
          showurl: TheEzraKleinShow,
          hosts: [
            {
              firstName: "Ezra",
              lastName: "Klein",
              personurl: EzraKlein,
              hostshow: "The Ezra Klein Show"
            }
          ]
        },
        {
          show: "The Last Podcast on the Left",
          showurl: TheLastPodcastOnTheLeft,
          hosts: [
            {
              firstName: "Ben",
              lastName: "Kissel",
              personurl: BenKissel,
              hostshow: "The Last Podcast on the Left"
            },
            {
              firstName: "Henry",
              lastName: "Zebrowski",
              personurl: HenryZebrowski,
              hostshow: "The Last Podcast on the Left"
            },
            {
              firstName: "Marcus",
              lastName: "Parks",
              personurl: MarcusParks,
              hostshow: "The Last Podcast on the Left"
            }
          ]
        },
        {
          show: "The Moth",
          showurl: TheMoth,
          hosts: [
            {
              firstName: "George",
              lastName: "Dawes",
              personurl: GeorgeDawes,
              hostshow: "The Moth"
            }
          ]
        },
        {
          show: "The Tim Ferriss Show",
          showurl: TheTimFerrissShow,
          hosts: [
            {
              firstName: "Tim",
              lastName: "Ferriss",
              personurl: TimFerriss,
              hostshow: "The Tim Ferriss Show"
            }
          ]
        },
        {
          show: "True Crime Garage",
          showurl: TrueCrimeGarage,
          hosts: [
            {
              firstName: "Captain",
              lastName: "",
              personurl: Captain,
              hostshow: "True Crime Garage"
            },
            {
              firstName: "Nic",
              lastName: "",
              personurl: Nic,
              hostshow: "True Crime Garage"
            }
          ]
        },
        {
          show: "Wait Wait Don't Tell Me",
          showurl: WaitWaitDontTellMe,
          hosts: [
            {
              firstName: "Peter",
              lastName: "Sagal",
              personurl: PeterSagal,
              hostshow: "Wait Wait Don't Tell Me"
            }
          ]
        },
        {
          show: "WTF with Marc Maron",
          showurl: WTFWithMarcMaron,
          hosts: [
            {
              firstName: "Marc",
              lastName: "Maron",
              personurl: MarcMaron,
              hostshow: "WTF with Marc Maron"
            }
          ]
        }
      ],
      contentToRender: [],
      typeAheadOptions: [],
      selected: [],
      duplicateHostIndices: []
    }
  }

  showByName() {
    const tempState = _.cloneDeep(this.state);
    tempState.showByName = true;
    tempState.showByShow = false;
    tempState.selected.length = 0;
    this.alphabetizeHostList(tempState);
  }

  showByShow() {
    const tempState = _.cloneDeep(this.state);
    tempState.showByName = false;
    tempState.showByShow = true;
    tempState.selected.length = 0;
    this.alphabetizeShowList(tempState);
  }

  handleChangeHelper(selected) {
    const tempState = _.cloneDeep(this.state);
    tempState.selected = selected;
    tempState.contentToRender = selected;
    if (tempState.selected.length > 0) {
      tempState.contentToRender = tempState.selected; // shows just a single show/host when form is selected
    }
    else {
      tempState.contentToRender = tempState.typeAheadOptions;  // shows all options when form is not selected
    }
    this.setState(tempState);
  }

  alphabetizeShowList(tempState) { // sorting state so that results are alphabetical
    tempState.resources.sort(function(a, b) {
      let nameA = a.show.toUpperCase(); // ignore upper and lowercase
      let nameB = b.show.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0; // names must be equa
    } );
    this.pushShowsToTypeAheadList(tempState);
  }

  pushShowsToTypeAheadList(tempState) {
    tempState.typeAheadOptions.length = 0;
    tempState.resources.forEach((resource, index) => {
        let resourceObject = Object.assign({}, resource);
        tempState.typeAheadOptions.push(resourceObject);
      });
    this.pullContentToRenderFromTypeAheadList(tempState);
  }

  pullContentToRenderFromTypeAheadList(tempState) {
    tempState.contentToRender = tempState.typeAheadOptions; // separates out content that renders from list that TypeAhead pulls from
    this.setState({typeAheadOptions: tempState.typeAheadOptions});
    this.setState({contentToRender: tempState.typeAheadOptions});
    this.setState({showByShow: tempState.showByShow});
    this.setState({showByName: tempState.showByName});
    this.setState({selected: tempState.selected});
  }

  alphabetizeHostList(tempState) { // sorting state so that results are alphabetical
    tempState.typeAheadOptions.length = 0;  // clear typeAhead options
    tempState.resources.forEach((resource, index) => {
      resource.hosts.forEach((host, index) => {
        tempState.typeAheadOptions.push(host);
        tempState.typeAheadOptions.sort(function(a, b) {  // sorting function
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
        });
      })
    })
    this.populateDuplicateHostIndices(tempState);
  }

  populateDuplicateHostIndices(tempState) { // removes duplicates by first and last name for instances like Guy Raz and Jad Abumrad
    let duplicateHostIndices = tempState.duplicateHostIndices;
    duplicateHostIndices.length = 0;
    let options = tempState.typeAheadOptions;
    let length = options.length;
    let i = 1;
    if (length > 1 && tempState.showByName === true) {
      for (i; i < length; i++) {  // iterates over the hosts and finds duplicates by first and last name
        if ((options[i - 1].firstName === options[i].firstName) && (options[i - 1].lastName === options[i].lastName)) {
          duplicateHostIndices.push(i);
        }
      }
    }
    this.removeDuplicateHosts(tempState, duplicateHostIndices);
  }

  removeDuplicateHosts(tempState, duplicateHostIndices) {
    if (duplicateHostIndices.length > 0) {
      duplicateHostIndices.sort().reverse();  // if we didn't sort and reverse, we would remove the 1st host and the index of the rest would be off and we would remove them
      duplicateHostIndices.forEach((element) => {
        tempState.typeAheadOptions[(element - 1)].hostshow = "Various Shows";
        tempState.typeAheadOptions.splice(element, 1);
      });
    }
    this.pullContentToRenderFromTypeAheadList(tempState);
  }

  componentWillMount(){
    if (this.state.showByShow === true) {
      this.showByShow();
    }
    else {
    }
  }

  render() {
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
        />
        <Footer />
      </div>
    );
  }
}

export default App;

/* TODO
-- check === betweeen tempstate after forEach push() just between the hostshow, not the whole object
-fix mobile view and the flex width
-fix multiples like Jad Abumrad and Guy Raz and "various shows" error
-Add ESLint
-Add Prettier
*/
