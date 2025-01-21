const { Bot } = require('grammy');

const token = '8117610061:AAF_vmTynQRJTn1800p8du0cntJkZUkW0B0';
const bot = new Bot(token);

bot.command('start', (ctx) => {
    ctx.reply('Привет! Напиши /help, чтобы узнать, что я умею.');
});

bot.command('help', (ctx) => {
    ctx.reply('Я умею отправлять сообщения в HTML!\n\n/b - выделяет текст жирным,\n/i - выделяет текст курсивом,\n/code - выделяет текст как элемент кода моноширинным текстом,\n/del - зачеркивает текст.');
});

bot.command('markdown', (ctx) => {
    // ctx.reply('Вот пример *жирного текста* и _курсива_ .', { parse_mode: 'MarkdownV2' }); не работает :(
});

bot.command('b', (ctx) => {
    ctx.reply('Вот пример <b>жирного текста</b>.', { parse_mode: 'HTML' });
});

bot.command('i', (ctx) => {
    ctx.reply('Вот пример <i>курсива</i>.', { parse_mode: 'HTML' });
});

bot.command('code', (ctx) => {
    ctx.reply('Вот пример <code>моноширинного текста</code>.', { parse_mode: 'HTML' });
});

bot.command('del', (ctx) => {
    ctx.reply('Вот пример <del>зачеркнутого текста</del>.', { parse_mode: 'HTML' });
});

bot.start();
console.log('Бот запущен.');