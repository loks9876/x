let handler = async (m, { conn, command, text }) => {
let love = `
⦓           ⦓🏆⦔          ⦔
🛰️⌜ قـسـم الـذكـاء الاصـطـيـنـعـي 
⦓           ⦓🏆⦔          ⦔ـ
🌏❯ ⏐ .لوفي
☫ ⌟افضل ذكاء اصطناعي ممكن تشوفه ويقرء الصور⌜
🌏❯ ⏐ .بـوت
☫ ⌟للرد علي الاسئلة⌜
🌏❯ ⏐ .تـحـدث
☫ ⌟للرد علي الاسئله بمقطع صوتى⌜
🌏❯ ⏐ .سـيـري
☫ ⌟لتعليم اللغه الانجليزيه⌜
🌏❯ ⏐ .ارسـم 
☫ ⌟لرسم صوره بالذكاء الاصطناعي⌜
🌏❯ ⏐ .سمسم 
☫ ⌟شات عربي اصيل 🗿⌜
🌏❯ ⏐ .احسب 
☫ ⌟للحل المعدلات الصعبه⌜ 
⦓           ⦓🏆⦔          ⦔
هذا هو قروب الدعم: https://chat.whatsapp.com/IVc2CWdcWem6IEwtly5oA6
⦓           ⦓🏆⦔          ⦔ـ
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م١|م1|اوامر الذكاء الاصطناعي|الاوامر الذكاء الاصطناعي)$/i
export default handler
