document.addEventListener('DOMContentLoaded', () => {
    const items = [
    {
        "_weaponsStart": "🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩",
        "name": "\".\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/e2/Silenced_Pistol.png",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Silenced Pistol"]
    },
    {
        "name": "\"=\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/58/Knife.png/revision/latest?cb=20230222161731",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Knife"]
    },
    {
        "name": "\"Aerial Bomber\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/51/Ambassador.png/revision/latest?cb=20200520151534",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Ambassador"]
    },
    {
        "name": "\"and\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/7c/Wrench.png/revision/latest?cb=20180827130138",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Wrench"]
    },
    {
        "name": "\"Boonie Blaster\"",
        "image": "https://i.imgur.com/4Xecd7M.png",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Minigun"]
    },
    {
        "name": "\"Collector's Edition iPhone\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/76/Sapper.png/revision/latest?cb=20230222154752",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Sapper"]
    },
    {
        "name": "\"Cow Mangler my beloved ❤️\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a1/Cow_Mangler_5000.png/revision/latest?cb=20200524055507",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Cow Mangler 5000"],
        "not-tradeable": true
    },
    {
        "name": "\"□\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/2f/Disciplinary_Action.png/revision/latest?cb=20180925132318",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Disciplinary Action","Whip"]
    },
    {
        "name": "\"spoopy kritz\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d5/Kritzkrieg.png/revision/latest?cb=20221031222800",
        "rarity": "Haunted",
        "category": "weapons",
        "altNames": ["Kritzkrieg"],
        "not-tradeable": true
    },
    {
        "name": "\"sticky jumper main\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/5d/Sticky_Jumper.png/revision/latest?cb=20230222144505",
        "rarity": "Genuine",
        "category": "weapons",
        "altNames": ["Sticky Jumper"]
    },
    {
        "name": "\"Lever Levered Levereage Lever Lever Shotgun\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/7a/Lever_Shotgun_render.png/revision/latest/scale-to-width-down/1000?cb=20240110110843",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Lever Shotgun"]
    },
    {
        "name": "\"Pirovideo\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/da/Holy_Mackerel.png/revision/latest?cb=20210618154958",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Holy Mackerel"]
    },
    {
        "name": "\"Join the hivemind.\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/0b/G-Bomb.png/revision/latest?cb=20230222142051",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["G-Bomb"]
    },
    {
        "name": "\"meet the j\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a0/Dentist%27s_Delight.png/revision/latest?cb=20220414202802",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Dentist's Delight"]
    },
    {
        "name": "\"pew pew\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/20/Personal_Death_Ray.png/revision/latest?cb=20210715081334",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Personal Death Ray"]
    },
    {
        "name": "\"Punch-out!! on the Nintendo Wii\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/3b/Boxing_Gloves.png/revision/latest?cb=20210327030157",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Boxing Gloves"]
    },
    {
        "name": "\"Rock's Own Collector's Crankestein\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/f6/Crankenstein.png/revision/latest?cb=20210731173150",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Crankestein"]
    },
    {
        "name": "\"the\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/b/b7/Broken_Sword.png/revision/latest?cb=20230222145323",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Broken Sword"]
    },
    {
        "name": "\"this 300ms eyelander is fire 🗣️🔥\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/cf/Sniper_Rifle.png/revision/latest?cb=20230222174818",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Sniper Rifle"],
        "not-tradeable": true
    },
    {
        "name": "\"This server is full of so many geniuses\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c6/Shotgun_render.png/revision/latest/scale-to-width-down/1000?cb=20240110112402",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Shotgun"],
        "not-tradeable": true
    },
    {
        "name": "\"trimp weapon\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c2/Iron_Force.png/revision/latest?cb=20230222144404",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Iron Force"]
    },
    {
        "name": "\"we got prime\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/cf/Interceptor.png/revision/latest?cb=20220414200814",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Interceptor"]
    },
    {
        "name": "\"what the dog doin?\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d1/Lupara_DB_render.png/revision/latest/scale-to-width-down/1000?cb=20240110112227",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Lupara DB"]
    },
    {
        "name": "\"⭐\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/7f/Original.png/revision/latest?cb=20230222142106",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Original"],
        "not-tradeable": true
    },
    {
        "name": "\"🅱️irect Hit\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/fd/Direct_Hit.png/revision/latest?cb=20210620121138",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Direct Hit"],
        "not-tradeable": true
    },
    {
        "name": "\"🍩\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/57/Dire_Donut.png/revision/latest?cb=20230222151423",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Dire Donut"],
        "not-tradeable": true
    },
    {
        "name": "\"💥\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/67/Grenade_Launcher.png/revision/latest?cb=20220715195644",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Grenade Launcher"],
        "not-tradeable": true
    },
    {
        "name": "Collector's Battalion's Backup",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/7e/Battalion%27s_Backup.png/revision/latest?cb=20210326194832",
        "rarity": "Collector's",
        "category": "weapons"
    },
    {
        "name": "Collector's Brash Burger",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/75/Brash_Burger.png/revision/latest?cb=20230222151411",
        "rarity": "Collector's",
        "category": "weapons"
    },
    {
        "name": "Collector's Dire Donut",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/57/Dire_Donut.png/revision/latest?cb=20230222151423",
        "rarity": "Collector's",
        "category": "weapons"
    },
    {
        "name": "Collector's Double Trouble",
        "image": "https://static.wikia.nocookie.net/tc2/images/b/bc/Double_Trouble.png/revision/latest?cb=20220129065647",
        "rarity": "Collector's",
        "category": "weapons"
    },
    {
        "name": "\"Reject Axtinguisher, Equip Extinguisher\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/0a/Fire_Extinguisher.png/revision/latest?cb=20180827130137",
        "rarity": "Collector's",
        "category": "weapons",
        "altNames": ["Fire Extinguisher"]
    },
    {
        "name": "Collector's Model IV",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d0/Model_IV.png/revision/latest?cb=20230222174552",
        "rarity": "Collector's",
        "category": "weapons",
    },
    {
        "name": "Collector's Maxine",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/f8/Maxine.png/revision/latest?cb=20210209093011",
        "rarity": "Collector's",
        "category": "weapons",
    },
    {
        "name": "Collector's Rocket Launcher",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d0/Rocket_Launcher_render.png/revision/latest/scale-to-width-down/1000?cb=20240110112023",
        "rarity": "Collector's",
        "category": "weapons",
    },
    {
        "name": "Collector's Vaccinator",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/2d/Vaccinator_render.png/revision/latest?cb=20220419020752",
        "rarity": "Collector's",
        "category": "weapons",
    },
    {
        "name": "Collector's Medigun",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/1f/Medigun.png/revision/latest?cb=20230222174318",
        "rarity": "Collector's",
        "category": "weapons",
    },
    {
        "name": "Collector's Widowmaker",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/44/Widowmaker.png/revision/latest?cb=20210209092629",
        "rarity": "Collector's",
        "category": "weapons",
    },
    {
        "name": "Genuine Diggity Dog",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/4a/Diggity_Dog.png/revision/latest?cb=20230224153221",
        "rarity": "Genuine",
        "category": "weapons"
    },
    {
        "name": "Genuine Diggity Dog",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/4a/Diggity_Dog.png/revision/latest?cb=20230224153221",
        "rarity": "Genuine",
        "category": "weapons"
    },
    {
        "name": "Genuine Diggity Dog",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/4a/Diggity_Dog.png/revision/latest?cb=20230224153221",
        "rarity": "Genuine",
        "category": "weapons"
    },
    {
        "name": "Genuine Diggity Dog",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/4a/Diggity_Dog.png/revision/latest?cb=20230224153221",
        "rarity": "Genuine",
        "category": "weapons"
    },
    {
        "name": "Genuine Diggity Dog",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/4a/Diggity_Dog.png/revision/latest?cb=20230224153221",
        "rarity": "Genuine",
        "category": "weapons"
    },
    {
        "name": "Genuine Groovy Grinder",
        "image": "https://static.wikia.nocookie.net/tc2/images/b/bd/Groovy_Grinder.png/revision/latest?cb=20220126200017",
        "rarity": "Genuine",
        "category": "weapons"
    },
    {
        "name": "Genuine Mule Mauler 600",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/70/Mule_Mauler_600.png/revision/latest?cb=20230221160120",
        "rarity": "Genuine",
        "category": "weapons"
    },
    {
        "name": "Genuine Mule Mauler 600",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/70/Mule_Mauler_600.png/revision/latest?cb=20230221160120",
        "rarity": "Genuine",
        "category": "weapons"
    },
    {
        "name": "Genuine Mule Mauler 600",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/70/Mule_Mauler_600.png/revision/latest?cb=20230221160120",
        "rarity": "Genuine",
        "category": "weapons"
    },
    {
        "name": "Genuine Pirate Cutlass",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d3/Pirate_Cutlass.png/revision/latest?cb=20230222173422",
        "rarity": "Genuine",
        "category": "weapons"
    },
    {
        "name": "Genuine Sticky Jumper",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/5d/Sticky_Jumper.png/revision/latest?cb=20230222144505",
        "rarity": "Genuine",
        "category": "weapons"
    },
    {
        "name": "Vintage Huntsman",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/75/Huntsman.png/revision/latest?cb=20190825093747",
        "rarity": "Vintage",
        "category": "weapons"
    },
    {
        "name": "Vintage Rocket Jumper",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d8/Rocket_Jumper.png/revision/latest?cb=20230714010712",
        "rarity": "Vintage",
        "category": "weapons"
    },
    {
        "name": "\"Bonk! Incarnate\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/ad/Bat.png/revision/latest?cb=20180827130136",
        "rarity": "Strange",
        "category": "weapons",
        "altNames": ["Bat"]
    },
    {
        "name": "\"Do not look up lego piece 26047\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/ec/Syringe_Crossbow.png/revision/latest?cb=20190816052236",
        "rarity": "Strange",
        "category": "weapons",
        "altNames": ["Syringe Crossbow"]
    },
    {
        "name": "\"La Caution - The Laser Dance Song\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/e0/50-AE.png/revision/latest?cb=20230715175450",
        "rarity": "Strange",
        "category": "weapons",
        "altNames": ["50-AE"]
    },
    {
        "name": "\"Mac'n 🧀\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/57/MAC-10_render.png/revision/latest/scale-to-width-down/1000?cb=20240107113536",
        "rarity": "Strange",
        "category": "weapons",
        "altNames": ["MAC-10"],
        "not-tradeable": true
    },
    {
        "name": "\"snad undertable\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/1f/Fists_render.png/revision/latest?cb=20220324203645",
        "rarity": "Strange",
        "category": "weapons",
        "altNames": ["Fists"]
    },
    {
        "name": "\"Steve\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/62/Tomislav.png/revision/latest?cb=20200520151155",
        "rarity": "Strange",
        "category": "weapons",
        "altNames": ["Tomislav"]
    },
    {
        "name": "\"TUPAC Balance Update\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/73/Maverick.png/revision/latest?cb=20230222173103",
        "rarity": "Strange",
        "category": "weapons",
        "altNames": ["Maverick"]
    },
    {
        "name": "\"🔥\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/ad/Flamethrower.png/revision/latest?cb=20230222135806",
        "rarity": "Strange",
        "category": "weapons",
        "altNames": ["Flamethrower"],
        "not-tradeable": true
    },
    {
        "name": "Strange 50-AE",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/e0/50-AE.png/revision/latest?cb=20230715175450",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Ambassador",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/51/Ambassador.png/revision/latest?cb=20200520151534",
        "rarity": "Strange",
        "category": "weapons",
    
    },
    {
        "name": "Strange Amputator",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/ca/Amputator.png/revision/latest?cb=20190812131832",
        "rarity": "Strange",
        "category": "weapons",
    
    },
    {
        "name": "Strange Amputator",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/ca/Amputator.png/revision/latest?cb=20190812131832",
        "rarity": "Strange",
        "category": "weapons",
    
    },
    {
        "name": "Strange Amputator",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/ca/Amputator.png/revision/latest?cb=20190812131832",
        "rarity": "Strange",
        "category": "weapons",
    
    },
    {
        "name": "Strange Amputator",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/ca/Amputator.png/revision/latest?cb=20190812131832",
        "rarity": "Strange",
        "category": "weapons",
    
    },
    {
        "name": "Strange Blood Doctor",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/cd/Blood_Doctor_render.png/revision/latest?cb=20220419022512",
        "rarity": "Strange",
        "category": "weapons",
    
    },
    {
        "name": "Strange Blood Doctor",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/cd/Blood_Doctor_render.png/revision/latest?cb=20220419022512",
        "rarity": "Strange",
        "category": "weapons",
    
    },
    {
        "name": "Strange Blood Doctor",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/cd/Blood_Doctor_render.png/revision/latest?cb=20220419022512",
        "rarity": "Strange",
        "category": "weapons",
    
    },
    {
        "name": "Strange Boxing Gloves",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/3b/Boxing_Gloves.png/revision/latest?cb=20210327030157",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Boxing Gloves",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/3b/Boxing_Gloves.png/revision/latest?cb=20210327030157",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Brash Burger",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/75/Brash_Burger.png/revision/latest?cb=20230222151411",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Brash Burger",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/75/Brash_Burger.png/revision/latest?cb=20230222151411",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Brash Burger",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/75/Brash_Burger.png/revision/latest?cb=20230222151411",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Broken Sword",
        "image": "https://static.wikia.nocookie.net/tc2/images/b/b7/Broken_Sword.png/revision/latest?cb=20230222145323",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Classic",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/57/Classic.png/revision/latest?cb=20230222153150",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Classic",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/57/Classic.png/revision/latest?cb=20230222153150",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Cow Mangler 5000",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a1/Cow_Mangler_5000.png/revision/latest?cb=20200524055507",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Cow Mangler 5000",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a1/Cow_Mangler_5000.png/revision/latest?cb=20200524055507",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Cow Mangler 5000",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a1/Cow_Mangler_5000.png/revision/latest?cb=20200524055507",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Cow Mangler 5000",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a1/Cow_Mangler_5000.png/revision/latest?cb=20200524055507",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Cow Mangler 5000",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a1/Cow_Mangler_5000.png/revision/latest?cb=20200524055507",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Cow Mangler 5000",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a1/Cow_Mangler_5000.png/revision/latest?cb=20200524055507",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Crankestein",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/f6/Crankenstein.png/revision/latest?cb=20210731173150",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Crowbar",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c0/Crowbar.png/revision/latest?cb=20180927142246",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Deathblow",
        "image": "https://static.wikia.nocookie.net/tc2/images/b/b1/Deathblow.png/revision/latest?cb=20230222143740",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Dentist's Delight",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a0/Dentist%27s_Delight.png/revision/latest?cb=20220414202802",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Dentist's Delight",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a0/Dentist%27s_Delight.png/revision/latest?cb=20220414202802",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Dentist's Delight",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a0/Dentist%27s_Delight.png/revision/latest?cb=20220414202802",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Dire Donut",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/57/Dire_Donut.png/revision/latest?cb=20230222151423",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Direct Hit",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/fd/Direct_Hit.png/revision/latest?cb=20210620121138",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Direct Hit",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/fd/Direct_Hit.png/revision/latest?cb=20210620121138",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Direct Hit",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/fd/Direct_Hit.png/revision/latest?cb=20210620121138",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Fire Extinguisher",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/0a/Fire_Extinguisher.png/revision/latest?cb=20180827130137",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Fire Extinguisher",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/0a/Fire_Extinguisher.png/revision/latest?cb=20180827130137",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Fists",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/1f/Fists_render.png/revision/latest?cb=20220324203645",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Flamethrower",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/ad/Flamethrower.png/revision/latest?cb=20230222135806",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Flamethrower",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/ad/Flamethrower.png/revision/latest?cb=20230222135806",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Flamethrower",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/ad/Flamethrower.png/revision/latest?cb=20230222135806",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Gunslinger",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c2/Gunslinger.png/revision/latest?cb=20190913111628",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Gunslinger",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c2/Gunslinger.png/revision/latest?cb=20190913111628",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Gunslinger",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c2/Gunslinger.png/revision/latest?cb=20190913111628",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Huntsman",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/75/Huntsman.png/revision/latest?cb=20190825093747",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Huntsman",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/75/Huntsman.png/revision/latest?cb=20190825093747",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Huntsman",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/75/Huntsman.png/revision/latest?cb=20190825093747",
        "rarity": "Strange",
        "category": "weapons"
    },
    {
        "name": "Strange Interceptor",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/cf/Interceptor.png/revision/latest?cb=20220414200814",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Irish Guard",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/f1/Irish_Guard.png/revision/latest?cb=20181001032644",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Irish Guard",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/f1/Irish_Guard.png/revision/latest?cb=20181001032644",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Irish Guard",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/f1/Irish_Guard.png/revision/latest?cb=20181001032644",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Kritzkrieg",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d5/Kritzkrieg.png/revision/latest?cb=20221031222800",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Lupara DB",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d1/Lupara_DB_render.png/revision/latest/scale-to-width-down/1000?cb=20240110112227",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Lupara DB",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d1/Lupara_DB_render.png/revision/latest/scale-to-width-down/1000?cb=20240110112227",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange M249",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/96/M249.png/revision/latest?cb=20230222150517",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange M249",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/96/M249.png/revision/latest?cb=20230222150517",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange MAC-10",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/57/MAC-10_render.png/revision/latest/scale-to-width-down/1000?cb=20240107113536",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange MAC-10",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/0c/Machete.png/revision/latest?cb=20200811002532",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Maxine",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/f8/Maxine.png/revision/latest?cb=20210209093011",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Maxine",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/f8/Maxine.png/revision/latest?cb=20210209093011",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Medigun",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/1f/Medigun.png/revision/latest?cb=20230222174318",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Mending Mallet",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/fb/Mending_Mallet.png/revision/latest?cb=20230224123721",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Mending Mallet",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/fb/Mending_Mallet.png/revision/latest?cb=20230224123721",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Mending Mallet",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/fb/Mending_Mallet.png/revision/latest?cb=20230224123721",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Mending Mallet",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/fb/Mending_Mallet.png/revision/latest?cb=20230224123721",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Minigun",
        "image": "https://i.imgur.com/4Xecd7M.png",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Model IV",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d0/Model_IV.png/revision/latest?cb=20230222174552",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Original",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/7f/Original.png/revision/latest?cb=20230222142106",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Original",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/7f/Original.png/revision/latest?cb=20230222142106",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange P.D.Q",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/9a/P.D.Q.png/revision/latest?cb=20230222152538",
        "rarity": "Strange",
        "category": "weapons",
        "not-tradeable": true
    },
    {
        "name": "Strange Revolver",
        "rarity": "Strange",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/f5/Revolver_render.png/revision/latest",
        "category": "weapons",
    },
    {
        "name": "Strange Rocket Launcher",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d0/Rocket_Launcher_render.png/revision/latest/scale-to-width-down/1000?cb=20240110112023",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Rocket Launcher",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d0/Rocket_Launcher_render.png/revision/latest/scale-to-width-down/1000?cb=20240110112023",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Sandman",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d1/Sandman.png/revision/latest?cb=20210826115138",
        "rarity": "Strange",
        "category": "weapons",
        "not-tradeable": true
    },
    {
        "name": "Strange Sandman",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d1/Sandman.png/revision/latest?cb=20210826115138",
        "rarity": "Strange",
        "category": "weapons",
        "not-tradeable": true
    },
    {
        "name": "Strange Saw",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/0a/Saw.png/revision/latest?cb=20200703153257",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Shotgun",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c6/Shotgun_render.png/revision/latest/scale-to-width-down/1000?cb=20240110112402",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Silenced Pistol",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/e2/Silenced_Pistol.png",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Silenced Pistol",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/e2/Silenced_Pistol.png",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Silenced Pistol",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/e2/Silenced_Pistol.png",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Sniper Rifle",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/cf/Sniper_Rifle.png/revision/latest?cb=20230222174818",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Supersaw",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/27/Supersaw.png/revision/latest?cb=20200520151133",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Supersaw",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/27/Supersaw.png/revision/latest?cb=20200520151133",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Supersaw",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/27/Supersaw.png/revision/latest?cb=20200520151133",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Supersaw",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/27/Supersaw.png/revision/latest?cb=20200520151133",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Vaccinator",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/2d/Vaccinator_render.png/revision/latest?cb=20220419020752",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Vaccinator",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/2d/Vaccinator_render.png/revision/latest?cb=20220419020752",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "name": "Strange Wrench",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/7c/Wrench.png/revision/latest?cb=20180827130138",
        "rarity": "Strange",
        "category": "weapons",
    },
    {
        "_cosmeticsStart": "🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩",
        "name": "\"*blows up pancakes with mind*\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/99/Cowboy_Hat.png/",
        "rarity": "Collector's",
        "category": "cosmetics",
        "altNames": ["Cowboy Hat"]
    },
    {
        "name": "\"Burger King Employee\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/dc/Burger_Boy.png/revision/latest?cb=20240420131219",
        "rarity": "Collector's",
        "category": "cosmetics",
        "altNames": ["Burger Boy"]
    },
    {
        "name": "Collector's Last Bastion",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d8/Last_Bastion.png/revision/latest?cb=20230309073942",
        "rarity": "Collector's",
        "category": "cosmetics"
    },
    {
        "name": "\"Unusual Buber\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/cc/Gas_Hazmask.png/revision/latest?cb=20230301054140",
        "rarity": "Unusual",
        "category": "cosmetics",
        "unusual": "Burning",
        "altNames": ["Gas Hazmask"],
        "not-tradeable": true
    },
    {
        "name": "\"are you winning son?\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c4/Wonder_Worker.png/revision/latest?cb=20231227053454",
        "rarity": "Unusual",
        "category": "cosmetics",
        "unusual": "Anarchy Flash",
        "altNames": ["Wonder Worker"]
    },
    {
        "name": "Epic Unusual Cassels Tilt",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/82/Cassel%27s_Tilt.png/revision/latest?cb=20230301062231",
        "rarity": "Unusual",
        "category": "cosmetics",
        "unusual": "Sparking",
        "not-tradeable": true
    },
    {
        "name": "Unusual Home Readers",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/97/Home_Readers.png/revision/latest?cb=20220807183621",
        "rarity": "Unusual",
        "category": "cosmetics",
        "unusual": "Fiery Blaze",
        "not-tradeable": true
    },
    {
        "name": "\"クールな日本のキャラクター\"",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/06/Trilby_Thriller.png/revision/latest?cb=20210801005940",
        "rarity": "Collector's",
        "category": "cosmetics",
        "altNames": ["Trilby Thriller"]
    },
    {
        "name": "Collector's Aces Hight",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/91/Aces_High.png/revision/latest?cb=20230301062008",
        "rarity": "Collector's",
        "category": "cosmetics"
    },
    {
        "name": "Collector's Broken Rank",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/36/Broken_Rank2023.png/revision/latest?cb=20231029135154",
        "rarity": "Collector's",
        "category": "cosmetics"
    },
    {
        "name": "Collector's Civil Custodian",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/75/Civil_Custodian.png/revision/latest?cb=20181116084522",
        "rarity": "Collector's",
        "category": "cosmetics"
    },
    {
        "name": "Collector's Diver Goggles",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/84/Diver_Goggles.png/revision/latest?cb=20230301055203",
        "rarity": "Collector's",
        "category": "cosmetics"
    },
    {
        "name": "Collector's Football Helmet",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/8e/Football_Helmet.png/revision/latest?cb=20190927063307",
        "rarity": "Collector's",
        "category": "cosmetics"
    },
    {
        "name": "Collector's Seasoned Surgeon Specs",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/43/Seasoned_Surgeon_Specs.png/revision/latest?cb=20240322165647",
        "rarity": "Collector's",
        "category": "cosmetics",
    },
    {
        "name": "Collector's Team Beret",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/1b/The_Team_Beret.png/revision/latest?cb=20230301061046",
        "rarity": "Collector's",
        "category": "cosmetics",
    },
    {
        "name": "Collector's Tough Metal",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/4d/Tough_Metal.png/revision/latest?cb=20230309074546",
        "rarity": "Collector's",
        "category": "cosmetics",
    },
    {
        "name": "Genuine Ancient Arbiter",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/f8/The_Ancient_Arbiter.png/revision/latest?cb=20220715195644",
        "rarity": "Genuine",
        "category": "cosmetics",
    },
    {
        "name": "Genuine Boolean Badges",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/04/Boolean_Badges.png/revision/latest?cb=20231226015229",
        "rarity": "Genuine",
        "category": "cosmetics",
    },
    {
        "name": "Vintage American Anomaly",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/6a/American_Anomaly.png/revision/latest?cb=20230715090024",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Augment Thesis",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/81/Augment_Thesis.png/revision/latest?cb=20231202045726",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Autumn Pilot",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/8e/Autumn_Pilot.png/revision/latest?cb=20231105045001",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Beesy Entomologist",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/6a/Beesy_Entomologist.png/revision/latest?cb=20230715085901",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Big Bruncher",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/cb/Big_Bruncher.png/revision/latest?cb=20210801001828",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Brutal Butler",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/e4/Brutal_Butler.png/revision/latest?cb=20230715074837",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Burger Boss",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/e5/Burger_Boss.png/revision/latest?cb=20230715090115",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Cloaked Caster",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/7e/Cloaked_Caster.png/revision/latest?cb=20230715174810",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Critical Wound",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/22/Critical_Wound.png/revision/latest?cb=20231105174048",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Cunning Cook",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/f9/Cunning_Cook.png/revision/latest/scale-to-width-down/1000?cb=20230714171130",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Diver Goggles",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/84/Diver_Goggles.png/revision/latest?cb=20230301055203",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Dr. Delight",
        "image": "https://static.wikia.nocookie.net/tc2/images/b/be/Dr._Delight.png/revision/latest?cb=20240215050641",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Dream Hunter",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/25/Dream_Hunter.png/revision/latest?cb=20231202050113",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Entrenched Bombardier",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/10/Entrenched_Bombardier.png/revision/latest?cb=20230717075541",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Fending Farmhand",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/1f/Fending_Farmhand.png/revision/latest?cb=20230715074617",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Ghast Mask",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/ce/Ghast_Mask.png/revision/latest?cb=20181117035054",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Greasy Goon",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/47/Greasy_Goon.png/revision/latest?cb=20230715075548",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Guardian Angel",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/da/Guardian_Angel.png/revision/latest?cb=20230715074721",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Head Haunters",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c4/Head_Haunters.png/revision/latest?cb=20231105174151",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage HJW",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/87/HJW.png/revision/latest?cb=20231105044049",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Iron Maw",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/62/Iron_Maw.png/revision/latest?cb=20231106122341",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Minute Man",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a0/Minute_Man.png/revision/latest/scale-to-width-down/1000?cb=20230715175127",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Ms. Mystery",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/5e/Ms._Mystery.png/revision/latest?cb=20230717075559",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Night Walker",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/5c/Night_Walker.png/revision/latest?cb=20231105173947",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Open Mind",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/79/Open_Mind.png/revision/latest?cb=20231029135153",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Ostracized Elephant",
        "image": "https://static.wikia.nocookie.net/tc2/images/b/b7/Ostracized_Elephant.png/revision/latest?cb=20230309074304",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Peace Doctor",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/65/Peace_Doctor.png/revision/latest?cb=20230715075013",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Pester Jester",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c2/Pester_Jester.png/revision/latest?cb=20230715090228",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Phoney_Frank",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/53/Phoney_Frank.png/revision/latest?cb=20231105043832",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Pollinator",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/6c/Pollinator.png/revision/latest?cb=20230715075657",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Prestigious P.I.",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/0e/Prestigious_P.I..png/revision/latest?cb=20230715085622",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Road Runner",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/48/Road_Runner.png/revision/latest?cb=20230715085410",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Rockers Rollout",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/e4/Rockers_Rollout.png/revision/latest?cb=20230714171131",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage RoyalRags",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/0e/Royal_Rags.png/revision/latest?cb=20230715074452",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Safety First",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/69/Safety_First.png/revision/latest?cb=20230309075903",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Scorching Sentai",
        "image": "https://static.wikia.nocookie.net/tc2/images/b/b9/Scorching_Sentai.png/revision/latest?cb=20230715085732",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Stranded Shark",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/37/Stranded_Shark.png/revision/latest?cb=20230715075825",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Sweet Season",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/39/Sweet_Season.png/revision/latest?cb=20230715085245",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Traffic Control",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/22/Traffic_Control.png/revision/latest?cb=20230715085510",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Typical Colors Cap",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/44/Typical_Colors_Cap.png/revision/latest?cb=20240420141419",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Unsound Mind",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/37/Unsound_Mind.png/revision/latest?cb=20231105042926",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Trilby Thriller",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/06/Trilby_Thriller.png/revision/latest?cb=20210801005940",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Walking Death",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/4c/Walking_Death.png/revision/latest?cb=20231105043103",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Vintage Winter Woodsman",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c0/Winter_Woodsman.png/revision/latest?cb=20211225231301",
        "rarity": "Vintage",
        "category": "cosmetics",
    },
    {
        "name": "Strange Arcade Ace",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/1d/Arcade_Ace.png/revision/latest?cb=20210731174006",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Beesy Entomologist",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/6a/Beesy_Entomologist.png/revision/latest?cb=20230715085901",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Big Bruncher",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/cb/Big_Bruncher.png/revision/latest?cb=20210801001828",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Big Bruncher",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/cb/Big_Bruncher.png/revision/latest?cb=20210801001828",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Big Bruncher",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/cb/Big_Bruncher.png/revision/latest?cb=20210801001828",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Builder's Brainguard",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/47/Builder%27s_Brainguard.png/revision/latest?cb=20230301060421",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Builder's Brainguard",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/47/Builder%27s_Brainguard.png/revision/latest?cb=20230301060421",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Builder's Brainguard",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/47/Builder%27s_Brainguard.png/revision/latest?cb=20230301060421",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Builder's Brainguard",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/47/Builder%27s_Brainguard.png/revision/latest?cb=20230301060421",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Burger Boy",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/dc/Burger_Boy.png/revision/latest?cb=20240420131219",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Burger Boy",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/dc/Burger_Boy.png/revision/latest?cb=20240420131219",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Casual",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/fd/Casual_render.png/revision/latest?cb=20230811104313",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Casual",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/fd/Casual_render.png/revision/latest?cb=20230811104313",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Casual",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/fd/Casual_render.png/revision/latest?cb=20230811104313",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Civil Custodian",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/75/Civil_Custodian.png/revision/latest?cb=20181116084522",
        "rarity": "Strange",
        "category": "cosmetics"
    },
    {
        "name": "Strange Cowboy Hat",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/99/Cowboy_Hat.png/",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Cozier Cap",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/81/Cozier_Cap_render.png/revision/latest?cb=20230811102246",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Cozier Cap",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/81/Cozier_Cap_render.png/revision/latest?cb=20230811102246",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Death Doctor",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/1d/Death_Doctor.png/revision/latest?cb=20230301060508",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Death Doctor",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/1d/Death_Doctor.png/revision/latest?cb=20230301060508",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Dune Rover",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/14/Dune_Rover_render.png/revision/latest?cb=20230811101011",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Firefighter",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/3d/Firefighter.png/revision/latest?cb=20230309074448",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Ghoulish Gibus",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/8f/Ghoulish_Gibus.png/revision/latest?cb=20211102050958",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Grease Worker",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/25/Grease_Worker_GRN_render.png/revision/latest?cb=20240214040103",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Jungle Helmet",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/9e/Jungle_Helmet_render.png/revision/latest/",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Last Bastion",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d8/Last_Bastion.png/revision/latest?cb=20230309073942",
        "rarity": "Strange",
        "category": "cosmetics"
    },
    {
        "name": "Strange Last Bastion",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d8/Last_Bastion.png/revision/latest?cb=20230309073942",
        "rarity": "Strange",
        "category": "cosmetics"
    },
    {
        "name": "Strange Last Bastion",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d8/Last_Bastion.png/revision/latest?cb=20230309073942",
        "rarity": "Strange",
        "category": "cosmetics"
    },
    {
        "name": "Strange Military Doctor",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/ab/Military_Doctor.png/revision/latest?cb=20230301060725",
        "rarity": "Strange",
        "category": "cosmetics"
    },
    {
        "name": "Strange Military Doctor",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/ab/Military_Doctor.png/revision/latest?cb=20230301060725",
        "rarity": "Strange",
        "category": "cosmetics"
    },
    {
        "name": "Strange Military Doctor",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/ab/Military_Doctor.png/revision/latest?cb=20230301060725",
        "rarity": "Strange",
        "category": "cosmetics"
    },
    {
        "name": "Strange Military Doctor",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/ab/Military_Doctor.png/revision/latest?cb=20230301060725",
        "rarity": "Strange",
        "category": "cosmetics"
    },
    {
        "name": "Strange Mining Light",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/6e/Mining_Light.png/revision/latest?cb=20230301060204",
        "rarity": "Strange",
        "category": "cosmetics"
    },
    {
        "name": "Strange Rifleman",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/8b/Rifleman.png/revision/latest?cb=20240420135227",
        "rarity": "Strange",
        "category": "cosmetics"
    },
    {
        "name": "Strange Rifleman",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/8b/Rifleman.png/revision/latest?cb=20240420135227",
        "rarity": "Strange",
        "category": "cosmetics"
    },
    {
        "name": "Strange Rifleman",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/8b/Rifleman.png/revision/latest?cb=20240420135227",
        "rarity": "Strange",
        "category": "cosmetics"
    },
    {
        "name": "Strange Rifleman",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/8b/Rifleman.png/revision/latest?cb=20240420135227",
        "rarity": "Strange",
        "category": "cosmetics"
    },
    {
        "name": "Strange Somber Scrooge",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/3f/Somber_Scrooge.png/revision/latest?cb=20231227053454",
        "rarity": "Strange",
        "category": "cosmetics"
    },
    {
        "name": "Strange Stainless Pot",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/61/Stainless_Pot.png/revision/latest?cb=20240420132842",
        "rarity": "Strange",
        "category": "cosmetics"
    },
    {
        "name": "Strange Stainless Pot",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/61/Stainless_Pot.png/revision/latest?cb=20240420132842",
        "rarity": "Strange",
        "category": "cosmetics"
    },
    {
        "name": "Strange Team Beret",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/1b/The_Team_Beret.png/revision/latest?cb=20230301061046",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Team Beret",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/1b/The_Team_Beret.png/revision/latest?cb=20230301061046",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Team Beret",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/1b/The_Team_Beret.png/revision/latest?cb=20230301061046",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Tie Up",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/2f/Tie_Up_render.png/revision/latest",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Tough Metal",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/4d/Tough_Metal.png/revision/latest?cb=20230309074546",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Trilby Thriller",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/06/Trilby_Thriller.png/revision/latest?cb=20210801005940",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Winter Woodsman",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c0/Winter_Woodsman.png/revision/latest?cb=20211225231301",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Winter Woodsman",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c0/Winter_Woodsman.png/revision/latest?cb=20211225231301",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Winter Woodsman",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c0/Winter_Woodsman.png/revision/latest?cb=20211225231301",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "Strange Veteran",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/db/Veteran_render.png/revision/latest?cb=20230811101708",
        "rarity": "Strange",
        "category": "cosmetics",
    },
    {
        "name": "American Anomaly",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/6a/American_Anomaly.png/revision/latest?cb=20230715090024",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Augment Thesis",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/81/Augment_Thesis.png/revision/latest?cb=20231202045726",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Autumn Pilot",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/8e/Autumn_Pilot.png/revision/latest?cb=20231105045001",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Beesy Entomologist",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/6a/Beesy_Entomologist.png/revision/latest?cb=20230715085901",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Brutal Butler",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/e4/Brutal_Butler.png/revision/latest?cb=20230715074837",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Burger Boss",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/e5/Burger_Boss.png/revision/latest?cb=20230715090115",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Cloaked Caster",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/7e/Cloaked_Caster.png/revision/latest?cb=20230715174810",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Critical Wound",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/22/Critical_Wound.png/revision/latest?cb=20231105174048",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Cunning Cook",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/f9/Cunning_Cook.png/revision/latest/scale-to-width-down/1000?cb=20230714171130",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Arcade Ace",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/1d/Arcade_Ace.png/revision/latest?cb=20210731174006",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Antler Branches",
        "image": "https://static.wikia.nocookie.net/tc2/images/b/b1/Antler_Branches.png/revision/latest?cb=20230301062136",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Arsonist's Beanie",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d7/Arsonist%27s_Beanie.png/revision/latest?cb=20230309074324",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Bad Day",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a2/Bad_Day.png/revision/latest?cb=20240421020334",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Ballcap",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c7/Ballcap.png/revision/latest?cb=20240420130218",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Bandito",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/7c/Bandito.png/revision/latest?cb=20210715104025",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Baseball Muff",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/ae/Baseball_Muff.png/revision/latest?cb=20240420130756",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Bat Blockers",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/ce/Bat_Blockers.png/revision/latest?cb=20211105104841",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Batter's Helmet",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/2e/Batter%27s_Helmet_GRN_render.png/revision/latest",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Battle Bronco",
        "image": "https://static.wikia.nocookie.net/tc2/images/b/b1/Battle_Bronco.png/revision/latest?cb=20210801002543",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Beast's Bonnet",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/11/Beast%27s_Bonnet_render.png/revision/latest?cb=20230811102845",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Big Fix",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/22/Big_Fix.png/revision/latest?cb=20220725162720",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Blind Warrior",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/3b/Blind_Warrior.png/revision/latest?cb=20240420140224",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Bloxy Helm",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/ee/Bloxy_Helm_GRN_render.png/revision/latest",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Bloxy Helm",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/ee/Bloxy_Helm_GRN_render.png/revision/latest",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Bowling Bob",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/9c/Bowling_Bob.png/revision/latest?cb=20181022124352",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Brain Jam",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/0a/Brain_Jam.png/revision/latest?cb=20211225154325",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Broken Rank",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/36/Broken_Rank2023.png/revision/latest?cb=20231029135154",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Brutish Captain",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a7/Brutish_Captain.png/revision/latest?cb=20230301055105",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Builder Man",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d0/Builder_Man.png/revision/latest?cb=20240224224815",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Builder's Brainguard",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/47/Builder%27s_Brainguard.png/revision/latest?cb=20230301060421",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Camo Cap",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/ab/Camo_Cap.png/revision/latest?cb=20181116133507",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Casual",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/fd/Casual_render.png/revision/latest?cb=20230811104313",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Classic Cut",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/ca/Classic_Cut_render.png/revision/latest?cb=20230811103727",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Cold Companion",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/7e/Cold_Companion.png/revision/latest?cb=20230309080511",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Cold Fuse",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/74/Cold_Fuse.png/revision/latest?cb=20231227053454",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Cowboy Hat",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/99/Cowboy_Hat.png/",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Deep Sea",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/58/Deep_Sea.png/revision/latest?cb=20240421021236",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Detective",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/ad/Detective_render.png/revision/latest/scale-to-width-down/1000?cb=20230815075531",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Dream Hunter",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/25/Dream_Hunter.png/revision/latest?cb=20231202050113",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Dream Hunter",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/25/Dream_Hunter.png/revision/latest?cb=20231202050113",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Dream Hunter",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/25/Dream_Hunter.png/revision/latest?cb=20231202050113",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Dublin Tieback",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/45/Dublin_Tieback.png/revision/latest?cb=20240421023139",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Dune Rover",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/14/Dune_Rover_render.png/revision/latest?cb=20230811101011",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Easter Ears",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/ac/Easter_Ears.png/revision/latest?cb=20240421021610",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Entrenched Bombardier",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/10/Entrenched_Bombardier.png/revision/latest?cb=20230717075541",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Fending Farmhand",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/1f/Fending_Farmhand.png/revision/latest?cb=20230715074617",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Fire Starter",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c9/Fire_Starter.png/revision/latest?cb=20240421022834",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Fire Starter",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c9/Fire_Starter.png/revision/latest?cb=20240421022834",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Firefighter",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/3d/Firefighter.png/revision/latest?cb=20230309074448",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Firefighter",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/3d/Firefighter.png/revision/latest?cb=20230309074448",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Fisher Man",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/fd/Fisher_Man.png/revision/latest?cb=20210628072117",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Frozen Capper",
        "image": "https://static.wikia.nocookie.net/tc2/images/b/b1/Frozen_Capper.png/revision/latest?cb=20211225225900",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Ghoulish Gibus",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/8f/Ghoulish_Gibus.png/revision/latest?cb=20211102050958",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Ghast Mask",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/ce/Ghast_Mask.png/revision/latest?cb=20181117035054",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "GI Joseph",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/2d/GI_Joseph.png/revision/latest?cb=20190927130710",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Googly Guy",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/ce/Googly_Guy.png/revision/latest?cb=20220810143328",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Greasy Goon",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/47/Greasy_Goon.png/revision/latest?cb=20230715075548",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Guardian Angel",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/da/Guardian_Angel.png/revision/latest?cb=20230715074721",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Hatless",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/1d/Hatless_Mechanic_render.png/revision/latest/scale-to-width-down/1000?cb=20240511062351",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Healthy Handlebar",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a0/Healthy_Handlebar.png/revision/latest?cb=20220807183639",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Haunted Headgear",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c6/Haunted_Headgear.png/revision/latest?cb=20181227135954",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Head Haunters",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c4/Head_Haunters.png/revision/latest?cb=20231105174151",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Highway Chef",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/ee/Highway_Chef.png/revision/latest?cb=20210210045910",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "HJW",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/87/HJW.png/revision/latest?cb=20231105044049",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Holiday Conductor",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/01/Holiday_Conductor.png/revision/latest?cb=20230301060037",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Hot Head",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/ef/Hot_Head.png/revision/latest?cb=20211225140808",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Hunter's Slouch",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/72/Hunter%27s_Slouch.png/revision/latest/scale-to-width-down/1000?cb=20231029135154",

        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Iron Maw",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/62/Iron_Maw.png/revision/latest?cb=20231106122341",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Iron Maw",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/62/Iron_Maw.png/revision/latest?cb=20231106122341",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Jungle Helmet",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/9e/Jungle_Helmet_render.png/revision/latest",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Kaboom Cap",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/e4/Kaboom_Cap.png/revision/latest?cb=20240420133529",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Krampus",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/8f/Krampus.png/revision/latest?cb=20231227053453",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Life Doctor",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/62/Life_Doctor.png/revision/latest?cb=20230301060656",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Lucky Lid",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/6e/Lucky_Lid.png/revision/latest?cb=20210801003048",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Lumbering Jack",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a6/Lumbering_Jack_render.png/revision/latest?cb=20230811104517",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Medieval Practice",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/83/Medieval_Practice.png/revision/latest?cb=20230309080118",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Mighty Mask",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/21/Mighty_Mask.png/revision/latest?cb=20230301054535",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Mining Light",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/6e/Mining_Light.png/revision/latest?cb=20230301060204",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Minute Man",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a0/Minute_Man.png/revision/latest?cb=20230715175127",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Motivator",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c3/Motivator.png/revision/latest?cb=20240421014005",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Movie Villain",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c1/Movie_Villain.png/revision/latest?cb=20230301060316",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Ms. Mystery",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/5e/Ms._Mystery.png/revision/latest?cb=20230717075559",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Mystique Pearls",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/1e/Mystique_Pearls.png/revision/latest?cb=20240421023652",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Neat Knight",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/6f/Neat_Knight.png/revision/latest?cb=20220715044811",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Neek",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a6/Neek.png/revision/latest?cb=20240216220753",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Night Walker",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/5c/Night_Walker.png/revision/latest?cb=20231105173947",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Occult Classic",
        "image": "https://static.wikia.nocookie.net/tc2/images/b/bf/Occult_Classic.png/revision/latest?cb=20211106144906",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Open Mind",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/79/Open_Mind.png/revision/latest?cb=20231029135153",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Ostracized Elephant",
        "image": "https://static.wikia.nocookie.net/tc2/images/b/b7/Ostracized_Elephant.png/revision/latest?cb=20230309074304",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Paperboy",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/af/Paperboy.png/revision/latest?cb=20230309073343",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Party Hat",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/69/Party_Hat.png/revision/latest?cb=20230301062329",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Party Horn",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/85/Party_Horn.png/revision/latest?cb=20240421014344",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Peace Doctor",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/65/Peace_Doctor.png/revision/latest?cb=20230715075013",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Peppermint Power",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/78/Peppermint_Power.png/revision/latest?cb=20231227053158",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Pester Jester",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c2/Pester_Jester.png/revision/latest?cb=20230715090228",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Pester Jester",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c2/Pester_Jester.png/revision/latest?cb=20230715090228",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Phoney Frank",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/53/Phoney_Frank.png/revision/latest?cb=20231105043832",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Pigeon Mask",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/87/Pigeon_Mask.png/revision/latest?cb=20211106112418",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Plain Sight",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a2/Plain_Sight.png/revision/latest?cb=20220717134941",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Pollinator",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/6c/Pollinator.png/revision/latest?cb=20230715075657",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Poolshark",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/54/Poolshark.png/revision/latest?cb=20181117035053",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Prestigious P.I.",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/0e/Prestigious_P.I..png/revision/latest?cb=20230715085622",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Prestigious P.I.",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/0e/Prestigious_P.I..png/revision/latest?cb=20230715085622",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Private Sandbox",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c5/Private_Sandbox.png/revision/latest?cb=20210801003721",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Provisions",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/5f/Provisions.png/revision/latest?cb=20240421024729",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Reinfear",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/fa/Rainfear.png/revision/latest?cb=20211225231139",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Response Unit",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/95/Response_Unit.png/revision/latest?cb=20240421015602",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Rifleman",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/8b/Rifleman.png/revision/latest?cb=20240420135227",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Road Runner",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/48/Road_Runner.png/revision/latest?cb=20230715085410",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Road Runner",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/48/Road_Runner.png/revision/latest?cb=20230715085410",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Roadie Shades",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c1/Roadie_Shades_1.png/revision/latest?cb=20230309075806",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Rockers Rollout",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/e4/Rockers_Rollout.png/revision/latest?cb=20230714171131",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Royal Rags",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/0e/Royal_Rags.png/revision/latest?cb=20230715074452",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Safety First",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/69/Safety_First.png/revision/latest?cb=20230309075903",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Salted Sailor",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/72/Salted_Sailor_render.png/revision/latest?cb=20230811101507",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Scorching Sentai",
        "image": "https://static.wikia.nocookie.net/tc2/images/b/b9/Scorching_Sentai.png/revision/latest?cb=20230715085732",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Sea Fairer",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/25/Sea_Fairer.png/revision/latest?cb=20220715045317",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Seasoned Surgeon Specs",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/43/Seasoned_Surgeon_Specs.png/revision/latest?cb=20240322165647",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Sharp Specs",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/9d/Sharp_Specs.png/revision/latest?cb=20230309080338",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Shoreline Shot",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/7a/Shoreline_Shot.png/revision/latest?cb=20210801010643",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Shotgun's Shade",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/71/Shotgun%27s_Shade_1.png/revision/latest?cb=20230301055716",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Skully Skulker",
        "image": "https://static.wikia.nocookie.net/tc2/images/5/5b/Skully_Skulker.png/revision/latest?cb=20231106124743",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Soldier of Athens",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/68/Soldier_of_Athens.png/revision/latest?cb=20181116133507",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Somber Scrooge",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/3f/Somber_Scrooge.png/revision/latest?cb=20231227053454",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Spring Casual",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/ce/Spring_Casual.png/revision/latest?cb=20240420184605",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Spring Chicken",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/a5/Spring_Chicken.png/revision/latest?cb=20220725162833",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Squire Helmet",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/45/Squire_Helmet.png/revision/latest?cb=20230301054702",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Status Quo",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/91/Status_Quo.png/revision/latest?cb=20240421020724",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Stranded Shark",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/37/Stranded_Shark.png/revision/latest?cb=20230715075825",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Submachine Specialist",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/96/Submachine_Specialist.png/revision/latest?cb=20230301055423",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Subway Sprayer",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/37/Subway_Sprayer.png/revision/latest?cb=20210801005553",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Sugarlined Topper",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/91/Sugarlined_Topper.png/revision/latest?cb=20230301060552",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Summer Blockers",
        "image": "https://static.wikia.nocookie.net/tc2/images/6/60/Summer_Blockers.png/revision/latest?cb=20210801001603",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Sunny Straw",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/9d/Sunny_Straw.png/revision/latest?cb=20220715044820",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Sweat Swarm",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/fc/Sweat_Swarm.png/revision/latest?cb=20220715045251",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Sweet Memories",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/22/Sweet_Memories.png/revision/latest?cb=20210801011250",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Sweet Season",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/39/Sweet_Season.png/revision/latest?cb=20230715085245",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Tactical Terror",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/82/Tactical_Terror.png/revision/latest?cb=20220715050156",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Team Beret",
        "image": "https://static.wikia.nocookie.net/tc2/images/1/1b/The_Team_Beret.png/revision/latest?cb=20230301061046",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Terror-Vision",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/45/Terror-Vision.png/revision/latest?cb=20231105041835",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Tie Up",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/2f/Tie_Up_render.png/revision/latest/scale-to-width-down/1000?cb=20230811104854",
        "rarity": "Unique",
        "category": "cosmetics",
    },    
    {
        "name": "Traditional Cut",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/0b/Traditional_Cut.png/revision/latest?cb=20240421021938",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Traffic Control",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/22/Traffic_Control.png/revision/latest?cb=20230715085510",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Trendsetter",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/3d/Trendsetter_RED_render.png/revision/latest/scale-to-width-down/1000?cb=20231018074917",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Troopceratops",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/7b/Troopceratops.png/revision/latest?cb=20210731173901",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Truck Month",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/33/Truck_Month.png/revision/latest?cb=20210801004310",
        "rarity": "Unique",
        "category": "cosmetics",
    },
        {
        "name": "Ugly Ursidae",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/e8/Ugly_Ursidae.png/revision/latest?cb=20211214030843",
        "rarity": "Unique",
        "category": "cosmetics",
    },    {
        "name": "Unsound Mind",
        "image": "https://static.wikia.nocookie.net/tc2/images/3/37/Unsound_Mind.png/revision/latest?cb=20231105042926",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Viking Helm",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c9/Viking_Helm.png/revision/latest?cb=20230301055028",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "VR Helm",
        "image": "https://static.wikia.nocookie.net/tc2/images/0/05/VR_Helm.png/revision/latest?cb=20240420134058",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Walking Death",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/4c/Walking_Death.png/revision/latest?cb=20231105043103",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Water Boy",
        "image": "https://static.wikia.nocookie.net/tc2/images/a/af/Water_Boy.png/revision/latest?cb=20220725160148",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Wee-Lad",
        "image": "https://static.wikia.nocookie.net/tc2/images/2/28/Wee-Lad.png/revision/latest?cb=20211227022830",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Wicked Winter",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/96/Wicked_Winter.png/revision/latest?cb=20211225231328",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Wig Doctor",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/96/Wig_Doctor.png/revision/latest?cb=20220716191249",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "name": "Wonder Worker",
        "image": "https://static.wikia.nocookie.net/tc2/images/c/c4/Wonder_Worker.png/revision/latest?cb=20231227053454",
        "rarity": "Unique",
        "category": "cosmetics",
    },
    {
        "_otherStart": "🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩",
        "name": "TATENFIGHTING",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/4c/Dueling_Game.png/revision/latest?cb=20240112064738",
        "rarity": "Normal",
        "category": "other"
    },
    {
        "name": "Neon Orange Paint Can",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/70/Neon_Orange.png/revision/latest?cb=20220719161529",
        "rarity": "Normal",
        "category": "other"
    },
    {
        "name": "Bright Purple Paint Can",
        "image": "https://static.wikia.nocookie.net/tc2/images/4/45/Bright_Purple.png/revision/latest?cb=20220719161600",
        "rarity": "Normal",
        "category": "other"
    },
    {
        "name": "Shirt Stain Paint Can",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/f9/Shirt_Stain.png/revision/latest?cb=20230720093926",
        "rarity": "Normal",
        "category": "other"
    },
    {
        "name": "Shirt Stain Paint Can",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/f9/Shirt_Stain.png/revision/latest?cb=20230720093926",
        "rarity": "Normal",
        "category": "other"
    },
    {
        "name": "Melted Crayon Paint Can",
        "image": "https://static.wikia.nocookie.net/tc2/images/f/f8/Melted_Crayon.png/revision/latest?cb=20230720093925",
        "rarity": "Normal",
        "category": "other"
    },
    {
        "name": "Team Spirit Paint Can",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/8c/Team_Spirit.png/revision/latest?cb=20230720093926",
        "rarity": "Normal",
        "category": "other"
    },
    {
        "name": "Team Spirit Paint Can",
        "image": "https://static.wikia.nocookie.net/tc2/images/8/8c/Team_Spirit.png/revision/latest?cb=20230720093926",
        "rarity": "Normal",
        "category": "other"
    },
    {
        "name": "Taunt: Mini-Mech",
        "image": "https://static.wikia.nocookie.net/tc2/images/e/ed/Mini-Mech_Pick_Icon.png/revision/latest?cb=20230726160301",
        "rarity": "Unique",
        "category": "other"
    },
    {
        "name": "Taunt: Conga",
        "image": "https://static.wikia.nocookie.net/tc2/images/d/d7/Congo_Pick_Icon.png/revision/latest?cb=20230714171107",
        "rarity": "Unique",
        "category": "other"
    },
    {
        "name": "VIP Unusualifier",
        "image": "https://static.wikia.nocookie.net/tc2/images/9/91/Unusualifier.png/revision/latest?cb=20230716034313",
        "rarity": "Normal",
        "category": "other"
    },
    {
        "name": "Pearl Paint Can",
        "image": "https://static.wikia.nocookie.net/tc2/images/7/73/Pearl.png/revision/latest?cb=20220719161717",
        "rarity": "Normal",
        "category": "other"
    }];

    const rarityOrder = ["Dorcey", "Collector's", "Self-Made", "Community", "Haunted", "Unusual", "Genuine", "Vintage", "Strange", "Unique", "Experimental", "Rented", "Normal"];

    const rarityColors = {
        "Normal": "#C9C7C8",
        "Rented": "#4C3F34",
        "Experimental": "#69d732",
        "Unique": "#FFD700",
        "Strange": "#CF6A32",
        "Vintage": "#476291",
        "Genuine": "#4D7455",
        "Unusual": "#8650AC",
        "Haunted": "#38F3AB",
        "Community": "#70B04A",
        "Self-Made": "#70B04A",
        "Collector's": "#AA0000",
        "Dorcey": "#A50F79"
    };

    const itemListContainers = {
        "weapons": document.getElementById("weapons"),
        "cosmetics": document.getElementById("cosmetics"),
        "other": document.getElementById("other")
    };
    
    const searchInput = document.querySelector('.search-input');
    const audio = document.querySelector('.audio-player audio');

    let previousIndex = -1;
    const playlist = [
        { name: 'Team Fortress 2 - Upgrade Station [Bossa Nova / Big Band Remix] - Vandoorea', src: 'https://dl.sndup.net/v553j/muffled_sound.mp3' },
        { name: 'Team Fortress 2 - Mercenary Park [Drum & Bass / Big Band Remix] - Vandoorea', src: 'https://dl.sndup.net/z76nt/merc2.mp3' },
        { name: 'Magnum Force Theme [Remix] - Vandoorea', src: 'https://dl.sndup.net/g4mw5/magnum2.mp3' },
        { name: 'Team Fortress 2 - Red Bread [Electronic - Big Band Remix] - Vandoorea', src: 'https://dl.sndup.net/m7q46/bread_muffled.mp3' },
        { name: 'Team Fortress 2 - MEDIC! (Orchestral - Big Band Remix) - Vandoorea', src: 'https://dl.sndup.net/c4267/med_muffled.mp3' },
        { name: 'Team Fortress 2 - Right Behind You [Electronic Jazz Noir Remix] - Vandoorea', src: 'https://dl.sndup.net/6n7pf/spy_muffled.mp3' },
        { name: 'Team Fortress 2 - More Gun (Alex Giudici Remix)', src: 'https://dl.sndup.net/gbbmn/gun_muffled.mp3' },
    ];

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        var scrollToTopBtn = document.getElementById("scrollToTopBtn");
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
            var opacity = Math.min(1, (document.documentElement.scrollTop - 20) / 500);
            scrollToTopBtn.style.opacity = opacity;
        } else {
            scrollToTopBtn.style.display = "none";
            scrollToTopBtn.style.opacity = "0";
        }
    }

    items.sort((a, b) => {
        const rarityComparison = rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity);
        if (rarityComparison !== 0) {
            return rarityComparison;
        }
        return a.name.localeCompare(b.name);
    });

    items.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.setAttribute('data-name', item.name.toLowerCase());

        const altNames = item.altNames ? item.altNames.join(' ').toLowerCase() : '';
        itemElement.setAttribute('data-alt-names', altNames);

        itemElement.style.setProperty('--glow-color', rarityColors[item.rarity]);
        itemElement.style.setProperty('--text-color', rarityColors[item.rarity]);

        const capitalizedCategory = item.category.charAt(0).toUpperCase() + item.category.slice(1);
        itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="filter: drop-shadow(0 0 10px var(--glow-color)) brightness(110%);">
                <div class="name">${item.name}</div>
                <div class="rarity">${item.rarity}</div>
                <div class="tag">${capitalizedCategory}${item["not-tradeable"] ? `<div class="tradeable-tag" style="color: red; font-size:1.5rem;">NFT</div>` : ''}</div>
                ${item.unusual ? `<div class="unusual-icon" title="Unusual: ${item.unusual}">🌠</div><div class="tooltip" style="font-size: 1.2rem;">Unusual: ${item.unusual}</div>` : ''}
            `;

        itemListContainers[item.category].appendChild(itemElement);
    });

    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            document.querySelectorAll('.item-list').forEach(list => list.classList.remove('active'));
            document.getElementById(tab.dataset.category).classList.add('active');
        });
    });

    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase();
        let foundItems = 0; // Track the number of found items

        document.querySelectorAll('.item').forEach(item => {
            const itemName = item.getAttribute('data-name');
            const itemAltNames = item.getAttribute('data-alt-names');

            if (itemName.includes(searchValue) || itemAltNames.includes(searchValue)) {
                item.style.display = 'block';
                foundItems++;
            } else {
                item.style.display = 'none';
            }
        });

        // Show message when no items are found
        const noItemsMessage = document.getElementById('no-items-message');
        if (foundItems === 0) {
            noItemsMessage.style.display = 'block';
        } else {
            noItemsMessage.style.display = 'none';
        }

    });

    let isPlaying = false;

    function playRandomTrack() {
        let randomIndex = Math.floor(Math.random() * playlist.length);
        
        while (randomIndex === previousIndex) {
            randomIndex = Math.floor(Math.random() * playlist.length);
        }

        audio.src = playlist[randomIndex].src;
        audio.play();
        previousIndex = randomIndex;
        isPlaying = true;
    }

    audio.addEventListener('ended', function () {
        playRandomTrack();
    });

    audio.addEventListener('play', function () {
        isPlaying = true;
    });

    audio.addEventListener('pause', function () {
        isPlaying = false;
    });

    function playSound() {
        const audio = document.getElementById('button-sound');
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
    }

    function addVisualCue(button) {
        button.classList.add('pulse');
        setTimeout(() => {
            button.classList.remove('pulse');
        }, 300);
    }

    document.querySelectorAll('.tab').forEach(button => {
        button.addEventListener('click', () => {
            playSound();
            addVisualCue(button);
        });
    });

    document.querySelectorAll('#scrollToTopBtn').forEach(button => {
        button.addEventListener('click', () => {
            playSound();
        });
    });
}); 