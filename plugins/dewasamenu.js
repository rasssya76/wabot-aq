let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
┏━━°❀❬ *USER PROFILE* ❭❀°━━┓
┃
┃•  *Nama :* ${username}
┃•  *Umur :* ${registered ? '' + age : ''}
┃•  *Exp :* ${exp}
┃•  *Limit :* ${limit}
┃•  *Level :* ${level}
┃
┣━━°❀❬ *DEWASA MENU* ❭❀°━━┓
┃
┣➥ *${usedPrefix}bokep*
┣➥ *${usedPrefix}ahegao*
┣➥ *${usedPrefix}ass*
┣➥ *${usedPrefix}bdsm*
┣➥ *${usedPrefix}blowjob*
┣➥ *${usedPrefix}cersex*
┣➥ *${usedPrefix}cuckold*
┣➥ *${usedPrefix}ero*
┣➥ *${usedPrefix}gifhentai*
┣➥ *${usedPrefix}glasses*
┣➥ *${usedPrefix}hentai*
┣➥ *${usedPrefix}jahy*
┣➥ *${usedPrefix}kodenuklir*
┣➥ *${usedPrefix}manga*
┣➥ *${usedPrefix}mstrb*
┣➥ *${usedPrefix}nhentai*
┣➥ *${usedPrefix}nsfwneko*
┣➥ *${usedPrefix}orgy*
┣➥ *${usedPrefix}pantis*
┣➥ *${usedPrefix}porno*
┣➥ *${usedPrefix}pussy*
┣➥ *${usedPrefix}tentacles*
┣➥ *${usedPrefix}thighs*
┣➥ *${usedPrefix}uniform*
┣➥ *${usedPrefix}zttairyoiki*
┃ 
┣━━°❀❬ *TQTO* ❭❀°━━┓
┃ 
┣➥ *Nurotomo (author)*
┣➥ *Ibnu NR (pengembang)*
┣➥ *RC047 (pengembang)*
┣➥ *Caliph (pengembang)*
┣➥ *Nanda Style*
┣➥ *Layscode*
┣➥ *Zeks*
┣➥ *Dll
┗━━━━━━━━━━━━━━━━
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['dewasamenu']
handler.tags = ['hsah']
handler.command = /^(dewasamenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

