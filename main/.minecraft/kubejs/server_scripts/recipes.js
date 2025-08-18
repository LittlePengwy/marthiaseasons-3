ServerEvents.recipes(event => {        

// Zinc
  event.remove({output: 'create:zinc_ingot'})
  event.remove({output: 'create:raw_zinc'})
  event.remove({output: 'create:zinc_block'})
  event.remove({output: 'create:raw_zinc_block'})
  event.remove({output: 'create:zinc_ore'})
  event.remove({output: 'create:crushed_zinc_ore'})

  event.replaceInput(
  { input: 'create:zinc_ingot' },
  'create:zinc_ingot',            
  'crusty_chunks:zinc_ingot' 
)

  event.replaceInput(
  { input: 'create:raw_zinc' },
  'create:raw_zinc',            
  'crusty_chunks:raw_zinc' 
)

  event.replaceInput(
  { input: 'create:zinc_block' },
  'create:zinc_block',            
  'crusty_chunks:zinc_block' 
)

  event.replaceOutput(
  { input: 'create:zinc_ingot' },
  'create:zinc_ingot',            
  'crusty_chunks:zinc_ingot' 
)

  event.replaceOutput(
  { input: 'create:raw_zinc' },
  'create:raw_zinc',            
  'crusty_chunks:raw_zinc' 
)

  event.replaceOutput(
  { input: 'create:zinc_block' },
  'create:zinc_block',            
  'crusty_chunks:zinc_block' 
)
// Brass
  event.remove({output: 'create:brass_ingot'})
  event.remove({output: 'create:brass_block'})
  event.remove({output: 'create:brass_sheet'})

  event.replaceInput(
  { input: 'create:brass_sheet' },
  'create:brass_sheet',            
  'crusty_chunks:brass_plate' 
)

  event.replaceInput(
  { input: 'create:brass_block' },
  'create:brass_block',            
  'crusty_chunks:brass_block' 
)

  event.replaceInput(
  { input: 'create:brass_ingot' },
  'create:brass_ingot',            
  'crusty_chunks:brass_ingot' 
)

  event.replaceOutput(
  { input: 'create:brass_sheet' },
  'create:brass_sheet',            
  'crusty_chunks:brass_plate' 
)

  event.replaceOutput(
  { input: 'create:brass_block' },
  'create:brass_block',            
  'crusty_chunks:brass_block' 
)

  event.replaceOutput(
  { input: 'create:brass_ingot' },
  'create:brass_ingot',            
  'crusty_chunks:brass_ingot' 
)

// Nether Replacement
event.shapeless(
  Item.of('minecraft:netherrack', 4),
  [
    'minecraft:cobblestone',
    'create:crimsite',
    'create:crimsite',
    'minecraft:cobblestone'
  ]
)

event.shapeless(
  Item.of('minecraft:blackstone', 4),
  [
    'minecraft:cobblestone',
    'minecraft:black_dye',
    'minecraft:black_dye',
    'minecraft:cobblestone'
  ]
)

event.shapeless(
  Item.of('minecraft:gilded_blackstone', 2),
  [
    'minecraft:blackstone',
    'minecraft:gold_nugget',
    'minecraft:gold_nugget',
    'minecraft:blackstone'
  ]
)

event.shapeless(
  Item.of('minecraft:soul_sand', 4),
  [
    'minecraft:sand',
    'minecraft:rotten_flesh',
    'minecraft:rotten_flesh',
    'minecraft:sand'
  ]
)

event.shapeless(
  Item.of('minecraft:brown_mushroom', 4),
  [
    'minecraft:bone_meal',
    'minecraft:rotten_flesh',
    'minecraft:rotten_flesh',
    'minecraft:bone_meal'
  ]
)

event.shapeless(
  Item.of('minecraft:nether_wart', 4),
  [
    'minecraft:wheat_seeds',
    'minecraft:rotten_flesh',
    'minecraft:rotten_flesh',
    'minecraft:wheat_seeds'
  ]
)

event.shapeless(
  Item.of('minecraft:red_mushroom', 1),
  [
    'minecraft:brown_mushroom'
  ]
)

event.shapeless(
  Item.of('minecraft:brown_mushroom', 1),
  [
    'minecraft:red_mushroom'
  ]
)

event.shapeless(
  Item.of('minecraft:warped_nylium', 4),
  [
    'minecraft:netherrack',
    'minecraft:warped_fungus',
    'vs_clockwork:wanderlite_crystal',
    'minecraft:netherrack'
  ]
)

event.shapeless(
  Item.of('minecraft:crimson_nylium', 4),
  [
    'minecraft:netherrack',
    'minecraft:crimson_fungus',
    'vs_clockwork:wanderlite_crystal',
    'minecraft:netherrack'
  ]
)

event.shaped(
  Item.of('minecraft:blaze_spawn_egg', 1),
  [
    'ACA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'minecraft:netherrack',
    B: 'minecraft:egg',
    C: 'create:blaze_cake'
  }
)


event.shaped(
  Item.of('minecraft:wither_skeleton_skull', 1),
  [
    ' A ',
    'ABA',     
    ' A '
  ],
  {
    A: 'crusty_chunks:uranium_neutral_dust',
    B: 'minecraft:skeleton_skull'
  }
)

// Netherite Removal
  event.remove({output: 'minecraft:netherite_helmet'})
  event.remove({output: 'minecraft:netherite_chestplate'})
  event.remove({output: 'minecraft:netherite_leggings'})
  event.remove({output: 'minecraft:netherite_boots'})
  event.remove({id: 'create:crafting/appliances/netherite_backtank_from_netherite'})
  event.remove({id: 'create:crafting/appliances/netherite_diving_boots_from_netherite'})
  event.remove({id: 'create:crafting/appliances/netherite_diving_helmet_from_netherite'})

//Farmers Delight + Addon Recipes

event.shapeless(
  Item.of('farmersrespite:wild_coffee_bush', 4),
  [
    'minecraft:cocoa_beans',
    'minecraft:black_dye',
    'minecraft:black_dye',
    'minecraft:cocoa_beans'
  ]
)

event.shapeless(
  Item.of('farmersrespite:wild_tea_bush'),
  [
    '#minecraft:leaves',
    'minecraft:green_dye',
    'minecraft:green_dye',
    '#minecraft:leaves'
  ]
)

event.shaped(
  Item.of('farmersdelight:wild_cabbages', 1),
  [
    'A  ',
    ' ',     
    ' '
  ],
  {
    A: 'minecraft:wheat_seeds'
  }
)

event.shaped(
  Item.of('farmersdelight:wild_onions', 1),
  [
    ' A ',
    ' ',     
    ' '
  ],
  {
    A: 'minecraft:wheat_seeds'
  }
)

event.shaped(
  Item.of('farmersdelight:wild_tomatoes', 1),
  [
    '  A',
    ' ',     
    ' '
  ],
  {
    A: 'minecraft:wheat_seeds'
  }
)

event.shaped(
  Item.of('farmersdelight:wild_carrots', 1),
  [
    ' ',
    'A',     
    ' '
  ],
  {
    A: 'minecraft:wheat_seeds'
  }
)

event.shaped(
  Item.of('farmersdelight:wild_potatoes', 1),
  [
    '   ',
    ' A',     
    ' '
  ],
  {
    A: 'minecraft:wheat_seeds'
  }
)

event.shaped(
  Item.of('farmersdelight:wild_beetroots', 1),
  [
    ' ',
    '  A',     
    ' '
  ],
  {
    A: 'minecraft:wheat_seeds'
  }
)

event.shaped(
  Item.of('farmersdelight:wild_rice', 1),
  [
    ' ',
    ' ',     
    'A'
  ],
  {
    A: 'minecraft:wheat_seeds'
  }
)

//Oxygen

event.recipes.create.mixing(Fluid.of('kubejs:liquid_oxygen', 333).toJson(), Fluid.of('minecraft:water', 1000).toJson()).heated()

//Beyond Oxygen Removal

  event.remove({output:'beyond_oxygen:empty_can'})
  event.remove({output:'beyond_oxygen:medium_oxygen_tank'})
  event.remove({output:'beyond_oxygen:small_oxygen_tank'})
  event.remove({output:'beyond_oxygen:large_oxygen_tank'})
  event.remove({output:'beyond_oxygen:atmospheric_oxygen_tank'})
  event.remove({output:'beyond_oxygen:bubble_generator'})
  event.remove({output:'beyond_oxygen:spacesuit_helmet'})
  event.remove({output:'beyond_oxygen:spacesuit_chestplate'})
  event.remove({output:'beyond_oxygen:spacesuit_leggings'})
  event.remove({output:'beyond_oxygen:spacesuit_boots'})
  event.remove({output:'beyond_oxygen:cryo_suit_helmet'})
  event.remove({output:'beyond_oxygen:cryo_suit_chestplate'})
  event.remove({output:'beyond_oxygen:cryo_suit_leggings'})
  event.remove({output:'beyond_oxygen:cryo_suit_boots'})
  event.remove({output:'beyond_oxygen:thermal_suit_helmet'})
  event.remove({output:'beyond_oxygen:thermal_suit_chestplate'})
  event.remove({output:'beyond_oxygen:thermal_suit_leggings'})
  event.remove({output:'beyond_oxygen:thermal_suit_boots'})
  event.remove({output:'beyond_oxygen:canned_potatoes'})
  event.remove({output:'beyond_oxygen:canned_apple'})
  event.remove({output:'beyond_oxygen:canned_baguette'})
  event.remove({output:'beyond_oxygen:canned_beef'})
  event.remove({output:'beyond_oxygen:canned_pork'})
  event.remove({output:'beyond_oxygen:cryo_bed'})
  event.remove({output:'beyond_oxygen:thermal_regulator'})
})