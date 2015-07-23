import __fetch from "isomorphic-fetch";
import React from "react";
import InlineCss from "react-inline-css";
import Transmit from "react-transmit";
import co from "co";
// require("./Test1.less")
if(__CLIENT__){
    require("./Test.less");
}

/**
 * Main React application entry-point for both the server and client.
 */

var Nav = React.createClass({
    render: ()=> {
        return <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#navbar"
                            aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">wkc project</a>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    }
});

function sleep(cb ,time){
    setTimeout(cb,time)
}

//  + Math.random()/3
var App1 = React.createClass({
    componentDidMount(){
        var sel = document.querySelector.bind(document)
        var sela = document.querySelectorAll.bind(document)
        var canvas = sel('#canvas')
        var context = canvas.getContext('2d')
        context.fillStyle = '#eeeeef'
        context.fillRect(0, 0, 900, 600)
        
        var dig = Math.PI / 15 * 11
        var dx = 300, dy = 300, s = 200
        context.beginPath()
        context.fillStyle  = "rgb(100,255,100)"
        context.strokeStyle = "rgb(0,0,100)"
        var x = 0, y = 1;
        for(var i=0; i<30; i++){
            x = Math.sin(i*dig + Math.random()/3)
            y = Math.cos(i*dig + Math.random()/3) 
            context.lineTo(dx + x*s, dy + y*s)
            context.fill()
            context.stroke()
        }
        context.closePath()
    },
    render: ()=> {
        return (
            <div className="row">
                <canvas id="canvas" width="900px" height="600px"></canvas>
            </div>
        )
    }
});
// canvas currentTransform direction fillStyle filter font globalAlpha globalCompositeOperation imageSmoothingEnabled lineCap lineDashOffset lineJoin lineWidth miterLimit shadowBlur shadowColor shadowOffsetX shadowOffsetY strokeStyle textAlign textBaseline addHitRegion arc arcTo asyncDrawXULElement beginPath bezierCurveTo clearHitRegions clearRect clip closePath createImageData createLinearGradient createPattern createRadialGradient drawFocusIfNeeded drawImage drawWindow ellipse fill fillRect fillText getImageData getLineDash isPointInPath isPointInStroke lineTo measureText moveTo putImageData quadraticCurveTo rect removeHitRegion resetTransform restore rotate save scale scrollPathIntoView setLineDash setTransform stroke strokeRect strokeText transform translate

//HTML5 Canvas 绘制渐变图形
var App4 = React.createClass({
    componentDidMount(){
        var sel = document.querySelector.bind(document)
        var sela = document.querySelectorAll.bind(document)
        var canvas = sel('#canvas')
        var ctx = canvas.getContext('2d')
        ctx.fillStyle = '#eeeeef'
        ctx.fillRect(0, 0, 900, 600)
        var g1 = ctx.createLinearGradient(0,0,0,300)
        g1.addColorStop(0,"rgb(255,255,0")
        g1.addColorStop(1,"rgb(0,255,255")
        ctx.fillStyle = g1
        ctx.fillRect(0,0,500,500)
        
    },
    render: ()=> {
        return (
            <div className="row">
                <canvas id="canvas" width="900px" height="600px"></canvas>
            </div>
        )
    }
});


var BrowseHappy = React.createClass({
    render:()=>{
        return (
            <div>
                <p className="browsehappy">
                <img src="http://meiqia-s.b0.upaiyun.com/appsite_static/img_IE/icon_scream_cat.png"/>
                喵喵喵，你的网页浏览器已经<strong>过辅导费期啦</strong> ！ 请
                <a href="http://browsehappy.com/">狗肉馆升级你的浏览器</a>
                以改进网页浏览体验吧。
                </p>
            </div>
            )
    }
})

var Header = React.createClass({
    render:()=>{
        return (
            <div>
                
            </div>
            )
    }
})

class Main extends React.Component {
    render() {
        return (
            <div>
                <BrowseHappy/>
                <Header/>
            </div>
        )
    }

}

/**
 * Use Transmit to query and return GitHub stargazers as a Promise.
 */
export default Transmit.createContainer(Main, {});


