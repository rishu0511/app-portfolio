import photo from "./images/DP.png"

function Home(){
    return(
        <div className='header' >
              <div className='second-div'>
                <div className='title' >
                  <h1 id="title">Hi I'm Website Developer</h1>
                  <h2 id="name">Rishabh</h2>
                </div>
                <div id="photo">
                  <img id="DP" src={photo} height="400px" width={400}/>
                </div>
                <div className='bottom-intro'>
                  <div className="box">
                    <h3>Introduction</h3>
                    <p> I am webdeveloper I had worked on React,express,github versioning.
                      I have worked on lots of react project thats on my github account and I have hosted on vercel as well.
                      My main projects <br/>
                      <ul>
                        <li>Weather (react) I have integrated with  Openweather API </li>
                        <li>Draw histogram,bar graph,piechart and  parabola by filling values(font color,background color etc.) to form. </li>
                        <li>Dairy frontend where anyone can add,edit,delete and search.A visual calculater as well where by clicking button you can calculate values.</li>
                      </ul>
                    </p>
                  </div>
                  <div className="box">
                    <h3>Working Experience</h3>
                    <p>
                      One of my project is to build piechart,histogram,bargraph by filling form you can fill font colors ,colors of the bar, gap numbers , backround color etc.
                      and download itand I have hosted on vercel.This project is built by using html canvas. You can also create any type of parabola by giving cofficiants.
                      this project is so flexible.<br/><br/>
                      My weather website have lot of animated frontend by html canvas and integrated with Openwether API. By giving city name anyone can find weather information of that city.<br/><br/>
                      Dairy frontend work have properly working of add by filling form,show by clicking on button to show all notes(delete ,edit and search as well).
                      A visual calculater where every numbers button and opraters of plus,minus,devide,multiply,equal and back
                    </p>
                  </div>
                </div>
              </div>
        
            </div>
    )
}
export default Home