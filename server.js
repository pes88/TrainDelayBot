const TRAININFO = ["日高本線","花咲線","津軽海峡線","札沼線","函館本線","千歳線","学園都市線","宗谷本線","石北本線","釧網本線","留萌本線","根室本線","富良野線","石勝線","室蘭本線","江差線","東北本線","仙山線","仙石線","磐越東線","磐越西線","石巻線","気仙沼線","釜石線","八戸線","大湊線","山形線","奥羽本線","米坂線","左沢線","陸羽東線","陸羽西線","北上線","田沢湖線","花輪線","男鹿線","五能線","津軽線","羽越本線","白新線","青い森鉄道線","仙台市営地下鉄","大船渡線","只見線","山田線","ほくほく線","山手線","湘南新宿ライン","東海道線","横須賀線","横浜線","相模線","南武線","中央線快速電車","中央･総武各駅停車","総武快速線","中央本線","総武本線","青梅線","五日市線","宇都宮線","高崎線","八高線","日光線","常磐線","常磐線快速電車","常磐線各駅停車","内房線","外房線","成田線","京葉線","武蔵野線","東金線","久留里線","吾妻線","水郡線","水戸線","両毛線","京浜東北線","西武線","東武線","銀座線","丸ノ内線","日比谷線","東西線","千代田線","有楽町線","半蔵門線","南北線","副都心線","京成線","京王電鉄線","浅草線","三田線","新宿線","大江戸線","小田急線","東京モノレール","りんかい線","京急線","日暮里･舎人ライナー","相鉄線","東急線","横浜市営地下鉄","ゆりかもめ","埼京線","川越線","千葉モノレール","多摩モノレール","山陽電鉄線","つくばエクスプレス線","新京成線","伊東線","高徳線","烏山線","鶴見線","鹿島線","名鉄線","東海道本線","御殿場線","身延線","飯田線","武豊線","太多線","関西本線","紀勢本線","参宮線","名松線","小海線","篠ノ井線","信越本線","飯山線","越後線","弥彦線","上越線","北陸本線","九頭竜線","七尾線","氷見線","城端線","高山本線","大糸線","名古屋市営地下鉄","しなの鉄道線","大阪環状線","ＪＲゆめ咲線","ＪＲ宝塚線","琵琶湖線","ＪＲ京都線","湖西線","草津線","嵯峨野線","学研都市線","ＪＲ東西線","ＪＲ神戸線","阪和線","大和路線","奈良線","和歌山線","関西空港線","きのくに線","加古川線","播但線","舞鶴線","小浜線","福知山線","山陰本線","おおさか東線","大阪市営地下鉄","京阪線","阪神線","神戸電鉄線","大阪モノレール","万葉まほろば線","阪急線","南海線","近鉄線","豊肥本線","能勢電鉄線","赤穂線","姫新線","宇野線","津山線","因美線","吉備線","伯備線","境線","芸備線","福塩線","木次線","三江線","呉線","可部線","宇部線","山口線","美祢線","山陽本線","岩徳線","小野田線","瀬戸大橋線","予讃線","土讃線","牟岐線","徳島線","予土線","鳴門線","鹿児島本線","日豊本線","日田彦山線","筑肥線","長崎本線","佐世保線","大村線","肥薩線","吉都線","日南線","指宿枕崎線","西鉄線","福岡市営地下鉄","宮崎空港線","久大本線","唐津線","後藤寺線","香椎線","三角線","土佐くろしお鉄道線","愛知環状鉄道","三陸鉄道線","智頭急行線","あおなみ線","神戸市営地下鉄","福北ゆたか線","筑豊本線","若松線","東山線","神戸線","宝塚線","鶴舞線","名港線","小田原線","江ノ島線","東葉高速線","東武アーバンパークライン","JR京都線","JR神戸線","JR宝塚線","拝島線","国分寺線","東武スカイツリーライン･伊勢崎線","空港線･箱崎線","筑肥線･地下鉄（直通列車）","東海道本線（名古屋地区）","いわて銀河鉄道線","JR東西線","特急電車","愛知環状鉄道線","橿原線","京都線","名古屋線","志摩線","鳥羽線","常滑線","空港線","南リアス線","南海本線","東海道本線（静岡地区）","押上線","北総線","九州新幹線","大阪線","南大阪線","目黒線","埼玉高速鉄道線","田園都市線","京王線","天神大牟田線","京成本線","ポートライナー","六甲ライナー","大師線","千里線","東急多摩川線","常総線","池上線","井の頭線","大糸線（北陸地区）","大糸線（信越地区）","JRゆめ咲線","JR奈良線","北陸本線（北陸地区）","山陰本線（中国地区）","西武新宿線","山陽本線（中国地区）","名古屋本線","東横線","池袋線","西武有楽町線","東京メトロ南北線","小田急特急","高山本線（東海地区）","羽越本線（信越地区）","山陰本線（近畿地区）","みなとみらい線","西武秩父線","只見線（東北地区）","磐越西線（東北地区）","東上本線","水郡線（東北地区）","JR宇都宮線","瀬戸線","西神","海岸線","山陽線（近畿地区）","常磐線（関東地区）","西神･山手線","信越本線（信越地区）","羽越本線（東北地区）","箕面線","ブルーライン","東武特急","東武日光線","智頭線","北陸本線（近畿地区）","関西本線（東海地区）","西武園線","多摩湖線","特急レッドアロー","瀬戸大橋線（中国地区）","瀬戸大橋線（四国地区）","ゆとりーとライン","米坂線（東北地区）","米坂線（信越地区）","高野線（汐見橋方面）","多摩線","特急ロマンスカー","磐越西線（信越地区）","信越本線（関東地区）","篠栗線（福北ゆたか線）","各務原線","特急りょうもう","遠州鉄道線","中央本線（関東地区）","静岡鉄道線","阪急宝塚線","高山本線（北陸地区）","南海特急","高野線","特急こうや","りんかん","特急こうや･りんかん","只見線（信越地区）","都営新宿線","名鉄空港線","伊豆急行線","和歌山港線","特急サザン","三河線","泉北高速鉄道線","泉北高速線","豊島線","越生線","中央本線（信越地区）","肥薩おれんじ鉄道線","天竜浜名湖線","南海空港線","特急ラピート","吉野線","犬山線","長野電鉄線","上飯田線","名城線","山陽線","特急ミュースカイ","特急スペーシア","千日前線","近鉄特急","阪神本線","阪神なんば線","神戸高速線","大井町線","千葉線","千原線","鈴鹿線","狭山線","成田スカイアクセス線","北リアス線","井原線","東成田線","富山地鉄電車","長野線","急行列車","烏丸線","尾西線","河和線","知多新線","嵐山線","小泉線","亀戸線","蒲郡線","南港ポートタウン線","羽島線","広見線","特急スカイライナー","谷町線","北大阪急行線","松浦鉄道線","中央線","けいはんな線","駿豆線","大雄山線","北しなの線","妙高はねうまライン","グリーンライン","四つ橋線","津島線","豊田線","上野東京ライン","IRいしかわ鉄道線","あいの風とやま鉄道線","長堀鶴見緑地線","日光線特急","伊勢崎線特急","東武スカイツリーライン","伊勢崎線","日本海ひすいライン","湯の山線","中村･宿毛線","堺筋線","生駒線","今津線","西尾線","貝塚線","和田岬線","多摩川線","竜ヶ崎線","こどもの国線","世田谷線","佐野線","七隈線","高師浜線","富士急行線","内子線","琴平線","伊丹線","鬼怒川線","豊川線","郡中線","長尾線","甘木線","北九州モノレール","近江鉄道線","志度線","高浜線","羽衣線","桐生線","加太線","小湊鐵道線","いすみ線","真岡線","会津線","阿武隈急行線","仙石東北ライン","大洗鹿島線","天理線","動物園線","横河原線","小牧線","ニューシャトル","御堂筋線","竹鼻線","観光列車","競馬場線","桜通線","築港線","御所線","","宇野みなと線","道南いさりび鉄道線","桃太郎線","田原本線","金町線","高野線汐見橋方面","気仙沼線BRT","大船渡線BRT","男山ケーブル線","京津線","石山坂本線","東豊線","井川線","北勢線","上毛線","大井川本線","小湊鉄道線","湊線","貴志川線","三岐線","四日市あすなろう鉄道線","上高地線","上信線","養老線","西信貴鋼索線","妙見の森ケーブル","名城線･名港線"]

