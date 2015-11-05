import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
  city: require("./city.jpg"),
  kat: require("./kat.png"),
  logo: require("./formidable-logo.svg"),
  devfest: require("./devfest.png"),
  flux: require("./flux-diagram.png"),
  redux1: require("./redux-1.png"),
  redux2: require("./redux-2.png"),
  redux3: require("./redux-3.png"),
  redux4: require("./redux-4.png"),
};

preloader([images.city, images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["slide"]} bgImage={images.devfest.replace("/", "")} bgDarken={0}>

        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Redux + React
          </Heading>
          <Appear>
            <Heading fit caps>Surtout Redux en fait</Heading>
          </Appear>
          <Appear>
            <Heading textColor="black" fit caps>Axel CATELAND @catelandaxel</Heading>
          </Appear>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="bash"
            source={require("raw!./deck.example")}
            margin="20px auto"/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black">
          <Appear><Heading fit>Pas un framework</Heading></Appear>
          <Appear><Heading fit>Un pattern</Heading></Appear>
          <Appear><Heading fit>Une librairie</Heading></Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Flux
          </Heading>
          <Image src={images.flux.replace("/", "")} width={640}/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Mais alors pourquoi redux ?
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black">
          <Appear>
            <Heading size={1} caps lineHeight={1} textColor="primary">
              Hot Loading
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps lineHeight={1} textColor="primary">
              Time travelling
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps lineHeight={1} textColor="primary">
              Plugins
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Hot Loading
          </Heading>
          <List textColor="primary">
            <ListItem><Appear fid="1">Separer les reducers du store</Appear></ListItem>
            <ListItem><Appear fid="2">Mutation = pure function</Appear></ListItem>
            <ListItem><Appear>Composants intelligents</Appear></ListItem>
            <ListItem><Appear>Composants simples</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Time travelling
          </Heading>
          <List textColor="primary">
            <ListItem><Appear fid="1">Store immutable</Appear></ListItem>
            <ListItem><Appear fid="2">Reducer copie l'état avec les mutations</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Plugins
          </Heading>
          <List textColor="primary">
            <ListItem><Appear fid="1">Pas de monkey patching</Appear></ListItem>
            <ListItem><Appear fid="2">Store wrappable</Appear></ListItem>
            <ListItem><Appear fid="3">Dispatch wrappable</Appear></ListItem>
            <ListItem><Appear>Un seul store !</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black">
          <Image src={images.redux1.replace("/", "")} width={640}/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="black">
          <Image src={images.redux2.replace("/", "")} width={640}/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="black">
          <Image src={images.redux3.replace("/", "")} width={640}/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="black">
          <Image src={images.redux4.replace("/", "")} width={640}/>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black">
          <Heading fit>API peu complexe</Heading>
          <Heading fit>Librarie légère</Heading>
          <Heading fit>Framework agnostique</Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Store api
          </Heading>
          
          <List textColor="primary">
            <ListItem><Appear fid="1">getState()</Appear></ListItem>
            <ListItem><Appear fid="2">dispatch(action)</Appear></ListItem>
            <ListItem><Appear fid="2">subscribe(listener)</Appear></ListItem>
            <ListItem><Appear fid="2">replaceReducer(nextReducer)</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Utility API
          </Heading>
          <List textColor="primary">
            <ListItem><Appear fid="1">createStore(reducer, [initialState])</Appear></ListItem>
            <ListItem><Appear fid="2">combineReducers(reducers)</Appear></ListItem>
            <ListItem><Appear fid="2">applyMiddleware(...middlewares)</Appear></ListItem>
            <ListItem><Appear fid="2">bindActionCreators(actionCreators, dispatch)</Appear></ListItem>
            <ListItem><Appear fid="2">compose(...functions)</Appear></ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="black">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            Action !
          </Heading>
        </Slide>
        
      </Deck>
    );
  }
}
