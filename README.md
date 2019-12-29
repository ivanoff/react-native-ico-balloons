# Balloons Icons for React Native

### react-native-ico-balloons

26 Icons

<img src="./static/speech-bubble-1.png" alt="speech-bubble-1" width="200" height="200"> <img src="./static/speech-bubble-10.png" alt="speech-bubble-10" width="200" height="200"> <img src="./static/speech-bubble-11.png" alt="speech-bubble-11" width="200" height="200">

## List of icons

- [List of Balloons Icons](http://ico.simpleness.org/pack/balloons)

## Usage

```
import Icon from 'react-native-ico-balloons';


// Inside some view component
render() {
    return (
        <>
          <Icon name="speech-bubble-1" />
          <Icon name="speech-bubble-10" height="40" width="40" />
          <Icon name="speech-bubble-11" color="red" />
        </>
    );
}

```

## Installation

#### yarn

```bash
yarn add react-native-ico-balloons react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-balloons react-native-svg
```

### Link react-native-svg

```bash
react-native link react-native-svg
```

### pod install ( for iOS )

```
cd ios && pod install && cd ..
```

## API

### <Icon name [color width height ...rest] />

Returns a SvgXml icon by name and group.

 name | optional | default value | description | examples
------|----------|---------------|-------------|---------
name | no |  | name of icon | "speech-bubble-1"
color | yes | | line color, css style | "#00ff00", "#0f0", "green"
width | yes | 20 | width of the icon | 40
height | yes | 20 | height of the icon | 40
...rest | no | | other props | style={{backgroundColor: "#00f"}}

## Icons Made by

[Dave Gandy](https://www.flaticon.com/authors/dave-gandy)

## Created by

Dimitry Ivanov <2@ivanoff.org.ua> # curl -A cv ivanoff.org.ua
