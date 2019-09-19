const destinations = [
  {
    name: "Lil Frankies",
    borough: "Manhattan",
    address: "19 1st Avenue",
    website: "https://www.lilfrankies.com/",
    description: "Casual Italian - great atmosphere and food, don't miss the truffle pizza.",
    latitude: 40.7236056,
    longitude: -73.9906031,
    image_url: "https://sfo2.digitaloceanspaces.com/couchsessions-api/2019/06/3726010511_07c823fd60-449x337.jpg",
    type: "bites"
  },
  {
    name: "Death & Co",
    borough: "Manhattan",
    address: "433 East 6th Street",
    website: "https://www.deathandcompany.com/location/death-and-company-new-york/",
    description: "Speakeasy that opened when speakeasys were cool - still serves one of the best martinis in the city.",
    latitude: 40.72592,
    longitude: -73.9868392,
    image_url: "https://d37219swed47g7.cloudfront.net/media/reviews/death-co/banners/Death-Co_0.jpg",
    type: "bites"
  },
  {
    name: "The Grill",
    borough: "Manhattan",
    address: "99 East 52nd Street",
    website: "https://thegrillnewyork.com/",
    description: "Upscale dining - the pasta a la presse is la best.",
    latitude: 40.7583177,
    longitude: -73.9740621,
    image_url: "https://lh3.googleusercontent.com/-wSdVqdHaPgyDu-ZCIIfA_HJFLRnyaB1k-mCdiuHRm8vhepFo8RNUdxVhTrtxUKtroNQc-aG_EkN0ufpuVF5ArjbxrDS5Q=s1600-e7-v1-rj",
    type: "bites"
  },
  {
    name: "Corner Bistro",
    borough: "Manhattan",
    address: "331 West 4th Street",
    website: "https://cornerbistrony.com/",
    description: "Old school bar that serves local beer McSorleys and one of the cheapest (good) burgers around.",
    latitude: 40.7379852,
    longitude: -74.0059257,
    image_url: "https://pixel.nymag.com/imgs/listings/restaurants/corner-bistro/corner-bistro-01.w600.h315.2x.jpg",
    type: "bites"
  },
  {
    name: "Minca",
    borough: "Manhattan",
    address: "536 East 5th Street",
    website: "http://newyorkramen.com/minca/",
    description: "Super casual, delicious ramen.",
    latitude: 40.723998,
    longitude: -73.9851431,
    image_url: "https://assets3.thrillist.com/v1/image/1675480/size/tmg-article_default_mobile.jpg",
    type: "bites"
  },
  {
    name : "Westlight",
    borough : "Brooklyn",
    website : "http://westlightnyc.com/",
    description : "A cool Brooklyn rooftop bar with an amazing view of Manhattan",
    image_url : "https://s3-media1.fl.yelpcdn.com/bphoto/XfAAMFcrxrQkmBV_0BgmYw/l.jpg",
    address : "111 N. 12TH ST, BROOKLYN, NY 11249 22ND FLOOR",
    latitude : 40.724270,
    longitude : -73.957610,
    type: "bites"
  },
  {
    name : "Peter Luger Steak House",
    borough : "Brooklyn",
    website : "https://peterluger.com/",
    image_url : "http://www.johnnyprimesteaks.com/wp-content/uploads/2017/03/DSC03997-672x372.jpg",
    description : "Cash only steak icon where old-school waiters serve aged beef in a German beer hall setting.",
    address : "178 Broadway, Brooklyn, NY 11211",
    latitude : 40.709751,
    longitude : -73.962593,
    type: "bites"
  },
  {
    name : "Raku",
    borough : "Manhattan",
    website : "http://rakunyc.com/",
    image_url : "https://scontent-iad3-1.cdninstagram.com/vp/2b5008e236f983664ccf7d41b76851ec/5DF6DC25/t51.2885-15/sh0.08/e35/s640x640/69688739_129760638347815_3223837686279502445_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=107",
    description : "Udon specialist offering gourmet noodle soups & other traditional Japanese bites.",
    address : "48 Macdougal St, New York, NY 10012",
    latitude : 40.727240,
    longitude : -74.002520,
    type: "bites"
  },
  {
    name : "Sushi Zo",
    borough : "Manhattan",
    website : 'http://sushizo.us/',
    image_url : "https://www.brendanhburns.com/wp-content/uploads/2016/07/DSC01107-600x709.jpg",
    description : "Arguably, the best omakase in the city.",
    address : "88 W 3rd St New York, NY 10012",
    latitude : 40.729780,
    longitude : -73.999250,
    type: "bites"
  },
  {
    name : "Attaboy",
    borough : "Manhattan",
    website : 'http://attaboy.us/',
    image_url : "https://pixel.nymag.com/imgs/listings/restaurants/attaboy/attaboy-01.w1200.h630.jpg",
    description : "A cool speakeasy style bar hidden in the lower east side.",
    address : "134 Eldridge St., New York, NY, 10002",
    latitude : 40.718860,
    longitude : -73.991330,
    type: "bites"
  },
   {
    name: "Tony's di Napoli",
    borough: "Manhattan",
    address: "147 W 43rd St, New York, NY 10036",
    website: "https://www.tonysnyc.com/",
    description: "Family Style Italian",
    latitude: 40.756512,
    longitude: -73.985382,
    image_url: "https://resizer.otstatic.com/v2/photos/huge/25774496.jpg",
    type: "bites"
  },
  {
    name: "BlueBird London",
    borough: "Manhattan",
    address: "10 Columbus Cir, New York, NY 10019",
    website: "https://www.bluebirdlondon.nyc/",
    description: "Fine British Cuisine and a great view of Central Park",
    latitude: 40.768429,
    longitude: -73.983070,
    image_url: "https://media-cdn.tripadvisor.com/media/photo-s/11/54/22/dd/restaurant.jpg",
    type: "bites"
  },
  {
    name: "Peking Duck House",
    borough: "Manhattan",
    address: "28 Mott St # A, New York, NY 10013",
    website: "https://www.pekingduckhousenyc.com/",
    description: "Excellent traditional Chinese restaurant specializing in Peking Duck",
    latitude: 40.714650,
    longitude: -73.998540,
    image_url: "https://media-cdn.tripadvisor.com/media/photo-s/07/d7/d2/b2/peking-duck-house.jpg",
    type: "bites"
  },
  {
    name: "Wo Hop",
    borough: "Manhattan",
    address: "17 Mott St, New York, NY 10013",
    website: "http://www.wohopchinese.com/",
    description: "24 hr Chinese Food, for a more local experience, go to the downstairs dining room",
    latitude: 40.714260,
    longitude: -73.999008,
    image_url: "https://i.pinimg.com/originals/45/53/0d/45530de7200eab8fa1e19643a331320b.png",
    type: "bites"
  },
  {
    name: "Down the Hatch",
    borough: "Manhattan",
    address: "179 W 4th St New York, NY 10014",
    website: "http://www.nycbestbar.com/downthehatch/",
    description: "Cool basement bar, with fun games",
    latitude: 40.732470,
    longitude: -74.001570,
    image_url: "https://media.timeout.com/images/103161186/630/472/image.jpg",
    type: "bites"
  },
  {
    name : "Greenwood Cemetery",
    borough: "Brooklyn",
    address: "500 25th Street",
    website: "https://www.green-wood.com/",
    description: "One of the oldest cemetaries in the 5 boroughs, beautiful and quiet.",
    latitude: 40.6580779,
    longitude: -73.9970434,
    image_url: "https://irishamerica.com/wp-content/uploads/2013/01/Green-Wood_Cemetery-Lake.jpg",
    type: "sites"
  },
  {
    name: "Coney Island",
    borough: "Brooklyn",
    address: "1208 Surf Avenue",
    website: "https://www.coneyisland.com/about-coney-island-usa",
    description: "Ride the cyclone and grab a hot dog from Nathan's (attractions are seasonal).",
    latitude: 40.5753293,
    longitude: -73.9819771,
    image_url: "https://assets3.thrillist.com/v1/image/2828293/size/gn-gift_guide_variable_c.jpg",
    type: "sites"
  },
  {
    name: "Rubin Museum of Art",
    borough: "Manhattan",
    address: "150 West 17th Street",
    website: "https://rubinmuseum.org/",
    description: "Unique exhibitions centered on Himalayan art.",
    latitude: 40.7401773,
    longitude: -74.0000082,
    image_url: "https://coleav.com/wp-content/uploads/2016/08/Rubin-museum-Exterior-NYC.jpg",
    type: "sites"
  },
  {
    name: "The Met Cloisters",
    borough: "Manhattan",
    address: "99 Margaret Corbin Drive, Fort Tryon Park",
    website: "https://www.metmuseum.org/visit/plan-your-visit/met-cloisters",
    description: "Beautiful offshoot of The Met, make sure to check out the park for great views of the Hudson river.",
    latitude: 40.8648628,
    longitude: -73.9339215,
    image_url: "https://secretnyc.co/wp-content/uploads/2019/02/cloisters.jpg",
    type: "sites"
  },
  {
    name: "Blue Note Jazz Club",
    borough: "Manhattan",
    address: "131 West 3rd Street",
    website: "http://www.bluenotejazz.com/newyork/index.shtml",
    description: "Old school jazz club that still hosts some of the greatest old and current musicians.",
    latitude: 40.7309083,
    longitude: -74.0028498,
    image_url: "https://i.pinimg.com/originals/e7/c9/b9/e7c9b935700d409a2999a587b44e28d9.jpg",
    type: "sites"
  },
  {
    name:"Washington Square Park",
    borough:"Manhattan",
    website: "https://washingtonsquareparkconservancy.org/visit-us/",
    description:"A well-known and iconic park in lower Manhattan",
    image_url: "https://imgs.6sqft.com/wp-content/uploads/2018/08/01103439/WashingtonSquarePark.png",
    address:"Washington Square Park is the heart of Greenwich Village – located at the base of Fifth Avenue between MacDougal Street and University Place.",
    latitude: 40.730900,
    longitude: -73.996460,
    type: "sites"
  },
  {
    name:"DUMBO",
    borough:"Brooklyn",
    website: "https://www.tripsavvy.com/dumbo-vistors-guide-441920",
    description:"DUMBO short for Down Under the Manhattan Bridge Overpass) is a neighborhood in the New York City borough of Brooklyn.",
    image_url: "https://www.tripsavvy.com/thmb/vi7NUtol2xXJzCuPKReP_YWwBfA=/350x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-540763429-58fb923c5f9b581d59426e03.jpg",
    address:"New York, NY 11201",
    latitude: 40.692990,
    longitude: -73.990770,
    type: "sites"
  },
  {
    name:"The High Line",
    borough:"Manhattan",
    website: "https://www.thehighline.org/",
    description:"The High Line is a 1.45-mile-long elevated linear park, greenway and rail trail created on a former New York Central Railroad spur.",
    image_url: "https://media.timeout.com/images/102540127/630/472/image.jpg",
    address:"New York, NY 10011",
    latitude: 40.748690,
    longitude: -74.007690,
    type: "sites"
  },
  {
    name:"The Vessel",
    borough:"Manhattan",
    website: "https://www.hudsonyardsnewyork.com/discover/vessel",
    description:"The Vessel is the extraordinary centerpiece of Hudson Yards is its spiral staircase, a soaring new landmark meant to be climbed.",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Hudson_Yards_Plaza_March_2019_53.jpg",
    address:"The Shops and Restaurants at Hudson Yards, New York, NY 10001",
    latitude: 40.753685,
    longitude: -73.999161,
    type: "sites"
  },
  {
    name:"St. Marks Place",
    borough:"Manhattan",
    website: "https://www.nycgo.com/attractions/st-marks-place",
    description:"Eighth Street in Manhattan between Third Avenue and Avenue A is known as St. Mark's Place—arguably the East Village’s most notable street and a place bursting with culture via its retail shops, street vendors, restaurants and nightlife.",
    image_url: "https://lonelyplanetimages.imgix.net/a/g/hi/t/c10eee92e54bace825b28b641d7d5651-st-marks-place.jpg?fit=crop&w=600&h=260, https://lonelyplanetimages.imgix.net/a/g/hi/t/c10eee92e54bace825b28b641d7d5651-st-marks-place.jpg?fit=crop&w=1200&h=520 2x",
    address:"8th Street from Ave A to Third Ave, East Village, New York, NY 10011, 10003, 10009",
    latitude: 40.728590,
    longitude: -73.987650,
    type: "sites"
  },
  {
    name:"Empire State Building",
    borough:"Manhattan",
    website: "https://www.esbnyc.com/",
    description:"Eighth Street in Manhattan between Third Avenue and Avenue A is known as St. Mark's Place—arguably the East Village’s most notable street and a place bursting with culture via its retail shops, street vendors, restaurants and nightlife.",
    image_url: "https://aws-tiqets-cdn.imgix.net/images/content/cca6a94da73f40bf8e83012b21fd4226.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=70&s=e4570998813b2c0a5dfec3b178cd3d45&w=800&h=800&dpr=2",
    address:"20 W 34th St, New York, NY 10001",
    latitude: 40.754910,
    longitude: -73.994100,
    type: "sites"
  },
  {
    name: "Brooklyn Bridge",
    borough: "Brooklyn/Manhattan",
    address: "Brooklyn Bridge, New York, NY 10038",
    website: "	https://en.wikipedia.org/wiki/Brooklyn_Bridge",
    description: "Beautiful views of lower Manhattan, and iconic photo ops",
    latitude: 40.7061,
    longitude: -73.9969,
    image_url: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Brooklyn_Bridge_Postdlf.jpg",
    type: "sites"
  },
  {
    name: "Freedom Tower",
    borough: "Manhattan",
    address: "285 Fulton St, New York, NY 10007",
    website: "https://oneworldobservatory.com/",
    description: "Great experience and views from one of the tallest building in Manhattan",
    latitude: 40.7127,
    longitude: -74.0134,
    image_url: "https://imagez.tmz.com/image/4b/o/2017/06/14/4b90f50f43f55a1c8356359673af4b2d_md.jpg",
    type: "sites"
  },
  {
    name: "Rockefeller Center",
    borough: "Manhattan",
    address: "45 Rockefeller Plaza, New York, NY 10111",
    website: "https://www.rockefellercenter.com",
    description: "Iconic NYC locale, with great sights restaurants and shops, dont miss the view from the Top of the Rock",
    latitude: 40.7587,
    longitude: -73.9787,
    image_url: "https://cdn.getyourguide.com/img/tour_img-1907147-146.jpg",
    type: "sites"
  },
  {
    name: "Central Park Zoo",
    borough: "Manhattan",
    address: "East 64th Street, New York, NY 10021",
    website: "https://centralparkzoo.com/",
    description: "Great walk through while in Central Park, fun for visitors of all ages",
    latitude: 40.7678,
    longitude: -73.9718,
    image_url: "http://assets.centralparknyc.org/images/things-to-see-and-do/zoo-l.jpg",
    type: "sites"
  },
  {
    name: "Times Square",
    borough: "Manhattan",
    address: "Manhattan, NY 10036",
    website: "https://www.timessquarenyc.org/",
    description: "Make sure to check it out during the day, and the night for completely different experiences",
    latitude:40.7590,
    longitude: -73.9845,
    image_url: "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
    type: "sites"
  },
  {
    name: "I Sodi",
    borough: "Manhattan",
    address: "105 Christopher Street",
    website: "http://www.isodinyc.com/",
    description: "Tuscan-style fare, wines & cocktails lie in store at this compact, romantic restaurant.",
    latitude: 40.7334635,
    longitude: -74.0072112,
    image_url: "https://images.squarespace-cdn.com/content/v1/56e9548fab48de7b7fc48949/1494444977882-ATI62C1HJC201Z51I3QK/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/SL+cacio+e+pepe+.jpg",
    type: "bites"
  },
  {
    name: "Socarrat Paella Bar",
    borough: "Manhattan",
    address: "259 West 19th Street",
    website: "https://socarratnyc.com/",
    description: "Stylish, brick-walled Spanish eatery specializing in paella, with tapas & paired beverages.",
    latitude: 40739885,
    longitude: -73983987,
    image_url: "https://socarratnyc.com/wp-content/uploads/2019/07/Socarrat-NYC-Paella.jpeg",
    type: "bites"
  },
  {
    name: "Calexico",
    borough: "Brooklyn",
    address: "278 5th Avenue",
    website: "https://www.calexico.com/",
    description: "Mexican eatery plating tacos, burritos & more in an upbeat space with exposed rafters & brick walls.",
    latitude: 40.674046,
    longitude: -73.97840094031568,
    image_url: "https://images.getbento.com/accounts/7f97f4513242cadcff9bdb1d2545ed6e/media/images/7922Calexico_Upper_East_Side.jpg?w=1800&fit=max&auto=compress,format&h=1800",
    type: "bites"
  },
  {
    name: "Flushing Meadows-Corona Park",
    borough: "Queens",
    address: "Queens, NY",
    website: "https://www.nycgovparks.org/parks/flushing-meadows-corona-park",
    description: "Great park to walk or bike around and enjoy the sites and sounds",
    latitude: 40.7397,
    longitude: -73.8408°,
    image_url: "https://www.nycgo.com/images/venues/1169/flushingmeadowscoronapark_kateglicksberg__x_large.jpg",
    type: "sites"
  },
  {
    name: "The Guggenheim Museum",
    borough: "Manhattan",
    address: "1071 5th Ave, New York, NY 10128",
    website: "https://www.guggenheim.org",
    description: "Modern art museum in a beautifully designed Frank Lloyd Wright building",
    latitude: ,
    longitude: ,
    image_url: "https://citydadsgroup.com/nyc/wp-content/uploads/sites/2/2019/07/Guggenheim-museum-750x497.jpg",
    type: "sites"
  },
];

module.exports = destinations;
