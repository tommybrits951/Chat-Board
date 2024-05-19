const {format} = require("date-fns")
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert(
    [
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Giraffe camelopardalis"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Taxidea taxus"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Cacatua tenuirostris"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Boa constrictor mexicana"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Capreolus capreolus"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Hymenolaimus malacorhynchus"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Tockus flavirostris"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Tachyglossus aculeatus"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Eolophus roseicapillus"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Corvus brachyrhynchos"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Lybius torquatus"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Scolopax minor"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Geochelone elephantopus"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Butorides striatus"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Choloepus hoffmani"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Merops nubicus"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Phoeniconaias minor"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ratufa indica"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Procyon lotor"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ciconia ciconia"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Geochelone elegans"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Cyrtodactylus louisiadensis"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Madoqua kirkii"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Carduelis pinus"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Trichoglossus haematodus moluccanus"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Equus burchelli"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Phasianus colchicus"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Rhabdomys pumilio"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "unavailable"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Felis concolor"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Phalacrocorax brasilianus"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ploceus intermedius"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ephippiorhynchus mycteria"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ictonyx striatus"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Vanellus chilensis"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Lorythaixoides concolor"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Aonyx capensis"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ctenophorus ornatus"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Chlidonias leucopterus"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Felis yagouaroundi"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Haematopus ater"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ephippiorhynchus mycteria"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Phoenicopterus chilensis"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Haliaetus leucogaster"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Felis caracal"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Isoodon obesulus"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Eutamias minimus"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Larus dominicanus"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Procyon cancrivorus"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Actophilornis africanus"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Tyto novaehollandiae"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Oryx gazella"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Geococcyx californianus"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Nasua narica"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "unavailable"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Petaurus breviceps"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Dasypus septemcincus"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Uraeginthus bengalus"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Pseudocheirus peregrinus"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ursus americanus"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Lamprotornis nitens"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Felis chaus"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Balearica pavonina"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Amblyrhynchus cristatus"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ursus arctos"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Acridotheres tristis"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Lamprotornis nitens"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Kobus defassa"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Odocoileus hemionus"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Zonotrichia capensis"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Nucifraga columbiana"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Felis concolor"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Macropus giganteus"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Priodontes maximus"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Spermophilus lateralis"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Streptopelia senegalensis"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Spermophilus parryii"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Vulpes cinereoargenteus"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Dicrostonyx groenlandicus"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Corallus hortulanus cooki"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Colaptes campestroides"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Dasyurus maculatus"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Felis yagouaroundi"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Tadorna tadorna"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Spizaetus coronatus"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Macropus agilis"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Antechinus flavipes"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Mazama americana"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Nesomimus trifasciatus"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Dicrostonyx groenlandicus"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Canis lupus baileyi"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Buteo galapagoensis"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Gerbillus sp."
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Dasyurus maculatus"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Pseudoleistes virescens"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Lamprotornis chalybaeus"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Bucephala clangula"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Macaca mulatta"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Varanus komodensis"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Chlamydosaurus kingii"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ninox superciliaris"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Neotoma sp."
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Larus dominicanus"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Thamnolaea cinnmomeiventris"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Chordeiles minor"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Canis lupus baileyi"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Vanellus sp."
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Camelus dromedarius"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Diomedea irrorata"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Acrantophis madagascariensis"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Sus scrofa"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ara ararauna"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Nyctanassa violacea"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Macropus rufogriseus"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Felis silvestris lybica"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Myrmecophaga tridactyla"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Graspus graspus"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Papio ursinus"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Bradypus tridactylus"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Colobus guerza"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Proteles cristatus"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Dicrostonyx groenlandicus"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Erethizon dorsatum"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Canis mesomelas"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Genetta genetta"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Catharacta skua"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Limnocorax flavirostra"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Hyaena hyaena"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Vanessa indica"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Sarcophilus harrisii"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Odocoileus hemionus"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Pitangus sulphuratus"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Phoenicopterus ruber"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Phalaropus lobatus"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Neophoca cinerea"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Suricata suricatta"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Perameles nasuta"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Dasyurus viverrinus"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Pavo cristatus"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Phylurus milli"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Dasyurus maculatus"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Bradypus tridactylus"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Mazama gouazoubira"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Haliaeetus leucoryphus"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Francolinus coqui"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Salvadora hexalepis"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Spermophilus armatus"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Pytilia melba"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Choloepus hoffmani"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Corvus albicollis"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Zalophus californicus"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ceryle rudis"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Psophia viridis"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Fregata magnificans"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Agelaius phoeniceus"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Tockus flavirostris"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Neotis denhami"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Dendrocitta vagabunda"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Tursiops truncatus"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Petaurus norfolcensis"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Anhinga rufa"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Vulpes chama"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ratufa indica"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Cynomys ludovicianus"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Macaca radiata"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Phalacrocorax albiventer"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "unavailable"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Columba palumbus"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Vanellus armatus"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Leprocaulinus vipera"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Antidorcas marsupialis"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Eudromia elegans"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Phalaropus lobatus"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Eudromia elegans"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Dicrostonyx groenlandicus"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Mycteria leucocephala"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Equus hemionus"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Columba palumbus"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Dendrocitta vagabunda"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Laniaurius atrococcineus"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Papio cynocephalus"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Pan troglodytes"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Merops nubicus"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Coendou prehensilis"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Lybius torquatus"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Tapirus terrestris"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Bos mutus"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Francolinus swainsonii"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ara chloroptera"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Phylurus milli"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Tachyglossus aculeatus"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Chauna torquata"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Bubo sp."
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Macropus rufus"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Capreolus capreolus"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Boa constrictor mexicana"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Rhabdomys pumilio"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Lama pacos"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Trachyphonus vaillantii"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Vanellus chilensis"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Macropus agilis"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Streptopelia decipiens"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Milvus migrans"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Spheniscus mendiculus"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Geochelone elephantopus"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Merops bullockoides"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Centrocercus urophasianus"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Nesomimus trifasciatus"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Cebus albifrons"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Castor canadensis"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Dicrurus adsimilis"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Uraeginthus angolensis"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Oncorhynchus nerka"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Cochlearius cochlearius"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Mirounga angustirostris"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Uraeginthus granatina"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Acridotheres tristis"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Terathopius ecaudatus"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Cordylus giganteus"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Bison bison"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Corvus albus"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Oxybelis sp."
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Neotis denhami"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Damaliscus lunatus"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Diceros bicornis"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Gazella thompsonii"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Canis lupus baileyi"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Tyto novaehollandiae"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Hymenolaimus malacorhynchus"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ursus maritimus"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Otocyon megalotis"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Coluber constrictor"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ceratotherium simum"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Coendou prehensilis"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Mirounga leonina"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Acrobates pygmaeus"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Pteronura brasiliensis"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Nectarinia chalybea"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Dasypus novemcinctus"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "unavailable"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Podargus strigoides"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Paradoxurus hermaphroditus"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Gyps bengalensis"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Macropus robustus"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Hystrix indica"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Threskionis aethiopicus"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Alligator mississippiensis"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Chlamydosaurus kingii"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Toxostoma curvirostre"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Creagrus furcatus"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Cygnus atratus"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Phalacrocorax carbo"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Carphophis sp."
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Francolinus coqui"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Choloepus hoffmani"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Lutra canadensis"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Merops nubicus"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Cacatua galerita"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Isoodon obesulus"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Felis libyca"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Branta canadensis"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Manouria emys"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Alces alces"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Francolinus leucoscepus"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Graspus graspus"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Spermophilus lateralis"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Stercorarius longicausus"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Plectopterus gambensis"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Tachybaptus ruficollis"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Meles meles"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Graspus graspus"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Sylvilagus floridanus"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ninox superciliaris"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Naja haje"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Vulpes chama"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ninox superciliaris"
      },
      {
        user_id: 1,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Pteronura brasiliensis"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Propithecus verreauxi"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Bugeranus caruncalatus"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Felis wiedi or Leopardus weidi"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Platalea leucordia"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ctenophorus ornatus"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Merops bullockoides"
      },
      {
        user_id: 3,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Gekko gecko"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Bos mutus"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Dicrurus adsimilis"
      },
      {
        user_id: 3,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Porphyrio porphyrio"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Carduelis pinus"
      },
      {
        user_id: 2,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Bubalus arnee"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Haematopus ater"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Streptopelia senegalensis"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Genetta genetta"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Geochelone elegans"
      },
      {
        user_id: 3,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Ratufa indica"
      },
      {
        user_id: 2,
        room_id: 1,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Gyps bengalensis"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Paroaria gularis"
      },
      {
        user_id: 2,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Hyaena hyaena"
      },
      {
        user_id: 1,
        room_id: 3,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Tringa glareola"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Buteo jamaicensis"
      },
      {
        user_id: 1,
        room_id: 2,
        date_posted: format(new Date(), "MM/dd/yyyy HH:mm:ss"),
        content: "Aepyceros mylampus"
      }
    ]    
  );
};
