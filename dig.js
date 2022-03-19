/*

CREATED BY ODOONG

*/
function response(room, text, sender, groupchat, chat, imageDB, packageName) {
    const prefix = '.';
    const Thread = java.lang.Thread; 
    const reduce = '\u200b'.repeat(500); 
    const delay = Date.now(); 
    const enter = '\n'; 
    const line = '_'.repeat(32); 
    const FS = FileStream; 
    const dig_path = 'sdcard/@' + sender + '_DIG.txt';
    const EX_path = 'sdcard/@' + sender + '_DIG-EX.txt';
    const random_time = Math.floor(Math.random() * 5 + 1);
    if (text == prefix + 'djoin' || text == prefix + '광질가입') {
        try {
            if ((FS.read(dig_path) ? 't' : 'f') == 'f') {
                FS.write(
                    dig_path,
                    0
                );
                FS.write(
                    EX_path,
                    line
                );
                chat.reply(
                    '[!] ' + sender + '님이 광질게임에 가입했어요!   ' + reduce + enter.repeat(2) + 
                    '가입일' + enter + 
                    Date()
                );
            } else {
                chat.reply(
                    '[!] ' + sender + '님은 이미 가입하셨습니다!'
                );
            }
        } catch (e) {
            chat.reply(
                '[!] ' + sender + '님은 이미 가입하셨습니다!'
            );
        }
    }
    if (text == prefix + 'dig' || text == prefix + '광질') {
        try {
            if ((FS.read(dig_path) ? 't' : 'f') == 't') {
                chat.reply(
                    '[!] ' + sender + '님! 광질 시작...' + enter + 
                    '(최대 5초의 시간이 걸릴 수 있습니다!)'
                );
                Thread.sleep(random_time * 1000);
                let per = Math.random();
                if (per < 0.001) {
                    FS.append(
                        dig_path,
                        line + enter + 
                        '💎🔻💎 레드 다이아몬드 를 획득함' + enter + 
                        '획득 날짜' + enter + 
                        new Date() + enter + 
                        '설명: 0.1% 확률로 획득할 수 있는 레드 다이아몬드이다.'
                    );
                    FS.write(
                        EX_path,
                        Number(FS.read(EX_path)) + 100000
                    );
                    chat.reply(
                        '[!] 💎🔻💎 레드 다이아몬드 획득!! ' + enter + 
                        '!?!? 0.1% 확률로 레드 다이아몬드를 획득하셨어요!! ' + reduce + enter + 
                        '[!] 100000EX 획득!' + enter + 
                        '획득하신 💎🔻💎 레드 다이아몬드는 저장소로 옮겨졌습니다!' + enter + 
                        prefix + '저장소 로 확인하실 수 있어요!'
                    );
                    chat.reply(
                        '걸린시간: ' + (Date.now() - delay) / 1000 + '초 걸리셨습니다!'
                    );
                } else if (per < 0.005) { 
                    FS.append(
                        dig_path,
                        line + enter + 
                        '💎 다이아몬드 를 획득함' + enter + 
                        '획득 날짜' + enter + 
                        new Date() + enter + 
                        '설명: 0.5% 확률로 획득할 수 있는 다이아몬드이다.'
                    );
                    FS.write(
                        EX_path,
                        Number(FS.read(EX_path)) + 50000
                    );
                    chat.reply(
                        '[!] 💎 다이아몬드 획득!! ' + enter + 
                        '!?!? 0.5% 확률로 다이아몬드를 획득하셨어요!! ' + reduce + enter + 
                        '[!] 50000EX 획득!' + enter + 
                        '획득하신 💎 다이아몬드는 저장소로 옮겨졌습니다!' + enter + 
                        prefix + '저장소 로 확인하실 수 있어요!'
                    );
                    chat.reply(
                        '걸린시간: ' + (Date.now() - delay) / 1000 + '초 걸리셨습니다!'
                    );
                } else if (per < 0.01) {
                    FS.append(
                        dig_path,
                        line + enter + 
                        '에메랄드 를 획득함' + enter + 
                        '획득 날짜' + enter + 
                        new Date() + enter + 
                        '설명: 1% 확률로 획득할 수 있는 에메랄드이다.'
                    );
                    FS.write(
                        EX_path,
                        Number(FS.read(EX_path)) + 10000
                    );
                    chat.reply(
                        '[!] 에메랄드 획득!! ' + enter + 
                        '!?!? 1% 확률로 에메랄드를 획득하셨어요!! ' + reduce + enter + 
                        '[!] 10000EX 획득!' + enter + 
                        '획득하신 에메랄드는 저장소로 옮겨졌습니다!' + enter + 
                        prefix + '저장소 로 확인하실 수 있어요!'
                    );
                    chat.reply(
                        '걸린시간: ' + (Date.now() - delay) / 1000 + '초 걸리셨습니다!'
                    );
                } else if (per < 0.1) {
                    FS.append(
                        dig_path,
                        line + enter + 
                        '루비 를 획득함' + enter + 
                        '획득 날짜' + enter + 
                        new Date() + enter + 
                        '설명: 10% 확률로 획득할 수 있는 루비이다.'
                    );
                    FS.write(
                        EX_path,
                        Number(FS.read(EX_path)) + 1000
                    );
                    chat.reply(
                        '[!] 루비 획득!! ' + enter + 
                        '!?!? 10% 확률로 루비를 얻으셨어요!! ' + reduce + enter + 
                        '[!] 1000EX 획득!' + enter + 
                        '획득하신 루비는 저장소로 옮겨졌습니다!' + enter + 
                        prefix + '저장소 로 확인하실 수 있어요!'
                    );
                    chat.reply(
                        '걸린시간: ' + (Date.now() - delay) / 1000 + '초 걸리셨습니다!'
                    );
                } else if (per < 0.3) {
                    FS.write(
                        EX_path,
                        Number(FS.read(EX_path)) + 100
                    );
                    chat.reply(
                        '[!] 금 획득!! ' + enter + 
                        '30% 확률로 금을 획득하셨어요!! ' + enter + 
                        '[!] 100 EX 획득!'
                    );
                    chat.reply(
                        '걸린시간: ' + (Date.now() - delay) / 1000 + '초 걸리셨습니다!'
                    );
                } else if (per < 0.4) {
                    FS.write(
                        EX_path,
                        Number(FS.read(EX_path)) + 77
                    );
                    chat.reply(
                        '[!] 은 획득!! ' + enter + 
                        '40% 확률로 은을 획득하셨어요!! ' + enter + 
                        '[!] 75 EX 획득!'
                    );
                    chat.reply(
                        '걸린시간: ' + (Date.now() - delay) / 1000 + '초 걸리셨습니다!'
                    );
                } else if (per < 0.5) {
                    FS.write(
                        EX_path,
                        Number(FS.read(EX_path)) + 44
                    );
                    chat.reply(
                        '[!] 철 획득!! ' + enter + 
                        '50% 확률로 철을 획득하셨어요!! ' + enter + 
                        '[!] 44 EX 획득!'
                    );
                    chat.reply(
                        '걸린시간: ' + (Date.now() - delay) / 1000 + '초 걸리셨습니다!'
                    );
                } else if (per < 0.7) {
                    FS.write(
                        EX_path,
                        Number(FS.read(EX_path)) + 31
                    );
                    chat.reply(
                        '[!] 석탄 획득!! ' + enter + 
                        '70% 확률로 석탄을 획득하셨어요!! ' + enter + 
                        '[!] 31 EX 획득!'
                    );
                    chat.reply(
                        '걸린시간: ' + (Date.now() - delay) / 1000 + '초 걸리셨습니다!'
                    );
                } else if (per <= 1) {
                    FS.write(
                        EX_path,
                        Number(FS.read(EX_path)) + 1
                    );
                    chat.reply(
                        '[!] 아무것도 못 획득하셨어요!! ' + enter + 
                        '[!] 1 EX 획득!'
                    );
                    chat.reply(
                        '걸린시간: ' + (Date.now() - delay) / 1000 + '초 걸리셨습니다!'
                    );
                }
            } else {
                chat.reply(
                    '[!] ' + sender + '님! ' + prefix + '광질가입 을 보내주세요!'
                );
            }
        } catch (e) {
            chat.reply(
                '[!] ' + sender + '님! ' + prefix + '광질가입 을 보내주세요!'
            );
        }
    }
    if (text == prefix + 'dinfo' || text == prefix + '저장소') {
        try {
            if ((FS.read(dig_path) ? 't' : 'f') == 't') {
                chat.reply(
                    '[!] ' + sender + '님의 저장소입니다!   ' + reduce + enter + 
                    line + enter + 
                    '경험치: ' + FS.read(EX_path) + enter + 
                    '나의 저장소' + enter + 
                    FS.read(dig_path)
                );
            } else {
                chat.reply(
                    '[!] ' + sender + '님! ' + prefix + '광질가입 을 보내주세요!'
                );
            }
        } catch (e) {
            chat.reply(
                '[!] ' + sender + '님! ' + prefix + '광질가입 을 보내주세요!'
            );
        }
    }
    if (text == prefix + 'mine' || text == prefix + '광산') {
        try {
            chat.reply(
                'O BOT 광산 정보 입니다!   ' + reduce + enter.repeat(2) + 
                '광물 목록' + enter + 
                line + enter + 
                '0.1% 확률로 레드 다이아몬드를 얻을 수 있습니다!' + enter.repeat(2) + 
                '0.5% 확률로 다이아몬드를 얻을 수 있습니다!' + enter.repeat(2) + 
                '1% 확률로 에메랄드를 얻을 수 있습니다!' + enter.repeat(2) + 
                '10% 확률로 루비를 얻을 수 있습니다!' + enter.repeat(2) + 
                '30% 확률로 금을 얻을 수 있씁니다!' + enter.repeat(2) + 
                '40% 확률로 은을 얻을 수 있습니다!' + enter.repeat(2) + 
                '50% 확률로 철을 얻을 수 있습니다!' + enter.repeat(2) + 
                '70% 확률로 석탄을 얻을 수 있습니다!' + enter + 
                line + enter + 
                prefix + '광질가입 으로 게임에 가입 할 수 있어요!' + enter + 
                prefix + '광질 로 광물들을 획득 할 수 있어요!' + enter +
                prefix + '저장소 로 나의 정보를 확인 할 수 있어요!' + enter + 
                line
            );
        } catch (e) {
            chat.reply(
                '[!] ERROR  ' + reduce + enter.repeat(2) + 
                e.message
            );
        }
    }
}
