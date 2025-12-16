import paraformula from "./images/para_formula.jpg"
function Skills(){
    return(
        <div className="project-divs">
            <div className="box">
                <h2>Html Canvas</h2>
                <p>here i have created piechart rect boxes(with color) and with thier respective information.
                   "color[v]" and "arr" extracted from form and arranged in array so here we can use.<br/>
                   As given bellow I have created piechart by rotating canvas and filling with very fine line and extracted all information from from and convert into array and then use at canvas.<br/>
                    here is github code link:-<a href="https://github.com/rishu0511/charts_graphs/blob/main/src/pie_canvas.js">Piechart</a> </p>
                <div class="codebox">
                   <p class="codepara">{"for(let v = 0; v <= len-1; v++){"}<br/>  &nbsp;&nbsp;&nbsp; {"ctx.fillStyle = color[v];"}<br/>&nbsp;&nbsp;&nbsp; {"ctx.fillRect(380,60+v*25,13,13);"}<br/>&nbsp;&nbsp;&nbsp; {
                        "ctx.font = "+'"15px fantasy"'}<br/>&nbsp;&nbsp;&nbsp; {
                        "ctx.fillStyle ="+'"#344955"'}<br/>&nbsp;&nbsp;&nbsp; {
                        " ctx.fillText(name[v]+"+'"  "'+"+arr[v]/2+"+'"%"'+",400,70+v*25)"}<br/>{"}"}</p>
                </div><br/>
                <p>As given bellow an image which shows converting a parabola equation into control points of biezare curve. so I take constants and fundamental units of quadratic equation and built it on canvas.<br/>
                    In code extracted constants from form and convert it into control points of biezer curve. all three control points (x1,x2,x3 with there respective  y value) given bellow and real code is on my github page.<br/>
                    here is github code link:-<a href="https://github.com/rishu0511/charts_graphs/blob/main/src/form_para.js">Parabola</a>
                </p>
                <div class="codebox">
                    <img src={paraformula} height={250}/>
                    <p class="codepara">
                        {"// x1 and x2"}<br/>
                        {"const vartex_x = -B/(2*A)"}<br/>
                        {"setvx(vartex_x)"}<br/>
                        {" const D = (B*B)-((4*A)*C)"}<br/>
                        {"const vertex_y = -D/(4*A)"}<br/>
                        {" setvy(vertex_y)"}<br/>
                        {"const x3val = parseFloat(vartex_x) + parseFloat(input.cut_val)"}<br/>
                        {" setx3(x3val)"}<br/>
                        {"const x1val = parseFloat(vartex_x) - parseFloat(input.cut_val)"}<br/>
                        {" setx1(x1val)"}<br/>
                        {"y1 and y2"}<br/>
                        {" const ct_vrtx_y1 = parseFloat(A*(x1*x1)) +parseFloat((B*x1))+parseInt(C)"}<br/>
                        {" sety1(ct_vrtx_y1)"}<br/>
                        {"const ct_vrtx_y3 = parseFloat(A*(x3*x3)) +parseFloat((B*x3))+parseInt(C)"}<br/>
                        {"sety3(ct_vrtx_y3)"}<br/>
                        {"const bizeex = (parseFloat(x1)+parseFloat(x3))/2"}<br/>
                        {"setbx(bizeex)"}<br/>
                        {" const consbiz =parseFloat(((2*A)*x1)) +parseInt(B)"}<br/>
                        {"const bizyval = (x3-x1)/2"}<br/>
                        {" const bizy = parseFloat(bizyval*consbiz)+parseFloat(y1)"}<br/>
                        {"setby(bizy)"}<br/>
                    </p>
                </div>
                <p>here I have extracted all values like color array,rects heights array, distance between xgaps and ygaps from form and then 
                    drawn all bars on canvas as given bellow.<br/>
                    just like that I have woked on lebels to names and drawing of cartesian plan as well.<br/><br/>
                    As given above i have worked on histogram as well <br/>
                    here is the gihub code link:- <a href="https://github.com/rishu0511/charts_graphs/blob/main/src/canvas_b.js">Bargraph</a> <a href="https://github.com/rishu0511/charts_graphs/blob/main/src/canvas_h.js">histogram</a>
                </p>
                <div class="codebox">
                    <p class="codepara">
                        {" const len  = rects.length"}<br/>
                        {"for(let i=0;i<=len;i++){"}<br/>&nbsp;&nbsp;&nbsp;
                        {"ctx.fillStyle = color[i]"}<br/>&nbsp;&nbsp;&nbsp;      
                        {"ctx.fillRect(-((550/ngx)*i)*1.2-20,1,-(550/ngx),((550/ngy)/yg)*rects[i])}"}<br/>
                        {"}"}
                    </p>
                </div>
                <h2>My Animations</h2>
                <h4>Clouds</h4>
                <p>here I have animatate a cloud with real time and it working perfectly.<br/>
                I have drawn clouds in a function and call multiple time for multiple clouds and changing there x and y value for animation.<br/>
                here is github code:-<a href={"https://github.com/rishu0511/client/blob/main/src/canvas_c.js"}>Clouds</a></p>
                <h4>Rain</h4>
                <p>here I have make  a multiple small circle and changing its x and y position to animate it works perfectly.<br/>
                here is github code:-<a href="https://github.com/rishu0511/client/blob/main/src/canvas_r.js">Rain</a></p>
                <h4>Graphics</h4>
                <p>First of all I have drawn a temprature measuring clock which update with real time value update(given by openweather api).<br/>
                here we have github code:-<a href="https://github.com/rishu0511/client/blob/main/src/box_can.js">temprature measuring clocks</a><br/><br/>
                A graphics of showing sunset and sunrise clock with taking time values from open weather api <br/>
                here is github code:-<a href="https://github.com/rishu0511/client/blob/main/src/clock.js">Clock</a></p>
                <h2>Api integration and geolocation</h2>
                <p>Here I have extracted form values and finding its latitude and longitude.(by using axios)<br/>
                then giving it to openweather api url for weather data<br/>
                here is github code:-<a href={"https://github.com/rishu0511/client/blob/main/server/server.js"}>Api integration</a> </p>
            </div>
        </div>
    )
}
export default Skills