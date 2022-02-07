/*
Creat By Odoong
github.com/Odoong
*/
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    const start = Date.now();
    const re = '\u200b'.repeat(500);
    const admin = imageDB.profileHash == HASHCODE; //HASHCODE에 자신의 해쉬코드를 입력하세요.
    const Jsoup = org.jsoup.Jsoup;
    let url = Jsoup.connect('https://tryhardguides.com/wordle-answers/').get();
    let answer = url.select('p.spoiler-wrap.text-center > span > strong').text();
    let crawling = 'https://www.powerlanguage.co.uk/wordle'
    try {
        if (msg == '!wordle') {
            if (admin) {
                replier.reply('Access...');
                java.lang.Thread.sleep(3000);
                replier.reply(
                    'Today wordle answer is...' + re + '\n\n' +
                    '➤ [ ' + answer + ' ]\n\n\n' + 
                    '[!] Crawling url\n' + crawling + '\n' +
                    '[!] Source\ngithub.com/Odoong\n' +
                    '[!] Delay: ' + ((Date.now() - start) / 1) +'ms'
                );
            } else {
                replier.reply(
                    'You are not admin\n' + 
                    'Hahscode: ' + imageDB.profileHash
                )
            }
        }
    } catch(e) {
        replier.reply(
            'Error\n' +
            e.message
        )
    }
}
