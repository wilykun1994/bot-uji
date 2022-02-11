
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
const chalk = require('chalk')
const colors = require('colors')
const spin = require('spinnies')
const async = require('async')
const CFonts = require('cfonts')
const os = require('os')
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

require('./AkirTod.js')
nocache('./AkirTod.js', module => console.log(`${module} Telah Di Update!`))

const starts = async (Akira = new WAConnection()) => {
                  Akira.logger.level = 'warn'
                  Akira.version = [2, 2143, 3]
                  console.log(color('[ YT : KirBotz× ]', 'cyan'), color('Owner Is Online Now!!!', 'yellow'))
	              console.log(color('[ YT : KirBotz× ]', 'cyan'), color('Welcome Back, Owner! Hope You Are Doing Well~', 'yellow'))
                  Akira.browserDescription = [ 'KirBotz', 'Chrome', '3.0' ]
                  Akira.on('qr', () => {
                  console.log(color('[','white'), color('!','yellow'), color(']','white'), color('Scan Kak'))
                  })
                  fs.existsSync(`./session.json`) && Akira.loadAuthInfo(`./session.json`)
                  Akira.on('connecting', () => {
		          console.log(color('[ LOADING ]', 'cyan'), color('Loading Bang Sabar Napa.......', 'yellow'));
	              })
                  Akira.on('open', () => {
		          console.log(color('[ SUCCES ]', 'cyan'), color('Bot Online Pliss Subrek YT : KirBotz×', 'yellow'));
	              })
                  await Akira.connect({
		          timeoutMs: 30 * 1000
	              })
fs.writeFileSync(`./session.json`, JSON.stringify(Akira.base64EncodedAuthInfo(), null, '\t'))
                                console.log(color(`🌹Welcome To KirBotz`, 'red'))
                                console.log(color('━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n𝐍𝐞𝐰 𝐁𝐚𝐬𝐞 𝐊𝐢𝐫𝐁𝐨𝐭𝐳\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━','white'))
                                console.log(color('𝐍𝐨𝐭𝐞 :'), color('\n𝗝𝗮𝗻𝗴𝗮𝗻 𝗟𝘂𝗽𝗮 𝗦𝘂𝗯𝘀𝗰𝗿𝗶𝗯𝗲 𝗞𝗶𝗿𝗕𝗼𝘁𝘇\n𝗚𝗮𝗸 𝗦𝘂𝗯𝘀𝗰𝗿𝗶𝗯𝗲 𝗚𝗮𝗸 𝗪𝗼𝗿𝗸 :)\n𝗝𝗮𝗻𝗴𝗮𝗻 𝗛𝗮𝗽𝘂𝘀 𝗡𝗮𝗺𝗮 𝗚𝘄 𝗕𝗮𝗻𝗴\n𝗛𝗮𝗿𝗴𝗮𝗶 𝗡𝗮𝗽𝗮︎', 'aqua'))
                                console.log(color('━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━','yellow'))
                                console.log(color('𝐏𝐞𝐬𝐚𝐧 𝐊𝐢𝐫𝐁𝐨𝐭𝐳 :'), color('\n𝗕𝘂𝗮𝘁 𝗞𝗮𝗹𝗶𝗮𝗻 𝗬𝗮𝗻𝗴 𝗠𝗮𝗸𝗲𝗸 𝗦𝗰 𝗚𝘄\n𝗧𝗼𝗹𝗼𝗻𝗴 𝗟𝗮𝗵 𝗝𝗮𝗻𝗴𝗮𝗻 𝗗𝗶 𝗝𝘂𝗮𝗹 𝗨𝗹𝗮𝗻𝗴\n𝗟𝘂𝗵 𝗝𝘂𝗮𝗹 𝗨𝗹𝗮𝗻𝗴 𝗛𝗮𝘁𝗶² 𝗟𝘂𝗵 𝗕𝗮𝗻𝗴\n𝗬𝗮𝗻𝗴 𝗞𝗲 𝗘𝗻𝗰 𝗕𝗶𝗹𝗲𝗸 :\n𝗦𝗰 𝗗𝗶 𝗘𝗻𝗰 𝗠𝗮𝗻𝗮 𝗕𝗶𝘀𝗮 𝗗𝗶 𝗝𝘂𝗮𝗹 𝗕𝗮𝗻𝗴 🗿', 'aqua'))
                                console.log(color('━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━','magenta'))
                                console.log(color('𝐏𝐞𝐬𝐚𝐧 𝐁𝐨𝐭𝐳 :'), color('\n𝗦𝗶𝗹𝗮𝗸𝗮𝗻 𝗞𝗲𝘁𝗶𝗸 .menu 𝗡𝗶𝗸𝗺𝗮𝘁𝗶 𝗙𝗶𝘁𝘂𝗿𝗻𝘆𝗮', 'aqua'))
                                console.log(color('━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━','red'))
                                teks = `https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ`
                                Akira.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
                                console.log(color('|WRN|', 'yellow'), color('Joined to Helga bot group', 'cyan'))
                                Akira.sendMessage(`6289667923162@s.whatsapp.net`, `Hai Owner 👋\nBot Telah Sukses Tersambung Pada Nomor Ini\n*_SUCCES: ADDED FOR SCRIPT BOT INFO BOT SUDAH DI KIRIM KE CREATOR AKIRA_*\n*[TERIMAKASIH]*`, MessageType.extendedText, {sendEphemeral: true, })
                                Akira.sendMessage(`6289667923162@s.whatsapp.net`, `*---DATABASE BOT---*\n\n•NAMA BOT : KirBotz\n•OWNER BOT : Akira\n•NOMER OWNER : wa.me/6289667923162\n\n*[Bot Sudah TerConnect Ke WhatsApp Kak !! Makasih Kak Akira Scriptnyaa Moga Berkembang Terus]*`, MessageType.extendedText, {sendEphemeral: true, })
start('2',colors.bold.white('\nMenunggu Pesan Baru..'));
Akira.on('group-participants-update', async (anu) => {
await welcome(Akira, anu)
})
Akira.on('chat-update', async (message) => {
require('./AkirTod.js')(Akira, message)
})
}

            function nocache(module, cb = () => { }) {
            console.log('Module', `'${module}'`, 'is now being watched for changes')
            fs.watchFile(require.resolve(module), async () => {
            await uncache(require.resolve(module))
            cb(module)
            })
            }
            function uncache(module = '.') {
            return new Promise((resolve, reject) => {
            try {
            delete require.cache[require.resolve(module)]
            resolve()
            } catch (e) {
            reject(e)
            }
            })
            }
starts()