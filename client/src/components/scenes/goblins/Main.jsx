import React from "react";
import styled from "react-emotion";
import Plx from "../../common/Parallax";
import scrollPattern from "./img/scrollPattern.gif";
import scrollTop from "./img/scrollTop.gif";
import frame from "./img/Frame.gif";


const imgPath = "./img/";

const Container = styled("div")`
  width: 100%;
  overflow: hidden;
`;

const BlueGradient = styled("div")`
  background-size: 100% auto;
  z-index: -1;
  position: relative;
  width: 100%;
  /* Permalink - use to edit gradient http://colorzilla.com/gradient-editor/#000203+0,000408+14,00080e+19,02141f+30,052438+41,06263a+45,052438+45,052438+55,052236+56,052234+61,041d2d+69,010e17+83,000104+92,000201+92,000000+100 */
  background: linear-gradient(to bottom, #000203 0%,#000408 14%,#00080e 19%,#02141f 30%,#052438 41%,#06263a 45%,#052438 45%,#052438 55%,#052236 56%,#052234 61%,#041d2d 69%,#010e17 83%,#000104 92%,#000201 92%,#000000 100%);
`

const Frame = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border: 200px solid transparent;
  border-image: url(${frame}) 400 round;
  height: 100%;
  width: 100%;
`

const Scroll = styled("div")`
    margin-left: auto;
    margin-right: auto;
    padding: 15% 0 0 0;
    width: 70%;
`;

const ScrollTop = styled("div")`
  background-image: url(${scrollTop});
  background-size: 100% 100%;
  margin: 5% 0 0 0;
  width: 100%;
  height: 58px;
`

const ScrollPattern = styled("div")`
  background-image: url(${scrollPattern});
  background-repeat: repeat-y;
  background-size: 100% auto;
  width: 100%;
`

const Stump = styled("img")`
  position: relative;
  width: 100%;
  bottom: 0px;
`

const Content = styled("div")`
  width: 80%;
  margin: 0 auto 0 auto;
  padding-bottom: 50vw;
  text-align: center;
`;

const PreviewFormats = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormatImage = styled("img")`
  width: 18%;
`;

const ClickToDownload = styled("img")`
  width: 40%;
`;

const BuyButton = styled("img")`
  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const Title = styled("img")`
  display: block;
  width: 100%;
`

const About = styled("div")`
  padding-top: 1em;
`

const Preview = styled("div")`
`

const Buy = styled("div")`
`

const Author = styled("div")`
`

const MainPage = props => (
  <Container>
    <BlueGradient>
      <Scroll>
        <Title src={require(imgPath + "Title.gif")}/>
        <ScrollTop/>
        <ScrollPattern>
          <Content>
            <About>
              <h1>ABOUT</h1>
              <p>Anny's parents are dead. In an instant, she is alone, forced to face an
                impossible question that has shadowed her existence since she was a child. But
                the answer to this question will not be found above ground.</p>
              <p>Far beneath the surface, there is another world, a secret world. A nocturnal
                society where magic is not dead, and where the fine line between fact and fairy
                tale is dangerously undefined.</p>
              <p>Amidst inexplicable wonders and nightmarish monsters, Anny will discover the
                truth about her past. Far from the city and all that she knows, deep below
                ground in the Goblin Market.</p>
            </About>
            <Preview>
              <h1>PREVIEW</h1>
              <p>Read the first three chapters!</p>
              <PreviewFormats>
                <FormatImage src={require(imgPath + "epub.png")}/>
                <ClickToDownload src={require(imgPath + "ctd.png")}/>
                <FormatImage src={require(imgPath + "kindle.png")}/>
              </PreviewFormats>
            </Preview>
            <Buy>
              <h1>BUY THE BOOK</h1>
              <p>Paperbacks available on Amazon!</p>
              <BuyButton src={require(imgPath + "buy.png")}/>
            </Buy>
            <Author>
              <h1>
                ABOUT THE AUTHOR
              </h1>
              <a>
                Visit M.R. Eastwood's author profile page!
              </a>
            </Author>
          </Content>
        </ScrollPattern>
        <Stump src={require(imgPath + "Stump.png")}/>
      </Scroll>
      <Frame/> 
    </BlueGradient>
  </Container>
);

export default MainPage;