const ENDPOINT = 'https://rti-giken.jp/fhc/api/train_tetsudo/delay.json'

const express = require('express')
const line = require('@line/bot-sdk')
const PORT = process.env.PORT || 3000
const axios = require('axios')

const config = {
    channelAccessToken: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    channelSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
}

const app = express()

app.post('/webhook', line.middleware(config), (req, res) => {
    Promise
      .all(req.body.events.map(handleEvent))
      .then((result) => res.json(result))
})

const client = new line.Client(config)

function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  let mes = ''
  if (TRAININFO.includes(event.message.text)){
    getInfo(event.source.userId, event.message.text);
  } else {
    mes= "そ、そんな名前の電車知らないっ！(>ω<)";
  }

  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: mes
  });
}

const getInfo = async (userId, text) => {
    const res = await axios.get(ENDPOINT);
    const item = res.data;
    let result = item.filter((value) => {
      return value.name === text
    })
    console.log(result)
    if (result.length > 0) {
        await client.pushMessage(userId, {
            type: 'text',
            text: `たいへ〜ん！！${result[0].name}は現在遅れが出ていますご主人様！\n余裕を持って行動をしてくださいね(*>_<*)ﾉ`,
        });
    } else {
        await client.pushMessage(userId, {
            type: 'text',
            text: `${text}は平常運転ですご主人様。\n焦らず行動してください(^_-)-☆`,
        });
    }
}



app.listen(PORT);
console.log(`Server running at ${PORT}`);