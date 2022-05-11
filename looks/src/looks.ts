export interface RawLook {
  plain: string;
  title: string;
  tags: string;
}

export interface Look {
  plain: string;
  title: string;
  tags: string[];
}

const rawLooks: RawLook[] = [
  {
    "plain": "ಠ_ಠ",
    "title": "Look of disapproval",
    "tags": "the-look"
  },
  {
    "plain": "ʕ•̫͡•ʕ̫͡ʕ•͓͡•ʔ-̫͡-ʕ•̫͡•ʔ̫͡ʔ-̫͡-ʔ",
    "title": "Gophers",
    "tags": "gophers"
  },
  {
    "plain": "☜(ຈل͜ຈ☜)",
    "title": "Yeah",
    "tags": "all"
  },
  {
    "plain": "(－‸ლ)",
    "title": "Facepalm",
    "tags": "confused why-look"
  },
  {
    "plain": "( ͡° _ʖ ͡°)",
    "title": "Indifferent Lenny",
    "tags": "lenny"
  },
  {
    "plain": "( ͡o ͜ʖ ͡o)",
    "title": "Lenny blank stare",
    "tags": "lenny"
  },
  {
    "plain": "೯ಠಎ",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "♡°☆(ಠೆಒಠಿ)☆°♡",
    "title": 'Unknown',
    "tags": "love"
  },
  {
    "plain": "°ಠಿ●ಠಿ°",
    "title": 'Unknown',
    "tags": "confused"
  },
  {
    "plain": "(ˊ̥̥̥̥̥ ³ ˋ̥̥̥̥̥)",
    "title": "Crying a lot",
    "tags": "crying-look"
  },
  {
    "plain": "ʘ︵ʘ",
    "title": "Sad look",
    "tags": "sad"
  },
  {
    "plain": "( ͡ಠ ʖ̯ ͡ಠ)",
    "title": "Disapproving Lenny",
    "tags": "lenny sad"
  },
  {
    "plain": "( ͡~ ͜ʖ ͡°)",
    "title": "Lenny wink",
    "tags": "lenny"
  },
  {
    "plain": "(◕‿◕✿)",
    "title": "Happy girl",
    "tags": "happy"
  },
  {
    "plain": "ಥ‿ಥ",
    "title": "Tears of joy",
    "tags": "crying-look  happy"
  },
  {
    "plain": "(*｀へ´*)",
    "title": "So upset",
    "tags": "angry    rage sad"
  },
  {
    "plain": "(｡+･`ω･´)",
    "title": "Power of Christ…",
    "tags": "angry"
  },
  {
    "plain": "(*￣m￣)",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "(＃｀д´)ﾉ",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "( ꒪Д꒪)ノ",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "(¬_¬)",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "(‡▼益▼)",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "( ಠ ಠ )",
    "title": 'Unknown',
    "tags": "confused"
  },
  {
    "plain": "(´･益･｀*)",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "(¬▂¬)",
    "title": 'Unknown',
    "tags": "confused"
  },
  {
    "plain": "(>_<)",
    "title": 'Unknown',
    "tags": "angry    rage"
  },
  {
    "plain": "（＞д＜）",
    "title": 'Unknown',
    "tags": "angry    rage"
  },
  {
    "plain": "(◣_◢)",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "(ノಠ益ಠ)ノ",
    "title": 'Unknown',
    "tags": "angry    rage"
  },
  {
    "plain": "ｏ( ><)o",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "щ(ºДºщ)",
    "title": 'Unknown',
    "tags": "angry    rage"
  },
  {
    "plain": "ᶘ ᵒᴥᵒᶅ",
    "title": 'Unknown',
    "tags": "animal-looks"
  },
  {
    "plain": "(^._.^)ﾉ",
    "title": "Angry Cat",
    "tags": "angry animal-looks"
  },
  {
    "plain": "(•̃͡ ɷ•̃͡)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(ԾɷԾ)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(⊙.☉)7",
    "title": 'Unknown',
    "tags": "confused"
  },
  {
    "plain": "(✖╭╮✖)",
    "title": 'Unknown',
    "tags": "dead-look"
  },
  {
    "plain": "(+_+)",
    "title": 'Unknown',
    "tags": "dead-look"
  },
  {
    "plain": "(´ヮ`)",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "(∩_∩)",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "(∩❛ڡ❛∩)",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "(◍•ᴗ•◍)❤",
    "title": 'Unknown',
    "tags": "happy  love"
  },
  {
    "plain": "(◑‿◐)",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "(❀◦‿◦)",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "(✿◠‿◠)",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "( ˘ ³˘)♥",
    "title": "Sending kisses",
    "tags": "kissing love"
  },
  {
    "plain": ".·´¯`(>▂<)´¯`·.",
    "title": 'Unknown',
    "tags": "crying-look"
  },
  {
    "plain": "＿〆(。。)",
    "title": 'Unknown',
    "tags": "writing-look"
  },
  {
    "plain": "( ͡~ ͜ʖ ͡~)",
    "title": "Shy Lenny",
    "tags": "lenny"
  },
  {
    "plain": "(ง ͡ʘ ͜ʖ ͡ʘ)ง",
    "title": "Jackpot face",
    "tags": "happy"
  },
  {
    "plain": "( ͠° ͟ʖ ͡°)",
    "title": "Mean Lenny",
    "tags": "lenny  suspicious-look"
  },
  {
    "plain": "ᕙ(◕ل͜◕)ᕗ",
    "title": "Strongest",
    "tags": "happy"
  },
  {
    "plain": "┌(° ͜ʖ͡°)┘",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "(▰˘◡˘▰)",
    "title": 'Unknown',
    "tags": "awe  happy"
  },
  {
    "plain": "¯\\(◉◡◔)/¯",
    "title": "Derp look",
    "tags": "awe confused happy"
  },
  {
    "plain": "(⁎❛ᴗ❛⁎)",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "ლ(´ڡ`ლ)",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "乁( ◔ ౪◔)ㄏ",
    "title": "I can’t even",
    "tags": "all"
  },
  {
    "plain": "☞(ﾟヮﾟ)☜",
    "title": "Me",
    "tags": "happy"
  },
  {
    "plain": "(☞ಠ_ಠ)☞",
    "title": 'Unknown',
    "tags": "finger-look love"
  },
  {
    "plain": "(｡◕‿‿◕｡)",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "( ͝סּ ͜ʖ͡סּ)",
    "title": 'Unknown',
    "tags": "happy  lenny"
  },
  {
    "plain": "( ͡ᵔ ͜ʖ ͡ᵔ )",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "ᕕ( ಠ‿ಠ)ᕗ",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "◔‿◔",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "ᕦ(ຈل͜ຈ)ᕤ",
    "title": "Strong",
    "tags": "all"
  },
  {
    "plain": "୧(ಠ益ಠ)୨",
    "title": 'Unknown',
    "tags": "angry     rage"
  },
  {
    "plain": "( ͡^ ͜ʖ ͡^ )",
    "title": "Silly Lenny",
    "tags": "lenny"
  },
  {
    "plain": "[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]",
    "title": "Dollar face",
    "tags": "happy"
  },
  {
    "plain": "(ʘ‿ʘ)",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "⊜_⊜",
    "title": "unsure look",
    "tags": "confused"
  },
  {
    "plain": "つ◕ل͜◕)つ",
    "title": 'Unknown',
    "tags": "cool"
  },
  {
    "plain": "(•_•)",
    "title": "Serious look",
    "tags": "all"
  },
  {
    "plain": "(>人<)",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "(/ﾟДﾟ)/",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "-`д´-",
    "title": "Squinting eyes",
    "tags": "angry    rage"
  },
  {
    "plain": "(>ლ)",
    "title": "Facepalmed look",
    "tags": "why-look"
  },
  {
    "plain": "((╬ಠิ﹏ಠิ))",
    "title": 'Unknown',
    "tags": "angry confused    rage"
  },
  {
    "plain": "(◡‿◡✿)",
    "title": 'Unknown',
    "tags": "happy  love"
  },
  {
    "plain": "｡゜(｀Д´)゜｡",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "(*≧m≦*)",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "（；¬＿¬)",
    "title": "Sly look",
    "tags": "confused   sad suspicious-look"
  },
  {
    "plain": "(」゜ロ゜)」",
    "title": 'Unknown',
    "tags": "angry    rage"
  },
  {
    "plain": "o(-`д´- ｡)",
    "title": "Punch",
    "tags": "angry    rage"
  },
  {
    "plain": "(╯°□°)╯︵ ┻━┻",
    "title": "Flipping table",
    "tags": "angry flipping-tables    rage"
  },
  {
    "plain": "ヽ( ಠ益ಠ )ﾉ",
    "title": "Rage of",
    "tags": "angry     rage"
  },
  {
    "plain": "◎▼◎",
    "title": "Owl",
    "tags": "animal-looks"
  },
  {
    "plain": "m(_ _)m",
    "title": "Bowing Down Look",
    "tags": "apologizing-look"
  },
  {
    "plain": "(✿´‿`)",
    "title": 'Unknown',
    "tags": "happy  love"
  },
  {
    "plain": "（*＾3＾）/～♡",
    "title": "Blowing a Kiss",
    "tags": "kissing love"
  },
  {
    "plain": "щ(ಠ益ಠщ)",
    "title": 'Unknown',
    "tags": "angry    rage"
  },
  {
    "plain": "щ(ಥДಥщ)",
    "title": 'Unknown',
    "tags": "angry crying-look    rage"
  },
  {
    "plain": "ლ(ಠ_ಠლ)",
    "title": "Why Look",
    "tags": "why-look"
  },
  {
    "plain": "ᕦ(ò_óˇ)ᕤ",
    "title": "Flexing your biceps",
    "tags": "angry    rage strong-look"
  },
  {
    "plain": "(⊙_◎)",
    "title": 'Unknown',
    "tags": "confused"
  },
  {
    "plain": "(´･_･`)",
    "title": "Worried look",
    "tags": "confused"
  },
  {
    "plain": "(゜-゜)",
    "title": 'Unknown',
    "tags": "confused"
  },
  {
    "plain": "(•̀ᴗ•́)و",
    "title": "Success kid",
    "tags": "happy   success-look"
  },
  {
    "plain": "(･｀ｪ´･)つ",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "( ºل͟º )",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ರ◡ರ",
    "title": "Happy blind look",
    "tags": "happy"
  },
  {
    "plain": "❣◕ ‿ ◕❣",
    "title": 'Unknown',
    "tags": "happy  love"
  },
  {
    "plain": "(ง ͠ ͠° ل͜ °)ง",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "( ͡ຈ ͜ʖ ͡ຈ)",
    "title": "Stoned Lenny",
    "tags": "happy  lenny"
  },
  {
    "plain": "( ͡° ʖ̯ ͡°)",
    "title": "Sad Lenny",
    "tags": "sad"
  },
  {
    "plain": "( ͡ ͜ʖ ͡ )",
    "title": "No eyes happy face",
    "tags": "happy"
  },
  {
    "plain": "ಠಿ_ಠ",
    "title": "Doubtful look",
    "tags": "confused    the-look"
  },
  {
    "plain": "φ(._.)",
    "title": "Writing a Letter",
    "tags": "writing-look"
  },
  {
    "plain": "눈_눈",
    "title": "For real?",
    "tags": "annoyed    the-look"
  },
  {
    "plain": "(︶ω︶)",
    "title": 'Unknown',
    "tags": "kissing"
  },
  {
    "plain": "( つ ◕_◕ )つ",
    "title": "Gimme",
    "tags": "all"
  },
  {
    "plain": "(☞ຈل͜ຈ)☞",
    "title": 'Unknown',
    "tags": "finger-look     stoned"
  },
  {
    "plain": "ლ(◕ω◕ლ)",
    "title": "damn cute face",
    "tags": "cute-looks"
  },
  {
    "plain": "ヽ( ͝° ͜ʖ͡°)ﾉ",
    "title": "Rub your",
    "tags": "all"
  },
  {
    "plain": "(ง’̀-‘́)ง",
    "title": "Dong or die",
    "tags": "all"
  },
  {
    "plain": "ノ(ಠ_ಠノ)",
    "title": "Lower it",
    "tags": "all"
  },
  {
    "plain": "ᕙ(ຈل͜ຈ)ᕗ",
    "title": "Flex your",
    "tags": "all"
  },
  {
    "plain": "(ง ͠° ͟ل͜ ͡°)ง",
    "title": "Twerk your",
    "tags": "all"
  },
  {
    "plain": "ヽ(ຈل͜ຈ)ﾉ",
    "title": "Raise Your",
    "tags": "all"
  },
  {
    "plain": "┌(ຈل͜ຈ)┐",
    "title": "Lower your",
    "tags": "all"
  },
  {
    "plain": "ʕʘ̅͜ʘ̅ʔ",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "(,,#ﾟДﾟ)",
    "title": 'Unknown',
    "tags": "angry    rage"
  },
  {
    "plain": "(ง •̀_•́)ง",
    "title": "Punching fury",
    "tags": "angry"
  },
  {
    "plain": "( ಠل͟ಠ)",
    "title": "of disapproval",
    "tags": "all"
  },
  {
    "plain": "<(_ _)>",
    "title": 'Unknown',
    "tags": "apologizing-look"
  },
  {
    "plain": "ლ(ಠ_ಠლ)﻿",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "☜(ಠ_ಠ☜)",
    "title": 'Unknown',
    "tags": "annoyed confused finger-look   love"
  },
  {
    "plain": "ヽ(ຈل͜ຈ)ﾉ︵ ┻━┻",
    "title": "flipping table",
    "tags": "angry flipping-tables"
  },
  {
    "plain": "(⁎⚈᷀᷁ᴗ⚈᷀᷁⁎)",
    "title": "Sparkling eyes",
    "tags": "cute-looks  happy  love"
  },
  {
    "plain": "◕ᴥ◕",
    "title": "Big Puppy Eyes",
    "tags": "animal-looks"
  },
  {
    "plain": "(；¬д¬)",
    "title": 'Unknown',
    "tags": "confused    suspicious-look"
  },
  {
    "plain": "(ง ͠° ͟ʖ",
    "title": "Black eyed boxing fighter",
    "tags": "angry"
  },
  {
    "plain": "┳━┳ ヽ(ಠل͜ಠ)ﾉ",
    "title": "putting table back",
    "tags": "flipping-tables  happy"
  },
  {
    "plain": "(•͟ ͜ •)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "＼(｀0´)／",
    "title": 'Unknown',
    "tags": "angry    rage"
  },
  {
    "plain": "(⍢)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(ꆤ.̫ꆤ)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "｡＾･ｪ･＾｡",
    "title": "Cat",
    "tags": "animal-looks"
  },
  {
    "plain": "(　ﾟДﾟ)＜!!",
    "title": "Yelling",
    "tags": "angry    rage"
  },
  {
    "plain": "(๑>ᴗ<๑)",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "ಠ_ರೃ",
    "title": "Monocle look",
    "tags": "angry   monocle  rage"
  },
  {
    "plain": "(☞ ͡° ͜ʖ ͡°)☞",
    "title": 'Unknown',
    "tags": "cute-looks finger-look  happy"
  },
  {
    "plain": "ಠ‿↼",
    "title": "creepy wink",
    "tags": "the-look"
  },
  {
    "plain": "͡° ͜ʖ ͡°",
    "title": "Plain Lenny",
    "tags": "lenny"
  },
  {
    "plain": "(；一_一)",
    "title": "Not sure if…",
    "tags": "all"
  },
  {
    "plain": "(ಥ﹏ಥ)",
    "title": "I’m Terribly Sorry Look",
    "tags": "all"
  },
  {
    "plain": "┬─┬ノ( º _ ºノ)",
    "title": "Table down",
    "tags": "flipping-tables"
  },
  {
    "plain": "◕‿↼",
    "title": "wink look",
    "tags": "happy"
  },
  {
    "plain": "ᕙ(⇀‸↼‶)ᕗ",
    "title": "Flex, don't mess",
    "tags": "all"
  },
  {
    "plain": "(ᵔᴥᵔ)",
    "title": "happy dog look",
    "tags": "animal-looks  happy"
  },
  {
    "plain": "╭∩╮(-_-)╭∩╮",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "☜(⌒▽⌒)☞",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "ʕ•ᴥ•ʔ",
    "title": "Bear",
    "tags": "animal-looks"
  },
  {
    "plain": "¯\\_(ツ)_/¯",
    "title": "I ain’t even mad",
    "tags": "cool"
  },
  {
    "plain": "୧( ͡◉ل͜ ͡◉)୨",
    "title": "fists",
    "tags": "all"
  },
  {
    "plain": "（ ^_^）o自自o（^_^ ）",
    "title": "Drinking beer buddies",
    "tags": "happy"
  },
  {
    "plain": "φ(．．;)",
    "title": "Writing",
    "tags": "writing-look"
  },
  {
    "plain": "(っ˘з(˘⌣˘ )",
    "title": "Kissing Couple",
    "tags": "kissing love"
  },
  {
    "plain": "ᕙ( ͡° ͜ʖ ͡°)ᕗ",
    "title": "Flexing my Muscles",
    "tags": "strong-look"
  },
  {
    "plain": "( •̀ω•́ )σ",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "ಠ‿ಠ",
    "title": "creepy Look of Disapproval",
    "tags": "the-look"
  },
  {
    "plain": "((((•̫͡•))))",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ಥ╭╮ಥ",
    "title": "Tears of sadness",
    "tags": "crying-look    sad"
  },
  {
    "plain": "(☝’益’)",
    "title": 'Unknown',
    "tags": "angry finger-look"
  },
  {
    "plain": "( ‾ʖ̫‾)",
    "title": 'Unknown',
    "tags": "sleepy-looks suspicious-look"
  },
  {
    "plain": "¯\\(◉‿◉)/¯",
    "title": 'Unknown',
    "tags": "confused    stoned"
  },
  {
    "plain": "(ノಠ ∩ಠ)ノ彡( \\o°o)\\",
    "title": "Flipping you over",
    "tags": "angry    rage"
  },
  {
    "plain": "(；￣Д￣）",
    "title": 'Unknown',
    "tags": "angry    rage"
  },
  {
    "plain": "(ﾟ⚙͠ ∀ ⚙͠)ﾉ❣",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ლ(ಠ益ಠლ)",
    "title": "What do you want look",
    "tags": "rage"
  },
  {
    "plain": "٩(^ᴗ^)۶",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "m(._.)m",
    "title": 'Unknown',
    "tags": "apologizing-look"
  },
  {
    "plain": "(╯°Д°)╯︵/(.□ . \\)",
    "title": "Flipping you upside down",
    "tags": "angry flipping-tables    rage"
  },
  {
    "plain": "⊙︿⊙",
    "title": "shark look of disapproval",
    "tags": "animal-looks    sad"
  },
  {
    "plain": "(≧σ≦)",
    "title": 'Unknown',
    "tags": "angry    rage"
  },
  {
    "plain": "ᕕ( ͡° ͜ʖ ͡° )ᕗ",
    "title": "Running Lenny",
    "tags": "happy  lenny"
  },
  {
    "plain": "ಠᴥಠ",
    "title": "Puppy Look of Disapproval",
    "tags": "animal-looks    the-look"
  },
  {
    "plain": "(✌ﾟ∀ﾟ)☞",
    "title": "Peace",
    "tags": "happy"
  },
  {
    "plain": "(⋋▂⋌)",
    "title": 'Unknown',
    "tags": "angry    rage"
  },
  {
    "plain": "(¬､¬)",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "(#ಠQಠ#)",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "ಹ◡ಹ",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "( ͡ಠ ͜ʖ ͡ಠ)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ಠ╭╮ಠ",
    "title": "Tard grumpy cat",
    "tags": "all"
  },
  {
    "plain": "( ͡° ͜ʖ ͡°)",
    "title": "Lenny face",
    "tags": "happy  lenny"
  },
  {
    "plain": "(╯°□°)╯︵ ʞooqǝɔɐℲ",
    "title": "Flipping Facebook",
    "tags": "angry flipping-tables    rage"
  },
  {
    "plain": "( ͒ ̶ ͒)",
    "title": 'Unknown',
    "tags": "animal-looks"
  },
  {
    "plain": "ಠ⌣ಠ",
    "title": "happy look of disapproval",
    "tags": "all"
  },
  {
    "plain": "ಠ▄ಠ",
    "title": "Hitler look of disapproval",
    "tags": "the-look"
  },
  {
    "plain": "ͼ(ݓ_ݓ)ͽ",
    "title": "Big ears sad look",
    "tags": "sad"
  },
  {
    "plain": "(⍨)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(∵)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(•̃͡ ɷ•̃͡)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "◉ω◉",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(ಠ ›ಠ)",
    "title": "nosy look",
    "tags": "the-look"
  },
  {
    "plain": "(⍤)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(´Д｀)",
    "title": "Yawning Look",
    "tags": "annoyed"
  },
  {
    "plain": "(ಥ⌣ಥ)",
    "title": 'Unknown',
    "tags": "awe cute-looks  happy"
  },
  {
    "plain": "ヽ(⌐■_■)ノ♪♬",
    "title": "Blind man singing",
    "tags": "all"
  },
  {
    "plain": "(ꉺεꉺ)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(･ิɷ･ิ)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "( ༎ຶ ෴ ༎ຶ)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ب_ب",
    "title": "Sleepy Look",
    "tags": "sad sleepy-looks"
  },
  {
    "plain": "(ԾɷԾ)",
    "title": "Adventure Time",
    "tags": "all"
  },
  {
    "plain": "( ͒ ͓ ͒)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "┌∩┐(ಠ_ಠ)┌∩┐",
    "title": "Fingers of disapproval",
    "tags": "the-look"
  },
  {
    "plain": "ヘ(￣ω￣ヘ)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(;¬_¬)",
    "title": "Suspicious look",
    "tags": "confused"
  },
  {
    "plain": "❂‿❂",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "ヾ(⌐■_■)ノ♪",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ᕕ(ಠ_ಠ)ᕗ",
    "title": "Running disapproval look",
    "tags": "the-look"
  },
  {
    "plain": "ヽ(ʘ̚ل͜ʘ̚)ﾉ",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "╭∩╮(︶︿︶)╭∩╮",
    "title": "Fingers or Disapproval Zen style",
    "tags": "all"
  },
  {
    "plain": "ᕕ(ᐛ)ᕗ",
    "title": "Happy and running",
    "tags": "happy"
  },
  {
    "plain": "凸(¬‿¬)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "⊙.☉",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ヽ( ≧ω≦)ﾉ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ƪ(˘⌣˘)┐",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ಠ ∩ ಠ",
    "title": "Look of Dismay",
    "tags": "sad the-look"
  },
  {
    "plain": "(-■_■)",
    "title": "Glasses of Disapproval",
    "tags": "cool"
  },
  {
    "plain": "̯๏๏",
    "title": "Mckayla Maroney Unimpressed Look",
    "tags": "sad"
  },
  {
    "plain": "♥‿♥",
    "title": 'Unknown',
    "tags": "happy  love"
  },
  {
    "plain": "•‿•",
    "title": "Cute Look",
    "tags": "awe  happy"
  },
  {
    "plain": "(ꉺ౪ꉺ)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(≖ɷ≖)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(( ⁍ืེ – ⁍ื))",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ʘ‿ʘ",
    "title": "Look of I am happy with it",
    "tags": "awe  happy"
  },
  {
    "plain": "◕ ◡ ◕",
    "title": "Puss in Boots look",
    "tags": "animal-looks awe  happy"
  },
  {
    "plain": "◙‿◙",
    "title": "Stoned Look",
    "tags": "stoned"
  },
  {
    "plain": "ↁ_ↁ",
    "title": 'Unknown',
    "tags": "confused"
  },
  {
    "plain": "(ノಠ益ಠ)ノ彡┻━┻",
    "title": "Angry table flip",
    "tags": "flipping-tables"
  },
  {
    "plain": "סּ_סּ",
    "title": "Look alternate version",
    "tags": "the-look"
  },
  {
    "plain": "ଘ_ଘ",
    "title": 'Unknown',
    "tags": "sad"
  },
  {
    "plain": "இ_இ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(`･ω･´)",
    "title": "Bear look",
    "tags": "animal-looks"
  },
  {
    "plain": "•ᴥ•",
    "title": "Doggy face",
    "tags": "animal-looks awe"
  },
  {
    "plain": "(┛◉Д◉)┛彡┻━┻",
    "title": "Alarmed table flip",
    "tags": "flipping-tables"
  },
  {
    "plain": "(V) (ಠ,,,ಠ) (V)",
    "title": "Zoidberg of disapproval",
    "tags": "animal-looks    the-look"
  },
  {
    "plain": "ಡ_ಡ",
    "title": 'Unknown',
    "tags": "confused    sad the-look"
  },
  {
    "plain": "(ಠ,,,ಠ)",
    "title": "Prawn look of disapproval",
    "tags": "animal-looks    the-look"
  },
  {
    "plain": "(\\/) (°,,°) (\\/)",
    "title": "Look of Zoidberg",
    "tags": "animal-looks"
  },
  {
    "plain": "◔_◔",
    "title": "Look of Whatever",
    "tags": "the-look"
  },
  {
    "plain": "●_●",
    "title": "Look of You Gotta be Kidding",
    "tags": "the-look"
  },
  {
    "plain": "{´◕ ◡ ◕｀}",
    "title": "Look of Awe and Joy",
    "tags": "awe  happy"
  },
  {
    "plain": "☉_☉",
    "title": "Look of Disbelief",
    "tags": "the-look"
  },
  {
    "plain": "ಠ෴ಠ",
    "title": "Mustache of Disapproval",
    "tags": "the-look"
  },
  {
    "plain": "(┛ಠ_ಠ)┛彡┻━┻",
    "title": "Flipping Table Look",
    "tags": "flipping-tables"
  },
  {
    "plain": "┌(ﾟдﾟ)┘",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "〜(￣△￣〜)",
    "title": "Suave",
    "tags": "all"
  },
  {
    "plain": "ƪ(˘⌣˘)ʃ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "└(=^‥^=)┐",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ಠ_ృ",
    "title": "A noble look",
    "tags": "monocle"
  },
  {
    "plain": "☜(ﾟヮﾟ☜)",
    "title": "Dude!",
    "tags": "finger-look  happy"
  },
  {
    "plain": "(☞ﾟヮﾟ)☞",
    "title": "Sweet!",
    "tags": "finger-look  happy"
  },
  {
    "plain": "(///_ಥ)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "╚(ಠ_ಠ)=┐",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "לּ_לּ",
    "title": 'Unknown',
    "tags": "the-look"
  },
  {
    "plain": "טּ_טּ",
    "title": 'Unknown',
    "tags": "the-look"
  },
  {
    "plain": "תּ_תּ",
    "title": 'Unknown',
    "tags": "the-look"
  },
  {
    "plain": "๏_๏",
    "title": 'Unknown',
    "tags": "the-look"
  },
  {
    "plain": "句_句",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ఠ_ఠ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "۞_۞",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ತಎತ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "◪_◪",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "◔̯◔",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ਉ_ਉ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(• ε •)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(｡◕‿◕｡)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ಸ , ໖",
    "title": "Sore eyes",
    "tags": "all"
  },
  {
    "plain": "٩๏̯͡๏۶",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ôヮô",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "♥╭╮♥",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(͡๏̯͡๏)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ಠ̯ಠ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(´◓ɷ◔`)",
    "title": "visually impaired look",
    "tags": "all"
  },
  {
    "plain": "ಥ⌣ಥ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "॓_॔",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "{ಠಠ}_,,|,",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "┌( ಠ_ಠ)┘",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "►_◄",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "¢‿¢",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ó‿ó",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "٩◔̯◔۶",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "〓D",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(●´ω｀●)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ൠ",
    "title": "Reddit look?",
    "tags": "all"
  },
  {
    "plain": "٩(͡๏̯͡๏)۶",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ಸ_ಸ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "◉︵◉",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ಠ , ಥ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "Ծ_Ծ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(◕︵◕)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ಥ_ಥ",
    "title": 'Unknown',
    "tags": "crying-look"
  },
  {
    "plain": "ಠ~ಠ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "☼.☼",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(•‿•)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "╚(•⌂•)╝",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ಥ◡ಥ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ಠ◡ಠ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ಠ_๏",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "๏̯͡๏",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ಥ_ಥ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(ಠ_ృ)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "{◕ ◡ ◕}",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ಠ益ಠ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(ﾟヮﾟ)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "┌─┐\n┴─┴\nಠ_ರೃ\n",
    "title": "Top Hat Look of Disapproval",
    "tags": "monocle"
  },
  {
    "plain": "ರ_ರ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ಠoಠ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "๏̯͡๏﴿",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "⊙▃⊙",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ヾ(●ω●)ノ",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "☜(˚▽˚)☞",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "٩(•̮̮̃-̃)۶",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(☆•ー•☆)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ヘ(￣ー￣ヘ)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(ꉺ✺ꉺ)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "⊙▂⊙",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ƪ(‾.‾“)┐",
    "title": "Walk like an Egyptian",
    "tags": "all"
  },
  {
    "plain": "(இɷஇ)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(⌐▨_▨)",
    "title": "GLasses look",
    "tags": "glasses"
  },
  {
    "plain": "(⌐■_■)",
    "title": "Ray Charles  look",
    "tags": "all"
  },
  {
    "plain": "(ꉺˇɷˇꉺ)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "(/) (°,,°) (/)",
    "title": 'Unknown',
    "tags": "animal-looks"
  },
  {
    "plain": "(V) (;,,;) (V)",
    "title": 'Unknown',
    "tags": "animal-looks"
  },
  {
    "plain": "(✷ɷ✷)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "((;; ;°;ਊ°;)",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "＼(〇O〇)／",
    "title": 'Unknown',
    "tags": "angry annoyed"
  },
  {
    "plain": "╭∩╮ (òÓ,) ╭∩╮",
    "title": 'Unknown',
    "tags": "rage"
  },
  {
    "plain": "┻━┻︵ \\(°□°)/ ︵ ┻━┻",
    "title": "Flip dem tablez",
    "tags": "flipping-tables rage"
  },
  {
    "plain": "(˚Õ˚)ر ~~~~╚╩╩╝",
    "title": "Epic table flip",
    "tags": "flipping-tables rage"
  },
  {
    "plain": "┏━┓┏━┓┏━┓ ︵ /(^.^/)",
    "title": "Put more tables back",
    "tags": "flipping-tables rage"
  },
  {
    "plain": "O=('-'Q)",
    "title": "Punch!",
    "tags": "angry"
  },
  {
    "plain": "(☞ﾟ∀ﾟ)☞",
    "title": "Right back at ya!",
    "tags": "cool"
  },
  {
    "plain": "(ಠ_ಠ)",
    "title": "Serious look",
    "tags": "serious angry the-look"
  },
  {
    "plain": "(⋟﹏⋞)",
    "title": "Angry look",
    "tags": "angry"
  },
  {
    "plain": "【ツ】",
    "title": "Happy square",
    "tags": "happy"
  },
  {
    "plain": "（ﾉ´д｀）",
    "title": "So Sorry",
    "tags": "sad"
  },
  {
    "plain": "ヽ(。_°)ノ",
    "title": "Meh",
    "tags": "confused"
  },
  {
    "plain": "ಠಠ",
    "title": 'Unknown',
    "tags": "angry"
  },
  {
    "plain": "(•̪●)",
    "title": "Goofy face",
    "tags": "confused"
  },
  {
    "plain": "(॓॔)",
    "title": "Unimpressed look",
    "tags": "angry"
  },
  {
    "plain": "٩(-̮̮̃•̃) ۶",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "٩(̾●̮̮̃ ̾•̃̾)۶",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ヾ(ｏ･ω･)ﾉ",
    "title": 'Unknown',
    "tags": "confused"
  },
  {
    "plain": "٩(-̮̮̃- ̃)۶",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "◜☋◝",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "◭,◭",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "•ิ.•",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "๏̯͡๏",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "̃๏̯̃๏",
    "title": 'Unknown',
    "tags": "all"
  },
  {
    "plain": "ツ",
    "title": 'Simple Happy',
    "tags": "happy"
  },
  {
    "plain": "๏̯̃๏",
    "title": 'Unknown',
    "tags": "confused"
  },
  {
    "plain": "[O.o]",
    "title": 'Puzzled',
    "tags": "confused"
  },
  {
    "plain": "╰(◕ヮ◕)つ¤=[]———",
    "title": 'Unknown',
    "tags": "swords"
  },
  {
    "plain": "∩(˵☯‿☯˵)つ¤=[]:::::>",
    "title": 'Unknown',
    "tags": "swords"
  },
  {
    "plain": "╰(⇀︿⇀)つ-]═───",
    "title": 'Unknown',
    "tags": "swords"
  },
  {
    "plain": "^̮ ̮^",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "ᴖ̮ ̮ᴖ",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": "•̮ ̮•",
    "title": 'Unknown',
    "tags": "happy"
  },
  {
    "plain": ".̯.",
    "title": 'Unknown',
    "tags": "sadness"
  },
  {
    "plain": ".̮.",
    "title": 'Unknown',
    "tags": "sadness"
  },
  {
    "plain": "≋≋≋≋≋̯̫⌧̯̫(ˆ•̮ ̮•ˆ) ",
    "title": "Nyancat",
    "tags": "happy"
  },
  {
    "plain": "(˘︶˘).｡.:*♡",
    "title": 'Unknown',
    "tags": "love happy"
  },
  {
    "plain": "┬┴┤･ω･)ﾉ hello?├┬┴┬",
    "title": 'Unknown',
    "tags": "greeting"
  },
  {
    "plain": "ಠ , ಥ",
    "title": 'Unknown',
    "tags": "sad"
  },
  {
    "plain": "(∩ ` -´)⊃━━☆ﾟ.*･｡ﾟ",
    "title": "Wizard",
    "tags": "all"
  },
  {
    "plain": "(☞ﾟヮﾟ)☞ ┻━┻",
    "title": "Pointing at flipped table",
    "tags": "flipping-tables"
  },
  {
    "plain": "/___\\",
    "title": "Tired",
    "tags": "sadness"
  },
  {
    "plain": "¯\\_(ツ)_/¯",
    "title": "Shrug",
    "tags": "shrug"
  },
  {
    "plain": "␦●•●'?",
    "title": "Shy",
    "tags": "all"
  }
];

const looks: Look[] = rawLooks.map((look) => {
  return {
    plain: look.plain,
    title: look.title,
    tags: look.tags.split(' ').filter(ws => ws !== '')
  }
});

export default looks;