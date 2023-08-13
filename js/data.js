const hiddenGems = [
    {
      name: 'Elora',
      blurb: 'Scenic town with 19th-century charm and stunning gorge views.',
      description: 'Explore the picturesque town of Elora, perched on a gorge offering stunning Grand River views. Walk along Mill and Metcalfe Streets to admire beautifully preserved 19th century limestone buildings transformed into galleries, restaurants, and shops. Enjoy a stay at the restored Elora Mill Hotel & Spa for breathtaking river views. Indulge in French-inspired cuisine at The Evelyn or great beer at Elora Brewing Company. Hike through Elora Gorge Conservation Area and visit nearby Fergus for a complete experience.',
      history: 'Elora, situated in Ontario, Canada, is renowned for its 19th-century limestone architecture and the significant Elora Gorge. Originally an independent town, it became part of the Township of Centre Wellington in 1999 through amalgamation. Today, Eloras charm, gorge, and historical significance draw visitors from far and wide.',
      image: 'media/Elora.png',

      directions: {
        walking: "Start at Toronto's outskirts, follow the Bruce Trail through rural landscapes, forests, and rivers. Trek 150 km over 6 days, camping along the way. Proper gear, maps, and camping reservations are essential.",
        driving: "Drive 130 km via ON-401 W and ON-6 N in about 1.5 hours. Smoothest route is through major highways, passing towns like Guelph.",
        transit: "Take GO Transit from Toronto to Guelph, then transfer to local buses to reach Elora. Around 3 hours travel time. Check schedules beforehand.",
      },
      visit: [
        {
          title:'Scenic River Walk',
          description: 'Take a leisurely stroll along the picturesque river.',
        },
        {
          title: 'Historic Gorge Bridge',
          description: 'Visit the historic bridge that spans the gorge.',
        },
        {
          title: 'Quaint Shops and Cafes',
          description: 'Explore charming local shops and enjoy coffee at cozy cafes.',
        },
        {
          title: 'Elora Mill',
          description: 'Visit the iconic Elora Mill and enjoy stunning views.',
        },
        {
          title: 'Elora Quarry',
          description: 'Relax by the quarry and enjoy the natural beauty.',
        },
      ],
  
      
      
      reviews: [
        { name: 'User123', date: '2022-03-14', rating: 4, comment: 'Enjoyed the experience and friendly locals.' },
        { name: 'Traveler42', date: '2017-09-21', rating: 2, comment: 'Wasn\'t impressed with the service or facilities.' },
        { name: 'NatureLover', date: '2021-06-08', rating: 5, comment: 'Beautiful natural setting and peaceful atmosphere.' },
        { name: 'Explorer22', date: '2016-11-02', rating: 3, comment: 'Average experience, nothing exceptional.' },
        { name: 'Adventurer88', date: '2019-07-15', rating: 5, comment: 'Had a wonderful time exploring the area!' },
      ],
    },

    {
      name: 'Goderich',
      blurb: "Ontario's Picturesque Coastal Gem.",
      description: "Nestled on the shores of Lake Huron, Goderich invites you with its idyllic charm, sun-kissed beaches, and historic architecture. Stroll along its stunning boardwalk, enjoy local boutiques, and savor fresh lakefront dining. Experience the perfect blend of natural beauty and small-town warmth that Goderich offers, making it an irresistible destination for travelers seeking relaxation and exploration.",
      history: "Established in 1827, Goderich boasts a rich history as one of Canada's oldest towns. Designed in a radial pattern reminiscent of London, England, its unique layout centers around a picturesque town square. Over the years, it has thrived as a bustling port, evolving into a cultural hub known for its heritage buildings, vibrant community, and captivating tales of shipwrecks that echo its maritime past.",
      image: 'media/Goderich.png',
  
      directions: {
        walking: 'Hike through rural landscapes via various trails and roads for about 220 km, taking approximately 5 days with camping stops.',
        driving: 'Drive 220 km via ON-401 W and ON-21 N in around 2.5 hours, journeying through scenic highways and countryside.',
        transit: 'Take a combination of buses and trains from Toronto, reaching Goderich in approximately 5 hours. Check schedules in advance.',
      },
      visit: [
        {
          title: 'Courthouse Square',
          description: 'Historic heart of the town, surrounded by Victorian architecture.',
        },
        {
          title: 'Goderich Beach',
          description: "Relax on sandy shores and enjoy Lake Huron's beauty.",
        },
        {
          title: 'Marine Museum',
          description: 'Explore maritime history through exhibits and artifacts.',
        },
        {
          title: 'Huron Historic Gaol',
          description: 'Discover a preserved 19th-century prison with guided tours.',
        },
        {
          title: 'Celtic Roots Gardens',
          description: 'Experience lush gardens and cultural events in a serene setting.',
        },
      ],
      reviews: [
        { name: 'ArtEnthusiast', date: '2018-05-30', rating: 4, comment: 'Loved the local art scene and unique galleries.' },
        { name: 'FoodieTraveler', date: '2020-10-17', rating: 5, comment: 'Delicious dining options with great variety.' },
        { name: 'OutdoorExplorer', date: '2019-08-12', rating: 5, comment: 'Breathtaking views and fantastic hiking trails.' },
        { name: 'LocalHistoryBuff', date: '2016-02-25', rating: 4, comment: 'Fascinating historical sites and knowledgeable guides.' },
        { name: 'WineLover22', date: '2021-11-09', rating: 5, comment: 'Unforgettable wine tasting experiences and friendly staff.' },
       
      ],
    },
  
    {
      name: 'Stratford',
      blurb: "Where Arts, Culture, and Charm Converge.",
      description: "Nestled along the serene Avon River, Stratford beckons with its enchanting blend of world-renowned theater, charming boutiques, and lush parklands. Immerse yourself in the vibrant arts scene, relish culinary delights, and explore historic streets lined with Victorian architecture. With its picturesque beauty and cultural offerings, Stratford is an inviting destination for those seeking a captivating escape.",
      history: "Founded in 1832, Stratford's name pays homage to Shakespeare's birthplace. The town's early growth was driven by timber and railroad industries, evolving into a cultural haven known for its annual Stratford Festival, one of North America's most celebrated theater events. Today, it boasts a harmonious marriage of heritage and modernity, captivating visitors with its artistic legacy and charming ambiance.",
      image: 'media/stratford.png',

      directions: {
        walking: 'Hike around 150 km through scenic routes, taking 4-5 days with camping stays.',
        driving: 'Drive about 150 km via ON-401 W in around 2 hours through picturesque countryside.',
        transit: 'Take a combination of trains and buses, reaching Stratford in approximately 3.5 hours. Check schedules in advance.',
      },
      visit: [
        {
          title: 'Stratford Festival',
          description: 'Experience world-class theater productions in various genres.',
        },
        {
          title: 'Avon River',
          description: 'Stroll along its banks and enjoy boat rides with scenic views.',
        },
        {
          title: 'Shakespearean Gardens',
          description: 'Admire themed gardens featuring plants from Shakespeare\'s works.',
        },
        {
          title: 'Quaint Boutiques',
          description: 'Explore unique shops offering local art, crafts, and antiques.',
        },
        {
          title: 'Tom Patterson Island',
          description: 'Relax in this serene parkland with walking trails and picnicking spots.',
        },
      ],
      reviews: [
        { name: 'AdventureSeeker', date: '2018-07-19', rating: 3, comment: 'Some activities were fun, but others were lacking.' },
        { name: 'NaturePhotographer', date: '2017-04-03', rating: 5, comment: 'Captured incredible nature shots during my visit.' },
        { name: 'CulturalExplorer', date: '2016-09-05', rating: 4, comment: 'Engaged with local culture and vibrant festivals.' },
        { name: 'SereneRetreat', date: '2019-12-29', rating: 4, comment: 'A peaceful escape with plenty of relaxation.' },
        { name: 'AdventureHiker', date: '2020-08-28', rating: 3, comment: 'Great trails, but signage could be improved.' },
  
      ],
    },
    {
      name: 'Port Hope',
      blurb: "Coastal Charm and Rich Heritage Await.",
      description: "Nestled on the shores of Lake Ontario, Port Hope invites you with its captivating blend of historic architecture, artistic flair, and scenic waterfront. Explore its vibrant downtown lined with boutiques, galleries, and eateries. Delve into the town's cultural events and festivals while enjoying the tranquil beauty of its lakeside setting, making Port Hope an ideal getaway for those seeking a harmonious mix of culture and relaxation.",
      history: "Established in 1793, Port Hope's history is rooted in its role as a bustling port and later as a prominent railway town. The town's well-preserved heritage is evident in its architecture, featuring grand Victorian homes and charming storefronts. Port Hope's historic past is interwoven with its present, creating an authentic and welcoming atmosphere that beckons visitors to explore its cobblestone streets and immerse themselves in its captivating story.",
      image: 'media/porthope.png',

      directions: {
        walking: 'Hike approximately 100 km through scenic routes over 3-4 days with camping stops.',
        driving: 'Drive around 110 km via ON-401 E and ON-28 N in about 1.5 hours, passing through picturesque landscapes.',
        transit: 'Take a combination of train and bus routes, reaching Port Hope in around 2.5 hours. Check schedules in advance.',
      },
      visit: [
        {
          title: 'Ganaraska River',
          description: 'Enjoy scenic walks along this serene riverbank.',
        },
        {
          title: 'Capitol Theatre',
          description: 'Experience cultural performances and events in a historic venue.',
        },
        {
          title: 'Port Hope Heritage District',
          description: 'Explore cobblestone streets lined with well-preserved architecture.',
        },
        {
          title: 'Art Galleries',
          description: 'Discover local artistry in various galleries and studios.',
        },
        {
          title: 'Port Hope Marina',
          description: 'Relax by the waterfront, watch boats, and enjoy lake views.',
        },
      ],
      reviews: [
        { name: 'HistoryEnthusiast', date: '2015-07-07', rating: 5, comment: 'Learned so much about the town\'s history!' },
        { name: 'FoodieTraveler2', date: '2018-10-06', rating: 5, comment: 'Culinary delights around every corner.' },
        { name: 'CampingFanatic', date: '2019-06-18', rating: 4, comment: 'Enjoyed camping under the stars and clear skies.' },
        { name: 'LocalArtLover', date: '2021-03-22', rating: 4, comment: 'Discovered impressive local artists and their works.' },
        { name: 'RelaxationSeeker', date: '2017-11-14', rating: 5, comment: 'Relaxed by the water and enjoyed the serenity.' },
  
      ],
    },
    {
      name: 'Cobourg',
      blurb: 'Serene Shores and Historic Elegance Await.',
      description: "Nestled on the shores of Lake Ontario, Cobourg exudes timeless charm with its pristine beaches, historic architecture, and welcoming atmosphere. Immerse yourself in the town's vibrant arts and culture scene, explore local boutiques, and indulge in lakeside dining. Whether strolling along the picturesque waterfront or discovering the town's rich heritage, Cobourg offers a captivating escape for those seeking relaxation and cultural enrichment.",
      history: "Dating back to the late 18th century, Cobourg has evolved from a bustling port to a thriving community known for its Victorian-era architecture and scenic beauty. As a key stop on the Grand Trunk Railway, it attracted visitors seeking a retreat by the lake. Today, Cobourg preserves its historic charm while offering modern amenities and a range of cultural events, making it a cherished destination for both residents and visitors.",
      image: 'media/cobourg.png', // Replace with the actual image path
  
      directions: {
        walking: 'Hike around 115 km using various routes, taking about 3 days with camping stops.',
        driving: 'Drive approximately 115 km via ON-401 E in about 1.5 hours, enjoying scenic landscapes.',
        transit: 'Take a combination of train and bus routes, reaching Cobourg in around 2 hours. Check schedules ahead of time.',
      },
      visit: [
        {
          title: 'Cobourg Beach',
          description: 'Relax on the sandy shores of Lake Ontario.',
        },
        {
          title: 'Victoria Hall',
          description: 'Explore this historic cultural venue and its exhibitions.',
        },
        {
          title: 'Marie Dressler House',
          description: 'Visit the birthplace of the legendary actress.',
        },
        {
          title: 'Downtown Heritage District',
          description: 'Wander through streets lined with charming architecture.',
        },
        {
          title: 'Cobourg Marina',
          description: 'Enjoy lake views, boats, and waterfront activities.',
        },
      ],
      reviews: [
        { name: 'AdventurousSoul', date: '2018-12-03', rating: 3, comment: 'Expected more adventure options, but still had fun.' },
        { name: 'ExplorationFan', date: '2020-09-28', rating: 5, comment: 'Explored hidden gems and found pure beauty.' },
        { name: 'CulturalEnthusiast', date: '2016-05-09', rating: 4, comment: 'Immersed myself in the vibrant local culture.' },
        { name: 'NatureLover2', date: '2021-10-01', rating: 5, comment: 'A paradise for nature enthusiasts, loved it!' },
        { name: 'WineConnoisseur', date: '2019-04-16', rating: 5, comment: 'Savored the finest wines and enjoyed the views.' },      
      ],
    },
    {
      name: 'Creemore',
      blurb: 'Quaint Charms, Crafted Delights, Timeless Treasures.',
      description: "Nestled in the heart of Ontario's countryside, Creemore offers an enchanting escape characterized by its quaint streets, artisanal shops, and welcoming community. Immerse yourself in the town's artistic spirit, indulge in local culinary creations, and enjoy the serenity of its surroundings. Whether exploring the vibrant arts scene or savoring small-town charm, Creemore invites you to experience an idyllic getaway that blends culture and relaxation.",
      history: "Founded in 1842, Creemore's history traces back to its origins as a milling town. Over the years, its vibrant downtown has evolved into a haven for artists, artisans, and independent businesses. The town's heritage is preserved in its historic architecture, charming storefronts, and strong sense of community. With its picturesque landscapes and creative energy, Creemore has become a destination cherished by residents and visitors alike.",
      image: 'media/creemore.png',
  
      directions: {
        walking: 'Hike around 140 km using various routes, requiring about 3-4 days with camping stops.',
        driving: 'Drive approximately 130 km via ON-400 N in about 1.5 hours, passing through scenic countryside.',
        transit: 'Take a combination of bus and train routes, reaching Creemore in around 3 hours. Plan ahead and check schedules.',
      },
      visit: [
        {
          title: 'Creemore Springs Brewery',
          description: 'Tour the brewery and enjoy craft beer tastings.',
        },
        {
          title: 'Downtown Creemore',
          description: 'Explore unique boutiques, galleries, and local eateries.',
        },
        {
          title: 'Station on the Green',
          description: 'Historic community center hosting events and markets.',
        },
        {
          title: 'Mad River',
          description: 'Relax by the serene waters of the Mad River.',
        },
        {
          title: 'Creemore Farmers\' Market',
          description: 'Experience local produce, crafts, and artisanal goods.',
        },
      ],
      reviews: [
        { name: 'PhotographyEnthusiast', date: '2017-12-11', rating: 4, comment: 'Picture-perfect moments around every corner.' },
        { name: 'HistoricalExplorer', date: '2018-11-23', rating: 5, comment: 'Dived into the town\'s history and felt connected.' },
        { name: 'CulinaryAdventurer', date: '2016-06-20', rating: 5, comment: 'A culinary journey with delightful surprises.' },
        { name: 'OutdoorsyTraveler', date: '2019-05-10', rating: 4, comment: 'Explored breathtaking trails and found hidden spots.' },
        { name: 'ArtAppreciator', date: '2020-07-14', rating: 4, comment: 'Admired local artistry that tells unique stories.' },
      
      ],
    },

    {
      name: 'Cambridge',
      blurb: 'Rivers Converge, Culture Flourishes, History Lives.',
      description: "Cambridge, known as Galt, captivates visitors with its dynamic fusion of historic charm and contemporary creativity. Nestled at the confluence of the Grand and Speed Rivers, the town offers a blend of artistic venues, riverside trails, and captivating architecture. Immerse yourself in cultural festivals, explore artisanal shops, and delight in the picturesque landscapes that make Cambridge a remarkable destination for those seeking a harmonious blend of heritage and modern allure.",
      history: "Established in the early 1800s, Galt, now part of Cambridge, grew as an industrial hub with strong Scottish influences. It was named after the Scottish town of Galt. Over time, Galt evolved into a center for innovation, commerce, and the arts, while preserving its historic landmarks. Today, Cambridge showcases its rich past through its preserved architecture, vibrant cultural scene, and a welcoming spirit that continues to attract residents and visitors alike.",
      image: 'media/cambridge.png',
  
      directions: {
        walking: 'Hike approximately 100 km using diverse routes, taking about 2-3 days with camping stops.',
        driving: 'Drive around 100 km via ON-401 W in about 1.5 hours, enjoying the scenic drive.',
        transit: 'Take a combination of train and bus routes, reaching Cambridge in approximately 2.5 hours. Check schedules beforehand.',
      },
      visit: [
        {
          title: 'Downtown Galt',
          description: 'Explore historic streets, boutiques, and diverse dining options.',
        },
        {
          title: 'Cambridge Mill',
          description: 'Experience fine dining with picturesque riverside views.',
        },
        {
          title: 'McDougall Cottage',
          description: 'Discover Scottish heritage through exhibits and events.',
        },
        {
          title: 'Grand River Trail',
          description: 'Enjoy riverside walks and scenic nature views.',
        },
        {
          title: 'Cambridge Sculpture Garden',
          description: 'Admire outdoor sculptures and public art installations.',
        },
      ],
      reviews: [
        { name: 'RelaxationLover', date: '2017-08-05', rating: 5, comment: 'Found peace and relaxation amidst stunning nature.' },
        { name: 'AdventureEnthusiast', date: '2018-09-27', rating: 3, comment: 'Enjoyed some activities, but not all met expectations.' },
        { name: 'LocalExplorer', date: '2020-06-09', rating: 5, comment: 'Explored the town like a local and loved every moment.' },
        { name: 'CultureLover', date: '2016-10-30', rating: 4, comment: 'Drenched myself in local culture and traditions.' },
        { name: 'NatureWanderer', date: '2019-09-03', rating: 5, comment: 'Wandered through nature\'s wonders and found joy.' },      
      ],
    },
    {
      name: 'Paris',
      blurb: 'Quaint Charm Along the Grand River.',
      description: "Nestled alongside the scenic Grand River, Paris beckons with its picturesque beauty, historic architecture, and small-town allure. Stroll through its charming streets adorned with boutiques, galleries, and inviting cafes. The town's idyllic setting, rich heritage, and vibrant arts scene make Paris a captivating destination for travelers seeking a serene escape steeped in culture and natural beauty.",
      history: "Founded in 1829, Paris was named for its picturesque resemblance to the French city. The town flourished as an industrial center, driven by milling, manufacturing, and its connection to the Grand Trunk Railway. Its well-preserved architecture, including cobblestone buildings and elegant Victorian homes, reflects its storied past. Today, Paris thrives as a cultural haven, offering a blend of historic charm and modern creativity that draws visitors to its captivating landscape.",
      image: 'media/paris.png',
  
      directions: {
        walking: 'Hike about 130 km via varied routes, taking 3-4 days with camping stops.',
        driving: 'Drive around 100 km via ON-401 W and ON-403 W in about 1.5 hours, enjoying the scenic drive.',
        transit: 'Take a combination of train and bus routes, reaching Paris in around 2 hours. Plan ahead and check schedules.',
      },
      visit: [
        {
          title: 'Cobblestone District',
          description: 'Explore historic cobblestone buildings and unique shops.',
        },
        {
          title: 'Grand River',
          description: 'Enjoy riverside strolls and water activities in a serene setting.',
        },
        {
          title: 'Paris Museum and Historical Society',
          description: 'Discover local history and artifacts.',
        },
        {
          title: 'Lions Park',
          description: 'Relax in this riverside park with green spaces and trails.',
        },
        {
          title: 'Wincey Mills Market',
          description: 'Experience artisanal foods, crafts, and a lively market atmosphere.',
        },
      ],
      reviews: [
        { name: 'WineTaster', date: '2017-05-22', rating: 5, comment: 'A wine journey that left my palate delighted.' },
        { name: 'ScenicAdmirer', date: '2018-04-10', rating: 4, comment: 'Immersed in stunning views and natural beauty.' },
        { name: 'HistoryEnthusiast2', date: '2019-02-17', rating: 5, comment: 'Unveiled fascinating tales from the town\'s past.' },
        { name: 'CulinaryExplorer', date: '2016-08-18', rating: 5, comment: 'Indulged in a culinary exploration of flavors.' },
        { name: 'NatureLover3', date: '2017-04-09', rating: 4, comment: 'Embraced nature\'s tranquility and breathtaking scenes.' },

      ],
    },

    {
      name: 'Aberfoyle',
      blurb: "Tranquil Beauty Amidst Nature's Tapestry.",
      description: "Nestled in a serene landscape, Aberfoyle offers a peaceful retreat with its natural charm, lush surroundings, and quaint ambiance. Experience the tranquility of its countryside, engage in outdoor activities, and discover a welcoming community. Whether exploring nature trails, indulging in local cuisine, or simply unwinding in its picturesque setting, Aberfoyle promises a rejuvenating escape for those seeking solace amidst nature's embrace.",
      history: "Established in the early 1800s, Aberfoyle's history is rooted in its agrarian past and the emergence of its vibrant community. The town grew around a mill and blossomed with the arrival of settlers. Today, Aberfoyle's historic character is preserved in its architecture and its deep connection to the land. The town's evolution into a peaceful haven reflects its enduring commitment to embracing its natural beauty and offering a respite from the hustle and bustle of modern life.",
      image: 'media/aberfoyle.png',
  
      directions: {
        walking: 'Hike approximately 85 km via diverse routes, taking about 2-3 days with camping stops.',
        driving: 'Drive around 85 km via ON-401 W and ON-6 S in about 1.5 hours, through scenic landscapes.',
        transit: 'Take a combination of train and bus routes, reaching Aberfoyle in around 2.5 hours. Check schedules beforehand.',
      },
      visit: [
        {
          title: 'Aberfoyle Mill',
          description: 'Experience fine dining in a historic mill setting.',
        },
        {
          title: 'Puslinch Lake',
          description: 'Enjoy outdoor activities and serene lake views.',
        },
        {
          title: 'Aberfoyle Antique Market',
          description: 'Explore a treasure trove of vintage finds.',
        },
        {
          title: 'Morriston Park',
          description: 'Relax in this peaceful park with walking trails.',
        },
        {
          title: 'Puslinch Library',
          description: 'Discover a cozy community hub with local charm.',
        },
      ],
      reviews: [
        { name: 'AdventureHiker2', date: '2018-07-22', rating: 3, comment: 'Trail options were limited, could be more diverse.' },
        { name: 'LocalExpert', date: '2021-04-08', rating: 5, comment: 'A town that truly embraces its local identity.' },
        { name: 'CultureEnthusiast2', date: '2016-09-14', rating: 4, comment: 'Dived into the culture and left with a heart full of memories.' },
        { name: 'NatureExplorer2', date: '2019-11-05', rating: 5, comment: 'Explored hidden natural gems and found solace.' },
        { name: 'WineConnoisseur2', date: '2017-06-19', rating: 5, comment: 'A wine lover\'s paradise with vineyard vistas.' },
      
      ],
    },

    {
      name: 'Uxbridge',
      blurb: "Where Nature's Beauty and Heritage Converge.",
      description: "Nestled on the edge of the Oak Ridges Moraine, Uxbridge entices visitors with its blend of natural beauty, cultural attractions, and charming small-town atmosphere. Experience its vibrant arts scene, explore local boutiques, and embrace the great outdoors with numerous trails and parks. Uxbridge offers a perfect balance of relaxation and exploration for those seeking to immerse themselves in both nature and heritage.",
      history: "Founded in the 1800s, Uxbridge's history is closely tied to its role as a milling center and railway hub. As industry declined, the town embraced its natural surroundings and evolved into a haven for artists and outdoor enthusiasts. Uxbridge's heritage is preserved in its historic downtown, century-old buildings, and strong sense of community. Today, it's a dynamic town that pays homage to its past while celebrating its present as a cultural and recreational destination.",
      image: 'media/uxbridge.png',
  
      directions: {
        walking: 'Hiking from Toronto to the town: Hike approximately 75 km using varied routes, taking 2-3 days with camping stops.',
        driving: 'Drive around 75 km via ON-404 N and Bloomington Rd E in about 1.5 hours, passing through scenic landscapes.',
        transit: 'Take a combination of train and bus routes, reaching Uxbridge in around 2.5 hours. Check schedules ahead of time.',
      },
      visit: [
        {
          title: 'Uxbridge Trails',
          description: 'Explore scenic trails with options for hiking and biking.',
        },
        {
          title: 'Thomas Foster Memorial',
          description: 'Admire stunning gardens and architecture in a park setting.',
        },
        {
          title: 'Uxbridge Historical Centre',
          description: 'Discover local history and heritage exhibits.',
        },
        {
          title: 'York-Durham Heritage Railway',
          description: 'Experience a vintage train ride through the countryside.',
        },
        {
          title: 'Blue Heron Bookshelf',
          description: 'Browse through a charming independent bookstore and café.',
        },
      ],
      reviews: [
        { name: 'PhotographyLover', date: '2018-12-16', rating: 4, comment: 'Every snap turned into a masterpiece of natural beauty.' },
        { name: 'HistoryEnthusiast3', date: '2019-11-21', rating: 5, comment: 'Stepped back in time and felt connected to history.' },
        { name: 'CulinaryGuru', date: '2016-07-25', rating: 5, comment: 'Indulged in culinary creations that delighted my taste buds.' },
        { name: 'NatureWanderer2', date: '2018-09-19', rating: 4, comment: 'Found tranquility wandering amidst nature\'s canvas.' },
        { name: 'WineAficionado2', date: '2020-03-02', rating: 5, comment: 'Savored the finest wines while being surrounded by beauty.' },      
      ],
    },

    {
      name: 'Grimsby',
      blurb: "Where Nature Meets Lakeside Tranquility.",
      description: "Nestled between the Niagara Escarpment and Lake Ontario, Grimsby beckons with its serene lakeside charm, boutique shopping, and vibrant arts scene. Explore its picturesque downtown, relax by the waterfront, and indulge in local culinary delights. With its blend of natural beauty and cultural richness, Grimsby offers a perfect escape for those seeking a peaceful retreat that nourishes the senses.",
      history: "Dating back to the late 1700s, Grimsby's history is intertwined with its maritime and agricultural roots. Once a hub for shipbuilding and trade, the town later thrived as a fruit-growing region. The town's growth was spurred by the arrival of the Great Western Railway in the mid-1800s. Grimsby's history is evident in its well-preserved architecture and its transition from a bustling port to a modern community that cherishes its past while embracing its vibrant present.",
      image: 'media/grimsby.png',
  
      directions: {
        walking: 'Hiking from Toronto to the town: Hike approximately 75 km via diverse routes, taking 2-3 days with camping stops.',
        driving: 'Drive around 75 km via QEW S in about 1 hour, passing through scenic landscapes.',
        transit: 'Take a combination of train and bus routes, reaching Grimsby in around 2 hours. Check schedules in advance.',
      },
      visit: [
        {
          title: 'Grimsby Beach',
          description: 'Enjoy lakeside views, picnics, and serene relaxation.',
        },
        {
          title: 'Grimsby Museum',
          description: 'Explore local history and cultural exhibits.',
        },
        {
          title: 'Beamer Memorial Conservation Area',
          description: 'Witness stunning bird migrations and hiking trails.',
        },
        {
          title: 'Downtown Grimsby',
          description: 'Discover boutique shops, art galleries, and eateries.',
        },
        {
          title: 'Lake Ontario Waterfront',
          description: 'Embrace the tranquility of the lakeshore with scenic walks.',
        },
      ],
      reviews: [
        { name: 'ArtAficionado', date: '2017-08-20', rating: 4, comment: 'Immersed in artistic expression that resonated deeply.' },
        { name: 'RelaxationLover2', date: '2018-05-14', rating: 5, comment: 'Relaxed the mind and body amidst serene surroundings.' },
        { name: 'AdventureEnthusiast2', date: '2019-06-26', rating: 3, comment: 'Adventures were fun, but could use more variety.' },
        { name: 'LocalExplorer2', date: '2020-08-08', rating: 5, comment: 'Explored the town like a curious traveler and loved it.' },
        { name: 'CultureAdmirer', date: '2016-11-10', rating: 4, comment: 'Immersed in cultural experiences that left me inspired.' },
      ],
    },
      
    {
        name: 'Bracebridge',
        blurb: "Where Nature's Beauty and Community Spirit Thrive.",
        description: "Nestled in the heart of Muskoka, Bracebridge captivates visitors with its breathtaking landscapes, charming downtown, and warm community atmosphere. Explore the pristine lakes, enjoy outdoor activities, and discover artisanal shops and local eateries. With its perfect blend of natural wonders and friendly hospitality, Bracebridge offers an ideal retreat for those seeking a harmonious balance of adventure and relaxation.",
        history: "Founded in the mid-1800s, Bracebridge's history is rooted in its role as a lumber and milling center. The town's name pays homage to a bridge constructed by the area's first European settlers. As the timber industry declined, Bracebridge transformed into a sought-after resort destination. Its rich history is reflected in its heritage buildings, including the iconic Silver Bridge. Today, Bracebridge remains a hub for tourism, celebrated for its beauty, culture, and community spirit.",
        image: 'media/bracebridge.png',
    
        directions: {
          walking: 'Hiking from Toronto to the town: Hike approximately 230 km via diverse routes, taking about 6-7 days with camping stops.',
          driving: 'Drive around 220 km via ON-400 N in about 2.5 hours, passing through scenic landscapes.',
          transit: 'Take a combination of bus and train routes, reaching Bracebridge in around 4.5 hours. Check schedules in advance.',
        },
        visit: [
          {
            title: 'Muskoka River',
            description: 'Enjoy serene waters, canoeing, and riverside strolls.',
          },
          {
            title: "Santa's Village",
            description: 'Experience family fun with rides, attractions, and entertainment.',
          },
          {
            title: 'Bracebridge Falls',
            description: 'Admire stunning waterfalls in a natural setting.',
          },
          {
            title: 'Downtown Bracebridge',
            description: 'Explore shops, galleries, and local eateries.',
          },
          {
            title: 'Annie Williams Memorial Park',
            description: 'Relax in a lakeside park with green spaces and trails.',
          },
        ],
        reviews: [
          { name: 'NatureLover4', date: '2019-10-09', rating: 5, comment: 'Nature\'s symphony played a soothing melody to my soul.' },
          { name: 'WineTaster2', date: '2017-06-03', rating: 5, comment: 'A wine journey that painted a palette of delightful flavors.' },
          { name: 'ScenicAdmirer2', date: '2018-05-18', rating: 4, comment: 'In awe of the scenic beauty that unfolded before me.' },
          { name: 'HistoryEnthusiast4', date: '2019-03-29', rating: 5, comment: 'Stepped back in time and felt the town\'s living history.' },
          { name: 'CulinaryExplorer2', date: '2016-08-08', rating: 5, comment: 'Embarked on a culinary journey that tingled the senses.' },

        ],
      },

      {
        name: 'Collingwood',
        blurb: "Where Blue Waters Meet Majestic Peaks.",
        description: "Nestled along the shores of Georgian Bay and bordered by the scenic Blue Mountains, Collingwood beckons with its captivating blend of outdoor adventures, arts, and culture. Explore its historic downtown with unique shops and cozy cafes, then venture into the great outdoors for skiing, hiking, and water activities. Whether seeking relaxation or excitement, Collingwood offers a perfect escape for those looking to embrace nature's beauty and a vibrant community spirit.",
        history: "Founded in the 1850s, Collingwood's history revolves around its role as a bustling shipbuilding and lumber town. The town's shipbuilding heritage is evident in its historic waterfront, where majestic ships were once crafted. Over the years, Collingwood evolved into a popular tourist destination, renowned for its natural beauty and recreational opportunities. Today, it's celebrated for its blend of heritage architecture, outdoor pursuits, and a welcoming atmosphere that invites visitors to explore and enjoy its rich offerings.",
        image: 'media/collingwood.png',
    
        directions: {
          walking: 'Hiking from Toronto to the town: Hike approximately 150 km via diverse routes, taking 3-4 days with camping stops.',
          driving: 'Drive around 150 km via ON-400 N in about 2 hours, enjoying scenic landscapes.',
          transit: 'Take a combination of train and bus routes, reaching Collingwood in around 3.5 hours. Check schedules in advance.',
        },
        visit: [
          {
            title: 'Blue Mountain Resort',
            description: 'Experience skiing, hiking, and vibrant village activities.',
          },
          {
            title: 'Collingwood Harbour',
            description: 'Enjoy waterfront views and recreational opportunities.',
          },
          {
            title: 'Downtown Collingwood',
            description: 'Explore boutiques, galleries, and local eateries.',
          },
          {
            title: 'Collingwood Museum',
            description: 'Discover local history and interactive exhibits.',
          },
          {
            title: 'Georgian Trail',
            description: 'Walk or cycle along a scenic trail connecting Collingwood and Meaford.',
          },
        ],
        reviews: [
          { name: 'NatureWanderer3', date: '2017-04-07', rating: 4, comment: 'Wandered amidst nature\'s beauty and found serenity.' },
          { name: 'WineAppreciator', date: '2018-10-20', rating: 5, comment: 'Appreciated wines that were as splendid as the setting.' },
          { name: 'ArtAppreciator2', date: '2019-06-22', rating: 4, comment: 'Touched by the artistic expression that filled the town.' },
          { name: 'RelaxationSeeker3', date: '2020-04-18', rating: 5, comment: 'Found relaxation in every corner of this serene haven.' },
          { name: 'AdventureSeeker2', date: '2017-10-15', rating: 3, comment: 'Some adventures were thrilling, others left me wanting more.' },

        ],
      },
      {name: 'Picton',
      blurb: "Where Quaint Charm Meets Vineyard Delights.",
      description: "Nestled in the heart of Prince Edward County, Picton enchants visitors with its blend of historic beauty, artistic spirit, and award-winning wineries. Explore its charming downtown lined with boutiques, galleries, and local eateries. Embark on wine tours, enjoy culinary experiences, and revel in the town's cultural offerings. Whether sipping wine amidst vineyards or strolling along quaint streets, Picton promises an unforgettable escape where relaxation meets sophistication.",
      history: "Dating back to the late 18th century, Picton's history is intertwined with its role as a bustling port town and regional center. The town's maritime heritage and Victorian architecture are evident in its historic buildings and waterfront charm. Over time, Picton evolved into a cultural hub, known for its thriving arts scene and flourishing vineyards. Today, it stands as a destination that celebrates its heritage while embracing modern tastes and experiences.",
      image: 'media/picton.png',
    
      directions: {
        walking: 'Hike approximately 225 km via diverse routes, taking about 5-6 days with camping stops.',
        driving: 'Drive around 225 km via ON-401 E and ON-33 S in about 2.5 hours, through scenic landscapes.',
        transit: 'Take a combination of train and bus routes, reaching Picton in around 4 hours. Check schedules in advance.',
      },
      visit: [
        {
          title: 'Prince Edward County Wineries',
          description: 'Embark on wine tours and tastings in scenic vineyards.',
        },
        {
          title: 'Downtown Picton',
          description: 'Explore boutiques, art galleries, and cozy cafes.',
        },
        {
          title: 'Macaulay Heritage Park',
          description: 'Discover local history and enjoy parkland views.',
        },
        {
          title: 'Picton Harbour',
          description: 'Enjoy waterfront walks and boat watching.',
        },
        {
          title: 'Crystal Palace',
          description: 'Experience local events and markets in a historic venue.',
        },
      ],
      reviews: [
        { name: 'LocalAdmirer', date: '2018-08-16', rating: 5, comment: 'Admired the local charm and the warm community spirit.' },
        { name: 'CultureLover2', date: '2016-12-12', rating: 4, comment: 'Submerged in the culture and felt a deep connection.' },
        { name: 'NatureLover5', date: '2019-10-02', rating: 5, comment: 'Nature\'s embrace welcomed me and offered tranquility.' },
        { name: 'WineEnthusiast', date: '2017-06-22', rating: 5, comment: 'An enthusiast\'s dream with wine that danced on my palate.' },
        { name: 'ScenicAdventurer', date: '2018-06-28', rating: 4, comment: 'Adventured through scenic vistas that left me awe-inspired.' },

      ],
    },
]


const hiddenGemsTemplate = [
  {
    name: 'Gem 1',
    blurb: 'a short blurb of Gem 1',
    description: 'Description of Gem 1...',
    history: 'History of Gem 1...',
    image: 'media/townname.png',
    directions: {
      walking: 'Walking directions for Gem 1...',
      driving: 'Driving directions for Gem 1...',
      transit: 'Transit directions for Gem 1...',
    },
    
    visit: [
      {
        title: 'Place 1',
        description: 'Description of Place 1...',
      },
      {
        title: 'Place 2',
        description: 'Description of Place 2...',
      },
    ],

    reviews: [
      { name: 'User1', date: '2023-08-01', rating: 5, comment: 'Great place!' },
      
    ],
  },
]