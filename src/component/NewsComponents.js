import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import loadingImages from './loading.gif.gif'


// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";


const NewsComponents = (props) => {

    // https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=d74807c2e1ad4a2aaf25186ebeb8f3dd    =>>> 10 articles
    // https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d74807c2e1ad4a2aaf25186ebeb8f3dd     ====>> 301 articles

    // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d74807c2e1ad4a2aaf25186ebeb8f3dd

    // for category with props
    // https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d74807c2e1ad4a2aaf25186ebeb8f3dd


    // articles = [
    //     {
    //         "source": {
    //             "id": "time",
    //             "name": "Time"
    //         },
    //         "author": "Moises Mendez II",
    //         "title": "Rihanna Confirms Pregnancy Following Super Bowl Halftime Show",
    //         "description": "A well-placed belly rub inspired speculation during the performance, with a rep confirming the news following the show",
    //         "url": "https://time.com/6254972/rihanna-pregnant-super-bowl-halftime-show/",
    //         "urlToImage": "https://api.time.com/wp-content/uploads/2023/02/GettyImages-1465425205.jpg?quality=85&crop=0px%2C0px%2C1024px%2C536px&resize=1200%2C628&strip",
    //         "publishedAt": "2023-02-13T03:29:22Z",
    //         "content": "Rihanna is pregnant with her second child. She has yet to make an announcement herself, but representatives for the superstar confirmed the news Sunday night after speculation ran rampant online when… [+1944 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Yahoo Entertainment"
    //         },
    //         "author": "MAE ANDERSON",
    //         "title": "Super Bowl ads use nostalgia, star power and light laughs",
    //         "description": "Off the field at the Super Bowl, 50-plus marketers are having a battle of their own.  It was a year of change for the Super Bowl since other alcohol ads were...",
    //         "url": "https://news.yahoo.com/look-lots-cute-animals-humor-000558400.html",
    //         "urlToImage": "https://s.yimg.com/ny/api/res/1.2/aSSjpqDAjmyd9i1T5YSWLA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MzU-/https://media.zenfs.com/en/ap.org/05b37a342a34b920afdb4868a79017e3",
    //         "publishedAt": "2023-02-13T00:05:58Z",
    //         "content": "NEW YORK (AP) Off the field at the Super Bowl, 50-plus marketers are having a battle of their own.\r\nThey're trying to reach the more than 100 million people tuning into the broadcast on Fox. It's a p… [+4055 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Gizmodo.jp"
    //         },
    //         "author": "宮城圭介",
    //         "title": "折りたたみiPad、2024年に登場？",
    //         "description": "折りたたみ式のiPadは2024年後半に発売されるのではないかというアナリストの予想。",
    //         "url": "https://www.gizmodo.jp/2023/02/folding-ipad-likely-to-be-available-in-2024.html",
    //         "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/02/13/Apple-iPad-10th-gen-hero-221018_Full-Bleed-Image.jpg.xlarge.jpg?w=1280&h=630&f=jpg",
    //         "publishedAt": "2023-02-13T03:00:00Z",
    //         "content": "Apple \r\nSamsungOppoHuaweiAppleMing-Chi KuoAppleiPad \r\n(3/3)Anjie Technology will be the new beneficiary of the all-new design foldable iPad. There may be no new iPad releases in the next 9-12 months … [+518 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Pitchfork"
    //         },
    //         "author": "Evan Minsker",
    //         "title": "Rihanna Reveals She’s Pregnant at 2023 Super Bowl Halftime Show",
    //         "description": "During her long-awaited return performance, she revealed her baby bump. Her representative confirmed the news.",
    //         "url": "https://pitchfork.com/news/rihanna-reveals-shes-pregnant-at-2023-super-bowl-halftime-show/",
    //         "urlToImage": "https://media.pitchfork.com/photos/63e9a4426dc98d1c51d411d4/16:9/w_1280,c_limit/rihanna-super-bowl-2.jpg",
    //         "publishedAt": "2023-02-13T02:53:23Z",
    //         "content": "Rihanna is pregnant, the stars representative has confirmed to People and The Hollywood Reporter. During her long-awaited return performance at the 2023 Super Bowl Halftime Show, she floated above Ar… [+1000 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "HYPEBEAST"
    //         },
    //         "author": "info@hypebeast.com (Hypebeast)",
    //         "title": "Google Unveiled the AI Chatbot “Bard” and NASA Awarded Blue Origin With a New Contract in This Week’s Tech Roundup",
    //         "description": "This week, the tech industry saw a slew of developments in the AI space. Google unveiled its own rival to ChatGPT, an AI chatbot named Bard. At Microsoft, meanwhile, the company drew on ChatGPT’s AI algorithm to buffer the capabilities of its AI search engine…",
    //         "url": "https://hypebeast.com/2023/2/weekly-tech-news-google-ai-chatbot-nasa-blue-origin-contract",
    //         "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2FGoogle-Unveiled-the-AI-Chatbot-Bard-and-NASA-Awarded-Blue-Origin-With-a-New-Contract-in-This-Weeks-Tech-Roundup-tw.jpg?w=960&cbr=1&q=90&fit=max",
    //         "publishedAt": "2023-02-13T01:30:40Z",
    //         "content": "This week, the tech industry saw a slew of developments in the AI space. Google unveiled its own rival to ChatGPT, an AI chatbot named Bard. At Microsoft, meanwhile, the company drew on ChatGPTs AI a… [+2966 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "HYPEBEAST"
    //         },
    //         "author": "info@hypebeast.com (Hypebeast)",
    //         "title": "McDonald's Officially Introduces the Cardi B & Offset Meal",
    //         "description": "Announced in a spot during the Super Bowl pre-game festivities is a new special McDonald's meal curated by Cardi B and Offset just in time for Valentine's Day. The ad showed seven couples talking about their significant other's favorite McDonald's Meal just a…",
    //         "url": "https://hypebeast.com/2023/2/mcdonalds-introduces-cardi-b-offset-meal-news-info",
    //         "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2Fmcdonalds-introduces-cardi-b-offset-meal-news-info-tw.jpg?w=960&cbr=1&q=90&fit=max",
    //         "publishedAt": "2023-02-13T04:17:52Z",
    //         "content": "Announced in a spot during the Super Bowl pre-game festivities is a new special McDonald’s meal curated by Cardi B and Offset just in time for Valentine’s Day. The ad showed seven couples talking abo… [+1396 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BGR"
    //         },
    //         "author": "Chris Smith",
    //         "title": "Here’s why the iPhone 14 Plus outperforms the iPhone 13 Pro Max",
    //         "description": "The iPhone 14 and 14 Plus are hardly selling as well as expected, as buyers overwhelmingly favor the iPhone 14 Pro and 14 Pro Max. …\nThe post Here’s why the iPhone 14 Plus outperforms the iPhone 13 Pro Max appeared first on BGR.",
    //         "url": "https://bgr.com/tech/heres-why-the-iphone-14-plus-outperforms-the-iphone-13-pro-max/",
    //         "urlToImage": "https://bgr.com/wp-content/uploads/2022/09/apple-iphone-14-3.jpg?quality=82&strip=all",
    //         "publishedAt": "2023-02-13T01:15:00Z",
    //         "content": "The iPhone 14 and 14 Plus are hardly selling as well as expected, as buyers overwhelmingly favor the iPhone 14 Pro and 14 Pro Max. That’s partly Apple’s own doing, as its marketing failed to make the… [+3714 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Les Numériques"
    //         },
    //         "author": "Rick",
    //         "title": "Actualité : Bon plan – La tablette Tactile Apple iPad Pro 12,9\" (2021) \"5 étoiles\" à 1 219,00 € (-16%)",
    //         "description": "La tablette Tactile Apple iPad Pro 12,9\" (2021) passe sous les 1300 € chez Amazon soit une baisse d'environ 16% sur le prix habituellement constaté. C'est actuellement l'un des meilleurs produit de notre comparatif.",
    //         "url": "https://www.lesnumeriques.com/tablette-tactile/bon-plan-la-tablette-tactile-apple-ipad-pro-12-9-2021-5-etoiles-a-1-219-00-16-n206805.html",
    //         "urlToImage": "https://cdn.lesnumeriques.com/optim/test/16/163581/f8b11a2b-apple-ipad-pro-12-9-2021-m1-dans-la-main__1200_630__overflow_wtmk.jpeg",
    //         "publishedAt": "2023-02-13T05:43:33Z",
    //         "content": "Pour 2021, Apple fait passer un cap à sa tablette la plus haut de gamme. Avec un processeur de MacBook Pro 13 pouces et une dalle mini-led, l'iPad Pro 12,9 (2021) se pose comme un iPad plus ambitieux… [+1830 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Rolling Stone"
    //         },
    //         "author": "Brian Hiattt",
    //         "title": "Seriously, Why Can’t Beyoncé Win Album of the Year?",
    //         "description": "We discuss the Recording Academy’s continual Beyoncé snubs, as well as the overall highs and lows of this year’s Grammys, on the new episode of Rolling Stone Music Now",
    //         "url": "https://www.rollingstone.com/music/music-features/beyonce-album-of-the-year-grammys-snubs-1234678457/",
    //         "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/02/beyonce-podcast.jpg?crop=0px%2C19px%2C1800px%2C1015px&resize=1600%2C900",
    //         "publishedAt": "2023-02-13T05:58:17Z",
    //         "content": "After three Album of the Year snubs in a row for three epochal Beyoncé albums, it’s hard not to wonder: What, precisely, is going on with Grammy voters? \r\nIn the new episode of our Rolling Stone Musi… [+1635 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Caschys Blog"
    //         },
    //         "author": "André Westphal",
    //         "title": "Apple Fitness+: „Zeit fürs Gehen“-Folge mit Schauspielerin Nina Hoss",
    //         "description": "Bei Apple Fitness+ gibt es ab sofort eine neue Folge von „Zeit fürs Gehen“ mit der Schauspielerin Nina Hoss. Internationale Bekanntheit erlangte die deutsche Darstellerin zuletzt durch ihre Rolle in dem Film „Tár“ sowie ihre Auftritte in Serien wie „Homeland“…",
    //         "url": "https://stadt-bremerhaven.de/apple-fitness-zeit-fuers-gehen-folge-mit-schauspielerin-nina-hoss/",
    //         "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/02/hoss_.jpg",
    //         "publishedAt": "2023-02-13T05:30:28Z",
    //         "content": "Bei Apple Fitness+ gibt es ab sofort eine neue Folge von „Zeit fürs Gehen“ mit der Schauspielerin Nina Hoss. Internationale Bekanntheit erlangte die deutsche Darstellerin zuletzt durch ihre Rolle in … [+1473 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "lenta",
    //             "name": "Lenta"
    //         },
    //         "author": "Андрей Ставицкий",
    //         "title": "Apple ограничит работу USB-C в новых iPhone",
    //         "description": "Apple может ввести ограничения для разъема USB-C в iPhone, которые будут мешать использованию сторонних аксессуаров. По словам источника, компания будет вынуждена не позже конца 2024 года перейти на универсальный разъем из-за давления европейских чиновников, …",
    //         "url": "https://lenta.ru/news/2023/02/13/iphone_usbc/",
    //         "urlToImage": "https://icdn.lenta.ru/images/2023/02/10/16/20230210163054797/share_3c5b9be3c19833ef5d14daefc5ca7582.jpg",
    //         "publishedAt": "2023-02-13T01:30:32Z",
    //         "content": "Apple USB-C iPhone, . 9to5mac.\r\nWeibo, , Apple USB-C . , 2024 - , .\r\n , , . , Apple .\r\n 9to5mac, Apple , , iPhone. , USB-C.\r\n Apple , USB-C. - Apple , ."
    //     }
    // ]

    // For the props which will be used for the class based components :
    // static defaultProps = {
    //     country : 'de',
    //     pageSize: 9,
    //     category: 'entertament',
    // }

    // PropTypes are usually used as unnecessary LIBRARY. Without using this LIBRARY you can pass props as static defaultProps. 
    // NOTE: static defaultProps are used for classes:

    // static PropTypes = {
    //     country : PropTypes.string,
    //     pageSize: PropTypes.number,
    //     category: PropTypes.string,
    // }

    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)


    // this Method is for the REFACTORING 
    // async updateComponent() {
    //     const url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d74807c2e1ad4a2aaf25186ebeb8f3dd&page=${this.props.page}&pageSize=${this.props.pageSize}`;
    //     this.setState({
    //         loading: true,
    //     })
    //     const data = await fetch(url);
    //     const parsedData = await data.json();
    //     this.setState({
    //         articles: parsedData.articles,
    //         totalResults: parsedData.totalResults,
    //         loading: false,
    //     });
    // }

    useEffect(() => {
        componentDidMount()
    }, [])

    // const URL = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d74807c2e1ad4a2aaf25186ebeb8f3dd"

    const componentDidMount = async () => {
        props.setProgress(30)
        try {
            let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d74807c2e1ad4a2aaf25186ebeb8f3dd&page=1&pageSize=${props.pageSize}`;
            setLoading(true)
            props.setProgress(50)
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(parsedData.articles)
            setTotalResults(parsedData.totalResults)
            setLoading(false)
            props.setProgress(100)

        } catch (error) {
            console.log("ERROR", error)
        }

        //After Refactoring
        // this.setState({
        //     page: this.state.page,
        // })
        // this.updateComponent();
    }

    const clickOnNext = async () => {
        if (page + 1 > Math.ceil(totalResults / props.pageSize)) { }
        else {
            props.setProgress(50)
            let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d74807c2e1ad4a2aaf25186ebeb8f3dd&page=${page + 1}&pageSize=${props.pageSize}`;
            setLoading(true)
            let data = await fetch(url);
            let parsedData = await data.json();
            setPage(page + 1)
            setArticles(parsedData.articles)
            setLoading(false)
            props.setProgress(100)
        }

        //After REFACTORING
        //    await this.setState({
        //         page: this.state.page + 1,
        //     });
        //     this.updateComponent();
    }

    const clickOnPre = async () => {
        props.setProgress(50)
        let url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d74807c2e1ad4a2aaf25186ebeb8f3dd&page=${page - 1}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setPage(page - 1)
        setArticles(parsedData.articles)
        setLoading(false)
        props.setProgress(100)

        //After REFACTORING
        // await this.setState({
        //     page: this.state.page - 1
        // });
        // this.updateComponent();
    }



    // for Infinite-Scroll 
    // fetchMoreData = async () => {
    //     this.setState({
    //         page: this.state.page + 1,
    //     })
    //     const url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d74807c2e1ad4a2aaf25186ebeb8f3dd&page=${this.props.page}&pageSize=${this.props.pageSize}`;
    //     this.setState({
    //         loading: true,
    //     })
    //     const data = await fetch(url);
    //     const parsedData = await data.json();
    //     this.setState({
    //         articles: this.state.articles.concat(parsedData.articles),
    //         totalResults: parsedData.totalResults,
    //         loading: false,
    //     });
    // };

    let { constructor, constructor2, backgroundColor } = props;
    // Render props will be used only for RETURN which is below
    return (
        <div>
            {URL.length}
            {/* text-center  is a property to align text in center */}
            <div className={`container mx-auto text-center `}>  <h1 className='text-3xl' > <strong> Tail News - TOP HEADLINES </strong> </h1>
            </div>
            {/* <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.totalResults}

                /> */}
            <div className=' grid relative top-1/2 justify-center content-center' >
                <div>
                {loading && <img src={loadingImages} alt="loadingImages" />}
                </div>
            </div>
            <div data-aos='zoom-in'  >
                {articles.map((element) => {
                    {/* Implementation */ }
                    return <div key={element.url} >
                        <NewsItem backgroundColorCard={backgroundColor} constructor={constructor} constructor2={constructor2} title={element.title.slice(0, 80)} description={element.description.slice(0, 100)} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}
            </div>


            {/* for Next and Previous Buttons  */}
            <div className="container mx-auto my-3 flex justify-between" >
                <button onClick={clickOnPre} disabled={page <= 1} type="button" className=" text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">&larr; Previous</button>
                {/* comment ==>> disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}  */}
                <button onClick={clickOnNext} disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Next &rarr;</button>
            </div>
        </div>
    )
}

export default NewsComponents


{
    /* for practice
    <NewsItem title='Hyundai launches - electric vehicle' description="Hyundai's new electric car subscription service offers customers the chance to use a car on a month-to-month basis with little commitment." imgUrl = "https://i.insider.com/63e8f3e74102a900184c715a?width=1200&format=jpeg" newsUrl =  "https://time.com/6254972/rihanna-pregnant-super-bowl-halftime-show/" />*/
}