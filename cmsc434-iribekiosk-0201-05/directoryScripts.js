// DONT MIND THIS! IT'S INCOMPLETE

const colorPalette = ["#C5FFFD", "#FFD201", "#5B8E7D", "#E8E9EB", "#BEB7DF", "#5386E4", "#BCD2EE", "#E22237"]

var eventData = [["IRB 1207", "21 November, 2021", "7:00pm", "9:00pm", "Board Game Night!", "Come join us for a couple of hours of board games. Free snacks will be there!", "Hack4Impact", "idEventAIRB0001"],
                ["IRB 1116", "22 November, 2021", "5:00pm", "7:00pm", "Code: Black GBM", "Join us for our first in-person GBM - doesn't matter if you're an existing member or not!", "Code: Black", "idEventAIRB0002"],
                ["IRB 0116", "25 November, 2021", "4:00pm", "6:00pm", "CMSC 351 - Guided Study Session", "Group study session for CMSC 351.", "College of Computer, Mathematical, and Natural Sciences", "idEventAIRB0003"],
                ["IRB 0324", "25 November, 2021", "2:00pm", "3:00pm", "Creative Computing", "No Description", "College Park Academy", "idEventAIRB0004"],
                ["IRB 0116", "26 November, 2021", "2:00pm", "3:00pm", "CSC Monthly Meeting 3", "No Description", "CSC", "idEventAIRB0005"],
                ["IRB 1207", "28 November, 2021", "2:00pm", "3:00pm", "Creative Computing", "No Description", "Hyattsville", "idEventAIRB0006"],
                ["IRB 0107", "30 November, 2021", "2:00pm", "3:00pm", "Hack4Impact: GBM", "Last GBM of the semester! Although it is the last meeting, even if you're not a member, come by to say hi and see what we'll offer next semester!", "Hack4Impact", "idEventAIRB0007"]]

var classData = [[["CMSC131", "0408", "Fawzi Emad", "Object-Oriented Programming I"], ["Lecture", "MWF 11:00am - 11:50am", "IRB 0324"], ["Discussion", "TuTh 5:00pm - 5:50pm", "CSI 2107"], "idCMSC1310408"],
                [["CMSC132", "0103", "Larry Herman", "Object-Oriented Programming II"], ["Lecture", "MWF 1:00pm - 1:50pm", "IRB 0324"], ["Discussion", "MW 9:00am - 9:50am", "CSI 2118"], "idCMSC1320103"],
                [["CMSC216", "0206", "Jose Calderon", "Introduction to Computer Systems"], ["Lecture", "TuTh 2:00pm - 3:15pm", "IRB 0324"], ["Discussion", "MW 4:00pm - 4:50pm", "IRB 1207"], "idCMSC2160206"],
                [["CMSC250", "0107", "Justin Wyss-Gallifent", "Discrete Structures"], ["Lecture", "TuTh 3:30pm - 4:45pm", "IRB 0324"], ["Discussion", "MW 1:00pm - 1:50pm", "CSI 1122"], "idCMSC2500107"],
                [["CMSC330", "0102", "Anwar Mamat", "Organization of Programming Languages"], ["Lecture", "TuTh 11:00am - 12:15pm", "ESJ 0224"], ["Discussion", "F 1:00pm - 1:50pm", "IRB 1207"], "idCMSC3300102"],
                [["CMSC351", "0201", "Clyde Kruskal", "Algorithms"], ["Lecture", "MWF 4:00pm - 4:50pm", "IRB 0324"], ["", "", ""], "idCMSC3510201"],
                [["CMSC421", "0101", "James Reggia", "Introduction to Artificial Intelligence"], ["Lecture", "TuTh 11:00am - 12:15pm", "IRB 1116"], ["", "", ""], "idCMSC4210101"],
                [["CMSC434", "0101", "Evan Golub", "Introduction to Human-Computer Interaction"], ["Lecture", "TuTh 12:30pm - 1.45pm", "IRB 2107"], ["", "", ""], "idCMSC4340101"]
                ]

