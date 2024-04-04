import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://telegra.ph/file/795c436a4497cefbc9d1b.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = `Luffy-BOT 

 *مرحبا,* ${taguser}

 _*< إحصائياتك />*_

 ♪ *مستوى:* ${level}
 ▢ *خبرة:* ${exp}
 ▢ *يتراوح:* ${role}
 ▢ *الماس:* ${limit}
 ▢ *نقودك:* ${money}
 ▢ *الرموز:* ${joincount}
 ▢ *مميز:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
 ${readMore}

⦓           ⦓🏆⦔          ⦔ـ
⌟🎯⌜ قـسـم الالـعـاب 
⦓           ⦓🏆⦔          ⦔ـ
🕹️❯ ⏐ .العب
☫ ⌟تلعب حجر ورقه مع البوت⌜
🕹️❯ ⏐ .لوفي
☫ ⌟افضل ذكاء اصطناعي ممكن تشوفه ويقراء الصور⌜
🕹️❯ ⏐ .زورو
☫ ⌟عشان لو طفشت من لوفي تروح لزورو⌜
🕹️❯ ⏐ .عين
☫ ⌟احزر الشخصية من العين⌜
🕹️❯ ⏐ .علم
☫ ⌟احزر الدوله من العلم⌜
🕹️❯ ⏐ .احزر
☫ ⌟احزر الشخصية من الصوره⌜
🕹️❯ ⏐ .كيبوب
☫ ⌟احزر الايدول من الصورة⌜
🕹️❯ ⏐ .ايمواجي 
☫ ⌟يبعتلك ايمواجي عشوائي⌜
🕹️❯ ⏐ .ذكاء
☫ ⌟يقيس نسبة ذكائك😏⌜
🕹️❯ ⏐ .غباء
☫ ⌟يقيس نسبة غبائك🙃⌜
🕹️❯ ⏐ .كيوت
☫ ⌟مابعرفش⌜
🕹️❯ ⏐ .تحدي
☫ ⌟حجر ورقه مقص مع صاحبك⌜
🕹️❯ ⏐ .حظ
☫ ⌟لعبة الحظ مع البوت⌜
🕹️❯ ⏐ .اكس
☫ ⌟لعبة اكس او مع صديقك⌜
🕹️❯ ⏐ .سؤال
☫ ⌟سؤال من عالم انمي⌜
🕹️❯ ⏐ .توب
☫ ⌟يعمل منشن ل 10 أعضاء⌜
🕹️❯ ⏐ .الحب
☫ ⌟يخبرك اذا كانت تحبك ام لا⌜
🕹️❯ ⏐ .زواج
☫ ⌟يجوز اتنين في الجروب 🤣⌜
🕹️❯ ⏐ .طلاق
☫ ⌟يطلق الاتنين الي تزوجو 😂⌜
🕹️❯ ⏐  .موت
☫ ⌟☠️يخمن متى ستموت☠️⌜
🕹️❯ ⏐  .هل 
☫ ⌟تسال البوت و هوا يجاوب⌜
🕹️❯ ⏐ .اديت-انمي
☫ ⌟✨يرسل لك مقطع اديت عن النمي✨⌜
🕹️❯ ⏐ .اديت-كوره
☫ ⌟⚽يرسل لك مقطع اديت عن الكوره⚽⌜
🕹️❯ ⏐ .كوره
☫ ⌟احزر اللاعب من الصورة⌜
🕹️❯ ⏐ .رياضه
☫ ⌟سوال من عالم كرة القدم⌜
🕹️❯ ⏐ .تطقيم
☫ ⌟يعطيك استايلين ولد وبنت⌜
🕹️❯ ⏐ .نصيحه
☫ ⌟يعطيك نصيحة مهمة من الحياة⌜
🕹️❯ ⏐ .شخصيه
☫ ⌟يكشفلك صفات شخصيتك⌜
🕹️❯ ⏐ .شاذ
☫ ⌟يكشف لك شاذ المجموعة 😂⌜
🕹️❯ ⏐ .خروف
☫ ⌟يكشف لك خروف المجموعة🐑⌜
🕹️❯ ⏐ .صراحه
☫ ⌟الصراحه مفتاح الراحه⌜
🕹️❯ ⏐ .ايات
☫ ⌟يعطيك ايات عشوائية⌜
🕹️❯ ⏐ .قران
☫ ⌟لطرد الشياطين من القروب⌜
⦓           ⦓🏆⦔          ⦔ـ
`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = /^(م7)$/i
export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
