const TelegramBot = require('node-telegram-bot-api')
const token = '6846395604:AAFtAm9Nf5j3_58neV6NJdgWYg36eN4Fp2Q'

const bot = new TelegramBot(token, {polling:true})

const jokes = [
    "Почему программисты так плохо общаются? Потому что они всегда в своем коде.",
    "Как программист представляет себе здоровый образ жизни? Каждый час вставать из-за компьютера.",
    "Что говорит программист, когда идет гулять? Ctrl+Alt+Del.",
    "Почему программисты не любят сходить в парк? Там нет Wi-Fi.",
    "Как программист празднует успех? Поднимает исключение.",
    "Ох я бы тебе ctrl + v",
    "Умный баран при виде мусульман начинает хрюкать ",

]

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id

    const options = {
        reply_markup: {
            keyboard: [
                ['Начать'],['Закончить'],
                ['Информация'],['Анекдот'],
            ],
            resize_keyboard: true
        }
    }

    bot.sendMessage(chatId, 'Мой ГОСПАДИН! Я Ваш первый тестовый бот. Буду служить Вам головной болью при моей разработке',
        options)
})

bot.on('message', (msg) => {
    const chatId = msg.chat.id

    if (msg.text) {
        switch (msg.text) {
            case 'Начать':
                bot.sendMessage(chatId, 'привет!')
                break
            case 'Закончить':
                bot.sendMessage(chatId, 'https://www.youtube.com/watch?v=n9Mjfbh1i5Q')
                break
            case 'Информация':
                bot.sendMessage(chatId, 'ты лох')
                break
            case 'Анекдот':
                const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
                bot.sendMessage(chatId, randomJoke);
                break;
        }
    }
})

console.log('Бот успешно запущен!')