var facultyData = [
    { Room: "IRB 5156", LDAP: "abadi", LastName: "Abadi", FirstName: " Daniel" },
    { Room: "IRB 2204", LDAP: "bkadams", LastName: "Adams", FirstName: " Brandi" },
    { Room: "IRB 5144", LDAP: "agrawala", LastName: "Agrawala", FirstName: " Ashok" },
    { Room: "IRB 4214", LDAP: "jyaloimo", LastName: "Aloimonos", FirstName: " Yannis" },
    { Room: "IRB 1204", LDAP: "andradea", LastName: "Andrade", FirstName: " Amy" },
    { Room: "IRB 2164", LDAP: "warbaugh", LastName: "Arbuagh", FirstName: " Bill" },
    { Room: "IRB 1206", LDAP: "katea", LastName: "Atchinson", FirstName: " Kate" },
    { Room: "IRB 3242", LDAP: "ayres", LastName: "Ayres", FirstName: " Daniel" },
    { Room: "IRB 3144", LDAP: "mbaney", LastName: "Baney", FirstName: " Matt" },
    { Room: "IRB 2164", LDAP: "basivic", LastName: "Basili", FirstName: " Vic" },
    { Room: "IRB 5148", LDAP: "leibatt", LastName: "Battle", FirstName: " Leilani" },
    { Room: "IRB 5140", LDAP: "bobby", LastName: "Bhattacharjee", FirstName: " Bobby" },
    { Room: "IRB 3164", LDAP: "ssb", LastName: "Bhattacharyya", FirstName: " Shuvra" },
    { Room: "IRB 2254", LDAP: "bsouvik", LastName: "Bhattacherjee", FirstName: " Souvik" },
    { Room: "IRB 5124", LDAP: "thorb", LastName: "Bjorgvinsson", FirstName: " Sigurthior" },
    { Room: "IRB 3146", LDAP: "sbobbin", LastName: "Bobbin", FirstName: " Shawn" },
    { Room: "IRB 4146", LDAP: "ying", LastName: "Boyd-Graber", FirstName: " Jordan" },
    { Room: "IRB 2142", LDAP: "rboykin", LastName: "Boykin", FirstName: " Regis" },
    { Room: "IRB 3126", LDAP: "melbrach", LastName: "Brachfeld", FirstName: " Melissa" },
    { Room: "IRB 3206", LDAP: "bbrawn", LastName: "Brawn-Cinani", FirstName: " Barbara" },
    { Room: "IRB 2252", LDAP: "mariakc", LastName: "Cameron", FirstName: " Maria" },
    { Room: "IRB 4226", LDAP: "acardone", LastName: "Cardone", FirstName: " Antonio" },
    { Room: "IRB 4130", LDAP: "marine", LastName: "Carpuat", FirstName: " Marine" },
    { Room: "IRB 4236", LDAP: "carlosc", LastName: "Castillo", FirstName: " Carlos" },
    { Room: "IRB 4246", LDAP: "chella", LastName: "Chellappa", FirstName: " Rama" },
    { Room: "IRB 4222", LDAP: "jcchen", LastName: "Chen", FirstName: " Jun-Cheng" },
    { Room: "IRB 5256", LDAP: "rchen", LastName: "Chen", FirstName: " Ray" },
    { Room: "IRB 5160", LDAP: "wcleavel", LastName: "Cleaveland", FirstName: " Rance" },
    { Room: "IRB 3224", LDAP: "hcorrada", LastName: "Corrada Bravo", FirstName: " HÔOctor" },
    { Room: "IRB 2224", LDAP: "mcukier", LastName: "Cukier", FirstName: " Michel" },
    { Room: "IRB 3240", LDAP: "mcummin1", LastName: "Cummings", FirstName: " Michael" },
    { Room: "IRB 5238", LDAP: "danadach", LastName: "Dachman Soled", FirstName: " Dana" },
    { Room: "IRB 4148", LDAP: "hal3", LastName: "Daume", FirstName: " Hal" },
    { Room: "IRB 4248", LDAP: "lsdavis", LastName: "Davis", FirstName: " Larry" },
    { Room: "IRB 2252", LDAP: "rdechter", LastName: "Dechter", FirstName: " Rina" },
    { Room: "IRB 4132", LDAP: "deflo", LastName: "DeFloriani", FirstName: " Leila" },
    { Room: "IRB 5154", LDAP: "adeshpan", LastName: "Deshpande", FirstName: " Amol" },
    { Room: "IRB 4128", LDAP: "johnd", LastName: "Dickerson", FirstName: " John" },
    { Room: "IRB 4132", LDAP: "bdorr", LastName: "Dorr", FirstName: " Bonnie" },
    { Room: "IRB 5228", LDAP: "tdumitra", LastName: "Dumitras", FirstName: " Tudor" },
    { Room: "IRB 4244", LDAP: "rduraisw", LastName: "Duraiswami", FirstName: " Ramani" },
    { Room: "IRB 4245", LDAP: "rduraisw", LastName: "Duraiswami", FirstName: " Ramani" },
    { Room: "IRB 1126", LDAP: "reastman", LastName: "Eastman", FirstName: " Roger" },
    { Room: "IRB 3246", LDAP: "elsayed", LastName: "El Sayed", FirstName: " Najib" },
    { Room: "IRB 4210", LDAP: "helman", LastName: "Elman", FirstName: " Howard" },
    { Room: "IRB 2212", LDAP: "fpe", LastName: "Emad", FirstName: " Fawzi" },
    { Room: "IRB 5218", LDAP: "iendegen", LastName: "Endegena", FirstName: " Israel" },
    { Room: "IRB 4202", LDAP: "sfeizi", LastName: "Feizi", FirstName: " Soheil" },
    { Room: "IRB 4140", LDAP: "nfeldma4", LastName: "Feldman", FirstName: " Naomi" },
    { Room: "IRB 4216", LDAP: "fermulcm", LastName: "FernmÔOller", FirstName: " Cornelia" },
    { Room: "IRB 2206", LDAP: "jasonfil", LastName: "Filippou", FirstName: " Jason" },
    { Room: "IRB 2130", LDAP: "afindlay", LastName: "Findlay", FirstName: " Adelaide" },
    { Room: "IRB 2132", LDAP: "rmathur4", LastName: "Mathur", FirstName: " Richa " },
    { Room: "IRB 1154", LDAP: "vfitz", LastName: "Fitzgerald", FirstName: " Victoria" },
    { Room: "IRB 2162", LDAP: "jfoster4", LastName: "Foster", FirstName: " Jeff" },
    { Room: "IRB 4144", LDAP: "vfrias", LastName: "Frias-Martinez", FirstName: " Vanessa" },
    { Room: "IRB 2202", LDAP: "miriam88", LastName: "Friedman", FirstName: " Miriam" },
    { Room: "IRB 4138", LDAP: "petra", LastName: "Galuscakova", FirstName: " Petra" },
    { Room: "IRB 4126", LDAP: "gegao", LastName: "Gao", FirstName: " Ge" },
    { Room: "IRB 2242", LDAP: "gasarch", LastName: "Gasarch", FirstName: " Bill" },
    { Room: "IRB 3130", LDAP: "mgedra", LastName: "Gedra", FirstName: " Margit" },
    { Room: "IRB 4212", LDAP: "tomg", LastName: "Goldstein", FirstName: " Tom" },
    { Room: "IRB 1210", LDAP: "egolub", LastName: "Golub", FirstName: " Evan" },
    { Room: "IRB 2144", LDAP: "jgray2", LastName: "Gray", FirstName: " Jodie" },
    { Room: "IRB 4234", LDAP: "ngumerov", LastName: "Gumerov", FirstName: " Nail" },
    { Room: "IRB 5158", LDAP: "hajiagha", LastName: "Hajiaghayi", FirstName: " Mohammad" },
    { Room: "IRB 3236", LDAP: "sridhar", LastName: "Hannenhalli", FirstName: " Sridhar" },
    { Room: "IRB 3136", LDAP: "ehartz", LastName: "Hartz", FirstName: " Emily" },
    { Room: "IRB 3204", LDAP: "jheager2", LastName: "Heagerty", FirstName: " Jon" },
    { Room: "IRB 3126", LDAP: "mherd", LastName: "Herd", FirstName: " Maria" },
    { Room: "IRB 1124", LDAP: "larry", LastName: "Herman", FirstName: " Larry" },
    { Room: "IRB 5246", LDAP: "mhicks2", LastName: "Hicks", FirstName: " Mike" },
    { Room: "IRB 2152", LDAP: "tholden1", LastName: "Holden", FirstName: " Todd" },
    { Room: "IRB 5152", LDAP: "hollings", LastName: "Hollingsworth", FirstName: " Jeff" },
    { Room: "IRB 3132", LDAP: "ehontz", LastName: "Hontz", FirstName: " Elizabeth" },
    { Room: "IRB 4204", LDAP: "furongh", LastName: "Huang", FirstName: " Furong" },
    { Room: "IRB 5256", LDAP: "wrhuang", LastName: "Huang", FirstName: " Ronny" },
    { Room: "IRB 1250", LDAP: "meesh", LastName: "Hugue", FirstName: " Michelle" },
    { Room: "IRB 1130", LDAP: "thurst", LastName: "Hurst", FirstName: " Tom" },
    { Room: "IRB 2156", LDAP: "seriv", LastName: "Ivanov", FirstName: " Sergey" },
    { Room: "IRB 4240", LDAP: "dwj", LastName: "Jacobs", FirstName: " David" },
    { Room: "IRB 3214", LDAP: "josephj", LastName: "Jaja", FirstName: " Joseph" },
    { Room: "IRB 3202", LDAP: "jishjesu", LastName: "Jesudass", FirstName: " Jisha" },
    { Room: "IRB 2148", LDAP: "danaejo", LastName: "Johnson", FirstName: " Danae" },
    { Room: "IRB 2128", LDAP: "mjohns40", LastName: "Johnson", FirstName: " Maria" },
    { Room: "IRB 2162", LDAP: "kanal", LastName: "Kanal", FirstName: " Laveen" },
    { Room: "IRB 3226", LDAP: "jkanche", LastName: "Kancherla Jayaram", FirstName: "" },
    { Room: "IRB 5226", LDAP: "jkatz2", LastName: "Katz", FirstName: " Jonathan" },
    { Room: "IRB 5146", LDAP: "keleher", LastName: "Keleher", FirstName: " Pete" },
    { Room: "IRB 5128", LDAP: "samirk", LastName: "Khuller", FirstName: " Samir" },
    { Room: "IRB 2240", LDAP: "ckruskal", LastName: "Kruskal", FirstName: " Clyde" },
    { Room: "IRB 1204", LDAP: "mlanahan", LastName: "Lanahan", FirstName: " Morgan" },
    { Room: "IRB 3252", LDAP: "eclee2", LastName: "Lee", FirstName: " Eric" },
    { Room: "IRB 3150", LDAP: "rleimens", LastName: "Leimenstoll", FirstName: " Ryan" },
    { Room: "IRB 3244", LDAP: "mdml", LastName: "Leiserson", FirstName: " Max" },
    { Room: "IRB 5222", LDAP: "levindm", LastName: "Levin", FirstName: " Dave" },
    { Room: "IRB 3238", LDAP: "blewis12", LastName: "Lewis", FirstName: " Barbara" },
    { Room: "IRB 3254", LDAP: "sidali", LastName: "Li", FirstName: " Sida" },
    { Room: "IRB 2134", LDAP: "lin", LastName: "Lin", FirstName: " Ming" },
    { Room: "IRB 5164", LDAP: "lin", LastName: "Lin", FirstName: " Ming" },
    { Room: "IRB 4220", LDAP: "cswluo", LastName: "Luo", FirstName: " Wei" },
    { Room: "IRB 2244", LDAP: "anwar", LastName: "Mamat", FirstName: " Anwar" },
    { Room: "IRB 5164", LDAP: "dmanocha", LastName: "Manocha", FirstName: " Dinesh" },
    { Room: "IRB 2222", LDAP: "mmarsh", LastName: "Marsh", FirstName: " Mike" },
    { Room: "IRB 5236", LDAP: "mmazurek", LastName: "Mazurek", FirstName: " Michelle" },
    { Room: "IRB 2138", LDAP: "sharron", LastName: "McElroy", FirstName: " Sharron" },
    { Room: "IRB 3228", LDAP: "meiselj", LastName: "Meisel", FirstName: " Jackie" },
    { Room: "IRB 5204", LDAP: "amemon", LastName: "Memon", FirstName: " Atif" },
    { Room: "IRB 3246", LDAP: "cmerenst", LastName: "Merenstein", FirstName: " Carter" },
    { Room: "IRB 2164", LDAP: "millerre", LastName: "Miller", FirstName: " Ray" },
    { Room: "IRB 2162", LDAP: "minker", LastName: "Minker", FirstName: " Jack" },
    { Room: "IRB 3152", LDAP: "lmon", LastName: "Monahan", FirstName: " Liam" },
    { Room: "IRB 3220", LDAP: "dnasko", LastName: "Nasko", FirstName: " Dan" },
    { Room: "IRB 4158", LDAP: "nau", LastName: "Nau", FirstName: " Dana" },
    { Room: "IRB 1146", LDAP: "aneuner", LastName: "Neuner", FirstName: " Alyssa" },
    { Room: "IRB 4142", LDAP: "oard", LastName: "Oard", FirstName: " Doug" },
    { Room: "IRB 2160", LDAP: "oleary", LastName: "O'Leary", FirstName: " Dianne" },
    { Room: "IRB 2254", LDAP: "onwunta", LastName: "Onwunta", FirstName: " Akyum" },
    { Room: "IRB 2210", LDAP: "nelsonp", LastName: "Padua-Perez", FirstName: " Nelson" },
    { Room: "IRB 5224", LDAP: "cpap", LastName: "Papamanthou", FirstName: " Babis" },
    { Room: "IRB 5126", LDAP: "rpassan", LastName: "Passan", FirstName: " Ravindra" },
    { Room: "IRB 2214", LDAP: "huaishu", LastName: "Peng", FirstName: " Huaishu" },
    { Room: "IRB 4156", LDAP: "perlis", LastName: "Perlis", FirstName: " Don" },
    { Room: "IRB 4250", LDAP: "jperrone", LastName: "Perrone", FirstName: " Janice" },
    { Room: "IRB 2146", LDAP: "speters", LastName: "Peters", FirstName: " Stephanie" },
    { Room: "IRB 1132", LDAP: "apimpawa", LastName: "Pimpawathin", FirstName: " Apitchaya" },
    { Room: "IRB 1254", LDAP: "jplane", LastName: "Plane", FirstName: " Jan" },
    { Room: "IRB 3134", LDAP: "mpop", LastName: "Pop", FirstName: " Mihai" },
    { Room: "IRB 3222", LDAP: "mpop", LastName: "Pop", FirstName: " Mihai" },
    { Room: "IRB 5212", LDAP: "aporter", LastName: "Porter", FirstName: " Adam" },
    { Room: "IRB 2164", LDAP: "pugh", LastName: "Pugh", FirstName: " Bill" },
    { Room: "IRB 5234", LDAP: "purcell2", LastName: "Purcell", FirstName: " Dana" },
    { Room: "IRB 5214", LDAP: "purtilo", LastName: "Purtilo", FirstName: " Jim" },
    { Room: "IRB 5248", LDAP: "rrand", LastName: "Rand", FirstName: " Robert" },
    { Room: "IRB 4154", LDAP: "lraschid", LastName: "Raschid", FirstName: " Louiqa" },
    { Room: "IRB 4124", LDAP: "reggia", LastName: "Reggia", FirstName: " James" },
    { Room: "IRB 2224", LDAP: "regli", LastName: "Regli", FirstName: " Bill" },
    { Room: "IRB 4150", LDAP: "resnik", LastName: "Resnik", FirstName: " Philip" },
    { Room: "IRB 3148", LDAP: "ridge", LastName: "Ridge", FirstName: " Joe" },
    { Room: "IRB 3210", LDAP: "mritter2", LastName: "Ritter", FirstName: " Mike" },
    { Room: "IRB 2160", LDAP: "nickr", LastName: "Roussopoulos", FirstName: " Nick" },
    { Room: "IRB 3245", LDAP: "niruroy", LastName: "Roy", FirstName: " Nirupam" },
    { Room: "IRB 5240", LDAP: "niruroy", LastName: "Roy", FirstName: " Nirupam" },
    { Room: "IRB 3234", LDAP: "mrumi", LastName: "Rumi", FirstName: " Monjura Afrin" },
    { Room: "IRB 2158", LDAP: "stryan", LastName: "Ryan", FirstName: " Steven" },
    { Room: "IRB 1214", LDAP: "psadeghi", LastName: "Sadeghian", FirstName: " Pedram" },
    { Room: "IRB 4226", LDAP: "sadr", LastName: "Sadrfaridour", FirstName: " Behzad" },
    { Room: "IRB 4252", LDAP: "hjs", LastName: "Samet", FirstName: " Hanan" },
    { Room: "IRB 1252", LDAP: "vibha", LastName: "Sazawal", FirstName: " Vibha" },
    { Room: "IRB 3140", LDAP: "aschenk", LastName: "Schenk", FirstName: " Arlene" },
    { Room: "IRB 1152", LDAP: "lsegler", LastName: "Segler", FirstName: " Lauren" },
    { Room: "IRB 3216", LDAP: "jselengu", LastName: "Selengut", FirstName: " Jeremy" },
    { Room: "IRB 5150", LDAP: "shankar", LastName: "Shankar", FirstName: " A. Udaya" },
    { Room: "IRB 2162", LDAP: "bshneide", LastName: "Shneiderman", FirstName: " Ben" },
    { Room: "IRB 4238", LDAP: "abhinav2", LastName: "Shrivastava", FirstName: " Abhinav" },
    { Room: "IRB 2124", LDAP: "slocke", LastName: "Sickle Locke", FirstName: " Stacey" },
    { Room: "IRB 2154", LDAP: "rsmith91", LastName: "Smith", FirstName: " Richard" },
    { Room: "IRB 4220", LDAP: "ysong128", LastName: "Song", FirstName: " Yan" },
    { Room: "IRB 5138", LDAP: "nspring", LastName: "Spring", FirstName: " Neil" },
    { Room: "IRB 4164", LDAP: "asriniv1", LastName: "Srinivasan", FirstName: " Aravind" },
    { Room: "IRB 2162", LDAP: "stewart", LastName: "Stewart", FirstName: " Pete" },
    { Room: "IRB 5142", LDAP: "asussman", LastName: "Sussman", FirstName: " Alan" },
    { Room: "IRB 2140", LDAP: "tafoya", LastName: "Tafoya", FirstName: " Sammie" },
    { Room: "IRB 1128", LDAP: "nayeem", LastName: "Teli", FirstName: " Mohammad Naeem" },
    { Room: "IRB 1148", LDAP: "dturner8", LastName: "Turner", FirstName: " David" },
    { Room: "IRB 1142", LDAP: "availlan", LastName: "Vaillancourt", FirstName: " Amy" },
    { Room: "IRB 3142", LDAP: "yerty", LastName: "Valenzuela", FirstName: " Yerty" },
    { Room: "IRB 5250", LDAP: "dvanhorn", LastName: "VanHorn", FirstName: " David" },
    { Room: "IRB 3107", LDAP: "varshney", LastName: "Varshney", FirstName: " Amitabh" },
    { Room: "IRB 3212", LDAP: "varshney", LastName: "Varshney", FirstName: " Amitabh" },
    { Room: "IRB 4224", LDAP: "venkai", LastName: "Venkat Santhanam", FirstName: "" },
    { Room: "IRB 3128", LDAP: "tventsia", LastName: "Ventsias", FirstName: " Tom" },
    { Room: "IRB 5216", LDAP: "vishkin", LastName: "Vishkin", FirstName: " Uzi" },
    { Room: "IRB 2150", LDAP: "jworden", LastName: "Worden", FirstName: " Jeanine" },
    { Room: "IRB 3164", LDAP: "minwu", LastName: "Wu", FirstName: " Min" },
    { Room: "IRB 5210", LDAP: "xiaodiwu", LastName: "Wu", FirstName: " Xiaodi" },
    { Room: "IRB 4242", LDAP: "yaser", LastName: "Yacoob", FirstName: " Yaser" },
    { Room: "IRB 3124", LDAP: "dyarnell", LastName: "Yarnell", FirstName: " Derek" },
    { Room: "IRB 1248", LDAP: "icyoon", LastName: "Yoon", FirstName: " Ilchul" },
    { Room: "IRB 3138", LDAP: "pzapf", LastName: "Zapf", FirstName: " Petra" },
    { Room: "IRB 2160", LDAP: "mvz", LastName: "Zelkowitz", FirstName: " Marvin" },
    { Room: "IRB 5220", LDAP: "qzhengcs", LastName: "Zheng", FirstName: " Quan" },
    { Room: "IRB 4218", LDAP: "wdz", LastName: "Zotkin", FirstName: " Dmitry" },
    { Room: "IRB 4138", LDAP: "ezotkina", LastName: "Zotkina", FirstName: " Elena" },
    { Room: "IRB 4206", LDAP: "zwicker", LastName: "Zwicker", FirstName: " Matthias" },
    { Room: "IRB 5109", LDAP: "mailroom", LastName: "mailroom", FirstName: " The" },
    { Room: "IRB 1208", LDAP: "copier", LastName: "copier/printer workroom", FirstName: " A" },
    { Room: "IRB 1125", LDAP: "workroom", LastName: "workroom", FirstName: " A" },
    { Room: "IRB 2208", LDAP: "copier", LastName: "copier/printer workroom", FirstName: " A" },
    { Room: "IRB 5149", LDAP: "copier", LastName: "copier/printer workroom", FirstName: " A" },
    { Room: "IRB 1138", LDAP: "tblackw", LastName: "Blackwell", FirstName: " Tori" },
    { Room: "IRB 1141", LDAP: "cabansag", LastName: "Cabansag", FirstName: "Courtney" },
    { Room: "IRB 1139", LDAP: "cdenis", LastName: "Denis", FirstName: "Christine" },
    { Room: "IRB 1144", LDAP: "johnsobr", LastName: "Johnson", FirstName: "Brittany" },
    { Room: "IRB 1140", LDAP: "hhermela", LastName: "Hailemeskel", FirstName: "Hermela" }
    ]


