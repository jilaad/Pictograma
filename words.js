const words = [
    { word: "cajón", type: "noun", themes: ["kitchen"],
        images: [
        { file: "images/drawer01.jpg" },
        { file: "images/drawer02.jpg" },
        { file: "images/drawer03.jpg" },
        { file: "images/drawer04.jpg" }
    ]},
    { word: "horno", type: "noun", themes: ["restaurant", "kitchen"],
        images: [
        { file: "images/oven01.jpg" },
        { file: "images/oven02.jpg" },
        { file: "images/oven03.jpg" },
        { file: "images/oven04.jpg" }
    ]},
    { word: "mariposa", type: "noun", themes: ["animals"],
        images: [
        { file: "images/butterfly01.jpg" },
        { file: "images/butterfly02.jpg" },
        { file: "images/butterfly03.jpg" },
        { file: "images/butterfly04.jpg" }
    ]},
    { word: "perro", type: "noun", themes: ["animals"],
        images: [
        { file: "images/dog01.jpg" },
        { file: "images/dog02.jpg" },
        { file: "images/dog03.jpg" },
        { file: "images/dog04.jpg" }
    ]},
    { word: "puerta", type: "noun", images: [
        { file: "images/door01.jpg" },
        { file: "images/door02.jpg" },
        { file: "images/door03.jpg" },
        { file: "images/door04.jpg" }
    ]},
    { word: "silla", type: "noun", themes: ["restaurant"],
        images: [
        { file: "images/chair01.jpg" },
        { file: "images/chair02.jpg" },
        { file: "images/chair03.jpg" },
        { file: "images/chair04.jpg" }
    ]},
    { word: "sol", type: "noun", images: [
        { file: "images/sun01.jpg" },
        { file: "images/sun02.jpg" },
        { file: "images/sun03.jpg" },
        { file: "images/sun04.jpg" }
    ]},
    { word: "taza", type: "noun", themes: ["restaurant", "kitchen"],
        images: [
        { file: "images/mug01.jpg" },
        { file: "images/mug02.jpg" },
        { file: "images/mug03.jpg" },
        { file: "images/mug04.jpg" }
    ]},
    { word: "tenedor", type: "noun", themes: ["restaurant", "kitchen"],
        images: [
        { file: "images/fork01.jpg" },
        { file: "images/fork02.jpg" },
        { file: "images/fork03.jpg" },
        { file: "images/fork04.jpg" }
    ]},
    { word: "vaso", type: "noun", themes: ["restaurant", "kitchen"],
        images: [
        { file: "images/drinking_glass01.jpg" },
        { file: "images/drinking_glass02.jpg" },
        { file: "images/drinking_glass03.jpg" },
        { file: "images/plastic_cup01.jpg" },
        { file: "images/plastic_cup02.jpg" },
        { file: "images/paper_cup01.jpg" }
    ]},
    { word: "agua", type: "noun", images: [
        { file: "images/water01.jpg" },
        { file: "images/water02.jpg" },
        { file: "images/water03.jpg" },
        { file: "images/water04.jpg" }
    ]},
    { word: "tarjeta de crédito", type: "noun", themes: ["restaurant"],
        images: [
        { file: "images/credit_card01.jpg" },
        { file: "images/credit_card02.jpg" },
        { file: "images/credit_card03.jpg" }
    ]},
    { word: "camarero", type: "noun", themes: ["restaurant"],
        images: [
        { file: "images/waiter01.jpg", accepts: ["camarero","mesero"]},
        { file: "images/waiter02.jpg", accepts: ["camarero","mesero"]},
        { file: "images/waiter03.jpg", accepts: ["camarero","mesero"]},
        { file: "images/waiter04.jpg", accepts: ["camarero","mesero"]}
    ]},
    { word: "mesero", type: "noun", themes: ["restaurant"],
        images: [
        { file: "images/waiter01.jpg", accepts: ["camarero","mesero"]},
        { file: "images/waiter02.jpg", accepts: ["camarero","mesero"]},
        { file: "images/waiter03.jpg", accepts: ["camarero","mesero"]},
        { file: "images/waiter04.jpg", accepts: ["camarero","mesero"]}
    ]},
    { word: "mesa", type: "noun", themes: ["restaurant", "kitchen"],
        images: [
        { file: "images/table01.jpg" },
        { file: "images/table02.webp" },
        { file: "images/table03.jpg" },
        { file: "images/table04.jpg" }
    ]},
    { word: "cabina", type: "noun", themes: ["restaurant"],
        images: [
        { file: "images/booth01.webp" },
        { file: "images/booth02.png" },
        { file: "images/booth03.jpg" },
        { file: "images/booth04.webp" }
    ]},
    { word: "servilleta", type: "noun", themes: ["restaurant"],
        images: [
        { file: "images/napkin01.jpg" },
        { file: "images/napkin02.webp" },
        { file: "images/napkin03.webp" },
        { file: "images/napkin04.webp" }
    ]},
    { word: "cuchara", type: "noun", themes: ["restaurant", "kitchen"],
        images: [
        { file: "images/spoon01.jpg" },
        { file: "images/spoon02.webp" },
        { file: "images/spoon03.jpg" },
        { file: "images/spoon04.webp" }
    ]},
    { word: "cuchillo", type: "noun", themes: ["restaurant", "kitchen"],
        images: [
        { file: "images/knife01.jpg" },
        { file: "images/knife02.webp" },
        { file: "images/knife03.webp" },
        { file: "images/knife04.webp" }
    ]},
    { word: "menú", type: "noun", themes: ["restaurant"],
        images: [
        { file: "images/menu01.webp" },
        { file: "images/menu02.webp" },
        { file: "images/menu04.jpg" }
    ]},
    { word: "cuenta", type: "noun", themes: ["restaurant"],
        images: [
        { file: "images/check_bill01.jpg" },
        { file: "images/check_bill03.jpg" },
        { file: "images/check_bill04.jpg" }
    ]},
    { word: "plato", type: "noun", themes: ["restaurant", "kitchen"],
        images: [
        { file: "images/plate01.webp" },
        { file: "images/plate02.jpg" },
        { file: "images/plate03.webp" },
        { file: "images/plate04.jpg" }
    ]},
    { word: "tazón", type: "noun", themes: ["restaurant", "kitchen"],
        images: [
        { file: "images/bowl01.webp" },
        { file: "images/bowl02.webp" }
    ]},
    { word: "bufé", type: "noun", themes: ["restaurant"],
        images: [
        { file: "images/buffet01.jpg" },
        { file: "images/buffet02.webp" }
    ]},
    { word: "cocinero", type: "noun", themes: ["restaurant"],
        images: [
        { file: "images/cook01.jpg" },
        { file: "images/cook02.jpg" },
        { file: "images/cook03.jpg" }
    ]},
    { word: "botella", type: "noun", themes: ["restaurant", "kitchen"],
        images: [
        { file: "images/bottle01.jpg" },
        { file: "images/bottle02.jpg" },
        { file: "images/bottle03.jpg" },
        { file: "images/bottle04.jpg" }
    ]},
    { word: "bandeja", type: "noun", themes: ["restaurant"],
        images: [
        { file: "images/tray02.jpg" },
        { file: "images/tray03.jpg" }
    ]},
    { word: "propina", type: "noun", themes: ["restaurant"],
        images: [
        { file: "images/tip_money01.jpg" },
        { file: "images/tip_money02.jpg" },
        { file: "images/tip_money03.jpg" },
        { file: "images/tip_money04.jpg" }
    ]},
    { word: "recibo", type: "noun", themes: ["restaurant"],
        images: [
        { file: "images/receipt01.jpg" },
        { file: "images/receipt02.jpg" },
        { file: "images/receipt03.jpg" },
        { file: "images/receipt04.jpg" }
    ]},
    { word: "cocina", type: "noun", themes: ["restaurant", "kitchen"],
        images: [
        { file: "images/kitchen01.jpg" },
        { file: "images/kitchen02.jpg" },
        { file: "images/kitchen03.jpg" },
        { file: "images/kitchen04.jpg" }
    ]},
    { word: "baño", type: "noun", themes: ["restaurant","hotel"],
        images: [
        { file: "images/bathroom01.jpg" },
        { file: "images/bathroom02.jpg" },
        { file: "images/bathroom03.jpg" },
        { file: "images/bathroom04.jpg" }
    ]},
    { word: "parrilla", type: "noun", themes: ["restaurant", "kitchen"],
        images: [
        { file: "images/grill01.jpg" },
        { file: "images/grill02.jpg" },
        { file: "images/grill03.jpg" },
        { file: "images/grill04.jpg" }
    ]},
    { word: "caminar", type: "verb", images: [
        { file: "images/walking01.jpg" },
        { file: "images/walking02.jpg" },
        { file: "images/walking03.jpg" },
        { file: "images/walking04.jpg" }
    ]},
    { word: "cortar", type: "verb", themes: ["kitchen"],
        images: [
        { file: "images/cutting01.jpg" },
        { file: "images/cutting02.jpg" },
        { file: "images/cutting03.jpg" },
        { file: "images/cutting04.jpg" }
    ]},
    { word: "cenar", type: "verb", themes: ["restaurant"],
        images: [
        { file: "images/dinnering01.jpg" },
        { file: "images/dinnering03.jpg" },
        { file: "images/dinnering04.jpg" }
    ]},
    { word: "desayunar", type: "verb", themes: ["restaurant"],
        images: [
        { file: "images/breakfasting01.jpg" },
        { file: "images/breakfasting02.jpg" },
        { file: "images/breakfasting03.jpg" },
        { file: "images/breakfasting04.jpg" }
    ]},
    { word: "conducir", type: "verb", images: [
        { file: "images/driving01.jpg", accepts: ["conducir","manejar"] },
        { file: "images/driving02.jpg", accepts: ["conducir","manejar"] },
        { file: "images/driving03.jpg", accepts: ["conducir","manejar"] },
        { file: "images/driving04.jpg", accepts: ["conducir","manejar"] }
    ]},
    { word: "manejar", type: "verb", images: [
        { file: "images/driving01.jpg", accepts: ["conducir","manejar"] },
        { file: "images/driving02.jpg", accepts: ["conducir","manejar"] },
        { file: "images/driving03.jpg", accepts: ["conducir","manejar"] },
        { file: "images/driving04.jpg", accepts: ["conducir","manejar"] }
    ]},
    { word: "pagar", type: "verb", themes: ["restaurant"],
        images: [
        { file: "images/paying01.jpg" },
        { file: "images/paying02.jpg" },
        { file: "images/paying03.jpg" },
        { file: "images/paying04.jpg" }
    ]},
    { word: "correr", type: "verb", images: [
        { file: "images/running01.jpg" },
        { file: "images/running02.jpg" },
        { file: "images/running03.jpg" },
        { file: "images/running04.jpg" }
    ]},
    { word: "encender", type: "verb", images: [
        { file: "images/turn_on01.jpg" },
        { file: "images/turn_on02.jpg" },
        { file: "images/turn_on03.jpg" },
        { file: "images/turn_on04.jpg" },
        { file: "images/lighting_like_fire01.jpg" },
        { file: "images/lighting_like_fire02.jpg" },
        { file: "images/lighting_like_fire03.jpg" },
        { file: "images/lighting_like_fire04.jpg" }
    ]},
    { word: "chuletón", type: "noun", themes: ["food"],
        images: [
        { file: "images/ribeye01.jpg" },
        { file: "images/ribeye02.jpg" },
        { file: "images/ribeye03.jpg" },
        { file: "images/ribeye04.jpg" }
    ]},
    { word: "solomillo", type: "noun", themes: ["food"],
        images: [
        { file: "images/sirloin01.jpg" },
        { file: "images/sirloin02.jpg" },
        { file: "images/sirloin03.jpg" },
        { file: "images/sirloin04.jpg" }
    ]},
    { word: "ajo", type: "noun", themes: ["food"],
        images: [
        { file: "images/garlic01.jpg" },
        { file: "images/garlic02.jpg" },
        { file: "images/garlic03.jpg" }
    ]},
    { word: "cebolla", type: "noun", themes: ["food"],
        images: [
        { file: "images/onion01.jpg" },
        { file: "images/onion02.jpg" },
        { file: "images/onion03.jpg" },
        { file: "images/onion04.jpg" }
    ]},
    { word: "mantequilla", type: "noun", themes: ["food","kitchen"],
        images: [
        { file: "images/butter01.jpg" },
        { file: "images/butter02.jpg" },
        { file: "images/butter03.jpg" },
        { file: "images/butter04.jpg" }
    ]},
    { word: "lechuga", type: "noun", themes: ["food"],
        images: [
        { file: "images/lettuce01.jpg" },
        { file: "images/lettuce02.jpg" },
        { file: "images/lettuce03.jpg" },
        { file: "images/lettuce04.jpg" }
    ]},
    { word: "zanahoria", type: "noun", themes: ["food"],
        images: [
        { file: "images/carrot01.jpg" },
        { file: "images/carrot02.jpg" },
        { file: "images/carrot03.jpg" },
        { file: "images/carrot04.jpg" }
    ]},
    { word: "champiñón", type: "noun", themes: ["food"],
        images: [
        { file: "images/mushroom01.jpg" },
        { file: "images/mushroom02.jpg" },
        { file: "images/mushroom03.jpg" },
        { file: "images/mushroom04.jpg" }
    ]},
    { word: "maíz", type: "noun", themes: ["food"],
        images: [
        { file: "images/corn01.jpg" },
        { file: "images/corn02.jpg" },
        { file: "images/corn03.jpg" },
        { file: "images/corn04.jpg" }
    ]},
    { word: "pimiento", type: "noun", themes: ["food"],
        images: [
        { file: "images/bell_pepper01.jpg" },
        { file: "images/bell_pepper02.jpg" },
        { file: "images/chili_pepper01.jpg" },
        { file: "images/chili_pepper02.jpg" }
    ]},
    { word: "pimienta", type: "noun", themes: ["food","kitchen"],
        images: [
        { file: "images/black_pepper01.jpg" },
        { file: "images/black_pepper02.jpg" },
        { file: "images/black_pepper03.jpg" }
    ]},
    { word: "repollo", type: "noun", themes: ["food"],
        images: [
        { file: "images/cabbage01.jpg" },
        { file: "images/cabbage02.jpg" },
        { file: "images/cabbage03.jpg" }
    ]},
    { word: "pepino", type: "noun", themes: ["food"],
        images: [
        { file: "images/cucumber01.jpg" },
        { file: "images/cucumber02.jpg" },
        { file: "images/cucumber03.jpg" }
    ]},
    { word: "pollo", type: "noun", themes: ["food"],
        images: [
        { file: "images/chicken_food01.jpg" },
        { file: "images/chicken_food02.jpg" },
        { file: "images/chicken_food03.jpg" },
        { file: "images/chicken_food04.jpg" }
    ]},
    { word: "queso", type: "noun", themes: ["food"],
        images: [
        { file: "images/cheese01.jpg" },
        { file: "images/cheese02.jpg" },
        { file: "images/cheese03.jpg" },
        { file: "images/cheese04.jpg" }
    ]},
    { word: "aguacate", type: "noun", themes: ["food"],
        images: [
        { file: "images/avocado01.jpg" },
        { file: "images/avocado02.jpg" },
        { file: "images/avocado03.jpg" },
        { file: "images/avocado04.jpg" }
    ]},
    { word: "frijoles", type: "noun", themes: ["food"],
        images: [
        { file: "images/beans01.jpg" },
        { file: "images/beans02.jpg" },
        { file: "images/beans03.jpg" },
        { file: "images/beans04.jpg" }
    ]},
    { word: "jitomate", type: "noun", themes: ["food"],
        images: [
        { file: "images/tomato01.jpg" },
        { file: "images/tomato02.jpg" },
        { file: "images/tomato03.jpg" },
        { file: "images/tomato04.jpg" }
    ]},
    { word: "papa", type: "noun", themes: ["food"],
        images: [
        { file: "images/potato01.jpg" },
        { file: "images/potato02.jpg" },
        { file: "images/potato03.jpg" },
        { file: "images/potato04.jpg" }
    ]},
    { word: "mayonesa", type: "noun", themes: ["food"],
        images: [
        { file: "images/mayo01.jpg" },
        { file: "images/mayo02.jpg" }
    ]},
    { word: "huevo", type: "noun", themes: ["food"],
        images: [
        { file: "images/egg01.jpg" },
        { file: "images/egg02.jpg" },
        { file: "images/egg03.jpg" },
        { file: "images/egg04.jpg" }
    ]},
    { word: "miel", type: "noun", themes: ["food"],
        images: [
        { file: "images/honey01.jpg" },
        { file: "images/honey02.jpg" },
        { file: "images/honey03.jpg" }
    ]},
    { word: "mostaza", type: "noun", themes: ["food"],
        images: [
        { file: "images/mustard01.jpg" },
        { file: "images/mustard02.jpg" },
        { file: "images/mustard03.jpg" }
    ]},
    { word: "café", type: "noun", themes: ["food"],
        images: [
        { file: "images/coffee01.jpg" },
        { file: "images/coffee02.jpg" },
        { file: "images/coffee03.jpg" },
        { file: "images/coffee04.jpg" }
    ]},
    { word: "tocino", type: "noun", themes: ["food"],
        images: [
        { file: "images/bacon01.jpg" },
        { file: "images/bacon02.jpg" },
        { file: "images/bacon03.jpg" },
        { file: "images/bacon04.jpg" }
    ]},
    { word: "gabinete", type: "noun", themes: ["kitchen"],
        images: [
        { file: "images/cabinet01.jpg" },
        { file: "images/cabinet02.jpg" },
        { file: "images/cabinet03.jpg" },
        { file: "images/cabinet04.jpg" }
    ]},
    { word: "estufa", type: "noun", themes: ["kitchen"],
        images: [
        { file: "images/stove01.jpg" },
        { file: "images/stove02.jpg" },
        { file: "images/stove03.jpg" },
        { file: "images/stove04.jpg" }
    ]},
    { word: "microondas", type: "noun", themes: ["kitchen"],
        images: [
        { file: "images/microwave01.jpg" },
        { file: "images/microwave02.jpg" },
        { file: "images/microwave03.jpg" }
    ]},
    { word: "nevera", type: "noun", themes: ["kitchen"],
        images: [
        { file: "images/refrigerator01.jpg", accepts: ["nevera","refrigerador"]},
        { file: "images/refrigerator02.jpg", accepts: ["nevera","refrigerador"] },
        { file: "images/refrigerator03.jpg", accepts: ["nevera","refrigerador"] },
        { file: "images/refrigerator04.jpg", accepts: ["nevera","refrigerador"] }
    ]},
    { word: "refrigerador", type: "noun", themes: ["kitchen"],
        images: [
        { file: "images/refrigerator01.jpg", accepts: ["nevera","refrigerador"] },
        { file: "images/refrigerator02.jpg", accepts: ["nevera","refrigerador"] },
        { file: "images/refrigerator03.jpg", accepts: ["nevera","refrigerador"] },
        { file: "images/refrigerator04.jpg", accepts: ["nevera","refrigerador"] }
    ]},
    { word: "congelador", type: "noun", themes: ["kitchen"],
        images: [
        { file: "images/freezer01.jpg" },
        { file: "images/freezer02.jpg" },
        { file: "images/freezer04.png" }
    ]},
    { word: "lavavajillas", type: "noun", themes: ["kitchen"],
        images: [
        { file: "images/dishwasher01.jpg" },
        { file: "images/dishwasher02.jpg" },
        { file: "images/dishwasher03.jpg" },
        { file: "images/dishwasher04.jpg" }
    ]},
    { word: "tostadora", type: "noun", themes: ["kitchen"],
        images: [
        { file: "images/toaster01.jpg" },
        { file: "images/toaster02.jpg" },
        { file: "images/toaster03.jpg" },
        { file: "images/toaster04.jpg" }
    ]},
    { word: "licuadora", type: "noun", themes: ["kitchen"],
        images: [
        { file: "images/blender01.jpg" },
        { file: "images/blender02.jpg" },
        { file: "images/blender03.jpg" },
        { file: "images/blender04.jpg" }
    ]},
    { word: "sartén", type: "noun", themes: ["kitchen"],
        images: [
        { file: "images/pan01.jpg" },
        { file: "images/pan02.jpg" },
        { file: "images/pan03.jpg" },
        { file: "images/pan04.jpg" }
    ]},
    { word: "tierra", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/dirt01.jpg" },
        { file: "images/dirt02.jpg" },
        { file: "images/dirt03.jpg" },
        { file: "images/dirt04.jpg" }
    ]},
    { word: "bloque", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/block01.jpg" },
        { file: "images/block02.jpg" },
        { file: "images/block03.jpg" }
    ]},
    { word: "casa", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/house01.jpg" },
        { file: "images/house02.jpg" },
        { file: "images/house03.jpg" },
        { file: "images/house04.jpg" }
    ]},
    { word: "cueva", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/cave01.jpg" },
        { file: "images/cave02.jpg" },
        { file: "images/cave03.jpg" },
        { file: "images/cave04.jpg" }
    ]},
    { word: "espada", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/sword01.jpg" },
        { file: "images/sword02.jpg" },
        { file: "images/sword03.jpg" },
        { file: "images/sword04.jpg" }
    ]},
    { word: "pala", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/shovel01.jpg" },
        { file: "images/shovel02.jpg" },
        { file: "images/shovel03.jpg" },
        { file: "images/shovel04.jpg" }
    ]},
    { word: "azada", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/hoe01.jpg" },
        { file: "images/hoe02.jpg" },
        { file: "images/hoe03.jpg" }
    ]},
    { word: "hacha", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/axe01.jpg" },
        { file: "images/axe02.jpg" },
        { file: "images/axe03.jpg" },
        { file: "images/axe04.jpg" }
    ]},
    { word: "pico", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/pickaxe01.jpg" },
        { file: "images/pickaxe02.jpg" }
    ]},
    { word: "carbón", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/coal01.jpg" },
        { file: "images/coal02.jpg" }
    ]},
    { word: "hierro", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/iron_metal01.jpg" },
        { file: "images/iron_metal02.jpg" },
        { file: "images/iron_metal03.jpg" }
    ]},
    { word: "diamante", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/diamond01.jpg" },
        { file: "images/diamond02.jpg" },
        { file: "images/diamond03.jpg" }
    ]},
    { word: "cobre", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/copper01.jpg" },
        { file: "images/copper02.jpg" },
        { file: "images/copper03.jpg" },
        { file: "images/copper04.jpg" }
    ]},
    { word: "piedra", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/stone01.jpg" },
        { file: "images/stone02.jpg" },
        { file: "images/stone03.jpg" },
        { file: "images/stone04.jpg" }
    ]},
    { word: "pared", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/wall01.jpg" },
        { file: "images/wall02.jpg" },
        { file: "images/wall03.jpg" },
        { file: "images/wall04.jpg" }
    ]},
    { word: "piso", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/floor_surface01.jpg" },
        { file: "images/floor_surface02.jpg" },
        { file: "images/floor_surface03.jpg" },
        { file: "images/floor_surface04.jpg" }
    ]},
    { word: "techo", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/roof01.jpg" },
        { file: "images/roof02.jpg" },
        { file: "images/roof03.jpg" },
        { file: "images/roof04.jpg" }
    ]},
    { word: "losa", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/slab01.jpg" },
        { file: "images/slab02.jpg" },
        { file: "images/slab03.jpg" },
        { file: "images/slab04.jpg" }
    ]},
    { word: "vaca", type: "noun", themes: ["minecraft","animals"],
        images: [
        { file: "images/cow01.jpg" },
        { file: "images/cow02.jpg" },
        { file: "images/cow03.jpg" },
        { file: "images/cow04.jpg" }
    ]},
    { word: "oveja", type: "noun", themes: ["minecraft","animals"],
        images: [
        { file: "images/sheep01.jpg" },
        { file: "images/sheep02.jpg" },
        { file: "images/sheep03.jpg" }
    ]},
    { word: "cerdo", type: "noun", themes: ["minecraft","animals"],
        images: [
        { file: "images/pig01.jpg" },
        { file: "images/pig02.jpg" },
        { file: "images/pig03.jpg" },
        { file: "images/pig04.jpg" }
    ]},
    { word: "río", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/river01.jpg" },
        { file: "images/river02.jpg" }
    ]},
    { word: "montaña", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/mountain01.jpg" },
        { file: "images/mountain02.jpg" },
        { file: "images/mountain03.jpg" }
    ]},
    { word: "arena", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/sand01.jpg" },
        { file: "images/sand02.jpg" },
        { file: "images/sand03.jpg" }
    ]},
    { word: "trigo", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/wheat01.jpg" },
        { file: "images/wheat02.jpg" },
        { file: "images/wheat03.jpg" }
    ]},
    { word: "alga", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/kelp01.jpg" },
        { file: "images/kelp02.jpg" },
        { file: "images/kelp03.jpg" }
    ]},
    { word: "antorcha", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/torch01.jpg" },
        { file: "images/torch02.jpg" },
        { file: "images/torch03.jpg" }
    ]},
    { word: "nieve", type: "noun", themes: ["minecraft","weather"],
        images: [
        { file: "images/snow01.jpg" },
        { file: "images/snow02.jpg" },
        { file: "images/snow03.jpg" }
    ]},
    { word: "árbol", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/tree01.jpg" },
        { file: "images/tree02.jpg" },
        { file: "images/tree03.jpg" },
        { file: "images/tree04.jpg" }
    ]},
    { word: "madera", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/wood01.jpg" },
        { file: "images/wood02.jpg" },
        { file: "images/wood03.jpg" }
    ]},
    { word: "arco", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/bow_weapon01.jpg" },
        { file: "images/bow_weapon02.jpg" },
        { file: "images/bow_weapon03.jpg" },
        { file: "images/bow_weapon04.jpg" }
    ]},
    { word: "flecha", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/arrow01.jpg" },
        { file: "images/arrow02.jpg" },
        { file: "images/arrow03.jpg" }
    ]},
    { word: "escudo", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/shield01.jpg" },
        { file: "images/shield02.jpg" },
        { file: "images/shield03.jpg" },
        { file: "images/shield04.jpg" }
    ]},
    { word: "cofre", type: "noun", themes: ["hotels"],
        images: [
        { file: "images/safe_vault01.jpg" },
        { file: "images/safe_vault02.jpg" },
        { file: "images/safe_vault03.jpg" },
        { file: "images/safe_vault04.jpg" }
    ]},
    { word: "cofre", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/chest_treasure01.jpg" },
        { file: "images/chest_treasure02.jpg" },
        { file: "images/chest_treasure03.jpg" },
        { file: "images/chest_treasure04.jpg" }
    ]},
    { word: "cubo", type: "noun", themes: ["minecraft"],
        images: [
        { file: "images/bucket01.jpg" },
        { file: "images/bucket02.jpg" },
        { file: "images/bucket03.jpg" },
        { file: "images/bucket04.jpg" }
    ]},
    { word: "araña", type: "noun", themes: ["minecraft","animals"],
        images: [
        { file: "images/spider01.jpg" },
        { file: "images/spider02.jpg" }
    ]},
    { word: "cavar", type: "verb", themes: ["minecraft"],
        images: [
        { file: "images/to_dig01.jpg" },
        { file: "images/to_dig02.jpg" },
        { file: "images/to_dig03.jpg" },
        { file: "images/to_dig04.jpg" }
    ]},
    { word: "saltar", type: "verb", themes: ["minecraft"],
        images: [
        { file: "images/to_jump01.jpg" },
        { file: "images/to_jump02.jpg" },
        { file: "images/to_jump03.jpg" },
        { file: "images/to_jump04.jpg" }
    ]},
    { word: "agarrar", type: "verb", themes: ["minecraft"],
        images: [
        { file: "images/to_grab01.jpg" },
        { file: "images/to_grab02.jpg" }
    ]},
    { word: "recoger", type: "verb", themes: ["minecraft"],
        images: [
        { file: "images/to_pick_up_from_ground01.jpg" },
        { file: "images/to_pick_up_from_ground02.jpg" },
        { file: "images/to_pick_up_from_ground03.jpg" }
    ]}
];