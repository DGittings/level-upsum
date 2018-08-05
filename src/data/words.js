const words = [
  // Publishers & developers
  'sony',
  'microsoft',
  'nintendo',
  'sega',
  'valve',
  'blizzard',
  'activision',
  'EA',
  'ubisoft',
  'square enix',
  'bandai',
  'namco',
  'atari',
  'bethesda',
  'bungie',
  'capcom',
  'codemasters',
  'crystal dynamics',
  'crytek',
  'CD projekt red',
  'epic',
  'fromsoftware',
  'gearbox',
  'lucasarts',
  'rare',
  'riot',
  'rockstar',
  'square',
  'take-two',
  'THQ',
  '2K',
  'bioware',
  'DICE',
  'game freak',
  'ID software',
  'infinity ward',
  'media molecule',
  'midway',
  'mojang',
  'monolith',
  'naughty dog',
  'neversoft',
  'raven',
  'respawn',
  'rocksteady',
  'sucker punch',
  'team17',
  'treyarch',

  // Consoles
  'playstation',
  'xbox',
  'gameboy',
  'SNES',
  'NES',
  'N64',
  'gamecube',
  'wii',
  'wii u',
  'switch',
  'PSP',
  '360',
  'PC',
  'xbox one x',
  'PS4',
  'PS3',
  'PS2',
  'PS1',
  'game gear',
  'ngage',
  'DS',
  '3DS',
  'gameboy color',
  'gameboy pocket',
  'gameboy sp',
  '2DS',

  // Games
  'fortnite',
  'overwatch',
  'call of duty',
  'league of legends',
  'dota',
  'hearthstone',
  'world of warcraft',
  'heroes of the storm',
  'destiny',
  'starcraft',
  'counter strike',
  'gears of war',
  'pokemon',
  'tetris',
  'mario kart',
  'super smash bros',
  'the legend of zelda',
  'super mario world',
  'mario sunshine',
  'mario galaxy',
  'mario tennis',
  'mario party',
  'PUBG',
  'grand theft auto',
  'resident evil',
  'forza',
  'minecraft',
  'fifa',
  'runescape',
  'dark souls',
  'diablo',
  'football manager',
  'rocket league',
  'the witcher',
  'street fighter',
  'tekken',
  'guitar hero',
  'crash bandicoot',
  'rollercoaster tycoon',
  'quake',
  'doom',
  'wolfenstein',
  'the sims',
  'battlefield',
  'fallout',
  'splatoon',
  'halo',
  'the last of us',
  'uncharted',
  'horizon zero dawn',
  'XCOM',
  'madden',
  'tomb raider',
  'super mario odyssey',
  'far cry',
  'mortal kombat',
  'gran turismo',
  'donkey kong',
  'metal gear solid',
  'mass effect',
  'bioshock',
  'final fantasy',
  'spyro',
  'cuphead',
  'titanfall',
  'civilization',
  'banjo kazooie',
  'dragon age',
  'skyrim',
  'halo wars',
  'borderlands',
  'metroid',
  'mafia',
  'devil may cry',
  'watch dogs',
  'dead space',
  'metro 2033',
  "assassin's creed",
  'hitman',
  'red dead redemption',
  'super monkey ball',
  'space invaders',
  'pacman',
  'pong',
  'grim fandango',
  'left 4 dead',
  'half-life',
  'ratchet and clank',
  'crysis',
  'dino crisis',
  "luigi's mansion",
  'bayonetta',
  'total war',
  'dead rising',
  'goldeneye',
  'perfect dark',
  'harvest moon',
  'stardew valley',
  'animal crossing',
  'saints row',
  'speedrunners',
  'fable',
  "mirror's edge",
  'mega man',
  'ssx tricky',
  'silent hill',
  'portal',
  'need for speed',
  'god of war',
  "conker's bad fur day",
  'splinter cell',
  'little big planet',
  'killzone',
  'pikmin',
  'advance wars',
  'borderlands',
  'f-zero',
  'burnout',

  // Characters
  'mario',
  'luigi',
  'toad',
  'yoshi',
  'princess peach',
  'bowser',
  'boo',
  'chain chomp',
  'wario',
  'donkey kong',
  'waluigi',
  'sonic',
  'tails',
  'knuckles',
  'dr eggman',
  'link',
  'zelda',
  'ganon',
  'ganondorf',
  'skeik',
  'zora',
  'goron',
  'master chief',
  'cortana',
  'glados',
  'sam fisher',
  'agent 47',
  'solid snake',
  'liquid snake',
  'otacon',
  'raiden',
  'big boss',
  'revolver ocelot',
  'psycho mantis',
  'sniper wolf',
  'sylvanas windrunner',
  'arthas',
  'illidan stormrage',
  'jaina proudmoore',
  "gul'dan",
  'medivh',
  'anduin',
  'durotan',
  'thrall',
  'garrosh hellscream',
  'varian',
  "kel'thuzad",
  'malfurion stormrage',
  'rexxar',
  'valeera',
  'nathan drake',
  'captain price',
  'lara croft',
  'samus',
  'gordon freeman',
  'marcus fenix',
  'cloud strife',
  'agent 47',
  'sephiroth',
  'pikachu',
  'ryu',
  'ken',
  'duke nukem',
  'pac-man',
  'kratos',
  'GLaDOS',
  'earthworm jim',
  'handsome jack',
  'rayman',
  'spyro the dragon',
  'sam fisher',
  'banjo',
  'max payne',
  'subzero',
  'scorpion',
  'geralt of rivia',
  'princess peach',
  'fox mccloud',
  'chun-li',
  'dante',
  'tommy vercetti',
  'conker',
  'bayonetta',

  // Services
  'xbox live',
  'psn',
  'steam',
  'uplay',
  'origin',

  // Weapons
  'master sword',
  'keyblade',
  'AWP',
  'BFG',
  'chainsaw',
  'energy sword',
  'flak cannon',
  'golden gun',
  'gunblade',
  'laptop gun',
  'metal gear rex',
  'lancer',
  'plasma grenade',
  'proton cannon',
  'red shell',
  'blue shell',
  'green shell',
  'soul edge',
  'gravity gun',
  'plasma cutter',
  'crowbar',
  'holy hand grenade',
  'buster sword',
  'portal gun',
  'home-run bat',
  'fireball',
  'hammer of dawn',
  'pokeball',
  'shotgun',
  'assault rifle',
  'machine gun',
  'knife',
  'grenade',
  'flashbang',
  'smoke grenade',
  'axe',
  'sword',
  'spear',
  'bazooka',
  'RPG',
  'banana skin',

  // Items
  'boss key',
  'health potion',
  'mana potion',
  'shield',
  'ammo',
  'heart container',
  '1up',
  'bandages',
  'medkit',
  'cardboard box',
  'mushroom',
  'coin',

  // Interface
  'health bar',
  'magic bar',
  'inventory',
  'pause screen',
  'loading screen',
  'loading bar',
  'minimap',

  // Terms
  'level',
  'checkpoint',
  'save point',
  'high score',
  'cheat code',
  'extra life',
  'game over',
  'split-screen',
  'online',
  'co-op',
  'multiplayer',
  'battle royale',
  'deathmatch',
  'capture the flag',
  'king of the hill',
  'play of the game',
  'replay',
  'ghost',
  'save file',
  'rekt',
  'noob',
  'pwned',
  'owned',
  'gg',
  '1v1',
  'vr',
  'headshot',
  'headshotted',
  'defeated',
  'nuked',
  'eliminated',
  'raid',
  'esports',
  'level up',
  'demo',
  'sniped',
  'respawn',
  'stage',
  'world',
  'boss',
  'mini-boss',
  'dungeon',
  'time trial',
  'open world',
  'mmorpg',
  'fps',
  'rpg',
  'moba',

  // Locations
  'mushroom kingdom',
  'hyrule',
  'kanto',
  'azaroth',
  'oddworld',
  'green hill zone',
  'pandora',
  'sera',
  'liberty city',
  'san andreas',
  'vice city',
  'raccoon city',
  'zebes',
  'rapture',

  // Controllers
  'joystick',
  'analogue stick',
  'keyboard',
  'mouse',
  'controller',
  'd-pad',
  'dual shock',
  'tilt controls',
  'headset',
  'light gun',

  // Gaming verbs
  'killed',
  'played',
  'jumped',
  'ran',
  'restart',
  'replay',
];

export default words;
