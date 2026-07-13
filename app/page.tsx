const store = {
  name: "牡蠣と肉 あざぶいろは｜麻布十番 和牛すき焼き・しゃぶしゃぶ",
  shortName: "牡蠣と肉 あざぶいろは",
  englishName: "Oyster Azabu Iroha",
  romajiName: "Kaki to Niku Azabu Iroha",
  area: "東京都港区元麻布・麻布十番",
  genre: "すき焼き、しゃぶしゃぶ、かき、和食",
  address: "東京都港区元麻布3-10-12",
  addressWithGuide: "東京都港区元麻布3-10-12 安全寺門前",
  phone: "050-5590-8138",
  secondaryPhone: "080-9195-0429",
  hours: "月・火・水・木・金・土 18:00 - 23:00（L.O. 22:30）",
  closed: "日・祝日、ほか不定休",
  access: "麻布十番駅から徒歩約8分、六本木駅から徒歩約10分。麻布十番駅から381m。",
  officialUrl: "https://azabuiroha.hp.peraichi.com/",
  reservationUrl: "https://res-reserve.com/ja/restaurants/azabuiroha",
  tabelogUrl: "https://tabelog.com/tokyo/A1307/A130702/13286785/",
  instagramUrl: "https://www.instagram.com/oyster_azabu_iroha/",
  mapUrl:
    "https://www.google.com/maps/search/%E7%89%A1%E8%A0%A3%E3%81%A8%E8%82%89%20%E3%81%82%E3%81%96%E3%81%B6%E3%81%84%E3%82%8D%E3%81%AF%20%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E5%85%83%E9%BA%BB%E5%B8%833-10-12",
  latitude: 35.65653373791532,
  longitude: 139.73182468299746
};

const features = [
  "元麻布の古民家レストランとして、米沢牛のすき焼き、米沢牛のしゃぶしゃぶ、牡蠣料理を中心に提供。",
  "食べログ掲載情報では、ジャンルは「すき焼き、しゃぶしゃぶ、かき」。麻布十番駅から徒歩約8分。",
  "公式サイトでは、日本各地の牡蠣、広島産ブランド牡蠣、米沢牛のすき焼き、米沢牛のしゃぶしゃぶを案内。",
  "完全予約制。席のみ予約の場合もコース料理の提供と案内されています。"
];

const menuItems = [
  {
    title: "米沢牛のとろけるすき焼き",
    detail:
      "米沢牛のすき焼きを中心にしたコース。公式サイトでは、季節のおやさいを使った前菜、水菓子・フルーツを含む内容が案内されています。",
    price: "13,200円（税込）から"
  },
  {
    title: "米沢牛の飲めるしゃぶしゃぶ",
    detail:
      "米沢牛のしゃぶしゃぶを中心にしたコース。柚子ぽん酢、ごまだれで味わう内容として公式サイトに掲載されています。",
    price: "13,200円（税込）から"
  },
  {
    title: "生牡蠣と海鮮の米沢牛すき焼き会席",
    detail:
      "食べログ掲載のコース情報では、生牡蠣、海鮮、米沢牛すき焼きを組み合わせた会席が案内されています。",
    price: "16,200円（税込）"
  },
  {
    title: "山と海｜和牛ロースト、生牡蠣、海鮮 米沢牛すき焼き会席",
    detail:
      "和牛ロースト、生牡蠣、海鮮、米沢牛すき焼きを一席で楽しむ会席として食べログに掲載されています。",
    price: "18,800円（税込）"
  }
];