function getAllEvents() {
    var allEvents = '';
    var idx = 0;
        eventData.forEach(p => {
            var roomNumb = p[0].replace(/\s/g, '');
            if (idx < (colorPalette.length - 1)) {
                idx++;
            } else {
                idx = 0;
            }
            allEvents += `
                        <div class="card" style="width:765px; height:200px; background-color:${colorPalette[idx]};" id="${p[p.length - 1]}" data-bs-toggle="modal" data-bs-target="#${p[p.length - 1].concat('modal')}">
                            <div class="card-body">
                                <div class="row-1" style="height:65%;"></div>
                                <div class="row">
                                    <div class="col" style="margin-left:5px;width: 70%;margin-top: 5px;margin-bottom: 5px;">
                                        <a href='home.html?navigation=${roomNumb}' class="link-danger"><h5 class="card-text text-start text-dark" id="${p[p.length - 1]}" style="margin-top:0px;margin-bottom:0px;color:white;">${p[0]}</h5></a>
                                        <p class="fw-bold h5 card-title text-start text-dark" id="${p[p.length - 1]}" style="margin-top:0px;margin-bottom:0px;color:white;">${p[4]}</p>
                                    </div>
                                    <div class="col" style="margin-top:0px;margin-bottom:0px;">
                                        <h5 class="card-text text-end text-dark" id="${p[p.length - 1]}" style="margin-top:14px;margin-bottom:0px;color:white;">${p[2] + " - " + p[3]}</h5>
                                        <h5 class="card-text text-end text-dark" id="${p[p.length - 1]}" style="margin-top:0px;margin-bottom:0px;color:white;">${p[1]}</h5>
                                    </div>
                                </div>

                                <!-- MODAL CODE -->
                                <div class="modal fade" id="${p[p.length - 1].concat('modal')}" tabindex="-1" role="dialog" aria-labelledby="${p[p.length - 1].concat('modal')}" aria-hidden="true">
                                  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
	
                                    <div class="modal-content">

                                      <div class="modal-body ">
                                        <h5 class="modal-title fw-bold" id="${p[p.length - 1].concat('modal')}">${p[4]}</h5>
                                        <hr>
                                        <h7 class="modal-title fw-bold" id="${p[p.length - 1].concat('modal')}">Host</h7>
                                        <p>${p[6]}</p>
                                        <h7 class="modal-title fw-bold" id="${p[p.length - 1].concat('modal')}">Description</h7>
                                        <p>${p[5]}</p>
                                        
                                        <h7 class="modal-title fw-bold" id="${p[p.length - 1].concat('modal')}">Date & Time</h7>
                                        <p>Time: ${p[2] + " - " + p[3]}<br>Date: ${p[1]}</p>
                                        
                                        
                                        <h7 class="modal-title fw-bold" id="${p[p.length - 1].concat('modal')}">Location</h7>
                                        <p>${p[0]}</p>

                                      </div>

                                      <div class="modal-footer">
                                        <a href='home.html?navigation=${roomNumb}'><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Take me to ${p[0]}!</button></a>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                      </div>
			
                                    </div>
	                                </div>
                                </div>

                            </div>
                        </div>
            `
        });

        return allEvents;
}
