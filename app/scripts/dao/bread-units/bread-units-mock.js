define(['dao/dao-module',], function(dao) {
    'use strict';

    return dao.run(runner);

    runner.$inject = ['$httpBackend']
    function runner($httpBackend) {
        var breadUnits = [
            [
                "Rye bread",
                "1 piece",
                "25",
                "60"
            ],
            [
                "White bread, rolls, any (except buns)",
                "1 piece",
                "20",
                "65"
            ],
            [
                "Wheat bread for toast",
                "1 piece",
                "25",
                "65"
            ],
            [
                "Salty sticks",
                "15 pcs.",
                "15",
                "55"
            ],
            [
                "Crispbread",
                "2 pcs.",
                "15",
                "65"
            ],
            [
                "Flour milling",
                "1 tbsp. Spoon heaped",
                "15",
                "50"
            ],
            [
                "Rye flour",
                "1 tbsp. l.",
                "15",
                "50"
            ],
            [
                "Raw dough: puff",
                "",
                "35",
                "140"
            ],
            [
                "Products made of baked dough",
                "",
                "50",
                "55"
            ],
            [
                "Fritters",
                "1 medium",
                "50",
                "125"
            ],
            [
                "Dumplings",
                "3 tbsp. spoon",
                "15",
                "65"
            ],
            [
                "\"Popcorn\"",
                "10 Art. spoons",
                "15",
                "60"
            ],
            [
                "Krupa any (including semolina *) Crude",
                "1 tbsp. Spoon heaped",
                "15",
                "50-55"
            ],
            [
                "Boiled potatoes, baked",
                "1 pc. average",
                "70",
                "55"
            ],
            [
                "* Mashed potatoes (dry cake mix)",
                "1 tbsp. Spoon heaped",
                "15",
                "80"
            ],
            [
                "Mashed potatoes * ready to use (in milk, oil)",
                "2 tbsp. spoon with a slide",
                "90",
                "125"
            ],
            [
                "Diabetic jam with sweetener (average)",
                "1 tbsp. Spoon with the top",
                "25",
                "55"
            ],
            [
                "Diabetic Med *",
                "1 tbsp. Spoon no slides",
                "15",
                "50"
            ],
            [
                "French fries fried",
                "2-3 tbsp. spoons (12 pieces)",
                "35",
                "90"
            ],
            [
                "Potato pancakes",
                "",
                "60",
                "115"
            ],
            [
                "\"Corn Flakes (cereal)",
                "4 tbsp. spoon with the top",
                "15",
                "55"
            ],
            [
                "Pasta, cooked",
                "3-4 tablespoons. spoon",
                "60",
                "55"
            ],
            [
                "Sausage, cooked sausage",
                "2 pcs.",
                "160",
                ""
            ],
            [
                "Sausage-roll",
                "less than 1 pc.",
                "",
                ""
            ],
            [
                "Soy powder",
                "2 tbsp. spoon",
                "20",
                ""
            ],
            [
                "Peas (fresh and canned)",
                "4 tbsp. spoon with a slide",
                "80",
                ""
            ],
            [
                "Canned sweet corn",
                "3 tbsp. spoon with a slide",
                "60",
                ""
            ],
            [
                "Milk (whole milk, ghee), yogurt, buttermilk, yogurt, whey, yoghurt, cream (any fat content)",
                "1 cup",
                "250 ml",
                ""
            ],
            [
                "Whole milk 0.5% fat",
                "1 cup",
                "250 ml",
                "85"
            ],
            [
                "Yogurt 1%",
                "1 cup",
                "250 ml",
                "120"
            ],
            [
                "Kefir (see% fat)",
                "1 cup",
                "250 ml",
                "150"
            ],
            [
                "Cottage cheese is sweet",
                "",
                "100",
                ""
            ],
            [
                "Ice Cream",
                "",
                "65",
                ""
            ],
            [
                "Refined sugar, * lumpy",
                "3 slices",
                "10-12",
                "50"
            ],
            [
                "Sorbitol",
                "1 tbsp. spoon",
                "12",
                "50"
            ],
            [
                "Peanuts with skin",
                "45 pcs.",
                "85",
                "375"
            ],
            [
                "Pine nuts",
                "╫ a basket",
                "60",
                "410"
            ],
            [
                "Almonds",
                "╫ a basket",
                "60",
                "385"
            ],
            [
                "Pistachios",
                "╫ a basket",
                "60",
                "385"
            ],
            [
                "Quince",
                "1 pc. large",
                "140",
                ""
            ],
            [
                "Orange (with peel and without peel)",
                "",
                "180/130",
                "55"
            ],
            [
                "Banana (with skin / without skin)",
                "",
                "90/60",
                "50"
            ],
            [
                "Elder",
                "6 tablespoons. spoons",
                "170",
                "70"
            ],
            [
                "Cherries (with pits)",
                "12 pcs.",
                "110",
                "55"
            ],
            [
                "Grapefruit (with skin / without skin)",
                "╫ pc.",
                "200/130",
                "50"
            ],
            [
                "Guava",
                "",
                "80",
                "50"
            ],
            [
                "Blackberry",
                "Article 9. spoons",
                "170",
                "70"
            ],
            [
                "Figs (fresh)",
                "1 pc. large",
                "90",
                "55"
            ],
            [
                "Cranberries",
                "",
                "120",
                "55"
            ],
            [
                "Gooseberry",
                "12 Art. spoons",
                "150",
                "55"
            ],
            [
                "Mango",
                "",
                "90",
                "45"
            ],
            [
                "Papaya",
                "╫ pc.",
                "140",
                "50"
            ],
            [
                "Peach (with bone or without bone)",
                "1 pc. average",
                "140/130",
                "50"
            ],
            [
                "Red plums",
                "2.3 average",
                "80",
                "50"
            ],
            [
                "Blackcurrant",
                "Article 9. spoons",
                "180",
                "55"
            ],
            [
                "Feijoa",
                "10 pcs. environments. magnitude",
                "160",
                ""
            ],
            [
                "Cherries (with pits)",
                "10 pcs.",
                "100",
                "55"
            ],
            [
                "Apple (any color)",
                "1 pc. environments. magnitude",
                "100",
                "60"
            ],
            [
                "Coca-Cola, Pesya-Cola (regular) *",
                "╫ cup",
                "100 ml",
                ""
            ],
            [
                "Apple juice",
                "Less than 1 / 3 cup",
                "80 ml",
                ""
            ],
            [
                "Prune juice",
                "╫ cup",
                "80 ml",
                ""
            ],
            [
                "Double Hamburger",
                "3 XE",
                "",
                ""
            ],
            [
                "Package of French fries a little",
                "1 XE",
                "",
                ""
            ]
        ];

        var breadUnitsUrl = "/api/bread-units"

        $httpBackend.whenGET(breadUnitsUrl).respond(breadUnits);
        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();
        $httpBackend.whenGET(/scripts/).passThrough();
    }
});