const infoRows = [
  ["正式店名", store.name],
  ["店舗名", store.shortName],
  ["英語表記", store.englishName],
  ["ローマ字表記", store.romajiName],
  ["業態", "和牛すき焼き、しゃぶしゃぶ、牡蠣料理、海鮮、和食"],
  ["住所", store.addressWithGuide],
  ["電話番号", `${store.phone} / ${store.secondaryPhone}`],
  ["営業時間", store.hours],
  ["定休日", store.closed],
  ["予約", "完全予約制"],
  ["アクセス", store.access],
  ["予算目安", "夜 15,000円から19,999円"],
  ["席数", "24席"],
  ["個室", "半個室あり"],
  ["貸切", "20人以下可"],
  ["禁煙・喫煙", "全席禁煙"],
  ["駐車場", "なし。近隣にコインパーキングあり"],
  ["支払い方法", "カード可。電子マネー不可、QRコード決済不可"],
  ["サービス料・チャージ", "1,100円（税込）"],
  ["公式サイト", store.officialUrl],
  ["予約URL", store.reservationUrl],
  ["Instagram", store.instagramUrl],
  ["食べログ", store.tabelogUrl]
];

const faqs = [
  {
    q: "牡蠣と肉 あざぶいろは｜麻布十番 和牛すき焼き・しゃぶしゃぶはどんなお店ですか？",
    a: "麻布十番・元麻布エリアにある、米沢牛のすき焼き、しゃぶしゃぶ、牡蠣、海鮮を中心にした和食店です。"
  },
  {
    q: "最寄り駅はどこですか？",
    a: "麻布十番駅が最寄りです。食べログ掲載情報では麻布十番駅から381m、徒歩約8分です。六本木駅からは徒歩約10分です。"
  },
  {
    q: "すき焼きとしゃぶしゃぶはありますか？",
    a: "公式サイトと食べログで、米沢牛のすき焼き、米沢牛のしゃぶしゃぶ、米沢牛すき焼き会席が確認できます。"
  },
  {
    q: "牡蠣料理はありますか？",
    a: "公式サイトでは日本各地の牡蠣、広島産ブランド牡蠣が案内され、食べログではジャンルに「かき」が掲載されています。"
  },
  {
    q: "予約できますか？",
    a: "完全予約制として掲載されています。公式予約ページまたは食べログから予約情報を確認できます。"
  },
  {
    q: "営業時間と定休日は？",
    a: "月曜から土曜は18:00から23:00、ラストオーダーは22:30です。日曜・祝日は定休日、ほか不定休と掲載されています。"
  }
];

