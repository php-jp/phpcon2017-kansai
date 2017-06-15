var data = [
    {
        track:"905",
        time: "13:10-13:40",
        name:"長谷川 智希",
        title: "ハッシュと暗号は違うぞ！",
        summary01: "Webエンジニアであれば一度は使ったことがあるであろうハッシュですが、ハッシュは時として暗号やその他の概念と混同されます。<br>本セッションではハッシュと暗号の違いを入り口に、ハッシュへの理解を深め、正しくハッシュを使うための基礎知識を解説します。",
        summary02: "<br>含まれるテーマ<br>・ハッシュとは何か<br>・ハッシュの脆弱性とは何か<br>・Googleが発見したSHA-1脆弱性<br>・ハッシュへの攻撃<br>・ハッシュに似た概念との違い - 暗号, エンコード, 難読化<br>・PHPでのハッシュの使い方<br>・言語へのDoS攻撃 hashdos",
        profile: "デジタルサーカス株式会社 副団長CTO。趣味はCakePHP、カンファレンス運営、カートレース、電子工作。好きな飲み物はビール。",
        facebook: "",
        twitter: "",
        qiita: "",
        github: "",
        other: "http://www.hasegawa-tomoki.com/",
    },
    {
        track:"907",
        time: "15:30-16:00",
        name:"下地 功一",
        title: "PHPでWebSocketを実装してみてわかったこと",
        "summary01": "Webでリアルタイム通信を実現するWebSocket。<br>WebSocketと言えば、Socket.IO(node)やActionCable(Rails5)なんかはメジャーですが、さて、PHPではどうしましょうか。まだデファクトが無いですよね。<br>いろいろ調べて試してわかったことを、お伝えしたいと思います。",
        profile: "組込系、エンプラ系、Web系となんでもやってきたエンジニア。現在、株式会社鈴木商店で「標準化」を担当。",
        facebook: "",
        twitter: "",
        qiita: "",
        github: "",
        other: "",
    },
    {
        track:"905",
        time: "15:30-16:00",
        name:"新倉 涼太",
        title: "ひたすら楽してPHPアプリをコンテナ運用",
        summary01: "サービスの信頼性を決定づける運用は、単純作業となりがちなので、なるべく自動化したいもの。",
        summary02: "今回、PHPアプリをコンテナで開発したので、本番環境のコンテナ運用をフルマネージドで管理してくれる、AWS ECSというサービスを使った結果、どのような運用になったのかを実際のサービスを事例として紹介する。",
        profile: "半年だけ工事屋やってたPHPer６年生。最近はコンテナでの開発・運用に傾倒してる。",
        facebook: "",
        twitter: "",
        qiita: "http://qiita.com/niisan-tokyo",
        github: "https://github.com/niisan-tokyo",
        other: "",
    },
    {
        track:"901+902",
        time: "11:40-12:10",
        name:"後藤 知宏",
        title: "総集編 - 最近のPHPがわからない人のための基本文法おさらい講座",
        summary01: "PHP5.3 以降PHPはめまぐるしい変化を遂げ様々な新機能が追加されてきました。新しく追加された機能の一つ一つは、便利で有用なものの、まだ使った事がない、よくわからないという人も多いのでは無いでしょうか？",
        summary02: "Composer ってなんだろう、というところから、PHP7.1最新の新機能まで、今現場で使えるPHPの新機能をおさらいしていきましょう。",
        profile: "半年だけ工事屋やってたPHPer６年生。最近はコンテナでの開発・運用に傾倒してる。",
        facebook: "",
        twitter: "",
        qiita: "",
        github: "",
        other: "",
    },
    {
        track:"907",
        time: "14:00-14:30",
        name:"山岡広幸",
        title: "Slim Frameworkで始めるPHPのmiddleware",
        summary01: "Slim Frameworkを例に、PHPのフレームワーク（Laravel、Zend Expressiveなども）で最近使われるようになってきたmiddlewareの仕組みや考え方についてお話しします。",
        summary02: "あわせて、組み合わせて使うことになるDIコンテナについても何が便利になるのかを解説します。",
        profile: "半年だけ工事屋やってたPHPer６年生。最近はコンテナでの開発・運用に傾倒してる。",
        facebook: "https://www.facebook.com/hiroy",
        twitter: "https://twitter.com/hiro_y",
        qiita: "",
        github: "",
        other: "",
    },
    {
        track:"905",
        time: "14:45-15:15",
        name:"高橋 慎一",
        title: "マイクロサービスなう",
        summary01: "今までなんとなくで行ってきた設計に困らされたことはありませんか？",
        summary02: "全体のアーキテクチャの例とPHPのコードの例をもとにマイクロサービスから私が学んだ「関心事」にフォーカスしたお話をします。",
        profile: "現職：cloudpack（アイレット株式会社）R&Dセクション/セクションリーダー<br>前職：EC-CUBE3開発リーダー<br> カノジョができた。",
        facebook: "https://www.facebook.com/tkpyyy",
        twitter: "https://twitter.com/takapyyy",
        qiita: "",
        github: "",
        other: "",
    },
    {
        track:"907",
        time: "11:40-12:10",
        name:"松藤 秀治",
        title: "PHPにおけるDSL",
        summary01: "ドメイン特化言語(DSL: Domain Specific Language)とは特定のドメインをうまく処理するために用意された言語のことを言います。身近な例ではSQLや正規表現がDSLにあたります。このような一般的によく使われるDSLとは別にアプリケーション固有のDSLを作ることもできます。",
        summary02: "そこで自分たちがPHPで作るアプリケーションにどのようにDSLを使用していくのかを一般的なオブジェクト指向による開発と比較しながら紹介します。",
        profile: "大阪在住のエンジニア。PHPでは主にSymfonyを使ってます。ECサイトを構築するためのフレームワークをどう作るかを模索中。",
        facebook: "",
        twitter: "https://twitter.com/matsu_hide",
        qiita: "",
        github: "",
        other: "",
    },
    {
        track:"907",
        time: "14:45-15:15",
        name:"坂本 剛彦",
        title: "今すぐできるLaravelフレームワーク！～業務アプリ開発～",
        summary01: "高機能で利便性が高く、今世界で最も人気のあるPHPフレームワークLaravel。Laravelの利用視点を大規模Webアプリ開発ではなく小規模業務向けアプリ開発に絞って、フレームワークの利用メリットを解説。<br> 本セッションでは、Laravelのバリデーション（Validation）の基礎から応用までを説明し、Laravelの良さを掴んでもらいます。<br> 聴講者には明日からLaravelを使いたくなって頂きます。",
        summary02: "Composer ってなんだろう、というところから、PHP7.1最新の新機能まで、今現場で使えるPHPの新機能をおさらいしていきましょう。",
        profile: "2006年未踏ユース開発者経験を経て、株式会社ソディック入社。<br>森、山、海や工作機械、3Dプリンタに囲まれ、PHPを業務で日々書く。",
        facebook: "",
        twitter: "https://twitter.com/sakamoto03",
        qiita: "",
        github: "",
        other: "",
    },
    {
        track:"905",
        time: "16:15-16:45",
        name:"渡辺 一宏",
        title: "PHPでもサーバーレスしたい",
        summary01: "昨年辺りから高い注目を集めているサーバーレスアーキテクチャ。しかし、サーバーレスの代表格、AWS Lambdaではnodejs/Python/JavaのみでPHPを公式にはサポートしていません...。",
        summary02: "PHPerとしてはPHPでもサーバーレスしたい！本セッションでは、PHPでAzure Functionsを利用する方法を中心に、Azure Functionsの概要、実際の開発、単体テスト、デプロイの方法など様々なTipsをご紹介します。",
        profile: "合同会社 decr 代表社員。インフラ構築・運用、Webシステムの開発、iOSアプリ開発などいろいろやってます。",
        facebook: "https://www.facebook.com/kaz29",
        twitter: "https://twitter.com/kaz_29",
        qiita: "",
        github: "",
        other: "",
    },
    {
        track:"907",
        time: "16:15-16:45",
        name:"二神 暢彦",
        title: "PHPerさんに伝えたい最近のフロント事情と開発フロー",
        summary01: "バックエンドエンジニアとフロントエンドエンジニアは共にプロジェクトに携わることも多く、コミュニケーションを円滑にすることは大事だと思います。「フロントの実装はES6で書いて、babelでトランスパイルして、他のライブラリと一緒にwebpackでコンパイルするんですよ」と言われても何語？という方のために登場ツールの説明と役割について話したいと思います。",
        summary02: "後半ではAPIでつながることでスピードを保ちながら開発をすすめる方法について、普段行っている開発話を交えながらお話する予定です。",
        profile: "昨年大阪から東京勤務になりました。<br>昨年Vue.jsを使いだし、すっかり虜なフロントエンドエンジニア。<br>現上司はPHPer。",
        facebook: "https://www.facebook.com/nobuhiko.futagami",
        twitter: "https://twitter.com/bobu_web",
        qiita: "http://qiita.com/bobu_web",
        github: "",
        other: "",
    },
    {
        track:"901+902",
        time: "15:30-16:00",
        name:"遠藤 良",
        title: "ぼくの辿りついた最強のPHP開発環境、あえてのWindows。",
        summary01: "PHP開発の現場で１年半。<br>様々なストレスに立ち向かい辿りついたWindowsでの開発環境をXAMMP,Vagrant,Dockerなどのツールを比較してご紹介したいと思います。",
        summary02: "ローカル環境でのページ遷移に10秒とか待っている方、その環境どうにかなりますよ！",
        profile: "株式会社ロックオン EC-CUBEの中の人。チームの大半がMacに乗り換えるなか、愛を持ってWindowsを使っています。",
        facebook: "https://www.facebook.com/endo.ryo.1984",
        twitter: "",
        qiita: "",
        github: "https://github.com/ryo-endo",
        other: "",
    },
    {
        track:"901+902",
        time: "16:15-16:45",
        name:"角田 一平",
        title: "テストと仲良くするためのCodeceptionのはじめかた",
        summary01: "PHP開発の現場で１年半。<br>様々なストレスに立ち向かい辿りついたWindowsでの開発環境をXAMMP,Vagrant,Dockerなどのツールを比較してご紹介したいと思います。",
        summary02: "テスティングフレームワーク『Codeception』を使って、テストと仲良くなってみませんか？",
        profile: "Web制作会社を経て、現在はフリーランスエンジニアとして2016年7月から活動中。CoderDojo枚方代表。",
        facebook: "https://www.facebook.com/ippeisumida",
        twitter: "",
        qiita: "",
        github: "https://github.com/ippey_s",
        other: "",
    },
    {
        track:"907",
        time: "13:10-13:40",
        name:"岸田 健一郎",
        title: "Robo を使ったモダンなタスク管理",
        summary01: "最近ではGradleやGulpなどタスクランナーは、よりコードに近い形で定義できるツールが使われてきています。PHPではJenkinsなどとの連携の容易さから、Phingが使われることが多かったと思いますが、XMLでの定義は容易ではありませんでした。",
        summary02: "RoboはPHPのコードでタスクを定義できるモダンなタスクランナーで、私たちPHPerにも読みやすく理解しやすい構造をしています。このセッションではRoboを使ったタスクの定義を、動作デモを交えて紹介したいと思います。<br>http://robo.li/",
        profile: "株式会社永和システムマネジメント所属。",
        facebook: "",
        twitter: "https://twitter.com/sizuhiko",
        qiita: "",
        github: "",
        other: "",
    },
    {
        track:"905",
        time: "11:40-12:10",
        name:"滝口(@atakig)",
        title: "PHPerのためのgolang講座",
        summary01: "golangが実業務で使われている話を耳にするのは、もう珍しくなくなってきています。",
        summary02: "数年に渡り、PHPで開発を続けてきた私が、業務でgolangを使うようになって得た知見をPHPとの比較を交えながら説明します。",
        profile: "Webアプリケーションエンジニア。cloudpack大阪所属。以前のメイン業務はECサイトの保守。この数ヶ月はserverless lambdaと、golangによるWebアプリの開発を担当。",
        facebook: "",
        twitter: "https://twitter.com/atakig",
        qiita: "",
        github: "",
        other: "",
    },
]


class Sessions{

    constructor(data){
        this.data = data
    }

    findByRoom(room){
        let rtn = [];
        for(var session of this.data) {
            if (session.track === room) {
                    rtn.push(session)
            }
        }
        return rtn;
    }

    findByTime(room){
        let rtn = [];
        for(var session of this.data) {
            if (session.time === room) {
                rtn.push(session)
            }
        }
        return rtn;
    }
}

module.exports = new Sessions(data)