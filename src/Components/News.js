import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Circles } from "react-loader-spinner";
import LoadingBar from "react-top-loading-bar";
export default class News extends Component {
  // articles= [
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "BBC News"
  //         },
  //         "author": "https://www.facebook.com/bbcnews",
  //         "title": "Underwater noises heard in search for missing sub near Titanic wreck - BBC",
  //         "description": "A tourist sub missing during a dive on the wreck of the Titanic has just over a day’s oxygen left.",
  //         "url": "https://www.bbc.com/news/world-us-canada-65969476",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/F812/production/_130160536_diverreuters2.jpg",
  //         "publishedAt": "2023-06-21T12:15:52Z",
  //         "content": "Media caption, Watch: The BBC's Carl Nasman talks through what we know about the missing sub\r\nThe search for a submersible vessel that went missing near the wreck of the Titanic has been relocated af… [+3846 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "cnn",
  //             "name": "CNN"
  //         },
  //         "author": "Faith Karimi",
  //         "title": "5 things to know for June 21: Missing sub, Hunter Biden, Ukraine, Severe heat, Arkansas - CNN",
  //         "description": "CNN’s 5 Things brings you the news you need to know every morning.",
  //         "url": "https://www.cnn.com/2023/06/21/us/5-things-to-know-for-june-21-missing-sub-hunter-biden-ukraine-severe-heat-arkansas/index.html",
  //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/6c9097c5-e7f5-4473-9a9b-2626c4bd0a7d.jpg?c=16x9&q=w_800,c_fill",
  //         "publishedAt": "2023-06-21T11:50:00Z",
  //         "content": "A California restaurant has to pay $140,000 to employees after it hired a fake priest to extract confessions of workers sins in what federal investigators are calling the most shameless acts of corru… [+5743 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "cnn",
  //             "name": "CNN"
  //         },
  //         "author": "Kareem Khadder",
  //         "title": "Palestinian villagers attacked in wake of Israeli settler killings, Palestinian official says - CNN",
  //         "description": "Dozens of Palestinian villagers were attacked by Israeli settlers overnight in the wake of the killing of four settlers in the occupied West Bank on Tuesday, a Palestinian official who monitors settler violence told CNN Wednesday.",
  //         "url": "https://www.cnn.com/2023/06/21/middleeast/west-bank-palestinians-killed-intl-hnk/index.html",
  //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230621081311-05-west-bank-palestinians-062123.jpg?c=16x9&q=w_800,c_fill",
  //         "publishedAt": "2023-06-21T11:29:00Z",
  //         "content": "Dozens of Palestinian villagers were attacked by Israeli settlers overnight in the wake of the killing of four settlers in the occupied West Bank on Tuesday, a Palestinian official who monitors settl… [+2088 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "MarketWatch"
  //         },
  //         "author": "Steve Goldstein",
  //         "title": "The AI boom will stay with the S&P 500, says Wall Street firm bumping up target - MarketWatch",
  //         "description": "Critical information for the U.S. trading day",
  //         "url": "https://www.marketwatch.com/story/the-ai-boom-will-stay-with-the-s-p-500-says-one-of-most-pessimistic-wall-street-firms-heading-into-2023-50aff3df",
  //         "urlToImage": "https://images.mktw.net/im-795673/social",
  //         "publishedAt": "2023-06-21T10:46:00Z",
  //         "content": "Goldman Sachs is sticking to its bullish stock-market forecast for the year while Morgan Stanley has just reiterated its downbeat outlook. But not everyone is clinging to their positions at the halfw… [+4793 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "Yahoo Entertainment"
  //         },
  //         "author": "Myles Udland",
  //         "title": "Stocks futures waver as Powell comments loom: Stock market news today - Yahoo Finance",
  //         "description": "Stock futures were struggling for direction before the open Wednesday, as investors counted down to Federal Reserve Chair Jerome Powell's testimony in...",
  //         "url": "https://finance.yahoo.com/news/stock-market-news-live-updates-today-june-21-2023-103345740.html",
  //         "urlToImage": "https://s.yimg.com/ny/api/res/1.2/W6iOsMHgVUGvqHZJwpAQkQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-06/13085d90-101f-11ee-bdff-b898aeaa9b48",
  //         "publishedAt": "2023-06-21T10:45:18Z",
  //         "content": "Stocks were struggling for direction before the open Wednesday, as investors counted down to Federal Reserve Chair Jerome Powell's testimony in Congress later.\r\nFutures on the S&amp;P 500 (^GSPC) and… [+2297 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "the-washington-post",
  //             "name": "The Washington Post"
  //         },
  //         "author": "Lyric Li",
  //         "title": "Honduras women's prison fire, riot leave at least 41 dead - The Washington Post",
  //         "description": "President Xiomara Castro said the riots were instigated by street gangs “with the knowledge and acquiescence of security authorities.”",
  //         "url": "https://www.washingtonpost.com/world/2023/06/21/honduras-prison-riot-fire-women/",
  //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VNYBLB7T2YOWZKEBPZJU47WVEI.JPG&w=1440",
  //         "publishedAt": "2023-06-21T10:44:00Z",
  //         "content": "Comment on this story\r\nComment\r\nHonduran President Xiomara Castro fired the countrys security minister after an apparent riot at a womens prison left at least 41 people dead, in violence that she lin… [+2384 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "cbs-news",
  //             "name": "CBS News"
  //         },
  //         "author": null,
  //         "title": "Majorjon Kaylor charged in deaths of 4 Idaho neighbors as \"horrific\" details emerge - CBS News",
  //         "description": "Majorjon Kaylor, 31, was arrested in the killings of Kenneth Guardipee, 65; his daughter Kenna Guardipee, 41; and her sons 18-year-old Devin Smith and 16-year-old Aiken Smith.",
  //         "url": "https://www.cbsnews.com/news/majorjon-kaylor-charged-deaths-4-idaho-neighbors-horrific-details/",
  //         "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/06/21/c2fea431-20d8-4660-af0e-cc43a1dfd10b/thumbnail/1200x630g6/8bbf1eea1c3114c5221b0cf1b3fdd95a/ap23171755112396.jpg?v=23da2bed74e9783333cf303fba619e89",
  //         "publishedAt": "2023-06-21T10:31:00Z",
  //         "content": "New details are emerging about a previous dispute between neighbors after prosecutors say a northern Idaho man went to his neighbor's home and shot and killed four family members there, including two… [+4650 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "Live Science"
  //         },
  //         "author": "Kiley Price",
  //         "title": "Exotic new state of matter discovered by squishing subatomic particles into an ultradense crystal - Livescience.com",
  //         "description": "By shining a strong beam of light through two chemical compounds, scientists discovered a unique new state of matter made of particles called excitons.",
  //         "url": "https://www.livescience.com/physics-mathematics/exotic-new-state-of-matter-discovered-by-squishing-subatomic-particles-into-an-ultradense-crystal",
  //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/a5Z3NsHGjXcbPbW3SjgJAo-1200-80.gif",
  //         "publishedAt": "2023-06-21T10:00:00Z",
  //         "content": "Physicists have discovered an exotic new state of matter that takes the form of a highly ordered crystal of subatomic particles. The new state of matter, called a \"bosonic correlated insulator,\" coul… [+2822 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "BBC News"
  //         },
  //         "author": "https://www.facebook.com/bbcnews",
  //         "title": "Four Israelis killed by Palestinian gunmen near West Bank settlement - BBC",
  //         "description": "Israel's PM says \"all options are open\" after one of the deadliest attacks on Israelis this year.",
  //         "url": "https://www.bbc.com/news/world-middle-east-65963017",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17115/production/_130158449_0239ee79800ba3bf485c686bb537708c9755abc80_190_5483_30865483x3086.jpg",
  //         "publishedAt": "2023-06-21T09:38:24Z",
  //         "content": "Four Israelis, including a teenage boy, have been shot dead in an attack near a settlement in the occupied West Bank.\r\nFour others were wounded, one of them seriously, when two Palestinian gunmen ope… [+4632 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "cnn",
  //             "name": "CNN"
  //         },
  //         "author": "",
  //         "title": "Pharrell Williams’ Louis Vuitton star-studded debut sparked joy - CNN",
  //         "description": "Williams’ debut as men’s creative director for Louis Vuitton was nothing short of spectacular, heralding a new era for the storied French house.",
  //         "url": "https://www.cnn.com/style/pharrell-williams-louis-vuitton-debut/index.html",
  //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230621011408-07-louis-vuitton-pharrell-williams-debut.jpg?c=16x9&q=w_800,c_fill",
  //         "publishedAt": "2023-06-21T09:35:00Z",
  //         "content": "Pharrell Williams debut as mens creative director for Louis Vuitton was nothing short of spectacular, heralding a new era for the storied French fashion house.\r\nThe American polymath, whose appointme… [+6511 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "Fox Business"
  //         },
  //         "author": "Ken Martin",
  //         "title": "FedEx shares fall on quarterly revenue miss - Fox Business",
  //         "description": "FedEx shares fell after the package delivery company's latest quarterly results showed that revenue dropped for a third straight quarter.",
  //         "url": "https://www.foxbusiness.com/markets/fedex-shares-fall-quarterly-revenue-miss",
  //         "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/08/0/0/FEDEX-GROUND-TRUCK-DELIVERY-GETTY.jpg?ve=1&tl=1",
  //         "publishedAt": "2023-06-21T09:32:49Z",
  //         "content": "FedEx reported its third straight quarterly revenue drop as demand has weakened following the pandemic boom.\r\nShares of the package delivery company are 3% lower in pre-market trading.\r\nThe company i… [+1535 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "BBC News"
  //         },
  //         "author": "https://www.facebook.com/bbcnews",
  //         "title": "Modi in US: Why Washington is rolling out the red carpet for Indian PM - BBC",
  //         "description": "The White House is pulling out all the stops to welcome India's PM. What does that signify?",
  //         "url": "https://www.bbc.com/news/world-asia-india-65947363",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/CE9E/production/_130149825_gettyimages-1244787660-594x594.jpg",
  //         "publishedAt": "2023-06-21T08:57:51Z",
  //         "content": "Indian Prime Minister Narendra Modi's visit to the US has assumed huge significance amid global economic and geopolitical headwinds.\r\nThe White House is pulling out all the stops to welcome Mr Modi -… [+8643 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "The Moscow Times"
  //         },
  //         "author": "The Moscow Times",
  //         "title": "3 Drones Downed Outside Moscow Military Base - The Moscow Times",
  //         "description": "A group of drones is believed to have targeted a Russian army base outside Moscow early Wednesday, the latest in a string of attacks near the Russian capital in recent weeks, authorities and state media reported. “In the village of Kalininets today, two drone…",
  //         "url": "https://www.themoscowtimes.com/2023/06/21/3-drones-downed-outside-moscow-military-base-a81573",
  //         "urlToImage": "https://static.themoscowtimes.com/image/og/72/81573__72d730cd771f0c34057130547a221709.jpg",
  //         "publishedAt": "2023-06-21T07:04:00Z",
  //         "content": "A group of drones is believed to have targeted a Russian army base outside Moscow early Wednesday, the latest in a string of attacks near the Russian capital in recent weeks, authorities and state me… [+2066 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "CNET"
  //         },
  //         "author": null,
  //         "title": "Amazon Prime Day 2023 Announced: 48-Hour Sale Kicks Off July 11 - CNET",
  //         "description": "Prepare your wallets, Amazon's big sale is just a few weeks away.",
  //         "url": "https://www.cnet.com/tech/amazon-prime-day-2023-announced-48-hour-sale-kicks-off-july-11/",
  //         "urlToImage": "https://www.cnet.com/a/img/resize/aa690f891fb70fa467936d2d1833be9709be6dd5/hub/2023/06/21/f1f60c9f-9d0c-45d4-81b7-bc70460b410b/prime-day-2023.jpg?auto=webp&fit=crop&height=675&width=1200",
  //         "publishedAt": "2023-06-21T06:19:00Z",
  //         "content": "It's official: Amazon's Prime Day 2023 sale will take place on July 11 and 12. After weeks of speculation around when the summer sale would kick off, the company on Monday announced the Prime Day dat… [+2182 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "the-washington-post",
  //             "name": "The Washington Post"
  //         },
  //         "author": "Bryan Pietsch, Meaghan Tobin",
  //         "title": "Biden refers to China’s Xi Jinping as a dictator - The Washington Post",
  //         "description": "President Biden's remarks came after Secretary of State Antony Blinken appeared to soothe tensions while meeting Chinese leader Xi Jinping in Beijing.",
  //         "url": "https://www.washingtonpost.com/politics/2023/06/20/biden-xi-jinping-dictator-china/",
  //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/Y4UUU2POAXDY76YQYPYQ7UD57M.JPG&w=1440",
  //         "publishedAt": "2023-06-21T05:50:00Z",
  //         "content": "Comment on this story\r\nComment\r\nChina called President Bidens suggestion that its leader is a dictator extremely absurd and irresponsibleon Wednesday, potentially undoing recent hard-won efforts to c… [+4901 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "Suntimes.com"
  //         },
  //         "author": "Georgia Nicols",
  //         "title": "Horoscope for Wednesday, June 21, 2023 - Chicago Sun-Times",
  //         "description": null,
  //         "url": "https://chicago.suntimes.com/2023/6/21/23758758/horoscopes-today-wednesday-june-21-2023",
  //         "urlToImage": "https://cst.brightspotcdn.com/dims4/default/5666c07/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FiUTsfHr5WEsgdnoFP51UrzM65c8%3D%2F0x0%3A870x630%2F870x630%2Ffilters%3Afocal%28435x315%3A436x316%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F24722731%2FGeorgia_mug.jpeg",
  //         "publishedAt": "2023-06-21T05:04:46Z",
  //         "content": "Moon Alert\r\nThere are no restrictions to shopping or important decisions. The moon is in Leo.\r\nAries (March 21-April 19)\r\nThis is a wonderful day to socialize with others and enjoy playful activities… [+3873 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "YouTube"
  //         },
  //         "author": null,
  //         "title": "Seth “Freakin” Rollins makes his return to NXT: NXT Gold Rush highlights, June 20, 2023 - WWE",
  //         "description": "World Heavyweight Champion Seth “Freakin” Rollins makes his triumphant return to NXT where he interacts with Superstars like Nathan Frazer, Carmelo Hayes, an...",
  //         "url": "https://www.youtube.com/watch?v=iMuqatWVRaY",
  //         "urlToImage": "https://i.ytimg.com/vi/iMuqatWVRaY/maxresdefault.jpg",
  //         "publishedAt": "2023-06-21T03:59:06Z",
  //         "content": null
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "CBS Sports"
  //         },
  //         "author": "",
  //         "title": "2023 NBA Mock Draft: Victor Wembanyama is sure top pick, Scoot Henderson goes No. 3 behind Brandon Miller - CBS Sports",
  //         "description": "Wembanyama will be going No. 1 to the Spurs, but things get interesting after that in Gary Parrish's latest mock draft",
  //         "url": "https://www.cbssports.com/nba/news/2023-nba-mock-draft-victor-wembanyama-is-sure-top-pick-scoot-henderson-goes-no-3-behind-brandon-miller/",
  //         "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/06/20/707066b9-81d9-4848-8387-219de5b17aa0/thumbnail/1200x675/5848aecc3c72162f4da0c0df04c40fac/usatsi-19177869-1.jpg",
  //         "publishedAt": "2023-06-21T03:57:00Z",
  //         "content": "After months and months of speculation and debates, the 2023 NBA Draft has almost arrived. The projected lottery picks have traveled to New York to hear their names called by commissioner Adam Silver… [+1370 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "ProPublica"
  //         },
  //         "author": "Justin Elliott,Joshua Kaplan,Alex Mierjeski",
  //         "title": "Alito Took Unreported Luxury Trip With GOP Donor Paul Singer - ProPublica",
  //         "description": "In the years after the undisclosed trip to Alaska, Republican megadonor Paul Singer’s hedge fund has repeatedly had business before the Supreme Court. Alito has never recused himself.",
  //         "url": "https://www.propublica.org/article/samuel-alito-luxury-fishing-trip-paul-singer-scotus-supreme-court",
  //         "urlToImage": "https://img.assets-d.propublica.org/v5/images/202306-Alito-Singer-Lead.JPG?crop=focalpoint&fit=crop&fp-x=0.6729&fp-y=0.4513&h=630&imgixProfile=propublicaAssetsV5&q=90&w=1200&s=b8be3d8efc21387b0dc37e6a10ac091e",
  //         "publishedAt": "2023-06-21T03:49:00Z",
  //         "content": "ProPublica is a nonprofit newsroom that investigates abuses of power. Sign up to receive our biggest stories as soon as theyre published.\r\nIn early July 2008, Samuel Alito stood on a riverbank in a r… [+27477 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": null,
  //             "name": "Spaceflight Now"
  //         },
  //         "author": null,
  //         "title": "Live coverage: ULA scrubs Delta 4-Heavy launch attempt – Spaceflight Now - Spaceflight Now",
  //         "description": null,
  //         "url": "https://spaceflightnow.com/2023/06/21/delta-4-heavy-nrol-68-coverage/",
  //         "urlToImage": null,
  //         "publishedAt": "2023-06-21T03:41:27Z",
  //         "content": "Watch our live coverage of the countdown and launch of a United Launch Alliance Delta 4-Heavy rocket with a classified spy satellite for the National Reconnaissance Office from Space Launch Complex 3… [+12260 chars]"
  //     }
  // ]

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
  }


  // async updateNews(){
  //   this.props.setProgress(10);
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6a2b1a11315d4558be40b59573ae184b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading:true})
  //   let data = await fetch(url);
  //   this.props.setProgress(30);
  //   let parsedData = await data.json();
  //   this.props.setProgress(70);
  //   this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //       loding:false,
  //   });

  //     this.props.setProgress(100);







  //}


  async componentDidMount() {
    
    this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      this.props.setProgress(30);
      let parsedData = await data.json();
      this.props.setProgress(70);
      this.setState({
       articles: parsedData.articles,
       totalResults: parsedData.totalResults,
     });
     this.props.setProgress(100);

  }

  handlePrevClick = async () => {
   this.props.setProgress(10);
     let url = `https://newsapi.org/v2/top-headlines?country=${
       this.props.country
     }&category=${
       this.props.category
     }&apiKey=${this.props.apiKey}&page=${
       this.state.page - 1
     }&pageSize=${this.props.pageSize}`;
     this.setState({ loading: true });
     let data = await fetch(url);
     this.props.setProgress(30);
     let parsedData = await data.json();
     this.props.setProgress(70)
     this.setState({
       articles: parsedData.articles,
       page: this.state.page - 1,
       loading: false,
     });
    this.props.setProgress(100);

  };

  handleNextClick = async () => {

    this.props.setProgress(10);
    console.log("Next");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=${this.props.apiKey}&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
        this.props.setProgress(30);

      let parsedData = await data.json();
      this.props.setProgress(70);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
    this.props.setProgress(100);
  };
  render() {
    return (
      <>
        <div className=" d-flex justify-content-center"></div>
        <div className="container">
          <div className="display-4 my-4">NewsPoint-Top Headlines</div>
          <div className="container d-flex justify-content-center">
            {this.state.loading && <Circles />}
          </div>
          {/* {this.state.article.map((element)=>{
               console.log(element)
           })} */}
          <div className="container ">
            <div className="row ">
              {!this.state.loading &&
                this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <div className="col-sm-6 col-md-8">
                        <NewsItem
                          title={element.title ? element.title : " "}
                          description={
                            element.description ? element.description : ""
                          }
                          imageUrl={element.urlToImage}
                          newsUrl={element.url}
                          author={element.author}
                          date={element.publishedAt}
                          source={element.source.name}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page < 1}
            type="button"
            className="btn btn-dark my-3"
            onClick={this.handlePrevClick}
          >
            &laquo;Previous
          </button>
          <button
            type="button"
            className="btn btn-dark my-3"
            onClick={this.handleNextClick}
          >
            Next &raquo;
          </button>
        </div>
      </>
    );
  }
}