const keywords = [
  "牡蠣と肉 あざぶいろは",
  "牡蠣と肉 あざぶいろは 麻布十番",
  "牡蠣と肉 あざぶいろは すき焼き",
  "牡蠣と肉 あざぶいろは しゃぶしゃぶ",
  "牡蠣と肉 あざぶいろは 牡蠣",
  "あざぶいろは",
  "あざぶいろは 麻布十番",
  "あざぶいろは 元麻布",
  "あざぶいろは 予約",
  "あざぶいろは 食べログ",
  "oyster azabuiroha",
  "azabu iroha",
  "kaki to niku azabu iroha",
  "麻布十番 すき焼き",
  "麻布十番 しゃぶしゃぶ",
  "麻布十番 牡蠣",
  "麻布十番 かき",
  "麻布十番 和牛",
  "麻布十番 米沢牛",
  "麻布十番 和食",
  "麻布十番 海鮮",
  "麻布十番 会席",
  "麻布十番 ディナー",
  "麻布十番 予約",
  "麻布十番 古民家 レストラン",
  "元麻布 すき焼き",
  "元麻布 しゃぶしゃぶ",
  "元麻布 牡蠣",
  "元麻布 和牛",
  "元麻布 米沢牛",
  "元麻布 和食",
  "元麻布 海鮮",
  "元麻布 ディナー",
  "六本木 すき焼き",
  "六本木 しゃぶしゃぶ",
  "六本木 牡蠣",
  "六本木 和牛",
  "六本木 米沢牛",
  "六本木 和食",
  "六本木 海鮮",
  "港区 すき焼き",
  "港区 しゃぶしゃぶ",
  "港区 牡蠣",
  "港区 和牛",
  "港区 米沢牛",
  "港区 和食",
  "東京 すき焼き",
  "東京 しゃぶしゃぶ",
  "東京 牡蠣",
  "東京 和牛すき焼き",
  "東京 米沢牛 すき焼き",
  "和牛すき焼き 麻布十番",
  "和牛しゃぶしゃぶ 麻布十番",
  "米沢牛すき焼き 麻布十番",
  "米沢牛しゃぶしゃぶ 麻布十番",
  "牡蠣しゃぶ 麻布十番",
  "生牡蠣 麻布十番",
  "牡蠣 海鮮 麻布十番",
  "米沢牛 会席 麻布十番",
  "すき焼き 予約 麻布十番",
  "しゃぶしゃぶ 予約 麻布十番",
  "牡蠣 予約 麻布十番",
  "麻布十番駅 すき焼き",
  "麻布十番駅 しゃぶしゃぶ",
  "麻布十番駅 牡蠣",
  "麻布十番駅 和食",
  "麻布十番駅 ディナー",
  "麻布十番駅 予約",
  "東京都港区元麻布3-10-12",
  "元麻布3-10-12",
  "安全寺門前 レストラン",
  "南北線 麻布十番 すき焼き",
  "大江戸線 麻布十番 しゃぶしゃぶ",
  "麻布十番商店街 すき焼き",
  "暗闇坂 すき焼き",
  "暗闇坂 しゃぶしゃぶ",
  "Yonezawa beef Azabu Juban",
  "Yonezawa beef sukiyaki Azabu Juban",
  "Yonezawa beef shabu shabu Azabu Juban",
  "sukiyaki Azabu Juban",
  "shabu shabu Azabu Juban",
  "oyster restaurant Azabu Juban",
  "Japanese oyster restaurant Azabu",
  "Japanese restaurant Azabu Juban",
  "Japanese beef restaurant Azabu Juban",
  "Azabu Juban sukiyaki reservation",
  "Azabu Juban shabu shabu reservation",
  "Azabu Juban oyster reservation",
  "Motoazabu Japanese restaurant",
  "Motoazabu sukiyaki",
  "Motoazabu shabu shabu",
  "Motoazabu oyster",
  "Roppongi sukiyaki",
  "Roppongi shabu shabu",
  "Roppongi oyster restaurant",
  "Tokyo sukiyaki reservation",
  "Tokyo shabu shabu reservation",
  "Tokyo oyster restaurant",
  "Wagyu sukiyaki Tokyo",
  "Wagyu shabu shabu Tokyo",
  "Yonezawa beef Tokyo",
  "oyster and wagyu Tokyo",
  "Azabu Iroha reservation",
  "Oyster Azabu Iroha reservation"
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: store.name,
  alternateName: [store.shortName, store.englishName, store.romajiName],
  description:
    "麻布十番・元麻布の牡蠣と肉 あざぶいろは。米沢牛のすき焼き、しゃぶしゃぶ、牡蠣、海鮮を楽しめる完全予約制の和食店です。",
  servesCuisine: ["すき焼き", "しゃぶしゃぶ", "かき", "牡蠣料理", "和食", "海鮮", "米沢牛"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "元麻布3-10-12",
    addressLocality: "港区",
    addressRegion: "東京都",
    postalCode: "106-0046",
    addressCountry: "JP"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: store.latitude,
    longitude: store.longitude
  },
  telephone: store.phone,
  url: "https://azabu-iroha.vercel.app",
  sameAs: [store.officialUrl, store.tabelogUrl, store.instagramUrl],
  acceptsReservations: true,
  priceRange: "￥15,000～￥19,999",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "18:00",
      closes: "23:00"
    }
  ],
  menu: store.tabelogUrl,
  potentialAction: {
    "@type": "ReserveAction",
    target: store.reservationUrl
  }
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="siteHeader">
        <a href="#top" className="brand">
          あざぶいろは
        </a>
        <nav aria-label="ページ内ナビゲーション">
          <a href="#features">特徴</a>
          <a href="#menu">料理</a>
          <a href="#info">店舗情報</a>
          <a href="#access">アクセス</a>
          <a href="#faq">FAQ</a>
          <a href="#english">English</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="heroMedia" aria-hidden="true">
          <div className="heroPlate">
            <span>牡蠣</span>
            <span>米沢牛</span>
            <span>すき焼き</span>
            <span>しゃぶしゃぶ</span>
          </div>
        </div>
        <div className="heroText">
          <p className="eyebrow">麻布十番・元麻布 / 和牛すき焼き・しゃぶしゃぶ・牡蠣料理</p>
          <h1>{store.name}</h1>
          <p className="lead">
            麻布十番駅近く、元麻布の「牡蠣と肉 あざぶいろは」。米沢牛のすき焼き、
            米沢牛のしゃぶしゃぶ、牡蠣、海鮮を中心にした完全予約制の和食店です。
          </p>
          <div className="actions">
            <a className="primary" href={store.reservationUrl} target="_blank" rel="noreferrer">
              予約ページ
            </a>
            <a className="secondary" href={store.mapUrl} target="_blank" rel="noreferrer">
              Googleマップ
            </a>
          </div>
          <dl className="quickInfo">
            <div>
              <dt>ジャンル</dt>
              <dd>すき焼き / しゃぶしゃぶ / かき</dd>
            </div>
            <div>
              <dt>最寄り</dt>
              <dd>麻布十番駅 徒歩約8分</dd>
            </div>
            <div>
              <dt>営業時間</dt>
              <dd>18:00 - 23:00</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="features" className="section">
        <div className="sectionHead">
          <p>Features</p>
          <h2>麻布十番で探す、牡蠣と米沢牛のすき焼き・しゃぶしゃぶ</h2>
        </div>
        <div className="featureGrid">
          {features.map((feature) => (
            <article key={feature}>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="menu" className="section alt">
        <div className="sectionHead">
          <p>Menu</p>
          <h2>確認できるメニュー・コース情報</h2>
        </div>
        <div className="menuList">
          {menuItems.map((item) => (
            <article key={item.title}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="info" className="section">
        <div className="sectionHead">
          <p>Information</p>
          <h2>店舗基本情報</h2>
        </div>
        <div className="infoTable">
          {infoRows.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>
                {value.startsWith("http") ? (
                  <a href={value} target="_blank" rel="noreferrer">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </dd>
            </div>
          ))}
        </div>
      </section>

      <section id="access" className="section split">
        <div>
          <div className="sectionHead">
            <p>Access</p>
            <h2>麻布十番駅から元麻布方面へ</h2>
          </div>
          <p>
            住所は{store.addressWithGuide}。南北線・都営大江戸線の麻布十番駅から徒歩圏内です。
            六本木駅方面からもアクセスできます。
          </p>
          <div className="actions compact">
            <a className="primary" href={store.mapUrl} target="_blank" rel="noreferrer">
              地図を開く
            </a>
            <a className="secondary" href={`tel:${store.phone}`}>
              電話する
            </a>
          </div>
        </div>
        <address>
          {store.name}
          <br />
          {store.addressWithGuide}
          <br />
          {store.phone}
        </address>
      </section>

      <section id="faq" className="section alt">
        <div className="sectionHead">
          <p>FAQ</p>
          <h2>よくある質問</h2>
        </div>
        <div className="faqList">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="english" className="section">
        <div className="sectionHead">
          <p>English Guide</p>
          <h2>Oyster Azabu Iroha in Azabu Juban</h2>
        </div>
        <p className="englishText">
          {store.englishName} is a Japanese restaurant in Motoazabu near Azabu Juban Station,
          Tokyo. The restaurant focuses on Yonezawa beef sukiyaki, Yonezawa beef shabu shabu,
          oysters, seafood and Japanese course dining. Reservations are accepted through the
          official reservation page.
        </p>
      </section>

      <section className="section keywords">
        <div className="sectionHead">
          <p>Related Keywords</p>
          <h2>関連キーワード</h2>
        </div>
        <ul>
          {keywords.map((keyword) => (
            <li key={keyword}>{keyword}</li>
          ))}
        </ul>
      </section>

      <footer>
        <p>{store.name}</p>
        <p>
          {store.addressWithGuide} / {store.phone}
        </p>
      </footer>
    </main>
  );
}
