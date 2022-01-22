/*
Creat By Odoong
github.com/Odoong
*/
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    const Jsoup = org.jsoup.Jsoup;
    if (msg == "-코로나현황" || msg == '-covid') {
        let url1 = Jsoup.connect("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=코로나%20확진자").get();
        let url2 = Jsoup.connect("https://www.seoul.go.kr/coronaV/coronaStatus.do").get();
        let KRinfor = url1.select("div.main_tab_area > div > div > ul > li.info_01 > p").text();
        let KRdead = url1.select("div.main_tab_area > div > div > ul > li.info_04 > p").text(); 
        let KRinforplus = url1.select("div.main_tab_area > div > div > ul > li.info_02 > p").text();
        let KRdeadplus = url1.select("div.main_tab_area > div > div > ul > li.info_03 > p").text();
        let infor = url2.select("div > div.cell.cell1 > div.num.num1 > p.counter").text();
        let dead = url2.select("div > div.cell.cell6 > div > p.counter").text();
        let ext = url2.select("div > div.cell.cell5 > div.num.num8 > p.counter").text();
        let inforplus = url2.select("div > div.cell.cell1 > div.num.num10 > p.counter").text();
        let extplus = url2.select("div > div.cell.cell5 > div.num.num11 > p.counter").text();
        replier.reply(
            '[ 코로나 현황 ]\n\n'+
            '대한민국\n'+
            '━━━━━━━━━━━━━━━\n'+
            '일일 확진자 [ ' + KRinfor + ' ]명\n'+
            '일일 사망자 [ ' + KRdead + ' ]명\n'+
            '재원 위중증 [ ' + KRinforplus + ' ]명\n'+
            '신규 입원자 [ ' + KRdeadplus + ' ]명\n'+
            '━━━━━━━━━━━━━━━\n'+
            '서울시\n'+
            '━━━━━━━━━━━━━━━\n'+
            '누적 확진자 [ ' + infor + ' ]명\n'+
            '누적 사망자 [ ' + dead + ' ]명\n'+
            '누적 격리해제자 [ ' + ext + ' ]명\n'+
            '어제 기준 [ ' + inforplus + ' ]명 추가 확진\n'+
            '어제 기준 [ ' + extplus + ' ]명 추가 격리해제\n'+
            '━━━━━━━━━━━━━━━'
        );
    }
}
