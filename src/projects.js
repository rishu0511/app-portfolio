import { useEffect,useState,useRef } from "react";
import piechart from "./images/piechart.jpeg";
import Piform from "./images/pie_form.png";
import parabola from "./images/parabola.jpeg"
import paraform from "./images/paraform.png"
import Histogram from "./images/histgm.jpg"
import Parahist from "./images/formhist.png"
import Bargraph from "./images/Bargraph.jpg"
import FormBar from "./images/formBargraph.png"
import Feachers from "./images/Feachers.png";
import Notes from "./images/Notes.png"
import Calculater from "./images/calculater.png"
import Rain from "./images/Rain.png"
import cloud from "./images/clouds.png"
import sunny from "./images/sunny.png"
import bottomdiv from "./images/bottom-things.png"

function Project(){
    return(
        <div >
            <h1 id="p_title">Projects</h1>
            <div className="project-divs">
                <div className="box">
                    <h2>Charts and graphs</h2>
                    <p>In this project we have four forms By filling these forms we can make histogram,parabola,bar graphs and piecharts.<br/></p>
                    <p>I have hosted my project on vercel go on bellow link <br/><a href="https://charts-graphs.vercel.app">Charts and graph</a></p>
                <ul>
                    <li>
                        <h3 className='title-p'>Pie Charts</h3>
                        <img class="imgreset" src={piechart}/>
                        <h4>Form for Piechart</h4>
                        <div className="fdiv">
                            <img src={Piform}/>
                            <div>
                             <p>You can fill values in this form like this:-</p>
                                <ol>
                                    <li>Fill the title of Piechart</li><br/>
                                    <li>Fill all numbers(for making of piechart) with single space</li><br/>
                                       <li>Fill all names with one space respectivly to above give <br/>numbers</li><br/>
                                    <li>Fill all respective colors with single space</li><br/>
                                    <li>Total sum of all numbers</li>
                                </ol><br/>
                                <p>After that you can click on draw for drawing and download for<br/> downloading that chart</p>

                            </div>
                        </div>
                    </li><br/>
                    <li>
                        <h3 className='title-p'>Parabola</h3>
                        <img class="imgreset"  src={parabola}/>
                        <h4>Form for Parabola</h4>
                        <div className="fdiv">
                            <img src={paraform}/>
                            <div>
                                <p>You can fill values in this form like this:-</p>
                                <ol>
                                    <li>Constant of x²</li><br/>
                                    <li>Constant of x </li><br/>
                                    <li>Constant value of equation</li><br/>
                                    <li>Cut axis is a unit which show how much<br/> your parabola height</li><br/>
                                    <li>In the above graph fundamental unit is 4 i.e gap numbers</li>
                                </ol><br/>
                                <p>After that you can click on draw for drawing and download for<br/> downloading that chart</p>

                            </div>
                        </div>

                    </li><br/>
                    <li>
                        <h3 className='title-p'>Histogram</h3>
                        <img class="imgreset"  src={Histogram}/>
                        <h4>Form for Histogram</h4>
                        <div className="fdiv">
                            <img   src={Parahist}/>
                            <div>
                                <p>You can fill values in this form like this:-</p>
                                <ol>
                                    <li>First Background color single space then Font color <br/>single space title </li><br/>
                                    <li>Fundametal unit of X line and single space label of x axis </li><br/>
                                    <li>Fundametal unit of Y line and single space label of y axis</li><br/>
                                    <li>How many number you want on X axis</li><br/>
                                    <li>How many number you want on Y axis</li><br/>
                                    <li>Histogram values with single gap</li><br/>
                                    <li>Histogram respective colors with values</li><br/>
                                </ol><br/>
                                <p>After that you can click on draw for drawing and download for<br/> downloading that chart</p>

                            </div>
                        </div>

                    </li><br/>
                    <li>
                        <h3 className='title-p'>BarGraph</h3>
                        <img class="imgreset"  src={Bargraph}/>
                        <h4>Form for BarGraph</h4>
                        <div className="fdiv">
                            <img src={FormBar}/>
                            <div>
                                <p>You can fill values in this form like this:-</p>
                                <ol>
                                    <li>First Background color single space then Font color <br/>single space title </li><br/>
                                    <li>Label of x axis </li><br/>
                                    <li>Fundametal unit of Y line and single space label of y axis</li><br/>
                                    <li>How many bar graph you want (always give more<br/> than you want )</li><br/>
                                    <li>How many number you want on Y axis</li><br/>
                                    <li>BarGraph values with single gap</li><br/>
                                    <li>BarGraph respective names with values</li><br/>
                                    <li>BarGraph respective colors with values</li><br/>
                                </ol><br/>
                                <p>After that you can click on draw for drawing and download for<br/> downloading that chart</p>
                            </div>
                        </div>

                    </li><br/>
                </ul>
                
                </div>
                <div className="box" >
                    <h2>NoteBook</h2>
                    <p>This project have a notebook frontend where ADD,Delete,edit,search and showing all notebook by a button.<br/>
                    All of this are main feachers and a visual calculater for instant calculate with in the website.<br/><br/>
                    I have hosted this project on vercel you can check out link given below:-<br/>
                    <a href="">Notebook</a><p/></p>
                    <ul>
                        <li>
                            <h3 className='title-p'>Feachers</h3>
                            <div className="fdiv">
                                <img src={Feachers}/>
                                <div>
                                    <p>Here,Three main feachers add,search and showing by buttons.</p>
                                    <ol>
                                        <li>By filling form and click on add button we can add notes.</li><br/>
                                        <li>By writing name of notes (first row in form) we can search.</li><br/>
                                        <li>Button on right-top by clicking on that we can show all notes</li><br/>
                                    </ol>
                                </div>
                            </div>
                        </li>
                        <li>
                            <h3 className='title-p'>Notes</h3>
                            <div className="fdiv">
                                <img src={Notes}/>
                                <div>
                                    <p>Notes have edit and delete to do changes inside notes.</p>
                                    <ol>
                                        <li>We have edit button to change in notes</li><br/>
                                        <li>We have delete to delete selected notes.</li><br/>
                                    </ol>
                                </div>
                            </div>
                        </li>
                        <li>
                            <h3 className='title-p'>Calculater</h3>
                            <div className="fdiv">
                                <img src={Calculater}/>
                                <div>
                                    <p>Notes have edit and delete to do changes inside notes.</p>
                                    <ul>
                                        <li>This feacher is usefull for touchscreen user who can calculate by clicking <br/> on numbers button,opraters button and also have clear,back button  </li>
                                        <li>Properly working and very flexible to use.</li>
                                    </ul>
                                </div>
                            </div>

                        </li>

                    </ul>
                </div>
                <div className="box" >
                    <h2>City Weather</h2>
                    <p>In this project anyone can find weather of a city by filling form i.e giving city name and state(if needed). <br/>
                    here we have a animated frontend where clouds,sunny,rain etc are animated and intigrated with open weather api.<br/>
                    A real time animated clock All of this are made by using html canvas.</p>
                    <h3>Here we have animated front pages. Evereything below is animated and works perfectly.</h3><br/>
                    <ul>
                        <li><h4>For Rain</h4><br/>
                        <img class="imgreset"  src={Rain}/></li>
                        <li><h4>For Clouds</h4><br/>
                        <img class="imgreset"  src={cloud}/></li>
                        <li><h4>For sunny</h4><br/>
                        <img class="imgreset"  src={sunny}/></li>
                    </ul><br/>
                    <h3>Bottom of the front page we have all weather information about give city.</h3><br/>
                    <img id="w_bottom" class="imgreset"  src={bottomdiv}/><br/>
                    <h4>Feachers of the lower part of web is as fallows.</h4>
                    <ul>
                        <li>In middle of the frontend we have a form (shown in rain image) by filling name of the city and state (optional)where city is located we can get weather information.</li><br/>
                        <li>At top-left of given image we have two animated temprature measuring device. That gives information about maximum and minimum temprature.</li><br/>
                        <li>From visibility to wind-gust is image bottom of the image value is given.</li><br/>
                        <li>At bottom-right we have two animated clock that give information about sunrise and sunset.</li><br/>
                        <li>At the bottom  Geographical information of the given city</li><br/>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Project