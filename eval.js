/*
Created by Odoong
소스 배포 금지입니다.
*/
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  let start = Date.now();
  if (msg.startsWith('.ev')) {
    if (sender == '관리자 이름을 입력하세요.') {
      try {
        replier.reply(eval(msg.substr(4)));
        replier.reply('RUNTIME | ' + ((Date.now() - start) / 1) + 'ms');
      } catch (e) {
        replier.reply('⚠️  ' + msg.substr(4) + '\n' + e.message);
      }
    } else {
      replier.reply('You are not admin.');
    }
  }
}
