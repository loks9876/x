import fetch from 'node-fetch';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `*مرحباً بك في قسم الذكاء زورو بوت*\zoro 𝑩𝒐𝒕`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    const { key } = await conn.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/b4f5c7e9635607456de2c.jpg' },
      caption: '_*يرجي الانتظار زورو جالس يكتب*_'
    }, {quoted: m})
    conn.sendPresenceUpdate('composing', m.chat);
    const prompt = encodeURIComponent(text);

    const itachigpt = `https://ultimetron.guruapi.tech/gita?prompt=${prompt}`;

    try {
      let response = await fetch(itachigpt);
      let data = await response.json();
      let result = data.result;

      if (!result) {

        throw new Error('لا توجد استجابة JSON صالحة من API');
      }

      await conn.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
            imageMessage: { caption: result }
          }
        }
      }, {});
    } catch (error) {
      console.error('الخطأ من الأول API:', error);


      const model = 'llama';
      const senderNumber = m.sender.replace(/[^0-9]/g, ''); 
      const session = `zoro 𝑩𝒐𝒕_${senderNumber}`;
      const itachigpt = `https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`;

      let response = await fetch(itachigpt);
      let data = await response.json();
      let result = data.completion;

      await conn.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
            imageMessage: { caption: result }
          }
        }
      }, {});
    }

  } catch (error) {
    console.error('Error:', error);
    throw `╰⊱❌⊱ *خطأ* ⊱❌⊱╮`;
  }
};
handler.help = ['itachigpt']
handler.tags = ['AI']
handler.command = ['زورو'];
//handler.limt = true||false
//حسب انت جورو او بوت عادي
//handler.gold = true||false
export default handler;
