// menu fitur bot
const help = (prefix, instagram, getLevelingLevel, getLevelingXp, sender, name, pushname2, user, limitt, uptime, jam, tanggal) => { 
	return `┌──「 *HINATA BOT V2* 」
│        
├「 *USER STATUS* 」
│
├ NAMA : ${pushname2}
├ XP : ${getLevelingXp(sender)}
├ LEVEL : ${getLevelingLevel(sender)}
├ USER BOT : ${user.length}
│
┣◪ 「 *Readmore* 」
┃
┣ ❏ ${prefix}report
┣ ❏ ${prefix}info
┣ ❏ ${prefix}donasi
┣ ❏ ${prefix}owner
┣ ❏ ${prefix}speed
┣ ❏ ${prefix}verify
┣ ❏ ${prefix}limit
┣ ❏ ${prefix}totaluser
┣ ❏ ${prefix}blocklist
┣ ❏ ${prefix}banlist
┣ ❏ ${prefix}premiumlist
┣ ❏ ${prefix}bahasa
┣ ❏ meaning:language
┣ ❏ ${prefix}leaderboard
┃
┣◪ 「 *Media* 」
┃
┣ ❏ ${prefix}tiktokstalk 
┣ ❏ ${prefix}igstalk 
┣ ❏ ${prefix}instavid 
┣ ❏ ${prefix}instaimg 
┣ ❏ ${prefix}instastory
┣ ❏ ${prefix}ssweb
┣ ❏ ${prefix}url2img
┣ ❏ ${prefix}tiktok    
┣ ❏ ${prefix}fototiktok
┣ ❏ ${prefix}kbbi
┣ ❏ ${prefix}wait
┣ ❏ ${prefix}trendtwit
┣ ❏ ${prefix}google 
┃
┣◪ 「 *MENU* 」
┃
┣ ❏ ${prefix}quotemaker 
┣ ❏ ${prefix}nulis
┣ ❏ meaning: write
┣ ❏ ${prefix}croman 
┣ ❏ ${prefix}slide
┣ ❏ ${prefix}tahta 
┣ ❏ ${prefix}party
┣ ❏ ${prefix}galaxtext
┣ ❏ ${prefix}metalteks
┣ ❏ ${prefix}apiteks
┣ ❏ ${prefix}airtext
┣ ❏ ${prefix}kunciteks
┣ ❏ ${prefix}cglass 
┣ ❏ ${prefix}cstyle 
┣ ❏ ${prefix}cgame 
┣ ❏ ${prefix}clove 
┣ ❏ ${prefix}cparty 
┣ ❏ ${prefix}glow
┣ ❏ ${prefix}tts 
┣ ❏ ${prefix}glitch
┣ ❏ ${prefix}love
┣ ❏ ${prefix}coffe
┣ ❏ ${prefix}anakharam
┣ ❏ ${prefix}heker
┣ ❏ ${prefix}cpaper 
┣ ❏ ${prefix}stiker
┣ ❏ ${prefix}gifstiker
┣ ❏ ${prefix}toimg
┣ ❏ ${prefix}tomp3
┣ ❏ ${prefix}toptt
┣ ❏ ${prefix}slapimg
┣ ❏ ${prefix}tolol
┣ ❏ ${prefix}phcoment
┣ ❏ ${prefix}ytcoment
┣ ❏ ${prefix}freefire
┣ ❏ ${prefix}wetglass
┣ ❏ ${prefix}multicolor3d
┣ ❏ ${prefix}watercolor
┣ ❏ ${prefix}luxurygold
┣ ❏ ${prefix}galaxywallpaper
┣ ❏ ${prefix}lighttext
┣ ❏ ${prefix}beautifulflower
┣ ❏ ${prefix}puppycute
┣ ❏ ${prefix}royaltext
┣ ❏ ${prefix}heartshaped
┣ ❏ ${prefix}galaxystyle
┣ ❏ ${prefix}greenneon
┣ ❏ ${prefix}glossychrome
┣ ❏ ${prefix}greenbush
┣ ❏ ${prefix}metallogo
┣ ❏ ${prefix}noeltext
┣ ❏ ${prefix}textcake
┣ ❏ ${prefix}wooden3d 
┣ ❏ ${prefix}starsnight 
┣ ❏ ${prefix}wooden3d 
┣ ❏ ${prefix}textbyname 
┣ ❏ ${prefix}writegalacy 
┣ ❏ ${prefix}glittergold
┣ ❏ ${prefix}hologram3d
┣ ❏ ${prefix}birthdaycake
┣ ❏ ${prefix}galaxybat 
┣ ❏ ${prefix}gta
┣ ❏ ${prefix}snow3d 
┣ ❏ ${prefix}goldplaybutton 
┣ ❏ ${prefix}silverplaybutton 
┣ ❏ ${prefix}fftourserti 
┣ ❏ ${prefix}fftourserti2 
┣ ❏ ${prefix}fftourserti3 
┣ ❏ ${prefix}fftourserti4 
┣ ❏ ${prefix}fftourserti5 
┣ ❏ ${prefix}pubgtourserti
┣ ❏ ${prefix}pubgtourserti2
┣ ❏ ${prefix}pubgtourserti3
┣ ❏ ${prefix}pubgtourserti4
┣ ❏ ${prefix}pubgtourserti5
┣ ❏ ${prefix}mltourserti1
┣ ❏ ${prefix}mltourserti2
┣ ❏ ${prefix}mltourserti3
┣ ❏ ${prefix}mltourserti4
┣ ❏ ${prefix}tweetfake
┣ ❏ ${prefix}bocilepep
┣ ❏ ${prefix}babu
┣ ❏ ${prefix}bucinserti
┣ ❏ ${prefix}nickepep
┃
┣◪ 「 *ANIME* 」
┃
┣ ❏ ${prefix}modeanime 
┣ ❏ ${prefix}neonime 
┣ ❏ ${prefix}naruto   
┣ ❏ ${prefix}minato
┣ ❏ ${prefix}kaguya
┣ ❏ ${prefix}boruto
┣ ❏ ${prefix}hinata
┣ ❏ ${prefix}sakura
┣ ❏ ${prefix}sasuke
┣ ❏ ${prefix}toukachan
┣ ❏ ${prefix}rize
┣ ❏ ${prefix}akira
┣ ❏ ${prefix}itori
┣ ❏ ${prefix}kurumi
┣ ❏ ${prefix}miku
┣ ❏ ${prefix}anime
┣ ❏ ${prefix}animecry
┣ ❏ ${prefix}animekiss
┣ ❏ ${prefix}randomhusbu
┃
┣◪ 「 *CARTOON* 」
┃
┣ ❏ ${prefix}doraemon
┣ ❏ ${prefix}boboiboy
┣ ❏ ${prefix}boboiboy2
┣ ❏ ${prefix}spongebob
┣ ❏ ${prefix}frozen
┃
┣◪ 「 *MENU GROUP* 」
┃
┣ ❏ ${prefix}antilink 
┣ ❏ ${prefix}welcome 
┣ ❏ ${prefix}grup
┣ ❏ ${prefix}bukatime
┣ ❏ meaning:open time
┣ ❏ ${prefix}tutuptime
┣ ❏ meaning:close time
┣ ❏ ${prefix}leveling 
┣ ❏ ${prefix}bacotlist
┣ ❏ meaning: bad words list
┣ ❏ ${prefix}bacot
┣ ❏ ${prefix}tag      
┣ ❏ ${prefix}kisstag
┣ ❏ ${prefix}reminder
┣ ❏ ${prefix}setpp
┣ ❏ ${prefix}Level
┣ ❏ ${prefix}mining
┣ ❏ ${prefix}infogc
┣ ❏ ${prefix}add
┣ ❏ ${prefix}kick @tag
┣ ❏ ${prefix}kicktime
┣ ❏ ${prefix}promote
┣ ❏ ${prefix}demote
┣ ❏ ${prefix}setname
┣ ❏ ${prefix}setdesc
┣ ❏ ${prefix}linkgrup
┣ ❏ ${prefix}tagme
┣ ❏ ${prefix}hidetag
┣ ❏ ${prefix}stickertag
┣ ❏ ${prefix}wametag
┣ ❏ ${prefix}tagall
┣ ❏ ${prefix}infoall
┣ ❏ ${prefix}fitnah
┣ ❏ meaning: fake reply
┣ ❏ ${prefix}listadmin
┃
┣◪ 「 *ADMIN* 」
┃
┣ ❏ ${prefix}nsfw
┣ ❏ ${prefix}nsfwloli
┣ ❏ ${prefix}nsfwblowjob
┣ ❏ ${prefix}nsfwneko
┣ ❏ ${prefix}nsfwtrap
┣ ❏ ${prefix}hentai
┣ ❏ ${prefix}simih
┣ ❏ ${prefix}hinatabot
┃
┣◪ 「 *FUN* 」
┣ ❏ ${prefix}aesthetic
┣ ❏ meaning: amv
┣ ❏ ${prefix}anjing
┣ ❏ meaning:dog
┣ ❏ ${prefix}kucing
┣ ❏ meaning:cat
┣ ❏ ${prefix}testime
┣ ❏ meaning:
┣ ❏ ${prefix}hilih
┣ ❏ meaning:choose
┣ ❏ ${prefix}apakah
┣ ❏ meaning:is
┣ ❏ ${prefix}kapankah
┣ ❏ meaning:when
┣ ❏ ${prefix}bisakah
┣ ❏ meaning:can you
┣ ❏ ${prefix}rate
┣ ❏ ${prefix}slot
┣ ❏ ${prefix}ganteng
┣ ❏ meaning:handsome
┣ ❏ ${prefix}cantik
┣ ❏ meaning:beautiful
┣ ❏ ${prefix}babi
┣ ❏ meaning:pig
┣ ❏ ${prefix}watak
┣ ❏ meaning:character
┣ ❏ ${prefix}hobby
┣ ❏ ${prefix}infogempa
┣ ❏ meaning:earthquake information
┣ ❏ ${prefix}infonomor
┣ ❏ ${prefix}quotes
┣ ❏ ${prefix}truth
┣ ❏ ${prefix}dare
┣ ❏ ${prefix}katabijak
┣ ❏ meaning:words of wisdom
┣ ❏ ${prefix}fakta
┣ ❏ meaning:fact
┣ ❏ ${prefix}darkjokes
┣ ❏ ${prefix}bucin
┣ ❏ ${prefix}pantun
┣ ❏ meaning:rhymes
┣ ❏ ${prefix}katacinta
┣ ❏ meaning:words of love
┣ ❏ ${prefix}jadwaltvnow
┣ ❏ ${prefix}hekerbucin
┣ ❏ meaning:
┣ ❏ ${prefix}katailham
┣ ❏ meaning:said inspiration
┃
┣◪ 「 *OTHERS* 」
┃
┣ ❏ ${prefix}jarak 
┣ ❏ ${prefix}info
┣ ❏ ${prefix}infobot
┣ ❏ ${prefix}wame
┣ ❏ ${prefix}phsearch
┣ ❏ ${prefix}ytsearch
┣ ❏ ${prefix}stalkyt
┣ ❏ ${prefix}githubstalk
┣ ❏ ${prefix}cogan
┣ ❏ ${prefix}cecan
┣ ❏ ${prefix}listvn
┣ ❏ ${prefix}listimg
┣ ❏ ${prefix}itsme
┣ ❏ ${prefix}made
┣ ❏ ${prefix}listzodiak
┣ ❏ ${prefix}translate 
┣ ❏ ${prefix}pasangan
┣ ❏ meaning:couple
┣ ❏ ${prefix}gantengcek
┣ ❏ meaning:handsome
┣ ❏ ${prefix}cantikcek
┣ ❏ meaning:pretty check
┣ ❏ ${prefix}artinama
┣ ❏ meaning:the meaning of the name
┣ ❏ ${prefix}persengay
┣ ❏ meaning:percentgay
┣ ❏ ${prefix}pbucin 
┣ ❏ ${prefix}bpfont 
┣ ❏ ${prefix}textstyle 
┣ ❏ ${prefix}jadwaltv 
┣ ❏ ${prefix}lirik 
┣ ❏ ${prefix}chord 
┣ ❏ ${prefix}wiki 
┣ ❏ ${prefix}brainly 
┣ ❏ ${prefix}resepmasakan
┣ ❏ meaning:recipes
┣ ❏ ${prefix}map 
┣ ❏ ${prefix}gemuk
┣ ❏ meaning:fat
┣ ❏ ${prefix}bass
┣ ❏ ${prefix}ghost
┣ ❏ ${prefix}blub
┣ ❏ ${prefix}film 
┣ ❏ ${prefix}pinterest 
┣ ❏ ${prefix}infocuaca 
┣ ❏ ${prefix}jamdunia
┣ ❏ meaning:world clock
┣ ❏ ${prefix}mimpi
┣ ❏ meaning:dream
┣ ❏ ${prefix}infoalamat
┣ ❏ meaning:address info
┣ ❏ ${prefix}playstore 
┃
┣◪ 「 *GAME* 」
┃
┣ ❏ ${prefix}readmore        
┣ ❏ ${prefix}puisiimg
┣ ❏ ${prefix}asupan
┣ ❏ meaning:intake
┣ ❏ ${prefix}tebakgambar
┣ ❏ meaning:guess the picture
┣ ❏ ${prefix}tebakumur
┣ ❏ meaning:guess the age
┣ ❏ ${prefix}tebakangka
┣ ❏ meaning:guess what
┣ ❏ ${prefix}vslot
┣ ❏ ${prefix}suit
┣ ❏ ${prefix}caklontong
┣ ❏ meaning:
┣ ❏ ${prefix}family100
┣ ❏ ${prefix}memeindo
┣ ❏ ${prefix}memeen
┣ ❏ ${prefix}meme
┣ ❏ ${prefix}kalkulator 
┣ ❏ ${prefix}apkmod
┣ ❏ ${prefix}moddroid 
┣ ❏ ${prefix}happymod 
┃
┣◪ 「 *18+* 」
┃
┣ ❏ ${prefix}randomkpop
┣ ❏ ${prefix}cersex
┣ ❏ meaning:
┣ ❏ ${prefix}ceritahoror
┣ ❏ meaning:horror story
┣ ❏ ${prefix}cerpen
┣ ❏ meaning:short story
┣ ❏ ${prefix}randombokep
┣ ❏ ${prefix}coli
┣ ❏ ${prefix}xxz
┣ ❏ ${prefix}pornhub 
┣ ❏ ${prefix}xvideos 
┣ ❏ ${prefix}nekopoi 
┃
┣◪ 「 *PRAY* 」
┃
┣ ❏ ${prefix}jadwalsholat 
┣ ❏ ${prefix}quran
┣ ❏ ${prefix}kisahnabi
┣ ❏ ${prefix}quranlist
┣ ❏ ${prefix}quransurah
┃
┣◪ 「 *FIND* 」
┃
┣ ❏ ${prefix}becrypt 
┣ ❏ ${prefix}encode64 
┣ ❏ ${prefix}decode64 
┣ ❏ ${prefix}encode32 
┣ ❏ ${prefix}decode32 
┣ ❏ ${prefix}encbinary 
┣ ❏ ${prefix}decbinary 
┣ ❏ ${prefix}encoctal 
┣ ❏ ${prefix}decoctal 
┣ ❏ ${prefix}hashidentifier 
┣ ❏ ${prefix}dorking 
┣ ❏ ${prefix}pastebin 
┣ ❏ ${prefix}tinyurl 
┣ ❏ ${prefix}bitly 
┃
┣◪ 「 *SPAM* 」
┃
┣ ❏ ${prefix}spamcall
┣ ❏ ${prefix}spamgmail 
┃
┣◪ 「 *OWNER* 」
┃
┣ ❏ ${prefix}addprem
┣ ❏ ${prefix}buggc
┣ ❏ ${prefix}dellprem
┣ ❏ ${prefix}hinataprem
┣ ❏ ${prefix}setmemlimit
┣ ❏ ${prefix}setlimit
┣ ❏ ${prefix}setreply
┣ ❏ ${prefix}setreplyz
┣ ❏ ${prefix}setprefix
┣ ❏ ${prefix}setnamebot
┣ ❏ ${prefix}setppbot
┣ ❏ ${prefix}addbucin
┣ ❏ ${prefix}addbacot
┣ ❏ ${prefix}addsay
┣ ❏ ${prefix}addstik
┣ ❏ ${prefix}addvn
┣ ❏ ${prefix}addimg
┣ ❏ ${prefix}addvid
┣ ❏ ${prefix}ohidetag
┣ ❏ ${prefix}ostickertag
┣ ❏ ${prefix}okisstag
┣ ❏ ${prefix}bc
┣ ❏ ${prefix}bcgc
┣ ❏ ${prefix}ban
┣ ❏ ${prefix}unban
┣ ❏ ${prefix}block
┣ ❏ ${prefix}unblock
┣ ❏ ${prefix}clearall
┣ ❏ ${prefix}delete
┣ ❏ ${prefix}clone
┣ ❏ ${prefix}getses
┣ ❏ ${prefix}leave
┃
┣◪ 「 *PREMIUM* 」
┃
┣ ❏ ${prefix}play
┣ ❏ ${prefix}ytplay
┣ ❏ ${prefix}fb 
┣ ❏ ${prefix}snack 
┣ ❏ ${prefix}ytmp3 
┣ ❏ ${prefix}ytmp4 
┣ ❏ ${prefix}joox
┣ ❏ ${prefix}joox2
┣ ❏ ${prefix}smule
┣ ❏ MADE WITH LOVE FOR HINATA BY NARUTO
┣ ❏ Thanks to ꧁✭angel queen✭꧂ for api
┣ 
└──「 *Hinata V2 BOT* 」
`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

// info bot 
const bottt = (prefix) => {
return `
\`\`\`For now, the bot can only be used in groups..\`\`\`

If this bot is in your group the group admin must activate the bot by way of ${prefix}hinatabot active
`
}
exports.bottt = bottt
// donasi menu
const donasi = (name) => { 
	return `       
「 *DONATE* 」 
No need just your support is enough

「 *BY ${name}* 」
`
}
exports.donasi = donasi

// bahasa list
const bahasa = (prefix) => {
return `
Language List For Command *${prefix}tts*

  ◪  𝗟𝗜𝗦𝗧 𝗕𝗔𝗛𝗔𝗦𝗔
  ├≽  af: Afrikaans
  ├≽  sq: Albanian
  ├≽  ar: Arabic
  ├≽   hy: Armenian
  ├≽  ca: Catalan
  ├≽  zh: Chinese
  ├≽  zh-cn: Chinese (Mandarin/China)
  ├≽  zh-tw: Chinese (Mandarin/Taiwan)
  ├≽  zh-yue: Chinese (Cantonese)
  ├≽  hr: Croatian
  ├≽  cs: Czech
  ├≽  da: Danish
  ├≽  nl: Dutch
  ├≽  en: English
  ├≽  en-au: English (Australia)
  ├≽  en-uk: English (United Kingdom)
  ├≽  en-us: English (United States)
  ├≽  eo: Esperanto
  ├≽  fi: Finnish
  ├≽  fr: French
  ├≽  de: German
  ├≽  el: Greek
  ├≽  ht: Haitian Creole
  ├≽  hi: Hindi
  ├≽  hu: Hungarian
  ├≽  is: Icelandic
  ├≽  id: Indonesian
  ├≽  it: Italian
  ├≽  ja: Japanese
  ├≽  ko: Korean
  ├≽  la: Latin
  ├≽  lv: Latvian
  ├≽  mk: Macedonian
  ├≽  no: Norwegian
  ├≽  pl: Polish
  ├≽  pt: Portuguese
  ├≽  pt-br: Portuguese (Brazil)
  ├≽  ro: Romanian
  ├≽  ru: Russian
  ├≽  sr: Serbian
  ├≽  sk: Slovak
  ├≽  es: Spanish
  ├≽  es-es: Spanish (Spain)
  ├≽  es-us: Spanish (United States)
  ├≽  sw: Swahili
  ├≽  sv: Swedish
  ├≽  ta: Tamil
  ├≽  th: Thai
  ├≽  tr: Turkish
  ├≽  vi: Vietnamese
  ├≽  cy: Welsh
  └─────────────
  
  𝗛INATA V2 𝗕𝗢𝗧
`
}
exports.bahasa = bahasa

const zod = (pushname2, sender) => {
  return`
\`\`\`Nama :\`\`\` ${pushname2}
\`\`\`Number :\`\`\` wa.me/${sender.split("@")[0]}
  
  
「 *ZODIAC LIST* 」

   Aries (March 21 - April 20)
   Taurus (April 21 - May 20)
   Gemini (May 21 - June 20)
   Cancer (June 21 - July 20)
   Leo (July 21 - August 21)
   Virgo (August 22 - September 22)
   Libra (23 September - 22 October)
   Scorpio (23 October - 22 November)
   Sagittarius (23 November - 20 December)
   Capricorn (December 21 - January 19)
   Aquarius (January 20 - February 18)
   Pisces (February 19 - March 20)


explanation!

1.Aries (March 21 - April 20)
   Aries (♈) /ˈɛəriːz/ (which means "Lamb") is the first constellation of the Zodiac, which includes the first 30 degrees of longitude (0 ° ≤ λ <30 °). Under the tropical zodiac, the Sun transits in this constellation generally between March 20 to April 20 each year. The duration of this time is exactly the first month of the Persian Calendar (Farvardin). Under the sidereal zodiac sign, the sun transits Aries from April 15 to May 15 (approx.). A sheep symbol based on Chrysomallus, the flying sheep.
Depending on the system used, individuals born on that date may be called Arians or Ariens. Aries is the first fire constellation in the zodiac, the other fire constellations are Leo and Sagittarius.

2.Taurus (April 21 - May 20)
   Taurus (Latin for "bull"; symbol :, Unicode: ♉) is the second astrological sign in the zodiac. This zodiac sign covers the 30-60 degrees of the zodiac, between 27.25 and 54.75 degrees of celestial longitude. Under the tropical zodiac, the sun transits this area from April 20 to May 20 each year. Under the sidereal zodiac, the sun transits the constellation Taurus from May 16 to June 21. People born between these dates, depending on their chosen astrological system, may be called Taureans. [1] [2] The bull symbol is based on the Cretan bull, a white bull, the father of the Minotaur who was killed by Theseus.
   
3.Gemini (May 21 - June 20)
   Gemini (♊) [1] is the third sign in the constellation Gemini. Under the tropical zodiac, the sun transits this sign between May 21 and June 21. Gemini is represented by the Castor and Pollux Twins. [2] This twin symbol is based on the Dioscuri, two humans who are given joint divine powers after their death.

4.Cancer (June 21 - July 20)
   Cancer (♋) (Ancient Greek: Καρκίνος, Latin: Cancer) is the fourth zodiac sign that comes from the constellation Cancer. This zodiac sign includes 90 ° to 120 ° of the zodiac, between 90 ° and 120 ° of the celestial coordinate system. Under the tropical zodiac, the Sun transits this area between June 22 and July 22, and below the sidebar, the Sun transits this area from July 16 to August 15. [1]
In astrology, Cancer is the cardinal zodiac sign of the water element, which includes Cancer, Pises, and Scorpio. [2] This zodiac sign has negative energy, and lives on the planet Moon. The cancer is in the shape of a crab, based on Karkinos, the giant crab that Heracles harassed him during his fight with the Hydra.

5.Leo (July 21 - August 21)
   Leo (♌) (Ancient Greek: Λέων, Latin: Leōn), is the 5th zodiac sign, derived from the constellation Leo. Appears after Cancer (Greek: Καρκίνος, Latin: Karkinos) and before Virgo (Greek: Παρθένος, Latin: Parthenos). In the tropical zodiac, the Sun transits this constellation from July 23 to August 22.
   
6.Virgo (August 22 - September 22)
   Virgo (♍) (Greek: Παρθένος, Parthenos) is the sixth astrological sign in the Zodiac. This sign covers 150-180 degrees of the zodiac. Under the tropical zodiac, the Sun transits this area on average between August 23 and September 22, [1] and the Sun transits the constellation Virgo from around September 16 to October 30.
   
7.Libra (23 September - 22 October)
   Libra (♎) is the seventh zodiac sign. This zodiac sign includes 180 ° –210 ° longitude. [1] In the tropical zodiac, the sun transits on September 23 and October 23, [2] [3] and in the sidereal zodiac, the sun is in this constellation from October 31 to November 22. [4] The zodiac's scale symbol is based on the Scales of Justice held by Themis, the incarnation of Greek law. [5] She became the inspiration for the modern legal woman. The planet that houses Libra is Venus. [6] [7] Libra is the only sign that is depicted with a non-living object. Other zodiac signs are depicted with mythological animals or creatures.
   
8.Scorpio (October 23 - November 22)
   Scorpio (♏) (Greek: Σκορπιός Skorpios; Latin: Scorpius) is the eighth star on the zodiac list. This star is in the order of the zodiac 210-240, between 207.25 and 234.75 degrees longitude. Under the tropical zodiac, the sun transits this area on average between October 23 and November 22, and under the sidereal zodiac, it transits the constellation Scorpius from around November 16 to December 15. Depending on the zodiac system used, an individual born under the influence of a Scorpio may be called a Scorpio or Scorpion. [1] The scorpion symbol is based on Scorpius, the giant scorpion sent by Gaia to kill Orion. [2]
Scorpio is the second water sign, after Cancer and is followed by the third water sign, Pisces.

9.Sagittarius (November 23 - December 20)
   Sagittarius (♐) is the ninth zodiac sign on the zodiac chart. In the sky, this zodiac sign stretches between 240 degrees and 269 degrees of the ecliptic coordinate system. In the tropical zodiac, the Sun transits in this area from November 23 to December 21 every year. In sidereal astrology, the sun transits in the constellation Sagittarius from around December 16 to January 14.

10.Capricorn (December 21 - January 19)
    Capricorn is one of the constellations of the zodiac. Usually known as Capricorn, especially in astrology. This constellation symbolizes the horned goat, although sometimes many call it sea goat. Capricorn is one of the 88 modern constellations, and also one of the 48 constellations listed by Ptolemy. Within the boundaries of modern constellations, this constellation is surrounded by Aquila, Sagittarius, Microscium, Piscis Austrinus and Aquarius.
In the Zodiac, individuals who have a Capricorn star, are born on December 22 to January 19, when the Sun is on the Capricorn star.

11.Aquarius (January 20 - February 18)
    Aquarius (♒) is the eleventh of the twelve signs of the astrological zodiac and it comes from the constellation of the same name, the constellation Aquarius.
Individuals born when the sun is on this sign are known as "Aquarius individuals". Aquarius is considered the masculine zodiac sign by ancient astrologers and it was colonized by the planet Saturn, but the planet Uranus is said to be the real keeper of Aquarius by a number of modern astrologers. The Sanskrit name for Aquarius in Hindu astrology is Kuṃbha.

12.Pisces (February 19 - March 20)
    Pises (Fish) is a constellation zodiac sign between Aquarius on the west and Aries on the east. Pises is the 12th astrological symbol in the zodiac, which comes from the Constellation of Pises. In astrology, Pises is synonymous with feminine or negative symbols. Also a symbol of water. In the zodiac this is symbolized by a pair of fish swimming in opposite directions. Traditionally, Pises reigned on the Planet Jupiter, but since its discovery, Neptune has been the modern throne of this emblem.
In the Zodiac, individuals who have the star Pises, are born on February 19 to March 20, when the Sun is on the star Pisces.


「 *Hinata BOT* 」
  `
}
exports.zod = zod



const bangsat = (name) => {
  return`Hi sis/bro ${pushname2}👋
Want to download apkmod?

Here !!

👾APPLICATION

• Minecraft (Original)
https://www.mediafire.com/file/4hixmktsfkhky91/Minecraft_v1.16.101.01_Terbaru.zip/file

• Geometry Dash (MOD)
http://www.mediafire.com/file/thnoi1wpa5ex2wn/Geometry_Dash_%2528MOD%2529.apk/file

• KineMaster (PRO)
https://www.mediafire.com/download/eshb8rra8eg5xa3

• KineMaster Diamond (MOD)
https://www.mediafire.com/download/9p8wsnwupnq0lun

• KineMaster Ruby (MOD)
https://www.mediafire.com/download/6b2wa08cmtsr8x8

• Adobe Photoshop (Original)
https://www.mediafire.com/download/whfh12tj4zjpedp

• Alight Motion (PRO)
http://www.mediafire.com/file/tpxj2grwf8imp6i/Alight_Motion_V.3.1.4_%2528Mod%2529_By_bilqis_neha.apk/file

• Avee Player (PRO)
https://www.mediafire.com/download/5vkde8d1gcyk33y

• Pixellab (PRO)
https://www.mediafire.com/download/kxj0xyvrkc8w6h0

• Inshot (PRO)
https://www.mediafire.com/download/7qcmrfdy2o1ynxf

• WavePad (PRO)
https://www.mediafire.com/download/oif50qb8ltdoe2x

• Vimage (PRO)
https://www.mediafire.com/download/egjumopr2wl89tl

• Zeotropic (PRO)
https://www.mediafire.com/download/tw9zwj2km2tjsnh

• 90s (PRO)
https://www.mediafire.com/download/0y2bba69f6wakuh


📦TEMPLATE

• Template Mine 
http://www.mediafire.com/file/cxa8io0j0i3a0x4/Mine-Imator_%2528Template_Pika_Gamer%2529_Edited.zip/file

• 50 Template Avee Player 1
https://realsht.mobi/teCTj

• 50 Template Avee Player 2
https://realsht.mobi/hhSMc

• Template Quotes Rainbow
https://realsht.mobi/LbmVw

• Template Quotes 1
https://realsht.mobi/GZuvl

• Template Quotes 2
https://realsht.mobi/lFLqm

• Template Quotes 3
https://realsht.mobi/prMyC

• Template Quotes 4
https://realsht.mobi/FyGha

• Template Quotes 5
https://realsht.mobi/LdpNd

• Template Quotes 6
https://realsht.mobi/BdlQe

• Template Quotes 7
https://realsht.mobi/fdZCs

• Template Quotes 8
https://realsht.mobi/YkqIk

• Template Quotes 9
https://realsht.mobi/BcKdr

• Template Quotes 10
https://realsht.mobi/MaZno

• Template Mega Colab
https://realsht.mobi/JinWs

• Template Colab 1
https://realsht.mobi/bocSM

• Template Colab 2
https://realsht.mobi/eJwLd

• Template Colab 3
https://realsht.mobi/tGMxp

• Template Colab 4
https://realsht.mobi/oQtWo

• Template Colab 5
https://realsht.mobi/rbvWQ

• Template Wajah Orang
https://realsht.mobi/tGMxp

• Template Kacamata
https://realsht.mobi/MpoKs

• Template Unix 1
https://realsht.mobi/dfToI

• Template Unix 2
https://realsht.mobi/hRMsq

• Template Partikel
https://realsht.mobi/wOMlc

• Template Pistol
https://realsht.mobi/exXCy

• Template Solo
https://realsht.mobi/MvYbm

〽️FONT

• Kumpulan Font Untuk Quotes
https://realsht.mobi/JkmXx

• 800 Font Picsay/Pixelab
https://realsht.mobi/brKhI

• 400 Font Picsay/Pixelab
https://realsht.mobi/gBHyt

• 200 Font Picsay/Pixelab
https://realsht.mobi/iJQbj

• 100 Font Picsay/Pixelab
https://realsht.mobi/hrTdE
  
𝗕𝗶𝗹𝗮𝗻𝗴 𝗮𝗽𝗮 𝘀𝗮𝗺𝗮 𝗛𝗔𝗡𝗭?
  `
}
exports.bangsat = bangsat

const made = (name) => {
  return `───「 𝙃INATA 𝘽𝙊𝙏」───

this is a whatsapp robot, which is programmed through our computer, we cannot answer your questions because whatsapp is only a robot
If you want to ask the admin of this bot

This robot is experiencing crashes being repaired, maybe often off due to network failures

Reaired ....

Bipp .... Look at the status below the profile photo to see if the robot is on or off
wa.me/919080896537 `
}

exports.made = made

const profil = (pushname2, sender) => {
  return`「 PROFILE 」
  
  \`\`\`Name :\`\`\` ${pushname2}
  \`\`\`Number :\`\`\` wa.me/${sender.split("@")[0]}
  \`\`\`USER :\`\`\` Terdaftar✅

`
}
exports.profil = profil

const kontl = (pushname2, sender, getLevelingXp, getLevelingLevel) =>{
  return`「 LEVEL 」シ
  
\`\`\`Name :\`\`\` ${pushname2}
\`\`\`Number :\`\`\` wa.me/${sender.split("@")[0]}
\`\`\`XP :\`\`\` ${getLevelingXp(sender)}
\`\`\`Level    : \`\`\` ${getLevelingLevel(sender)}
  
𝗛INATA 𝗕𝗢𝗧シ `
}
exports.kontl = kontl

const ping = (prefix) => {
  return`Speed : _well....._`
}
exports.ping = ping

const hanz = (pushname2) => {
  return `╔════════════════════
║ *About HINATA V2 BOT*
╠════════════════════
║├≽️⚜ *🔰AUTHOR🔰*: *soul reaper*
║├≽️🛡️ *DESIGNER*: *angel queen*
║├≽️🛡️ *Owner : soul reaper*
╠════════════════════
╠════════════════════
║  HI ${pushname2}
╠════════════════════
║╭──❉ *ADMIN* ❉──
║│1. *Group WhatsApp*
║│https://chat.whatsapp.com/well.......
║│2. *Instagram <Follow>*
║│ https://instagram.com/well....
║│3. *Creator*
║│ *wa.me/919080896537*
║╰───────────
╠════════════════════
║ *MADE BY SOUL REAPERS*
╚════════════════════  `
}
exports.hanz = hanz
// Limit
const limitend = (pushname2) => {
        return`*Sorry ${pushname2} Today's limit expires*\n* limit is reset every 12:00 WIB MIDDLE NIGHT*`
}

const limitcount = (limitCounts) => {
        return`
Your limit: ${limitCounts}
`
}

exports.limitend = limitend
exports.limitcount = limitcount







