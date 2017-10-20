        var app1 = document.getElementById('app1');
        // var app2 = document.getElementById('app2');
        // var app3 = document.getElementById('app3');
        angular.element(function() {
          angular.bootstrap(app1, ['app1']);
        //  angular.bootstrap(app2, ['app2']);
        // angular.bootstrap(app3, ['app3']);
        });
        angular.module('app1',['ngMaterial', 'ng360'])
          .controller("RainbowExampleController", function() {
            var vm = this;
            vm.rainbowConf = {
                range: { times: [15] },
                travelTime: 15,
                colorRange: {
                    "name": "Green to Red",
                    "id": "default",
                    "colors": [/*"#509373", "#75c380", */"#abcf79"],
                    "opacities": [1.0]
                }}
          });
        var pixel = 9;
    
        const CONSTNAMELOCSIMPLE = [
          ['Addison Central School', 'Addison', 'Addison', 44.0879679, -73.304713],
          ['Beeman Elementary School', 'Addison', 'West Haven', 44.125328, -73.153222],
          ['Bingham Memorial School', 'Addison', 'Cornwall', 43.963902, -73.2063979],
          ['Bridport Central School', 'Addison', 'Bridport', 43.9809453, -73.3158066],
          ['Bristol Elementary School', 'Addison', 'Bristol', 44.1379395, -73.0770421],
          ['Ferrisburgh Central School', 'Addison', 'Ferrisburgh', 44.2067279, -73.2478787],
          ['Leicester Central School', 'Addison', 'Leicester', 43.8667079, -73.1088581],
          ['Lincoln Community School', 'Addison', 'Lincoln', 44.09766, -72.986305],
          ['Middlebury Id No 4', 'Addison', 'Middlebury', 44.0105946, -73.1616527],
          ['Middlebury Union High School', 'Addison', 'Middlebury', 44.0065835, -73.1630676],
          ['Middlebury Union Middle School No 3', 'Addison', 'Middlebury', 43.9982614, -73.1524356],
          ['Monkton Central School', 'Addison', 'Monkton', 44.2441871, -73.1389253],
          ['Mt Abraham UHS No 28', 'Addison', 'Bristol', 44.1354759, -73.0939654],
          ['Orwell Village School', 'Addison', 'Orwell', 43.804552, -73.299154],
          ['Ripton Elementary School', 'Addison', 'Ripton', 43.9852144, -73.0382352],
          ['Robinson School', 'Addison', 'Starksboro', 44.223866, -73.057693],
          ['Salisbury Community School', 'Addison', 'Salisbury', 43.9197119, -73.11792],
          ['Shoreham Elementary School', 'Addison', 'Shoreham', 43.891708, -73.316238],
          ['Vergennes UES No 44', 'Addison', 'Vergennes', 44.1671634, -73.2480837],
          ['Vergennes UHS No 5', 'Addison', 'Vernon', 44.1699484, -73.2431089],
          ['Weybridge Elementary School', 'Addison', 'Bethel', 44.04174, -73.212502],
          ['Whiting Village School', 'Addison', 'Williams', 43.858121, -73.2015179],
          ['Arlington Memorial High School', 'Bennington', 'Arlington', 43.065997, -73.1508814],
          ['Bennington Elementary School', 'Bennington', 'Bennington', 42.88073, -73.1935139],
          ['Burr And Burton Academy', 'Bennington', 'Manchester', 43.163803, -73.077354],
          ['Dorset School', 'Bennington', 'Dorset', 43.2219794, -73.0657074],
          ['Fisher School', 'Bennington', 'Arlington', 43.066169, -73.153659],
          ['Manchester Elementary-Middle School', 'Bennington', 'Manchester-Center', 43.178738, -73.053734],
          ['Manchester Elementary-Middle School', 'Bennington', 'Manchester-Center', 43.178738, -73.053734],
          ['Molly Stark School', 'Bennington', 'Bennington', 42.8992571, -73.2017039],
          ['Monument Elementary School', 'Bennington', 'Bennington', 42.8850209, -73.2106215],
          ['Mt Anthony Sr UHS No 14', 'Bennington', 'Bennington', 42.8863217, -73.1913331],
          ['Mt Anthony Union Middle School', 'Bennington', 'Bennington', 42.9054159, -73.1877428],
          ['Pownal Elementary School', 'Bennington', 'Pownal', 42.8008263, -73.2179873],
          ['Readsboro Elementary School', 'Bennington', 'Readsboro', 42.945183, -73.207977],
          ['Shaftsbury Elementary School', 'Bennington', 'Shaftsbury', 42.945183, -73.207977],
          ['Stamford Elementary School', 'Bennington', 'Stamford', 42.7549141, -73.0672467],
          ['Sunderland Elementary School', 'Bennington', 'Burlington', 43.0846207, -73.1277208],
          ['Woodford HolloWest School', 'Bennington', 'Colchester', 42.8939304, -73.136866],
          ['Barnet Elementary School', 'Caledonia', 'Barnet', 44.307334, -72.080737],
          ['Burke  School', 'Caledonia', 'Burke', 44.625084, -71.960265],
          ['Danville School', 'Caledonia', 'Danville', 44.4108915, -72.1437508],
          ['Hardwick Elementary School', 'Caledonia', 'Hardwick', 44.5033274, -72.3681449],
          ['Hazen UHS No 26', 'Caledonia', 'Hardwick', 44.508976, -72.364634],
          ['Lyndon Institute', 'Caledonia', 'Lyndon', 44.5384146, -72.0153659],
          ['Lyndon  School', 'Caledonia', 'Lyndon', 44.5465485, -71.9853549],
          ['Millers Run School US No 37', 'Caledonia', 'Sheffield', 44.6026961, -72.1192335],
          ['Newark School', 'Caledonia', 'Newark', 44.690121, -71.950768],
          ['Peacham Elementary School', 'Caledonia', 'Peacham', 44.326018, -72.16652],
          ['St Johnsbury Academy', 'Caledonia', 'Saint Johnsbury', 44.4165493, -72.0193373],
          ['St Johnsbury Schools', 'Caledonia', 'Saint Johnsbury', 44.4162817, -72.0244301],
          ['St Johnsbury Schools', 'Caledonia', 'Saint Johnsbury', 44.4162817, -72.0244301],
          ['Sutton Village School', 'Caledonia', 'Swanton', 44.6335849, -72.0278777],
          ['Walden School', 'Caledonia', 'Wallingford', 44.452801, -72.219322],
          ['Waterford Elementary School', 'Caledonia', 'Waterville', 44.4025729, -71.927544],
          ['Albert D Lawton School', 'Chittenden', 'Essex', 44.4869722, -73.0987693],
          ['Brewster Pierce Elementary School', 'Chittenden', 'Huntington', 44.2958697, -72.9634251],
          ['Browns River Middle School', 'Chittenden', 'Jericho', 44.5192478, -72.9441695],
          ['Burlington Senior High School', 'Chittenden', 'Burlington', 44.4963229, -73.235261],
          ['C P Smith School', 'Chittenden', 'Burlington', 44.513102, -73.243035],
          ['Camels Hump Middle School', 'Chittenden', 'Richmond', 44.4135271, -72.9943127],
          ['Chamberlin School', 'Chittenden', 'South Burlington', 44.4713727, -73.1654672],
          ['Champlain Elementary School', 'Chittenden', 'Burlington', 44.457065, -73.213221],
          ['Champlain Valley UHS No 15', 'Chittenden', 'Hinesburg', 44.3446552, -73.1099525],
          ['Charlotte Central School', 'Chittenden', 'Charlotte', 44.315086, -73.226451],
          ['Colchester High School', 'Chittenden', 'Colchester', 44.5399122, -73.2138341],
          ['Colchester Middle School', 'Chittenden', 'Colchester', 44.5405118, -73.2097507],
          ['Edmunds Elementary School', 'Chittenden', 'Burlington', 44.475518, -73.20729],
          ['Edmunds Middle School', 'Chittenden', 'Burlington', 44.475468, -73.208086],
          ['Essex Community Education Center', 'Chittenden', 'Essex', 44.4982009, -73.1100265],
          ['Essex Elementary School', 'Chittenden', 'Essex', 44.5130041, -73.0555147],
          ['Essex Middle School', 'Chittenden', 'Essex', 44.4992447, -73.0579969],
          ['Founders Memorial School', 'Chittenden', 'Essex', 44.5004481, -73.0553216],
          ['Frederick H Tuttle Middle School', 'Chittenden', 'South Burlington', 44.4567486, -73.1774257],
          ['Hiawatha School', 'Chittenden', 'Essex', 44.4885517, -73.1269076],
          ['Hinesburg Community School', 'Chittenden', 'Hinesburg', 44.32621, -73.10778],
          ['Hinesburg Community School', 'Chittenden', 'Hinesburg', 44.32621, -73.10778],
          ['Integrated Education Arts Academy At Ho Wheeler', 'Chittenden', 'Burlington', 44.4881833, -73.213765],
          ['J F Kennedy Elementary School', 'Chittenden', 'Winooski', 44.500416, -73.180687],
          ['J J Flynn School', 'Chittenden', 'Burlington', 44.517023, -73.260002],
          ['Jericho Elementary School', 'Chittenden', 'Jericho', 44.5053714, -72.9897701],
          ['Lyman C Hunt Middle School', 'Chittenden', 'Burlington', 44.5132798, -73.2491272],
          ['Malletts Bay School', 'Chittenden', 'Colchester', 44.5387028, -73.2076928],
          ['Milton Elementary School', 'Chittenden', 'Milton', 44.6324836, -73.1098197],
          ['Milton Elementary School', 'Chittenden', 'Milton', 44.6324836, -73.1098197],
          ['Milton High School', 'Chittenden', 'Milton', 44.6280816, -73.1197457],
          ['Milton High School', 'Chittenden', 'Milton', 44.6280816, -73.1197457],
          ['Milton Middle School', 'Chittenden', 'Milton', 44.6280816, -73.1197457],
          ['Mt Mansfield USD', 'Chittenden', 'Jericho', 44.486184, -72.962048],
          ['Orchard School', 'Chittenden', 'South Burlington', 44.439761, -73.207682],
          ['Porters Point School', 'Chittenden', 'Colchester', 44.5412597, -73.2553252],
          ['Richmond Elementary School', 'Chittenden', 'Richmond', 44.4126297, -72.9939168],
          ['Rick Marcotte Central School', 'Chittenden', 'South Burlington', 44.467307, -73.1769103],
          ['Shelburne Community School', 'Chittenden', 'Shelburne', 44.3807539, -73.2353556],
          ['Shelburne Community School', 'Chittenden', 'Shelburne', 44.3807539, -73.2353556],
          ['Smilie Memorial School (Bolton)', 'Chittenden', 'Bolton', 44.373783, -72.876854],
          ['South Burlington High School', 'Chittenden', 'South Burlington', 44.454924, -73.177891],
          ['Summit Street School', 'Chittenden', 'Sunderland', 44.493408, -73.11366],
          ['Sustain Academy at Lawrence Barnes', 'Chittenden', 'Sutton', 44.484143, -73.2167958],
          ['Thomas Fleming School', 'Chittenden', 'Tinmouth', 44.49478, -73.113504],
          ['Underhill Central Elementary School', 'Chittenden', 'Jericho', 44.5089403, -72.8951245],
          ['Underhill Id Elementary School', 'Chittenden', 'Montpelier', 44.5179951, -72.9456161],
          ['Union Memorial School', 'Chittenden', 'Springfield', 44.5490086, -73.1601394],
          ['Westford Elementary School', 'Chittenden', 'Westminster', 44.602952, -73.0189539],
          ['Williston Schools', 'Chittenden', 'Williston', 44.44059, -73.073311],
          ['Williston Schools', 'Chittenden', 'Williston', 44.44059, -73.073311],
          ['Williston Schools', 'Chittenden', 'Windham', 44.447771, -73.096256],
          ['Winooski High School', 'Chittenden', 'Winooski', 44.501157, -73.18101],
          ['Winooski Middle School', 'Chittenden', 'Wolcott', 44.501157, -73.18101],
          ['Woodside Juvenile Rehab Center', 'Chittenden', 'Woodstock', 44.5022201, -73.1447091],
          ['Brighton Elementary School', 'Essex', 'Brighton', 44.8215785, -71.8938945],
          ['Canaan Schools', 'Essex', 'Canaan', 44.99537, -71.537662],
          ['Concord Graded-Middle School', 'Essex', 'Concord', 44.4266783, -71.8904607],
          ['Lunenburg-Gilman Schools', 'Essex', 'Lunenburg', 44.4147729, -71.714483],
          ['Bakersfield School', 'Franklin', 'Bakersfield', 44.7842811, -72.8027989],
          ['Bellows Free Academy (Fairfax)', 'Franklin', 'Fairfax', 44.6635996, -73.0132732],
          ['Bellows Free Academy (St Albans)', 'Franklin', 'Saint Albans City', 44.8080266, -73.0828117],
          ['Bellows Free Academy HS (Fairfax)', 'Franklin', 'Fairfax', 44.6635539, -73.0133096],
          ['Berkshire Elementary School', 'Franklin', 'Berkshire', 44.9724974, -72.7662099],
          ['Enosburg Falls Elementary School', 'Franklin', 'Enosburg', 44.904316, -72.801033],
          ['Enosburg Falls Middle-High School', 'Franklin', 'Enosburg', 44.9053176, -72.8039149],
          ['Enosburg Falls Middle-High School', 'Franklin', 'Enosburg', 44.9053176, -72.8039149],
          ['Fairfield Center School', 'Franklin', 'Fairfield', 44.80051, -72.947922],
          ['Fletcher Elementary School', 'Franklin', 'Cambridge', 44.67049, -72.923782],
          ['Franklin Elementary School', 'Franklin', 'Franklin', 44.9842389, -72.9201647],
          ['Georgia Elementary-Middle School', 'Franklin', 'Georgia', 44.7350207, -73.1144163],
          ['Georgia Elementary-Middle School', 'Franklin', 'Georgia', 44.7350207, -73.1144163],
          ['Highgate Elementary School', 'Franklin', 'Highgate', 44.94117, -73.044022],
          ['Missisquoi Valley UHS No 7', 'Franklin', 'Swanton', 44.927863, -73.1018239],
          ['Montgomery Elementary School', 'Franklin', 'Montgomery', 44.8864293, -72.6162041],
          ['Richford Elementary School', 'Franklin', 'Richford', 44.9859909, -72.6802834],
          ['Richford Jr-Sr High School', 'Franklin', 'Richford', 44.995025, -72.670086],
          ['Sheldon Elementary School', 'Franklin', 'Sheldon', 44.900993, -72.969269],
          ['St Albans City School', 'Franklin', 'Saint Albans City', 44.8203212, -73.0918318],
          ['St Albans  Education Center', 'Franklin', 'Saint Albans City', 44.8016334, -73.0860045],
          ['Swanton Schools', 'Franklin', 'Waterbury', 44.9160554, -73.1147285],
          ['Orford Schools', 'Grafton (NH)', 'Hanover', 43.7200805, -72.2662366],
          ['Rivendell Academy', 'Grafton (NH)', 'Orford', 43.899294, -72.1376509],
          ['Alburgh Community Education Center', 'Grand Isle', 'Alburgh', 44.979204, -73.2982707],
          ['Folsom Education And Community Center', 'Grand Isle', 'South Hero', 44.636311, -73.3022079],
          ['Grand Isle  School', 'Grand Isle', 'Grand Isle', 44.725599, -73.2915204],
          ['Isle La Motte Elementary School', 'Grand Isle', 'Isle La Motte', 44.8823346, -73.346067],
          ['North Hero School', 'Grand Isle', 'North Hero', 44.8508342, -73.2634981],
          ['Cambridge Elementary School', 'Lamoille', 'Cambridge', 44.6444743, -72.8267715],
          ['Eden Central School', 'Lamoille', 'Eden', 44.704038, -72.563901],
          ['Elmore School', 'Lamoille', 'Wolcott', 44.5393373, -72.5222732],
          ['Hyde Park Elementary School', 'Lamoille', 'Hyde Park', 44.591888, -72.6137179],
          ['Johnson Elementary School', 'Lamoille', 'Johnson', 44.637031, -72.674763],
          ['Lamoille UHS No 18', 'Lamoille', 'Hyde Park', 44.6010887, -72.6319369],
          ['Lamoille Union Middle School No 18', 'Lamoille', 'Hyde Park', 44.6010887, -72.6319369],
          ['Morris Elementary Schools', 'Lamoille', 'Morris', 44.5636467, -72.5855112],
          ['Peoples Academy', 'Lamoille', 'Morris', 44.5626651, -72.590118],
          ['Peoples Academy Middle School', 'Lamoille', 'Morris', 44.5626651, -72.590118],
          ['Stowe Elementary School', 'Lamoille', 'Stowe', 44.4630988, -72.6842541],
          ['Stowe Middle-High School', 'Lamoille', 'Stowe', 44.46533, -72.726585],
          ['Stowe Middle-High School', 'Lamoille', 'Sudbury', 44.46533, -72.726585],
          ['Waterville Elementary School', 'Lamoille', 'Weathersfield', 44.726855, -72.74841],
          ['Wolcott Elementary School', 'Lamoille', 'Woodbury', 44.538219, -72.453148],
          ['Blue Mountain US No 21', 'Orange', 'Newbury', 44.1553744, -72.0833144],
          ['Bradford Elementary School', 'Orange', 'Bradford', 44.0026079, -72.1224734],
          ['Braintree School', 'Orange', 'Braintree', 43.955559, -72.72245],
          ['Brookfield Elementary School', 'Orange', 'Brookfield', 44.016395, -72.606683],
          ['Chelsea Elementary-High School', 'Orange', 'Chelsea', 43.987282, -72.446617],
          ['Newbury Elementary School', 'Orange', 'Newbury', 44.0794494, -72.0603798],
          ['Newton School', 'Orange', 'Strafford', 43.8350684, -72.3653719],
          ['Orange Center School', 'Orange', 'Orange', 44.1490229, -72.4035558],
          ['OxboWest UHS No 30', 'Orange', 'Bradford', 44.0078701, -72.1139269],
          ['Randolph Elementary School', 'Orange', 'Randolph', 43.9338797, -72.6604606],
          ['Randolph Elementary School', 'Orange', 'Randolph', 43.9338797, -72.6604606],
          ['Randolph UHS No 2', 'Orange', 'Randolph', 43.930991, -72.659752],
          ['Randolph UHS No 2', 'Orange', 'Randolph', 43.930991, -72.659752],
          ['Samuel Morey Elementary School', 'Orange', 'Fairlee', 43.9079275, -72.1461984],
          ['Thetford Academy', 'Orange', 'Thetford', 43.8144932, -72.2312088],
          ['Thetford Elementary School', 'Orange', 'Essex', 43.8195834, -72.2318682],
          ['Tunbridge Central School', 'Orange', 'Wilmington', 43.916965, -72.474808],
          ['Waits River Valley US No 36', 'Orange', 'Waitsfield', 44.0797483, -72.261316],
          ['Washington Village School', 'Orange', 'Waterford', 44.1078548, -72.4315601],
          ['Westshire School', 'Orange', 'Weybridge', 43.9065664, -72.2630234],
          ['Williams Elementary School', 'Orange', 'Williams', 44.123554, -72.545708],
          ['Williams Middle-High School', 'Orange', 'Williston', 44.1262355, -72.546661],
          ['Albany Community School', 'Orleans', 'Albany', 44.737995, -72.376839],
          ['Barton Graded Education School', 'Orleans', 'Barton', 44.749023, -72.180092],
          ['Brownington Central School', 'Orleans', 'Brownington', 44.819904, -72.137688],
          ['Charleston Elementary School', 'Orleans', 'Charleston', 44.843109, -72.019768],
          ['Coventry Village School', 'Orleans', 'Newport', 44.8628287, -72.2650021],
          ['Craftsbury Schools', 'Orleans', 'Craftsbury', 44.6541939, -72.381984],
          ['Derby Elementary School', 'Orleans', 'Derby', 45.001503, -72.118345],
          ['Glover Community School', 'Orleans', 'Glover', 44.705938, -72.189466],
          ['Holland Elementary School', 'Orleans', 'Holland', 44.9730783, -72.0133074],
          ['Irasburg Village School', 'Orleans', 'Irasburg', 44.8036308, -72.2728506],
          ['Jay-Westfield Joint School', 'Orleans', 'Jay', 44.952663, -72.435028],
          ['Lake Region UHS No 24', 'Orleans', 'Barton', 44.782603, -72.220649],
          ['LakevieWest US No 43', 'Orleans', 'Greensboro', 44.5807538, -72.2939152],
          ['Lowell GradEducation School', 'Orleans', 'Lowell', 44.8053359, -72.448708],
          ['Newport City Elementary Schools', 'Orleans', 'Newport', 44.9449812, -72.1921709],
          ['Newport  School', 'Orleans', 'Newport', 44.9509976, -72.3068892],
          ['North Country UHS No 22A', 'Orleans', 'Newport', 44.946129, -72.203537],
          ['North Country Union Jr High No 22B', 'Orleans', 'Derby', 44.9493054, -72.1313134],
          ['Orleans Elementary School', 'Orleans', 'Barton', 44.810055, -72.196754],
          ['Troy Elementary School', 'Orleans', 'Tunbridge', 44.995964, -72.405022],
          ['BarstoWest Memorial School', 'Rutland', 'Chittenden', 43.7010447, -72.9524235],
          ['Benson Village School', 'Rutland', 'Benson', 43.7072408, -73.302237],
          ['Castleton Hubbardton US No 42', 'Rutland', 'Castleton', 43.612408, -73.1782069],
          ['Castleton Hubbardton US No 42', 'Rutland', 'Castleton', 43.612408, -73.1782069],
          ['Clarendon Elementary School', 'Rutland', 'Clarendon', 43.5634, -72.96786],
          ['Currier Memorial US No 23', 'Rutland', 'Danby', 43.3497894, -72.9951757],
          ['Fair Haven Graded School', 'Rutland', 'Fair Haven', 43.5948092, -73.2644651],
          ['Fair Haven UHS No 16', 'Rutland', 'Fair Haven', 43.6035814, -73.2703625],
          ['Killington Elementary School', 'Rutland', 'Killington', 43.6446821, -72.7941643],
          ['Lothrop School', 'Rutland', 'Pittsford', 43.7055257, -73.0190098],
          ['Mettawee Community US No 47', 'Rutland', 'Pawlet', 43.3857682, -73.2243815],
          ['Middle Springs Elementary School', 'Rutland', 'Middle Springs', 43.4839636, -73.1203383],
          ['Mill River US No 40', 'Rutland', 'Clarendon', 43.547028, -72.97152],
          ['Mt Holly School', 'Rutland', 'Mount Holly', 43.44585, -72.823055],
          ['Neshobe School', 'Rutland', 'Brandon', 43.8264649, -73.0552279],
          ['Northeast Primary School', 'Rutland', 'Rutland', 43.617752, -72.96212],
          ['Northwest Primary School', 'Rutland', 'Rutland', 43.6127619, -72.991417],
          ['Otter Valley UHS No 7', 'Rutland', 'Brandon', 43.7671716, -73.0515465],
          ['Otter Valley UHS No 8', 'Rutland', 'Brandon', 43.7671716, -73.0515465],
          ['Poultney Elementary School', 'Rutland', 'Poultney', 43.524576, -73.237674],
          ['Poultney High School', 'Rutland', 'Poultney', 43.5165455, -73.2294684],
          ['Proctor Elementary School', 'Rutland', 'Proctor', 43.6618191, -73.038619],
          ['Proctor Jr-Sr High School', 'Rutland', 'Proctor', 43.6550274, -73.0291312],
          ['Rutland High School', 'Rutland', 'Rutland', 43.6174987, -72.9546905],
          ['Rutland Intermediate School', 'Rutland', 'Rutland', 43.6131406, -72.9797488],
          ['Rutland Middle School', 'Rutland', 'Rutland', 43.6129104, -72.9809901],
          ['Rutland  Elementary School', 'Rutland', 'Rutland', 43.6386836, -72.9634995],
          ['Shrewsbury Mountain School', 'Rutland', 'Shrewsbury', 43.5255129, -72.830734],
          ['Sudbury Country School', 'Rutland', 'Essex', 43.822178, -73.185951],
          ['Tinmouth Elementary School', 'Rutland', 'Townshend', 43.4494929, -73.0510709],
          ['Wallingford Village School', 'Rutland', 'Wardsboro', 43.470547, -72.9751579],
          ['Wells Village School', 'Rutland', 'West Rutland', 43.417881, -73.206711],
          ['West Rutland School', 'Rutland', 'Westford', 43.5954663, -73.0515556],
          ['Barre City Elementary-Middle School', 'Washington', 'Barre', 44.1845142, -72.5047609],
          ['Barre City Elementary-Middle School', 'Washington', 'Barre', 44.1845142, -72.5047609],
          ['Barre  Elementary School', 'Washington', 'Barre', 44.168403, -72.486165],
          ['Barre  Elementary School', 'Washington', 'Barre', 44.168403, -72.486165],
          ['Berlin Elementary School', 'Washington', 'Berlin', 44.2145063, -72.5717356],
          ['Cabot School', 'Washington', 'Cabot', 44.4034302, -72.3093359],
          ['Calais Elementary School', 'Washington', 'Plainfield', 44.3193948, -72.4516452],
          ['Crossett Brook Middle US No 45', 'Washington', 'Duxbury', 44.321123, -72.7528363],
          ['Doty Memorial School', 'Washington', 'Worcester', 44.373349, -72.547949],
          ['East Montpelier Elementary School', 'Washington', 'East Montpelier', 44.2866171, -72.4953304],
          ['Fayston Elementary School', 'Washington', 'Waitsfield', 44.1791977, -72.8842112],
          ['Harwood UHS No 19', 'Washington', 'More', 44.2539876, -72.7867166],
          ['Harwood Union Middle UHS No 19', 'Washington', 'More', 44.2540115, -72.7864532],
          ['Main Street Middle School', 'Washington', 'Montpelier', 44.2629656, -72.5695793],
          ['Montpelier High School', 'Washington', 'Montpelier', 44.2605339, -72.5869944],
          ['More Elementary School', 'Washington', 'More', 44.247814, -72.7630619],
          ['Northfield Elementary School', 'Washington', 'Northfield', 44.15455, -72.662072],
          ['Northfield Middle-High School', 'Washington', 'Northfield', 44.153568, -72.660537],
          ['Roxbury Village School', 'Washington', 'Roxbury', 44.092411, -72.733185],
          ['Rumney Memorial School (Middlesex)', 'Washington', 'Middlesex', 44.351158, -72.602592],
          ['Spaulding UHS No 41', 'Washington', 'Barre', 44.1894129, -72.4935438],
          ['Thatcher Brook Primary US No 45', 'Washington', 'Waterbury', 44.339128, -72.753139],
          ['Thatcher Brook Primary US No 45', 'Washington', 'Woodstock', 44.339128, -72.753139],
          ['Twinfield US No 33', 'Washington', 'Montpelier', 44.2979839, -72.3947042],
          ['U32 UHS No 32', 'Washington', 'Underhill', 44.2445261, -72.5267125],
          ['Union Elementary School', 'Washington', 'Colchester', 44.2596714, -72.5711386],
          ['Waitsfield Elementary School', 'Washington', 'Walden', 44.1944527, -72.8193328],
          ['Warren Elementary School', 'Washington', 'Washington', 44.1162276, -72.851123],
          ['Woodbury Elementary School', 'Washington', 'Woodford', 44.440035, -72.416224],
          ['Academy School', 'Windham', 'West Brattleboro', 42.851176, -72.597994],
          ['Athens-Grafton Joint Contract School', 'Windham', 'Grafton', 43.170174, -72.609009],
          ['Bellows Falls Middle School', 'Windham', ' of Rockingham', 43.1333656, -72.4462749],
          ['Bellows Falls UHS No 27', 'Windham', 'Bellows Falls', 43.1364725, -72.4442318],
          ['Bratt Area Middle School No 6', 'Windham', 'Brattleboro', 42.83564, -72.561716],
          ['Brattleboro UHS No 6', 'Windham', 'Brattleboro', 42.836739, -72.561267],
          ['Central Elementary School', 'Windham', ' of Rockingham', 43.1324177, -72.4505775],
          ['Dover Elementary School', 'Windham', 'Dover', 42.938863, -72.80991],
          ['Dummerston Schools', 'Windham', 'Dummerston', 42.9336033, -72.5379992],
          ['Flood Brook US No 20', 'Windham', 'Londonderry', 43.2367859, -72.8480324],
          ['Green Street School', 'Windham', 'Brattleboro', 42.85174, -72.565],
          ['Guilford Central School', 'Windham', 'Guilford', 42.800709, -72.6223515],
          ['Halifax School', 'Windham', 'Halifax', 42.784431, -72.768503],
          ['Jamaica Village School', 'Windham', 'Jamaica', 43.103771, -72.775345],
          ['Leland And Gray UHS No 34', 'Windham', 'Townshend', 43.0465917, -72.6670936],
          ['Marlboro Elementary School', 'Windham', 'Marlboro', 42.868698, -72.719688],
          ['Newbrook Elementary School', 'Windham', 'Newfane', 42.9599339, -72.650055],
          ['Oak Grove School', 'Windham', 'Brattleboro', 42.8401525, -72.5579901],
          ['Putney Central School', 'Windham', 'Putney', 42.9858892, -72.5284672],
          ['Saxtons River Elementary School', 'Windham', ' of Rockingham', 43.140396, -72.509491],
          ['Townshend Village School', 'Windham', 'Troy', 43.0466625, -72.6695342],
          ['Twin Valley Elementary School', 'Windham', 'Whitingham', 42.888988, -72.862106],
          ['Twin Valley Middle High School', 'Windham', 'Plainfield', 42.7879692, -72.8401605],
          ['Vernon Elementary School', 'Windham', 'Topsham', 42.776263, -72.518569],
          ['Wardsboro Central School', 'Windham', 'Warren', 43.0479574, -72.7872992],
          ['Westminster Schools', 'Windham', 'West Fairlee', 43.070309, -72.463478],
          ['Windham Elementary School', 'Windham', 'Windsor', 43.1658297, -72.7253414],
          ['Albert Bridge School (West Wind)', 'Windsor', 'West Windsor', 43.4694223, -72.4714816],
          ['Barnard Academy', 'Windsor', 'Barnard', 43.7271345, -72.6195002],
          ['Bethel Elementary School', 'Windsor', 'Bethel', 43.833232, -72.6435],
          ['Black River US No 39', 'Windsor', 'Ludlow', 43.397114, -72.688557],
          ['Cavendish  Elementary School', 'Windsor', 'Cavendish', 43.3836765, -72.6368872],
          ['Chester Andover US No 29', 'Windsor', 'Chester', 43.2646923, -72.5954546],
          ['Dothan Brook School', 'Windsor', 'Hartford', 43.687628, -72.3217171],
          ['Elm Hill School', 'Windsor', 'Springfield', 43.3061209, -72.4844404],
          ['Green Mountain UHS No 35', 'Windsor', 'Chester', 43.253613, -72.581459],
          ['Hartford High School', 'Windsor', 'Hartford', 43.657753, -72.318855],
          ['Hartford MemorialMiddle School', 'Windsor', 'Hartford', 43.6563504, -72.3201992],
          ['Hartland Elementary School', 'Windsor', 'Hartland', 43.5379884, -72.3942648],
          ['LudloWest Elementary School', 'Windsor', 'Ludlow', 43.3979669, -72.688735],
          ['Marion West Cross School', 'Windsor', 'Norwich', 43.7132317, -72.3063544],
          ['Ottauquechee School', 'Windsor', 'Hartford', 43.6494962, -72.4168673],
          ['Reading Elementary School', 'Windsor', 'Reading', 43.453125, -72.536659],
          ['Riverside Middle School', 'Windsor', 'Springfield', 43.3045496, -72.4971886],
          ['Rochester School', 'Windsor', 'Rochester', 43.8717466, -72.8091872],
          ['Sharon Elementary School', 'Windsor', 'Sharon', 43.7849689, -72.456039],
          ['South Royalton Elem-High School', 'Windsor', 'Royalton', 43.819316, -72.517403],
          ['Springfield High School', 'Windsor', 'Springfield', 43.2811126, -72.4781557],
          ['Stockbridge Central School', 'Windsor', 'Stockbridge', 43.7642684, -72.7180883],
          ['The Prosper Valley School', 'Windsor', 'Thetford', 43.653466, -72.528949],
          ['Union Street School', 'Windsor', 'Vergennes', 43.2955001, -72.4880611],
          ['Weathersfield School', 'Windsor', 'Wells', 43.4112673, -72.4097514],
          ['Whitcomb Jr-Sr High School', 'Windsor', 'Hartford', 43.833232, -72.6435],
          ['White River School', 'Windsor', 'Whiting', 43.6533157, -72.3181378],
          ['Windsor School', 'Windsor', 'Winooski', 43.48093, -72.394295],
          ['Woodstock Elementary School', 'Windsor', 'Woodstock', 43.622024, -72.519711],
          ['Woodstock Sr UHS No 4', 'Windsor', 'Woodstock', 43.613313, -72.54568],
          ['Woodstock Union Middle School', 'Windsor', 'Woodstock', 43.613056, -72.545857]
        ];
        
        let people = [
          {
              id: 1,
              county: 'Addison',
              name: 'Addison Central School',
              town: 'Addison',
              lat: 44.0879679,
              lng: -73.304713,
              latLng: [44.0879679, -73.304713]
          },
          {
              id: 2,
              county: 'Addison',
              name: 'Beeman Elementary School',
              town: 'New Haven',
              lat: 44.125328,
              lng: -73.153222,
              latLng: [44.125328, -73.153222]
          },
          {
              id: 3,
              county: 'Addison',
              name: 'Bingham Memorial School',
              town: 'Cornwall',
              lat: 43.963902,
              lng: -73.2063979,
              latLng: [43.963902, -73.2063979]
          },
          {
              id: 4,
              county: 'Addison',
              name: 'Bridport Central School',
              town: 'Bridport',
              lat: 43.9809453,
              lng: -73.3158066,
              latLng: [43.9809453, -73.3158066]
          },
          {
              id: 5,
              county: 'Addison',
              name: 'Bristol Elementary School',
              town: 'Bristol',
              lat: 44.1379395,
              lng: -73.0770421,
              latLng: [44.1379395, -73.0770421]
          },
          {
              id: 6,
              county: 'Addison',
              name: 'Ferrisburgh Central School',
              town: 'Ferrisburgh',
              lat: 44.2067279,
              lng: -73.2478787,
              latLng: [44.2067279, -73.2478787]
          },
          {
              id: 7,
              county: 'Addison',
              name: 'Leicester Central School',
              town: 'Leicester',
              lat: 43.8667079,
              lng: -73.1088581,
              latLng: [43.8667079, -73.1088581]
          },
          {
              id: 8,
              county: 'Addison',
              name: 'Lincoln Community School',
              town: 'Lincoln',
              lat: 44.09766,
              lng: -72.986305,
              latLng: [44.09766, -72.986305]
          },
          {
              id: 9,
              county: 'Addison',
              name: 'Middlebury Id No 4',
              town: 'Middlebury',
              lat: 44.0105946,
              lng: -73.1616527,
              latLng: [44.0105946, -73.1616527]
          },
          {
              id: 10,
              county: 'Addison',
              name: 'Middlebury Union High School',
              town: 'Middlebury',
              lat: 44.0065835,
              lng: -73.1630676,
              latLng: [44.0065835, -73.1630676]
          },
          {
              id: 11,
              county: 'Addison',
              name: 'Middlebury Union Middle School No 3',
              town: 'Middlebury',
              lat: 43.9982614,
              lng: -73.1524356,
              latLng: [43.9982614, -73.1524356]
          },
          {
              id: 12,
              county: 'Addison',
              name: 'Monkton Central School',
              town: 'Monkton',
              lat: 44.2441871,
              lng: -73.1389253,
              latLng: [44.2441871, -73.1389253]
          },
          {
              id: 13,
              county: 'Addison',
              name: 'Mt Abraham UHS No 28',
              town: 'Bristol',
              lat: 44.1354759,
              lng: -73.0939654,
              latLng: [44.1354759, -73.0939654]
          },
          {
              id: 14,
              county: 'Addison',
              name: 'Orwell Village School',
              town: 'Orwell',
              lat: 43.804552,
              lng: -73.299154,
              latLng: [43.804552, -73.299154]
          },
          {
              id: 15,
              county: 'Addison',
              name: 'Ripton Elementary School',
              town: 'Ripton',
              lat: 43.9852144,
              lng: -73.0382352,
              latLng: [43.9852144, -73.0382352]
          },
          {
              id: 16,
              county: 'Addison',
              name: 'Robinson School',
              town: 'Starksboro',
              lat: 44.223866,
              lng: -73.057693,
              latLng: [44.223866, -73.057693]
          },
          {
              id: 17,
              county: 'Addison',
              name: 'Salisbury Community School',
              town: 'Salisbury',
              lat: 43.9197119,
              lng: -73.11792,
              latLng: [43.9197119, -73.11792]
          },
          {
              id: 18,
              county: 'Addison',
              name: 'Shoreham Elementary School',
              town: 'Shoreham',
              lat: 43.891708,
              lng: -73.316238,
              latLng: [43.891708, -73.316238]
          },
          {
              id: 19,
              county: 'Addison',
              name: 'Vergennes UES No 44',
              town: 'Vergennes',
              lat: 44.1671634,
              lng: -73.2480837,
              latLng: [44.1671634, -73.2480837]
          },
          {
              id: 20,
              county: 'Addison',
              name: 'Vergennes UHS No 5',
              town: 'Vernon',
              lat: 44.1699484,
              lng: -73.2431089,
              latLng: [44.1699484, -73.2431089]
          },
          {
              id: 21,
              county: 'Addison',
              name: 'Weybridge Elementary School',
              town: 'Bethel',
              lat: 44.04174,
              lng: -73.212502,
              latLng: [44.04174, -73.212502]
          },
          {
              id: 22,
              county: 'Addison',
              name: 'Whiting Village School',
              town: 'Williamstown',
              lat: 43.858121,
              lng: -73.2015179,
              latLng: [43.858121, -73.2015179]
          },
          {
              id: 23,
              county: 'Bennington',
              name: 'Arlington Memorial High School',
              town: 'Arlington',
              lat: 43.065997,
              lng: -73.1508814,
              latLng: [43.065997, -73.1508814]
          },
          {
              id: 24,
              county: 'Bennington',
              name: 'Bennington Elementary School',
              town: 'Bennington',
              lat: 42.88073,
              lng: -73.1935139,
              latLng: [42.88073, -73.1935139]
          },
          {
              id: 25,
              county: 'Bennington',
              name: 'Burr And Burton Academy',
              town: 'Manchester',
              lat: 43.163803,
              lng: -73.077354,
              latLng: [43.163803, -73.077354]
          },
          {
              id: 26,
              county: 'Bennington',
              name: 'Dorset School',
              town: 'Dorset',
              lat: 43.2219794,
              lng: -73.0657074,
              latLng: [43.2219794, -73.0657074]
          },
          {
              id: 27,
              county: 'Bennington',
              name: 'Fisher School',
              town: 'Arlington',
              lat: 43.066169,
              lng: -73.153659,
              latLng: [43.066169, -73.153659]
          },
          {
              id: 28,
              county: 'Bennington',
              name: 'Manchester Elementary-Middle School',
              town: 'Manchester-Center',
              lat: 43.178738,
              lng: -73.053734,
              latLng: [43.178738, -73.053734]
          },
          {
              id: 29,
              county: 'Bennington',
              name: 'Manchester Elementary-Middle School',
              town: 'Manchester-Center',
              lat: 43.178738,
              lng: -73.053734,
              latLng: [43.178738, -73.053734]
          },
          {
              id: 30,
              county: 'Bennington',
              name: 'Molly Stark School',
              town: 'Bennington',
              lat: 42.8992571,
              lng: -73.2017039,
              latLng: [42.8992571, -73.2017039]
          },
          {
              id: 31,
              county: 'Bennington',
              name: 'Monument Elementary School',
              town: 'Bennington',
              lat: 42.8850209,
              lng: -73.2106215,
              latLng: [42.8850209, -73.2106215]
          },
          {
              id: 32,
              county: 'Bennington',
              name: 'Mt Anthony Sr UHS No 14',
              town: 'Bennington',
              lat: 42.8863217,
              lng: -73.1913331,
              latLng: [42.8863217, -73.1913331]
          },
          {
              id: 33,
              county: 'Bennington',
              name: 'Mt Anthony Union Middle School',
              town: 'Bennington',
              lat: 42.9054159,
              lng: -73.1877428,
              latLng: [42.9054159, -73.1877428]
          },
          {
              id: 34,
              county: 'Bennington',
              name: 'Pownal Elementary School',
              town: 'Pownal',
              lat: 42.8008263,
              lng: -73.2179873,
              latLng: [42.8008263, -73.2179873]
          },
          {
              id: 35,
              county: 'Bennington',
              name: 'Readsboro Elementary School',
              town: 'Readsboro',
              lat: 42.771786,
              lng: -72.940575,
              latLng: [42.771786, -72.940575]
          },
          {
              id: 36,
              county: 'Bennington',
              name: 'Shaftsbury Elementary School',
              town: 'Shaftsbury',
              lat: 42.945183,
              lng: -73.207977,
              latLng: [42.945183, -73.207977]
          },
          {
              id: 37,
              county: 'Bennington',
              name: 'Stamford Elementary School',
              town: 'Stamford',
              lat: 42.7549141,
              lng: -73.0672467,
              latLng: [42.7549141, -73.0672467]
          },
          {
              id: 38,
              county: 'Bennington',
              name: 'Sunderland Elementary School',
              town: 'Burlington',
              lat: 43.0846207,
              lng: -73.1277208,
              latLng: [43.0846207, -73.1277208]
          },
          {
              id: 39,
              county: 'Bennington',
              name: 'Woodford Hollow School',
              town: 'Colchester',
              lat: 42.8939304,
              lng: -73.136866,
              latLng: [42.8939304, -73.136866]
          },
          {
              id: 40,
              county: 'Caledonia',
              name: 'Barnet Elementary School',
              town: 'Barnet',
              lat: 44.307334,
              lng: -72.080737,
              latLng: [44.307334, -72.080737]
          },
          {
              id: 41,
              county: 'Caledonia',
              name: 'Burke Town School',
              town: 'Burke',
              lat: 44.625084,
              lng: -71.960265,
              latLng: [44.625084, -71.960265]
          },
          {
              id: 42,
              county: 'Caledonia',
              name: 'Danville School',
              town: 'Danville',
              lat: 44.4108915,
              lng: -72.1437508,
              latLng: [44.4108915, -72.1437508]
          },
          {
              id: 43,
              county: 'Caledonia',
              name: 'Hardwick Elementary School',
              town: 'Hardwick',
              lat: 44.5033274,
              lng: -72.3681449,
              latLng: [44.5033274, -72.3681449]
          },
          {
              id: 44,
              county: 'Caledonia',
              name: 'Hazen UHS No 26',
              town: 'Hardwick',
              lat: 44.508976,
              lng: -72.364634,
              latLng: [44.508976, -72.364634]
          },
          {
              id: 45,
              county: 'Caledonia',
              name: 'Lyndon Institute',
              town: 'Lyndon',
              lat: 44.5384146,
              lng: -72.0153659,
              latLng: [44.5384146, -72.0153659]
          },
          {
              id: 46,
              county: 'Caledonia',
              name: 'Lyndon Town School',
              town: 'Lyndon',
              lat: 44.5465485,
              lng: -71.9853549,
              latLng: [44.5465485, -71.9853549]
          },
          {
              id: 47,
              county: 'Caledonia',
              name: 'Millers Run School US No 37',
              town: 'Sheffield',
              lat: 44.6026961,
              lng: -72.1192335,
              latLng: [44.6026961, -72.1192335]
          },
          {
              id: 48,
              county: 'Caledonia',
              name: 'Newark School',
              town: 'Newark',
              lat: 44.690121,
              lng: -71.950768,
              latLng: [44.690121, -71.950768]
          },
          {
              id: 49,
              county: 'Caledonia',
              name: 'Peacham Elementary School',
              town: 'Peacham',
              lat: 44.326018,
              lng: -72.16652,
              latLng: [44.326018, -72.16652]
          },
          {
              id: 50,
              county: 'Caledonia',
              name: 'St Johnsbury Academy',
              town: 'Saint Johnsbury',
              lat: 44.4165493,
              lng: -72.0193373,
              latLng: [44.4165493, -72.0193373]
          },
          {
              id: 51,
              county: 'Caledonia',
              name: 'St Johnsbury Schools',
              town: 'Saint Johnsbury',
              lat: 44.4162817,
              lng: -72.0244301,
              latLng: [44.4162817, -72.0244301]
          },
          {
              id: 52,
              county: 'Caledonia',
              name: 'St Johnsbury Schools',
              town: 'Saint Johnsbury',
              lat: 44.4162817,
              lng: -72.0244301,
              latLng: [44.4162817, -72.0244301]
          },
          {
              id: 53,
              county: 'Caledonia',
              name: 'Sutton Village School',
              town: 'Swanton',
              lat: 44.6335849,
              lng: -72.0278777,
              latLng: [44.6335849, -72.0278777]
          },
          {
              id: 54,
              county: 'Caledonia',
              name: 'Walden School',
              town: 'Wallingford',
              lat: 44.452801,
              lng: -72.219322,
              latLng: [44.452801, -72.219322]
          },
          {
              id: 55,
              county: 'Caledonia',
              name: 'Waterford Elementary School',
              town: 'Waterville',
              lat: 44.4025729,
              lng: -71.927544,
              latLng: [44.4025729, -71.927544]
          },
          {
              id: 56,
              county: 'Chittenden',
              name: 'Albert D Lawton School',
              town: 'Essex',
              lat: 44.4869722,
              lng: -73.0987693,
              latLng: [44.4869722, -73.0987693]
          },
          {
              id: 57,
              county: 'Chittenden',
              name: 'Brewster Pierce Elementary School',
              town: 'Huntington',
              lat: 44.2958697,
              lng: -72.9634251,
              latLng: [44.2958697, -72.9634251]
          },
          {
              id: 58,
              county: 'Chittenden',
              name: 'Browns River Middle School',
              town: 'Jericho',
              lat: 44.5192478,
              lng: -72.9441695,
              latLng: [44.5192478, -72.9441695]
          },
          {
              id: 59,
              county: 'Chittenden',
              name: 'Burlington Senior High School',
              town: 'Burlington',
              lat: 44.4963229,
              lng: -73.235261,
              latLng: [44.4963229, -73.235261]
          },
          {
              id: 60,
              county: 'Chittenden',
              name: 'C P Smith School',
              town: 'Burlington',
              lat: 44.513102,
              lng: -73.243035,
              latLng: [44.513102, -73.243035]
          },
          {
              id: 61,
              county: 'Chittenden',
              name: 'Camels Hump Middle School',
              town: 'Richmond',
              lat: 44.4135271,
              lng: -72.9943127,
              latLng: [44.4135271, -72.9943127]
          },
          {
              id: 62,
              county: 'Chittenden',
              name: 'Chamberlin School',
              town: 'South Burlington',
              lat: 44.4713727,
              lng: -73.1654672,
              latLng: [44.4713727, -73.1654672]
          },
          {
              id: 63,
              county: 'Chittenden',
              name: 'Champlain Elementary School',
              town: 'Burlington',
              lat: 44.457065,
              lng: -73.213221,
              latLng: [44.457065, -73.213221]
          },
          {
              id: 64,
              county: 'Chittenden',
              name: 'Champlain Valley UHS No 15',
              town: 'Hinesburg',
              lat: 44.3446552,
              lng: -73.1099525,
              latLng: [44.3446552, -73.1099525]
          },
          {
              id: 65,
              county: 'Chittenden',
              name: 'Charlotte Central School',
              town: 'Charlotte',
              lat: 44.315086,
              lng: -73.226451,
              latLng: [44.315086, -73.226451]
          },
          {
              id: 66,
              county: 'Chittenden',
              name: 'Colchester High School',
              town: 'Colchester',
              lat: 44.5399122,
              lng: -73.2138341,
              latLng: [44.5399122, -73.2138341]
          },
          {
              id: 67,
              county: 'Chittenden',
              name: 'Colchester Middle School',
              town: 'Colchester',
              lat: 44.5405118,
              lng: -73.2097507,
              latLng: [44.5405118, -73.2097507]
          },
          {
              id: 68,
              county: 'Chittenden',
              name: 'Edmunds Elementary School',
              town: 'Burlington',
              lat: 44.475518,
              lng: -73.20729,
              latLng: [44.475518, -73.20729]
          },
          {
              id: 69,
              county: 'Chittenden',
              name: 'Edmunds Middle School',
              town: 'Burlington',
              lat: 44.475468,
              lng: -73.208086,
              latLng: [44.475468, -73.208086]
          },
          {
              id: 70,
              county: 'Chittenden',
              name: 'Essex Community Education Center',
              town: 'Essex',
              lat: 44.4982009,
              lng: -73.1100265,
              latLng: [44.4982009, -73.1100265]
          },
          {
              id: 71,
              county: 'Chittenden',
              name: 'Essex Elementary School',
              town: 'Essex',
              lat: 44.5130041,
              lng: -73.0555147,
              latLng: [44.5130041, -73.0555147]
          },
          {
              id: 72,
              county: 'Chittenden',
              name: 'Essex Middle School',
              town: 'Essex',
              lat: 44.4992447,
              lng: -73.0579969,
              latLng: [44.4992447, -73.0579969]
          },
          {
              id: 73,
              county: 'Chittenden',
              name: 'Founders Memorial School',
              town: 'Essex',
              lat: 44.5004481,
              lng: -73.0553216,
              latLng: [44.5004481, -73.0553216]
          },
          {
              id: 74,
              county: 'Chittenden',
              name: 'Frederick H Tuttle Middle School',
              town: 'South Burlington',
              lat: 44.4567486,
              lng: -73.1774257,
              latLng: [44.4567486, -73.1774257]
          },
          {
              id: 75,
              county: 'Chittenden',
              name: 'Hiawatha School',
              town: 'Essex',
              lat: 44.4885517,
              lng: -73.1269076,
              latLng: [44.4885517, -73.1269076]
          },
          {
              id: 76,
              county: 'Chittenden',
              name: 'Hinesburg Community School',
              town: 'Hinesburg',
              lat: 44.32621,
              lng: -73.10778,
              latLng: [44.32621, -73.10778]
          },
          {
              id: 77,
              county: 'Chittenden',
              name: 'Hinesburg Community School',
              town: 'Hinesburg',
              lat: 44.32621,
              lng: -73.10778,
              latLng: [44.32621, -73.10778]
          },
          {
              id: 78,
              county: 'Chittenden',
              name: 'Integrated Education Arts Academy At Ho Wheeler',
              town: 'Burlington',
              lat: 44.4881833,
              lng: -73.213765,
              latLng: [44.4881833, -73.213765]
          },
          {
              id: 79,
              county: 'Chittenden',
              name: 'J F Kennedy Elementary School',
              town: 'Winooski',
              lat: 44.500416,
              lng: -73.180687,
              latLng: [44.500416, -73.180687]
          },
          {
              id: 80,
              county: 'Chittenden',
              name: 'J J Flynn School',
              town: 'Burlington',
              lat: 44.517023,
              lng: -73.260002,
              latLng: [44.517023, -73.260002]
          },
          {
              id: 81,
              county: 'Chittenden',
              name: 'Jericho Elementary School',
              town: 'Jericho',
              lat: 44.5053714,
              lng: -72.9897701,
              latLng: [44.5053714, -72.9897701]
          },
          {
              id: 82,
              county: 'Chittenden',
              name: 'Lyman C Hunt Middle School',
              town: 'Burlington',
              lat: 44.5132798,
              lng: -73.2491272,
              latLng: [44.5132798, -73.2491272]
          },
          {
              id: 83,
              county: 'Chittenden',
              name: 'Malletts Bay School',
              town: 'Colchester',
              lat: 44.5387028,
              lng: -73.2076928,
              latLng: [44.5387028, -73.2076928]
          },
          {
              id: 84,
              county: 'Chittenden',
              name: 'Milton Elementary School',
              town: 'Milton',
              lat: 44.6324836,
              lng: -73.1098197,
              latLng: [44.6324836, -73.1098197]
          },
          {
              id: 85,
              county: 'Chittenden',
              name: 'Milton Elementary School',
              town: 'Milton',
              lat: 44.6324836,
              lng: -73.1098197,
              latLng: [44.6324836, -73.1098197]
          },
          {
              id: 86,
              county: 'Chittenden',
              name: 'Milton High School',
              town: 'Milton',
              lat: 44.6280816,
              lng: -73.1197457,
              latLng: [44.6280816, -73.1197457]
          },
          {
              id: 87,
              county: 'Chittenden',
              name: 'Milton High School',
              town: 'Milton',
              lat: 44.6280816,
              lng: -73.1197457,
              latLng: [44.6280816, -73.1197457]
          },
          {
              id: 88,
              county: 'Chittenden',
              name: 'Milton Middle School',
              town: 'Milton',
              lat: 44.6280816,
              lng: -73.1197457,
              latLng: [44.6280816, -73.1197457]
          },
          {
              id: 89,
              county: 'Chittenden',
              name: 'Mt Mansfield USD',
              town: 'Jericho',
              lat: 44.486184,
              lng: -72.962048,
              latLng: [44.486184, -72.962048]
          },
          {
              id: 90,
              county: 'Chittenden',
              name: 'Orchard School',
              town: 'South Burlington',
              lat: 44.439761,
              lng: -73.207682,
              latLng: [44.439761, -73.207682]
          },
          {
              id: 91,
              county: 'Chittenden',
              name: 'Porters Point School',
              town: 'Colchester',
              lat: 44.5412597,
              lng: -73.2553252,
              latLng: [44.5412597, -73.2553252]
          },
          {
              id: 92,
              county: 'Chittenden',
              name: 'Richmond Elementary School',
              town: 'Richmond',
              lat: 44.4126297,
              lng: -72.9939168,
              latLng: [44.4126297, -72.9939168]
          },
          {
              id: 93,
              county: 'Chittenden',
              name: 'Rick Marcotte Central School',
              town: 'South Burlington',
              lat: 44.467307,
              lng: -73.1769103,
              latLng: [44.467307, -73.1769103]
          },
          {
              id: 94,
              county: 'Chittenden',
              name: 'Shelburne Community School',
              town: 'Shelburne',
              lat: 44.3807539,
              lng: -73.2353556,
              latLng: [44.3807539, -73.2353556]
          },
          {
              id: 95,
              county: 'Chittenden',
              name: 'Shelburne Community School',
              town: 'Shelburne',
              lat: 44.3807539,
              lng: -73.2353556,
              latLng: [44.3807539, -73.2353556]
          },
          {
              id: 96,
              county: 'Chittenden',
              name: 'Smilie Memorial School (Bolton)',
              town: 'Bolton',
              lat: 44.373783,
              lng: -72.876854,
              latLng: [44.373783, -72.876854]
          },
          {
              id: 97,
              county: 'Chittenden',
              name: 'South Burlington High School',
              town: 'South Burlington',
              lat: 44.454924,
              lng: -73.177891,
              latLng: [44.454924, -73.177891]
          },
          {
              id: 98,
              county: 'Chittenden',
              name: 'Summit Street School',
              town: 'Sunderland',
              lat: 44.493408,
              lng: -73.11366,
              latLng: [44.493408, -73.11366]
          },
          {
              id: 99,
              county: 'Chittenden',
              name: 'Sustain Academy at Lawrence Barnes',
              town: 'Sutton',
              lat: 44.484143,
              lng: -73.2167958,
              latLng: [44.484143, -73.2167958]
          },
          {
              id: 100,
              county: 'Chittenden',
              name: 'Thomas Fleming School',
              town: 'Tinmouth',
              lat: 44.49478,
              lng: -73.113504,
              latLng: [44.49478, -73.113504]
          },
          {
              id: 101,
              county: 'Chittenden',
              name: 'Underhill Central Elementary School',
              town: 'Jericho',
              lat: 44.5089403,
              lng: -72.8951245,
              latLng: [44.5089403, -72.8951245]
          },
          {
              id: 102,
              county: 'Chittenden',
              name: 'Underhill Id Elementary School',
              town: 'Montpelier',
              lat: 44.5179951,
              lng: -72.9456161,
              latLng: [44.5179951, -72.9456161]
          },
          {
              id: 103,
              county: 'Chittenden',
              name: 'Union Memorial School',
              town: 'Springfield',
              lat: 44.5490086,
              lng: -73.1601394,
              latLng: [44.5490086, -73.1601394]
          },
          {
              id: 104,
              county: 'Chittenden',
              name: 'Westford Elementary School',
              town: 'Westminster',
              lat: 44.602952,
              lng: -73.0189539,
              latLng: [44.602952, -73.0189539]
          },
          {
              id: 105,
              county: 'Chittenden',
              name: 'Williston Schools',
              town: 'Williston',
              lat: 44.44059,
              lng: -73.073311,
              latLng: [44.44059, -73.073311]
          },
          {
              id: 106,
              county: 'Chittenden',
              name: 'Williston Schools',
              town: 'Williston',
              lat: 44.44059,
              lng: -73.073311,
              latLng: [44.44059, -73.073311]
          },
          {
              id: 107,
              county: 'Chittenden',
              name: 'Williston Schools',
              town: 'Windham',
              lat: 44.447771,
              lng: -73.096256,
              latLng: [44.447771, -73.096256]
          },
          {
              id: 108,
              county: 'Chittenden',
              name: 'Winooski High School',
              town: 'Winooski',
              lat: 44.501157,
              lng: -73.18101,
              latLng: [44.501157, -73.18101]
          },
          {
              id: 109,
              county: 'Chittenden',
              name: 'Winooski Middle School',
              town: 'Wolcott',
              lat: 44.501157,
              lng: -73.18101,
              latLng: [44.501157, -73.18101]
          },
          {
              id: 110,
              county: 'Chittenden',
              name: 'Woodside Juvenile Rehab Center',
              town: 'Woodstock',
              lat: 44.5022201,
              lng: -73.1447091,
              latLng: [44.5022201, -73.1447091]
          },
          {
              id: 111,
              county: 'Essex',
              name: 'Brighton Elementary School',
              town: 'Brighton',
              lat: 44.8215785,
              lng: -71.8938945,
              latLng: [44.8215785, -71.8938945]
          },
          {
              id: 112,
              county: 'Essex',
              name: 'Canaan Schools',
              town: 'Canaan',
              lat: 44.99537,
              lng: -71.537662,
              latLng: [44.99537, -71.537662]
          },
          {
              id: 113,
              county: 'Essex',
              name: 'Concord Graded-Middle School',
              town: 'Concord',
              lat: 44.4266783,
              lng: -71.8904607,
              latLng: [44.4266783, -71.8904607]
          },
          {
              id: 114,
              county: 'Essex',
              name: 'Lunenburg-Gilman Schools',
              town: 'Lunenburg',
              lat: 44.4147729,
              lng: -71.714483,
              latLng: [44.4147729, -71.714483]
          },
          {
              id: 115,
              county: 'Franklin',
              name: 'Bakersfield School',
              town: 'Bakersfield',
              lat: 44.7842811,
              lng: -72.8027989,
              latLng: [44.7842811, -72.8027989]
          },
          {
              id: 116,
              county: 'Franklin',
              name: 'Bellows Free Academy (Fairfax)',
              town: 'Fairfax',
              lat: 44.6635996,
              lng: -73.0132732,
              latLng: [44.6635996, -73.0132732]
          },
          {
              id: 117,
              county: 'Franklin',
              name: 'Bellows Free Academy (St Albans)',
              town: 'Saint Albans City',
              lat: 44.8080266,
              lng: -73.0828117,
              latLng: [44.8080266, -73.0828117]
          },
          {
              id: 118,
              county: 'Franklin',
              name: 'Bellows Free Academy HS (Fairfax)',
              town: 'Fairfax',
              lat: 44.6635539,
              lng: -73.0133096,
              latLng: [44.6635539, -73.0133096]
          },
          {
              id: 119,
              county: 'Franklin',
              name: 'Berkshire Elementary School',
              town: 'Berkshire',
              lat: 44.9724974,
              lng: -72.7662099,
              latLng: [44.9724974, -72.7662099]
          },
          {
              id: 120,
              county: 'Franklin',
              name: 'Enosburg Falls Elementary School',
              town: 'Enosburg',
              lat: 44.904316,
              lng: -72.801033,
              latLng: [44.904316, -72.801033]
          },
          {
              id: 121,
              county: 'Franklin',
              name: 'Enosburg Falls Middle-High School',
              town: 'Enosburg',
              lat: 44.9053176,
              lng: -72.8039149,
              latLng: [44.9053176, -72.8039149]
          },
          {
              id: 122,
              county: 'Franklin',
              name: 'Enosburg Falls Middle-High School',
              town: 'Enosburg',
              lat: 44.9053176,
              lng: -72.8039149,
              latLng: [44.9053176, -72.8039149]
          },
          {
              id: 123,
              county: 'Franklin',
              name: 'Fairfield Center School',
              town: 'Fairfield',
              lat: 44.80051,
              lng: -72.947922,
              latLng: [44.80051, -72.947922]
          },
          {
              id: 124,
              county: 'Franklin',
              name: 'Fletcher Elementary School',
              town: 'Cambridge',
              lat: 44.67049,
              lng: -72.923782,
              latLng: [44.67049, -72.923782]
          },
          {
              id: 125,
              county: 'Franklin',
              name: 'Franklin Elementary School',
              town: 'Franklin',
              lat: 44.9842389,
              lng: -72.9201647,
              latLng: [44.9842389, -72.9201647]
          },
          {
              id: 126,
              county: 'Franklin',
              name: 'Georgia Elementary-Middle School',
              town: 'Georgia',
              lat: 44.7350207,
              lng: -73.1144163,
              latLng: [44.7350207, -73.1144163]
          },
          {
              id: 127,
              county: 'Franklin',
              name: 'Georgia Elementary-Middle School',
              town: 'Georgia',
              lat: 44.7350207,
              lng: -73.1144163,
              latLng: [44.7350207, -73.1144163]
          },
          {
              id: 128,
              county: 'Franklin',
              name: 'Highgate Elementary School',
              town: 'Highgate',
              lat: 44.94117,
              lng: -73.044022,
              latLng: [44.94117, -73.044022]
          },
          {
              id: 129,
              county: 'Franklin',
              name: 'Missisquoi Valley UHS No 7',
              town: 'Swanton',
              lat: 44.927863,
              lng: -73.1018239,
              latLng: [44.927863, -73.1018239]
          },
          {
              id: 130,
              county: 'Franklin',
              name: 'Montgomery Elementary School',
              town: 'Montgomery',
              lat: 44.8864293,
              lng: -72.6162041,
              latLng: [44.8864293, -72.6162041]
          },
          {
              id: 131,
              county: 'Franklin',
              name: 'Richford Elementary School',
              town: 'Richford',
              lat: 44.9859909,
              lng: -72.6802834,
              latLng: [44.9859909, -72.6802834]
          },
          {
              id: 132,
              county: 'Franklin',
              name: 'Richford Jr-Sr High School',
              town: 'Richford',
              lat: 44.995025,
              lng: -72.670086,
              latLng: [44.995025, -72.670086]
          },
          {
              id: 133,
              county: 'Franklin',
              name: 'Sheldon Elementary School',
              town: 'Sheldon',
              lat: 44.900993,
              lng: -72.969269,
              latLng: [44.900993, -72.969269]
          },
          {
              id: 134,
              county: 'Franklin',
              name: 'St Albans City School',
              town: 'Saint Albans City',
              lat: 44.8203212,
              lng: -73.0918318,
              latLng: [44.8203212, -73.0918318]
          },
          {
              id: 135,
              county: 'Franklin',
              name: 'St Albans Town Education Center',
              town: 'Saint Albans City',
              lat: 44.8016334,
              lng: -73.0860045,
              latLng: [44.8016334, -73.0860045]
          },
          {
              id: 136,
              county: 'Franklin',
              name: 'Swanton Schools',
              town: 'Waterbury',
              lat: 44.9160554,
              lng: -73.1147285,
              latLng: [44.9160554, -73.1147285]
          },
          {
              id: 137,
              county: 'Grafton',
              name: 'Orford Schools',
              town: 'Hanover',
              lat: 43.7200805,
              lng: -72.2662366,
              latLng: [43.7200805, -72.2662366]
          },
          {
              id: 138,
              county: 'Grafton',
              name: 'Rivendell Academy',
              town: 'Orford',
              lat: 43.899294,
              lng: -72.1376509,
              latLng: [43.899294, -72.1376509]
          },
          {
              id: 139,
              county: 'Grand Isle',
              name: 'Alburgh Community Education Center',
              town: 'Alburgh',
              lat: 44.979204,
              lng: -73.2982707,
              latLng: [44.979204, -73.2982707]
          },
          {
              id: 140,
              county: 'Grand Isle',
              name: 'Folsom Education And Community Center',
              town: 'South Hero',
              lat: 44.636311,
              lng: -73.3022079,
              latLng: [44.636311, -73.3022079]
          },
          {
              id: 141,
              county: 'Grand Isle',
              name: 'Grand Isle  School',
              town: 'Grand Isle',
              lat: 44.725599,
              lng: -73.2915204,
              latLng: [44.725599, -73.2915204]
          },
          {
              id: 142,
              county: 'Grand Isle',
              name: 'Isle La Motte Elementary School',
              town: 'Isle La Motte',
              lat: 44.8823346,
              lng: -73.346067,
              latLng: [44.8823346, -73.346067]
          },
          {
              id: 143,
              county: 'Grand Isle',
              name: 'North Hero School',
              town: 'North Hero',
              lat: 44.8508342,
              lng: -73.2634981,
              latLng: [44.8508342, -73.2634981]
          },
          {
              id: 144,
              county: 'Lamoille',
              name: 'Cambridge Elementary School',
              town: 'Cambridge',
              lat: 44.6444743,
              lng: -72.8267715,
              latLng: [44.6444743, -72.8267715]
          },
          {
              id: 145,
              county: 'Lamoille',
              name: 'Eden Central School',
              town: 'Eden',
              lat: 44.704038,
              lng: -72.563901,
              latLng: [44.704038, -72.563901]
          },
          {
              id: 146,
              county: 'Lamoille',
              name: 'Elmore School',
              town: 'Wolcott',
              lat: 44.5393373,
              lng: -72.5222732,
              latLng: [44.5393373, -72.5222732]
          },
          {
              id: 147,
              county: 'Lamoille',
              name: 'Hyde Park Elementary School',
              town: 'Hyde Park',
              lat: 44.591888,
              lng: -72.6137179,
              latLng: [44.591888, -72.6137179]
          },
          {
              id: 148,
              county: 'Lamoille',
              name: 'Johnson Elementary School',
              town: 'Johnson',
              lat: 44.637031,
              lng: -72.674763,
              latLng: [44.637031, -72.674763]
          },
          {
              id: 149,
              county: 'Lamoille',
              name: 'Lamoille UHS No 18',
              town: 'Hyde Park',
              lat: 44.6010887,
              lng: -72.6319369,
              latLng: [44.6010887, -72.6319369]
          },
          {
              id: 150,
              county: 'Lamoille',
              name: 'Lamoille Union Middle School No 18',
              town: 'Hyde Park',
              lat: 44.6010887,
              lng: -72.6319369,
              latLng: [44.6010887, -72.6319369]
          },
          {
              id: 151,
              county: 'Lamoille',
              name: 'Morristown Elementary Schools',
              town: 'Morristown',
              lat: 44.5636467,
              lng: -72.5855112,
              latLng: [44.5636467, -72.5855112]
          },
          {
              id: 152,
              county: 'Lamoille',
              name: 'Peoples Academy',
              town: 'Morristown',
              lat: 44.5626651,
              lng: -72.590118,
              latLng: [44.5626651, -72.590118]
          },
          {
              id: 153,
              county: 'Lamoille',
              name: 'Peoples Academy Middle School',
              town: 'Morristown',
              lat: 44.5626651,
              lng: -72.590118,
              latLng: [44.5626651, -72.590118]
          },
          {
              id: 154,
              county: 'Lamoille',
              name: 'Stowe Elementary School',
              town: 'Stowe',
              lat: 44.4630988,
              lng: -72.6842541,
              latLng: [44.4630988, -72.6842541]
          },
          {
              id: 155,
              county: 'Lamoille',
              name: 'Stowe Middle-High School',
              town: 'Stowe',
              lat: 44.46533,
              lng: -72.726585,
              latLng: [44.46533, -72.726585]
          },
          {
              id: 156,
              county: 'Lamoille',
              name: 'Stowe Middle-High School',
              town: 'Sudbury',
              lat: 44.46533,
              lng: -72.726585,
              latLng: [44.46533, -72.726585]
          },
          {
              id: 157,
              county: 'Lamoille',
              name: 'Waterville Elementary School',
              town: 'Weathersfield',
              lat: 44.726855,
              lng: -72.74841,
              latLng: [44.726855, -72.74841]
          },
          {
              id: 158,
              county: 'Lamoille',
              name: 'Wolcott Elementary School',
              town: 'Woodbury',
              lat: 44.538219,
              lng: -72.453148,
              latLng: [44.538219, -72.453148]
          },
          {
              id: 159,
              county: 'Orange',
              name: 'Blue Mountain US No 21',
              town: 'Newbury',
              lat: 44.1553744,
              lng: -72.0833144,
              latLng: [44.1553744, -72.0833144]
          },
          {
              id: 160,
              county: 'Orange',
              name: 'Bradford Elementary School',
              town: 'Bradford',
              lat: 44.0026079,
              lng: -72.1224734,
              latLng: [44.0026079, -72.1224734]
          },
          {
              id: 161,
              county: 'Orange',
              name: 'Braintree School',
              town: 'Braintree',
              lat: 43.955559,
              lng: -72.72245,
              latLng: [43.955559, -72.72245]
          },
          {
              id: 162,
              county: 'Orange',
              name: 'Brookfield Elementary School',
              town: 'Brookfield',
              lat: 44.016395,
              lng: -72.606683,
              latLng: [44.016395, -72.606683]
          },
          {
              id: 163,
              county: 'Orange',
              name: 'Chelsea Elementary-High School',
              town: 'Chelsea',
              lat: 43.987282,
              lng: -72.446617,
              latLng: [43.987282, -72.446617]
          },
          {
              id: 164,
              county: 'Orange',
              name: 'Newbury Elementary School',
              town: 'Newbury',
              lat: 44.0794494,
              lng: -72.0603798,
              latLng: [44.0794494, -72.0603798]
          },
          {
              id: 165,
              county: 'Orange',
              name: 'Newton School',
              town: 'Strafford',
              lat: 43.8350684,
              lng: -72.3653719,
              latLng: [43.8350684, -72.3653719]
          },
          {
              id: 166,
              county: 'Orange',
              name: 'Orange Center School',
              town: 'Orange',
              lat: 44.1490229,
              lng: -72.4035558,
              latLng: [44.1490229, -72.4035558]
          },
          {
              id: 167,
              county: 'Orange',
              name: 'Oxbow UHS No 30',
              town: 'Bradford',
              lat: 44.0078701,
              lng: -72.1139269,
              latLng: [44.0078701, -72.1139269]
          },
          {
              id: 168,
              county: 'Orange',
              name: 'Randolph Elementary School',
              town: 'Randolph',
              lat: 43.9338797,
              lng: -72.6604606,
              latLng: [43.9338797, -72.6604606]
          },
          {
              id: 169,
              county: 'Orange',
              name: 'Randolph Elementary School',
              town: 'Randolph',
              lat: 43.9338797,
              lng: -72.6604606,
              latLng: [43.9338797, -72.6604606]
          },
          {
              id: 170,
              county: 'Orange',
              name: 'Randolph UHS No 2',
              town: 'Randolph',
              lat: 43.930991,
              lng: -72.659752,
              latLng: [43.930991, -72.659752]
          },
          {
              id: 171,
              county: 'Orange',
              name: 'Randolph UHS No 2',
              town: 'Randolph',
              lat: 43.930991,
              lng: -72.659752,
              latLng: [43.930991, -72.659752]
          },
          {
              id: 172,
              county: 'Orange',
              name: 'Samuel Morey Elementary School',
              town: 'Fairlee',
              lat: 43.9079275,
              lng: -72.1461984,
              latLng: [43.9079275, -72.1461984]
          },
          {
              id: 173,
              county: 'Orange',
              name: 'Thetford Academy',
              town: 'Thetford',
              lat: 43.8144932,
              lng: -72.2312088,
              latLng: [43.8144932, -72.2312088]
          },
          {
              id: 174,
              county: 'Orange',
              name: 'Thetford Elementary School',
              town: 'Essex',
              lat: 43.8195834,
              lng: -72.2318682,
              latLng: [43.8195834, -72.2318682]
          },
          {
              id: 175,
              county: 'Orange',
              name: 'Tunbridge Central School',
              town: 'Wilmington',
              lat: 43.916965,
              lng: -72.474808,
              latLng: [43.916965, -72.474808]
          },
          {
              id: 176,
              county: 'Orange',
              name: 'Waits River Valley US No 36',
              town: 'Waitsfield',
              lat: 44.0797483,
              lng: -72.261316,
              latLng: [44.0797483, -72.261316]
          },
          {
              id: 177,
              county: 'Orange',
              name: 'Washington Village School',
              town: 'Waterford',
              lat: 44.1078548,
              lng: -72.4315601,
              latLng: [44.1078548, -72.4315601]
          },
          {
              id: 178,
              county: 'Orange',
              name: 'Westshire School',
              town: 'Weybridge',
              lat: 43.9065664,
              lng: -72.2630234,
              latLng: [43.9065664, -72.2630234]
          },
          {
              id: 179,
              county: 'Orange',
              name: 'Williamstown Elementary School',
              town: 'Williamstown',
              lat: 44.123554,
              lng: -72.545708,
              latLng: [44.123554, -72.545708]
          },
          {
              id: 180,
              county: 'Orange',
              name: 'Williamstown Middle-High School',
              town: 'Williston',
              lat: 44.1262355,
              lng: -72.546661,
              latLng: [44.1262355, -72.546661]
          },
          {
              id: 181,
              county: 'Orleans',
              name: 'Albany Community School',
              town: 'Albany',
              lat: 44.737995,
              lng: -72.376839,
              latLng: [44.737995, -72.376839]
          },
          {
              id: 182,
              county: 'Orleans',
              name: 'Barton Graded Education School',
              town: 'Barton',
              lat: 44.749023,
              lng: -72.180092,
              latLng: [44.749023, -72.180092]
          },
          {
              id: 183,
              county: 'Orleans',
              name: 'Brownington Central School',
              town: 'Brownington',
              lat: 44.819904,
              lng: -72.137688,
              latLng: [44.819904, -72.137688]
          },
          {
              id: 184,
              county: 'Orleans',
              name: 'Charleston Elementary School',
              town: 'Charleston',
              lat: 44.843109,
              lng: -72.019768,
              latLng: [44.843109, -72.019768]
          },
          {
              id: 185,
              county: 'Orleans',
              name: 'Coventry Village School',
              town: 'Newport',
              lat: 44.8628287,
              lng: -72.2650021,
              latLng: [44.8628287, -72.2650021]
          },
          {
              id: 186,
              county: 'Orleans',
              name: 'Craftsbury Schools',
              town: 'Craftsbury',
              lat: 44.6541939,
              lng: -72.381984,
              latLng: [44.6541939, -72.381984]
          },
          {
              id: 187,
              county: 'Orleans',
              name: 'Derby Elementary School',
              town: 'Derby',
              lat: 45.001503,
              lng: -72.118345,
              latLng: [45.001503, -72.118345]
          },
          {
              id: 188,
              county: 'Orleans',
              name: 'Glover Community School',
              town: 'Glover',
              lat: 44.705938,
              lng: -72.189466,
              latLng: [44.705938, -72.189466]
          },
          {
              id: 189,
              county: 'Orleans',
              name: 'Holland Elementary School',
              town: 'Holland',
              lat: 44.9730783,
              lng: -72.0133074,
              latLng: [44.9730783, -72.0133074]
          },
          {
              id: 190,
              county: 'Orleans',
              name: 'Irasburg Village School',
              town: 'Irasburg',
              lat: 44.8036308,
              lng: -72.2728506,
              latLng: [44.8036308, -72.2728506]
          },
          {
              id: 191,
              county: 'Orleans',
              name: 'Jay-Westfield Joint School',
              town: 'Jay',
              lat: 44.952663,
              lng: -72.435028,
              latLng: [44.952663, -72.435028]
          },
          {
              id: 192,
              county: 'Orleans',
              name: 'Lake Region UHS No 24',
              town: 'Barton',
              lat: 44.782603,
              lng: -72.220649,
              latLng: [44.782603, -72.220649]
          },
          {
              id: 193,
              county: 'Orleans',
              name: 'Lakeview US No 43',
              town: 'Greensboro',
              lat: 44.5807538,
              lng: -72.2939152,
              latLng: [44.5807538, -72.2939152]
          },
          {
              id: 194,
              county: 'Orleans',
              name: 'Lowell GradEducation School',
              town: 'Lowell',
              lat: 44.8053359,
              lng: -72.448708,
              latLng: [44.8053359, -72.448708]
          },
          {
              id: 195,
              county: 'Orleans',
              name: 'Newport City Elementary Schools',
              town: 'Newport',
              lat: 44.9449812,
              lng: -72.1921709,
              latLng: [44.9449812, -72.1921709]
          },
          {
              id: 196,
              county: 'Orleans',
              name: 'Newport Town School',
              town: 'Newport',
              lat: 44.9509976,
              lng: -72.3068892,
              latLng: [44.9509976, -72.3068892]
          },
          {
              id: 197,
              county: 'Orleans',
              name: 'North Country UHS No 22A',
              town: 'Newport',
              lat: 44.946129,
              lng: -72.203537,
              latLng: [44.946129, -72.203537]
          },
          {
              id: 198,
              county: 'Orleans',
              name: 'North Country Union Jr High No 22B',
              town: 'Derby',
              lat: 44.9493054,
              lng: -72.1313134,
              latLng: [44.9493054, -72.1313134]
          },
          {
              id: 199,
              county: 'Orleans',
              name: 'Orleans Elementary School',
              town: 'Barton',
              lat: 44.810055,
              lng: -72.196754,
              latLng: [44.810055, -72.196754]
          },
          {
              id: 200,
              county: 'Orleans',
              name: 'Troy Elementary School',
              town: 'Tunbridge',
              lat: 44.995964,
              lng: -72.405022,
              latLng: [44.995964, -72.405022]
          },
          {
              id: 201,
              county: 'Rutland',
              name: 'Barstow Memorial School',
              town: 'Chittenden',
              lat: 43.7010447,
              lng: -72.9524235,
              latLng: [43.7010447, -72.9524235]
          },
          {
              id: 202,
              county: 'Rutland',
              name: 'Benson Village School',
              town: 'Benson',
              lat: 43.7072408,
              lng: -73.302237,
              latLng: [43.7072408, -73.302237]
          },
          {
              id: 203,
              county: 'Rutland',
              name: 'Castleton Hubbardton US No 42',
              town: 'Castleton',
              lat: 43.612408,
              lng: -73.1782069,
              latLng: [43.612408, -73.1782069]
          },
          {
              id: 204,
              county: 'Rutland',
              name: 'Castleton Hubbardton US No 42',
              town: 'Castleton',
              lat: 43.612408,
              lng: -73.1782069,
              latLng: [43.612408, -73.1782069]
          },
          {
              id: 205,
              county: 'Rutland',
              name: 'Clarendon Elementary School',
              town: 'Clarendon',
              lat: 43.5634,
              lng: -72.96786,
              latLng: [43.5634, -72.96786]
          },
          {
              id: 206,
              county: 'Rutland',
              name: 'Currier Memorial US No 23',
              town: 'Danby',
              lat: 43.3497894,
              lng: -72.9951757,
              latLng: [43.3497894, -72.9951757]
          },
          {
              id: 207,
              county: 'Rutland',
              name: 'Fair Haven Graded School',
              town: 'Fair Haven',
              lat: 43.5948092,
              lng: -73.2644651,
              latLng: [43.5948092, -73.2644651]
          },
          {
              id: 208,
              county: 'Rutland',
              name: 'Fair Haven UHS No 16',
              town: 'Fair Haven',
              lat: 43.6035814,
              lng: -73.2703625,
              latLng: [43.6035814, -73.2703625]
          },
          {
              id: 209,
              county: 'Rutland',
              name: 'Killington Elementary School',
              town: 'Killington',
              lat: 43.6446821,
              lng: -72.7941643,
              latLng: [43.6446821, -72.7941643]
          },
          {
              id: 210,
              county: 'Rutland',
              name: 'Lothrop School',
              town: 'Pittsford',
              lat: 43.7055257,
              lng: -73.0190098,
              latLng: [43.7055257, -73.0190098]
          },
          {
              id: 211,
              county: 'Rutland',
              name: 'Mettawee Community US No 47',
              town: 'Pawlet',
              lat: 43.3857682,
              lng: -73.2243815,
              latLng: [43.3857682, -73.2243815]
          },
          {
              id: 212,
              county: 'Rutland',
              name: 'Middletown Springs Elementary School',
              town: 'Middletown Springs',
              lat: 43.4839636,
              lng: -73.1203383,
              latLng: [43.4839636, -73.1203383]
          },
          {
              id: 213,
              county: 'Rutland',
              name: 'Mill River US No 40',
              town: 'Clarendon',
              lat: 43.547028,
              lng: -72.97152,
              latLng: [43.547028, -72.97152]
          },
          {
              id: 214,
              county: 'Rutland',
              name: 'Mt Holly School',
              town: 'Mount Holly',
              lat: 43.44585,
              lng: -72.823055,
              latLng: [43.44585, -72.823055]
          },
          {
              id: 215,
              county: 'Rutland',
              name: 'Neshobe School',
              town: 'Brandon',
              lat: 43.8264649,
              lng: -73.0552279,
              latLng: [43.8264649, -73.0552279]
          },
          {
              id: 216,
              county: 'Rutland',
              name: 'Northeast Primary School',
              town: 'Rutland',
              lat: 43.617752,
              lng: -72.96212,
              latLng: [43.617752, -72.96212]
          },
          {
              id: 217,
              county: 'Rutland',
              name: 'Northwest Primary School',
              town: 'Rutland',
              lat: 43.6127619,
              lng: -72.991417,
              latLng: [43.6127619, -72.991417]
          },
          {
              id: 218,
              county: 'Rutland',
              name: 'Otter Valley UHS No 7',
              town: 'Brandon',
              lat: 43.7671716,
              lng: -73.0515465,
              latLng: [43.7671716, -73.0515465]
          },
          {
              id: 219,
              county: 'Rutland',
              name: 'Otter Valley UHS No 8',
              town: 'Brandon',
              lat: 43.7671716,
              lng: -73.0515465,
              latLng: [43.7671716, -73.0515465]
          },
          {
              id: 220,
              county: 'Rutland',
              name: 'Poultney Elementary School',
              town: 'Poultney',
              lat: 43.524576,
              lng: -73.237674,
              latLng: [43.524576, -73.237674]
          },
          {
              id: 221,
              county: 'Rutland',
              name: 'Poultney High School',
              town: 'Poultney',
              lat: 43.5165455,
              lng: -73.2294684,
              latLng: [43.5165455, -73.2294684]
          },
          {
              id: 222,
              county: 'Rutland',
              name: 'Proctor Elementary School',
              town: 'Proctor',
              lat: 43.6618191,
              lng: -73.038619,
              latLng: [43.6618191, -73.038619]
          },
          {
              id: 223,
              county: 'Rutland',
              name: 'Proctor Jr-Sr High School',
              town: 'Proctor',
              lat: 43.6550274,
              lng: -73.0291312,
              latLng: [43.6550274, -73.0291312]
          },
          {
              id: 224,
              county: 'Rutland',
              name: 'Rutland High School',
              town: 'Rutland',
              lat: 43.6174987,
              lng: -72.9546905,
              latLng: [43.6174987, -72.9546905]
          },
          {
              id: 225,
              county: 'Rutland',
              name: 'Rutland Intermediate School',
              town: 'Rutland',
              lat: 43.6131406,
              lng: -72.9797488,
              latLng: [43.6131406, -72.9797488]
          },
          {
              id: 226,
              county: 'Rutland',
              name: 'Rutland Middle School',
              town: 'Rutland',
              lat: 43.6129104,
              lng: -72.9809901,
              latLng: [43.6129104, -72.9809901]
          },
          {
              id: 227,
              county: 'Rutland',
              name: 'Rutland Town Elementary School',
              town: 'Rutland',
              lat: 43.6386836,
              lng: -72.9634995,
              latLng: [43.6386836, -72.9634995]
          },
          {
              id: 228,
              county: 'Rutland',
              name: 'Shrewsbury Mountain School',
              town: 'Shrewsbury',
              lat: 43.5255129,
              lng: -72.830734,
              latLng: [43.5255129, -72.830734]
          },
          {
              id: 229,
              county: 'Rutland',
              name: 'Sudbury Country School',
              town: 'Essex',
              lat: 43.822178,
              lng: -73.185951,
              latLng: [43.822178, -73.185951]
          },
          {
              id: 230,
              county: 'Rutland',
              name: 'Tinmouth Elementary School',
              town: 'Townshend',
              lat: 43.4494929,
              lng: -73.0510709,
              latLng: [43.4494929, -73.0510709]
          },
          {
              id: 231,
              county: 'Rutland',
              name: 'Wallingford Village School',
              town: 'Wardsboro',
              lat: 43.470547,
              lng: -72.9751579,
              latLng: [43.470547, -72.9751579]
          },
          {
              id: 232,
              county: 'Rutland',
              name: 'Wells Village School',
              town: 'West Rutland',
              lat: 43.417881,
              lng: -73.206711,
              latLng: [43.417881, -73.206711]
          },
          {
              id: 233,
              county: 'Rutland',
              name: 'West Rutland School',
              town: 'Westford',
              lat: 43.5954663,
              lng: -73.0515556,
              latLng: [43.5954663, -73.0515556]
          },
          {
              id: 234,
              county: 'Washington',
              name: 'Barre City Elementary-Middle School',
              town: 'Barre',
              lat: 44.1845142,
              lng: -72.5047609,
              latLng: [44.1845142, -72.5047609]
          },
          {
              id: 235,
              county: 'Washington',
              name: 'Barre City Elementary-Middle School',
              town: 'Barre',
              lat: 44.1845142,
              lng: -72.5047609,
              latLng: [44.1845142, -72.5047609]
          },
          {
              id: 236,
              county: 'Washington',
              name: 'Barre Town Elementary School',
              town: 'Barre',
              lat: 44.168403,
              lng: -72.486165,
              latLng: [44.168403, -72.486165]
          },
          {
              id: 237,
              county: 'Washington',
              name: 'Barre Town Elementary School',
              town: 'Barre',
              lat: 44.168403,
              lng: -72.486165,
              latLng: [44.168403, -72.486165]
          },
          {
              id: 238,
              county: 'Washington',
              name: 'Berlin Elementary School',
              town: 'Berlin',
              lat: 44.2145063,
              lng: -72.5717356,
              latLng: [44.2145063, -72.5717356]
          },
          {
              id: 239,
              county: 'Washington',
              name: 'Cabot School',
              town: 'Cabot',
              lat: 44.4034302,
              lng: -72.3093359,
              latLng: [44.4034302, -72.3093359]
          },
          {
              id: 240,
              county: 'Washington',
              name: 'Calais Elementary School',
              town: 'Plainfield',
              lat: 44.3193948,
              lng: -72.4516452,
              latLng: [44.3193948, -72.4516452]
          },
          {
              id: 241,
              county: 'Washington',
              name: 'Crossett Brook Middle US No 45',
              town: 'Duxbury',
              lat: 44.321123,
              lng: -72.7528363,
              latLng: [44.321123, -72.7528363]
          },
          {
              id: 242,
              county: 'Washington',
              name: 'Doty Memorial School',
              town: 'Worcester',
              lat: 44.373349,
              lng: -72.547949,
              latLng: [44.373349, -72.547949]
          },
          {
              id: 243,
              county: 'Washington',
              name: 'East Montpelier Elementary School',
              town: 'East Montpelier',
              lat: 44.2866171,
              lng: -72.4953304,
              latLng: [44.2866171, -72.4953304]
          },
          {
              id: 244,
              county: 'Washington',
              name: 'Fayston Elementary School',
              town: 'Waitsfield',
              lat: 44.1791977,
              lng: -72.8842112,
              latLng: [44.1791977, -72.8842112]
          },
          {
              id: 245,
              county: 'Washington',
              name: 'Harwood UHS No 19',
              town: 'Moretown',
              lat: 44.2539876,
              lng: -72.7867166,
              latLng: [44.2539876, -72.7867166]
          },
          {
              id: 246,
              county: 'Washington',
              name: 'Harwood Union Middle UHS No 19',
              town: 'Moretown',
              lat: 44.2540115,
              lng: -72.7864532,
              latLng: [44.2540115, -72.7864532]
          },
          {
              id: 247,
              county: 'Washington',
              name: 'Main Street Middle School',
              town: 'Montpelier',
              lat: 44.2629656,
              lng: -72.5695793,
              latLng: [44.2629656, -72.5695793]
          },
          {
              id: 248,
              county: 'Washington',
              name: 'Montpelier High School',
              town: 'Montpelier',
              lat: 44.2605339,
              lng: -72.5869944,
              latLng: [44.2605339, -72.5869944]
          },
          {
              id: 249,
              county: 'Washington',
              name: 'Moretown Elementary School',
              town: 'Moretown',
              lat: 44.247814,
              lng: -72.7630619,
              latLng: [44.247814, -72.7630619]
          },
          {
              id: 250,
              county: 'Washington',
              name: 'Northfield Elementary School',
              town: 'Northfield',
              lat: 44.15455,
              lng: -72.662072,
              latLng: [44.15455, -72.662072]
          },
          {
              id: 251,
              county: 'Washington',
              name: 'Northfield Middle-High School',
              town: 'Northfield',
              lat: 44.153568,
              lng: -72.660537,
              latLng: [44.153568, -72.660537]
          },
          {
              id: 252,
              county: 'Washington',
              name: 'Roxbury Village School',
              town: 'Roxbury',
              lat: 44.092411,
              lng: -72.733185,
              latLng: [44.092411, -72.733185]
          },
          {
              id: 253,
              county: 'Washington',
              name: 'Rumney Memorial School (Middlesex)',
              town: 'Middlesex',
              lat: 44.351158,
              lng: -72.602592,
              latLng: [44.351158, -72.602592]
          },
          {
              id: 254,
              county: 'Washington',
              name: 'Spaulding UHS No 41',
              town: 'Barre',
              lat: 44.1894129,
              lng: -72.4935438,
              latLng: [44.1894129, -72.4935438]
          },
          {
              id: 255,
              county: 'Washington',
              name: 'Thatcher Brook Primary US No 45',
              town: 'Waterbury',
              lat: 44.339128,
              lng: -72.753139,
              latLng: [44.339128, -72.753139]
          },
          {
              id: 256,
              county: 'Washington',
              name: 'Thatcher Brook Primary US No 45',
              town: 'Woodstock',
              lat: 44.339128,
              lng: -72.753139,
              latLng: [44.339128, -72.753139]
          },
          {
              id: 257,
              county: 'Washington',
              name: 'Twinfield US No 33',
              town: 'Montpelier',
              lat: 44.2979839,
              lng: -72.3947042,
              latLng: [44.2979839, -72.3947042]
          },
          {
              id: 258,
              county: 'Washington',
              name: 'U32 UHS No 32',
              town: 'Underhill',
              lat: 44.2445261,
              lng: -72.5267125,
              latLng: [44.2445261, -72.5267125]
          },
          {
              id: 259,
              county: 'Washington',
              name: 'Union Elementary School',
              town: 'Colchester',
              lat: 44.2596714,
              lng: -72.5711386,
              latLng: [44.2596714, -72.5711386]
          },
          {
              id: 260,
              county: 'Washington',
              name: 'Waitsfield Elementary School',
              town: 'Walden',
              lat: 44.1944527,
              lng: -72.8193328,
              latLng: [44.1944527, -72.8193328]
          },
          {
              id: 261,
              county: 'Washington',
              name: 'Warren Elementary School',
              town: 'Washington',
              lat: 44.1162276,
              lng: -72.851123,
              latLng: [44.1162276, -72.851123]
          },
          {
              id: 262,
              county: 'Washington',
              name: 'Woodbury Elementary School',
              town: 'Woodford',
              lat: 44.440035,
              lng: -72.416224,
              latLng: [44.440035, -72.416224]
          },
          {
              id: 263,
              county: 'Windham',
              name: 'Academy School',
              town: 'West Brattleboro',
              lat: 42.851176,
              lng: -72.597994,
              latLng: [42.851176, -72.597994]
          },
          {
              id: 264,
              county: 'Windham',
              name: 'Athens-Grafton Joint Contract School',
              town: 'Grafton',
              lat: 43.170174,
              lng: -72.609009,
              latLng: [43.170174, -72.609009]
          },
          {
              id: 265,
              county: 'Windham',
              name: 'Bellows Falls Middle School',
              town: 'Town of Rockingham',
              lat: 43.1333656,
              lng: -72.4462749,
              latLng: [43.1333656, -72.4462749]
          },
          {
              id: 266,
              county: 'Windham',
              name: 'Bellows Falls UHS No 27',
              town: 'Bellows Falls',
              lat: 43.1364725,
              lng: -72.4442318,
              latLng: [43.1364725, -72.4442318]
          },
          {
              id: 267,
              county: 'Windham',
              name: 'Bratt Area Middle School No 6',
              town: 'Brattleboro',
              lat: 42.83564,
              lng: -72.561716,
              latLng: [42.83564, -72.561716]
          },
          {
              id: 268,
              county: 'Windham',
              name: 'Brattleboro UHS No 6',
              town: 'Brattleboro',
              lat: 42.836739,
              lng: -72.561267,
              latLng: [42.836739, -72.561267]
          },
          {
              id: 269,
              county: 'Windham',
              name: 'Central Elementary School',
              town: 'Town of Rockingham',
              lat: 43.1324177,
              lng: -72.4505775,
              latLng: [43.1324177, -72.4505775]
          },
          {
              id: 270,
              county: 'Windham',
              name: 'Dover Elementary School',
              town: 'Dover',
              lat: 42.938863,
              lng: -72.80991,
              latLng: [42.938863, -72.80991]
          },
          {
              id: 271,
              county: 'Windham',
              name: 'Dummerston Schools',
              town: 'Dummerston',
              lat: 42.9336033,
              lng: -72.5379992,
              latLng: [42.9336033, -72.5379992]
          },
          {
              id: 272,
              county: 'Windham',
              name: 'Flood Brook US No 20',
              town: 'Londonderry',
              lat: 43.2367859,
              lng: -72.8480324,
              latLng: [43.2367859, -72.8480324]
          },
          {
              id: 273,
              county: 'Windham',
              name: 'Green Street School',
              town: 'Brattleboro',
              lat: 42.85174,
              lng: -72.565,
              latLng: [42.85174, -72.565]
          },
          {
              id: 274,
              county: 'Windham',
              name: 'Guilford Central School',
              town: 'Guilford',
              lat: 42.800709,
              lng: -72.6223515,
              latLng: [42.800709, -72.6223515]
          },
          {
              id: 275,
              county: 'Windham',
              name: 'Halifax School',
              town: 'Halifax',
              lat: 42.784431,
              lng: -72.768503,
              latLng: [42.784431, -72.768503]
          },
          {
              id: 276,
              county: 'Windham',
              name: 'Jamaica Village School',
              town: 'Jamaica',
              lat: 43.103771,
              lng: -72.775345,
              latLng: [43.103771, -72.775345]
          },
          {
              id: 277,
              county: 'Windham',
              name: 'Leland And Gray UHS No 34',
              town: 'Townshend',
              lat: 43.0465917,
              lng: -72.6670936,
              latLng: [43.0465917, -72.6670936]
          },
          {
              id: 278,
              county: 'Windham',
              name: 'Marlboro Elementary School',
              town: 'Marlboro',
              lat: 42.868698,
              lng: -72.719688,
              latLng: [42.868698, -72.719688]
          },
          {
              id: 279,
              county: 'Windham',
              name: 'Newbrook Elementary School',
              town: 'Newfane',
              lat: 42.9599339,
              lng: -72.650055,
              latLng: [42.9599339, -72.650055]
          },
          {
              id: 280,
              county: 'Windham',
              name: 'Oak Grove School',
              town: 'Brattleboro',
              lat: 42.8401525,
              lng: -72.5579901,
              latLng: [42.8401525, -72.5579901]
          },
          {
              id: 281,
              county: 'Windham',
              name: 'Putney Central School',
              town: 'Putney',
              lat: 42.9858892,
              lng: -72.5284672,
              latLng: [42.9858892, -72.5284672]
          },
          {
              id: 282,
              county: 'Windham',
              name: 'Saxtons River Elementary School',
              town: 'Town of Rockingham',
              lat: 43.140396,
              lng: -72.509491,
              latLng: [43.140396, -72.509491]
          },
          {
              id: 283,
              county: 'Windham',
              name: 'Townshend Village School',
              town: 'Troy',
              lat: 43.0466625,
              lng: -72.6695342,
              latLng: [43.0466625, -72.6695342]
          },
          {
              id: 284,
              county: 'Windham',
              name: 'Twin Valley Elementary School',
              town: 'Whitingham',
              lat: 42.888988,
              lng: -72.862106,
              latLng: [42.888988, -72.862106]
          },
          {
              id: 285,
              county: 'Windham',
              name: 'Twin Valley Middle High School',
              town: 'Plainfield',
              lat: 42.7879692,
              lng: -72.8401605,
              latLng: [42.7879692, -72.8401605]
          },
          {
              id: 286,
              county: 'Windham',
              name: 'Vernon Elementary School',
              town: 'Topsham',
              lat: 42.776263,
              lng: -72.518569,
              latLng: [42.776263, -72.518569]
          },
          {
              id: 287,
              county: 'Windham',
              name: 'Wardsboro Central School',
              town: 'Warren',
              lat: 43.0479574,
              lng: -72.7872992,
              latLng: [43.0479574, -72.7872992]
          },
          {
              id: 288,
              county: 'Windham',
              name: 'Westminster Schools',
              town: 'West Fairlee',
              lat: 43.070309,
              lng: -72.463478,
              latLng: [43.070309, -72.463478]
          },
          {
              id: 289,
              county: 'Windham',
              name: 'Windham Elementary School',
              town: 'Windsor',
              lat: 43.1658297,
              lng: -72.7253414,
              latLng: [43.1658297, -72.7253414]
          },
          {
              id: 290,
              county: 'Windsor',
              name: 'Albert Bridge Sch (W Wind)',
              town: 'West Windsor',
              lat: 43.4694223,
              lng: -72.4714816,
              latLng: [43.4694223, -72.4714816]
          },
          {
              id: 291,
              county: 'Windsor',
              name: 'Barnard Academy',
              town: 'Barnard',
              lat: 43.7271345,
              lng: -72.6195002,
              latLng: [43.7271345, -72.6195002]
          },
          {
              id: 292,
              county: 'Windsor',
              name: 'Bethel Elementary School',
              town: 'Bethel',
              lat: 43.833232,
              lng: -72.6435,
              latLng: [43.833232, -72.6435]
          },
          {
              id: 293,
              county: 'Windsor',
              name: 'Black River US No 39',
              town: 'Ludlow',
              lat: 43.397114,
              lng: -72.688557,
              latLng: [43.397114, -72.688557]
          },
          {
              id: 294,
              county: 'Windsor',
              name: 'Cavendish Town Elementary School',
              town: 'Cavendish',
              lat: 43.3836765,
              lng: -72.6368872,
              latLng: [43.3836765, -72.6368872]
          },
          {
              id: 295,
              county: 'Windsor',
              name: 'Chester Andover US No 29',
              town: 'Chester',
              lat: 43.2646923,
              lng: -72.5954546,
              latLng: [43.2646923, -72.5954546]
          },
          {
              id: 296,
              county: 'Windsor',
              name: 'Dothan Brook School',
              town: 'Hartford',
              lat: 43.687628,
              lng: -72.3217171,
              latLng: [43.687628, -72.3217171]
          },
          {
              id: 297,
              county: 'Windsor',
              name: 'Elm Hill School',
              town: 'Springfield',
              lat: 43.3061209,
              lng: -72.4844404,
              latLng: [43.3061209, -72.4844404]
          },
          {
              id: 298,
              county: 'Windsor',
              name: 'Green Mountain UHS No 35',
              town: 'Chester',
              lat: 43.253613,
              lng: -72.581459,
              latLng: [43.253613, -72.581459]
          },
          {
              id: 299,
              county: 'Windsor',
              name: 'Hartford High School',
              town: 'Hartford',
              lat: 43.657753,
              lng: -72.318855,
              latLng: [43.657753, -72.318855]
          },
          {
              id: 300,
              county: 'Windsor',
              name: 'Hartford MemorialMiddle School',
              town: 'Hartford',
              lat: 43.6563504,
              lng: -72.3201992,
              latLng: [43.6563504, -72.3201992]
          },
          {
              id: 301,
              county: 'Windsor',
              name: 'Hartland Elementary School',
              town: 'Hartland',
              lat: 43.5379884,
              lng: -72.3942648,
              latLng: [43.5379884, -72.3942648]
          },
          {
              id: 302,
              county: 'Windsor',
              name: 'Ludlow Elementary School',
              town: 'Ludlow',
              lat: 43.3979669,
              lng: -72.688735,
              latLng: [43.3979669, -72.688735]
          },
          {
              id: 303,
              county: 'Windsor',
              name: 'Marion W Cross School',
              town: 'Norwich',
              lat: 43.7132317,
              lng: -72.3063544,
              latLng: [43.7132317, -72.3063544]
          },
          {
              id: 304,
              county: 'Windsor',
              name: 'Ottauquechee School',
              town: 'Hartford',
              lat: 43.6494962,
              lng: -72.4168673,
              latLng: [43.6494962, -72.4168673]
          },
          {
              id: 305,
              county: 'Windsor',
              name: 'Reading Elementary School',
              town: 'Reading',
              lat: 43.453125,
              lng: -72.536659,
              latLng: [43.453125, -72.536659]
          },
          {
              id: 306,
              county: 'Windsor',
              name: 'Riverside Middle School',
              town: 'Springfield',
              lat: 43.3045496,
              lng: -72.4971886,
              latLng: [43.3045496, -72.4971886]
          },
          {
              id: 307,
              county: 'Windsor',
              name: 'Rochester School',
              town: 'Rochester',
              lat: 43.8717466,
              lng: -72.8091872,
              latLng: [43.8717466, -72.8091872]
          },
          {
              id: 308,
              county: 'Windsor',
              name: 'Sharon Elementary School',
              town: 'Sharon',
              lat: 43.7849689,
              lng: -72.456039,
              latLng: [43.7849689, -72.456039]
          },
          {
              id: 309,
              county: 'Windsor',
              name: 'South Royalton Elem-High School',
              town: 'Royalton',
              lat: 43.819316,
              lng: -72.517403,
              latLng: [43.819316, -72.517403]
          },
          {
              id: 310,
              county: 'Windsor',
              name: 'Springfield High School',
              town: 'Springfield',
              lat: 43.2811126,
              lng: -72.4781557,
              latLng: [43.2811126, -72.4781557]
          },
          {
              id: 311,
              county: 'Windsor',
              name: 'Stockbridge Central School',
              town: 'Stockbridge',
              lat: 43.7642684,
              lng: -72.7180883,
              latLng: [43.7642684, -72.7180883]
          },
          {
              id: 312,
              county: 'Windsor',
              name: 'The Prosper Valley School',
              town: 'Thetford',
              lat: 43.653466,
              lng: -72.528949,
              latLng: [43.653466, -72.528949]
          },
          {
              id: 313,
              county: 'Windsor',
              name: 'Union Street School',
              town: 'Vergennes',
              lat: 43.2955001,
              lng: -72.4880611,
              latLng: [43.2955001, -72.4880611]
          },
          {
              id: 314,
              county: 'Windsor',
              name: 'Weathersfield School',
              town: 'Wells',
              lat: 43.4112673,
              lng: -72.4097514,
              latLng: [43.4112673, -72.4097514]
          },
          {
              id: 315,
              county: 'Windsor',
              name: 'Whitcomb Jr-Sr High School',
              town: 'Hartford',
              lat: 43.833232,
              lng: -72.6435,
              latLng: [43.833232, -72.6435]
          },
          {
              id: 316,
              county: 'Windsor',
              name: 'White River School',
              town: 'Whiting',
              lat: 43.6533157,
              lng: -72.3181378,
              latLng: [43.6533157, -72.3181378]
          },
          {
              id: 317,
              county: 'Windsor',
              name: 'Windsor School',
              town: 'Winooski',
              lat: 43.48093,
              lng: -72.394295,
              latLng: [43.48093, -72.394295]
          },
          {
              id: 318,
              county: 'Windsor',
              name: 'Woodstock Elementary School',
              town: 'Woodstock',
              lat: 43.622024,
              lng: -72.519711,
              latLng: [43.622024, -72.519711]
          },
          {
              id: 319,
              county: 'Windsor',
              name: 'Woodstock Sr UHS No 4',
              town: 'Woodstock',
              lat: 43.613313,
              lng: -72.54568,
              latLng: [43.613313, -72.54568]
          },
          {
              id: 320,
              county: 'Windsor',
              name: 'Woodstock Union Middle School',
              town: 'Woodstock',
              lat: 43.613056,
              lng: -72.545857,
              latLng: [43.613056, -72.545857]
          }
        ];
        
        var defaultTravelTimes = [900];
    
        let list = document.getElementById('listings')
        let group = L.layerGroup()
        // let list = document.getElementById('listings')
        var markers = L.markerClusterGroup({ chunkedLoading: true });
        
        for (var i = 0; i < CONSTNAMELOCSIMPLE.length; i++) {
          var a = CONSTNAMELOCSIMPLE[i];
          var title = a[0];
          var marker = L.marker(L.latLng(a[3], a[4]), { title: title });
        //	marker.bindPopup(title);
          markers.addLayer(marker);
        }
        map.addLayer(markers);
        
        people.forEach(person => {
          let marker = L.marker(person.latLng, {
                title: person.name,
                riseOnHover: true
              })
    
          group.addLayer(marker)
          person.marker_id = group.getLayerId(marker)
        });
        var polygonLayer = r360.leafletPolygonLayer().addTo(map);
        polygonLayer.setColors([
             // { 'time': 300, 'opacity': 1.0, 'color': '#509373' },
             // { 'time': 600, 'opacity': 1.0, 'color': '#75c380' },
              { 'time': 900, 'opacity': 1.0, 'color': '#C1272D' }
             // { 'time': 1500, 'opacity': 1.0, 'color': '#C1272D' },
             // ["#509373", "#75c380", "#abcf79"]
          ]);
        var showPolygons = function() {
            polygonLayer.setStrokeWidth(pixel);
            
          };
        var defaultColors = r360.config.defaultTravelTimeControlOptions.travelTimes.filter(function(t){
          return defaultTravelTimes.indexOf(t.time) > -1;
        }).map(function(t){
          return t.color;
        });
        // group.addTo(map)
        function onClick (lata, travelOptions) {
          var { marker_id } = lata
          var marker = group.getLayer(marker_id)
          map.flyTo(marker.getLatLng(), 12);
          var polygonLayer = r360.leafletPolygonLayer()
          polygonLayer.addTo(map);
          var travelOptions = r360.travelOptions();
          travelOptions.setServiceKey('N2T7JHHPOTJAWSFQ7YOMJYH')
          travelOptions.setServiceUrl('https://service.route360.net/na_northeast/')
          travelOptions.addSource(marker);
          travelOptions.setTravelTimes([900])
          travelOptions.setTravelType('car');
          r360.PolygonService.getTravelTimePolygons(travelOptions, function(polygons){
            polygonLayer.setStrokeWidth(10);
            polygonLayer.clearAndAddLayers(polygons, false);
          });
        }
    
        people.forEach(person => {
          let item = document.createElement('li')
          item.innerHTML = `<a href="#">${person.name}</a>`
          item.addEventListener('click', onClick.bind(null, person))
          list.appendChild(item)
        })
    
