import React, { Component } from 'react';
import { AdMobBanner, AdMobInterstitial, PublisherBanner } from 'react-native-admob';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';


AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
AdMobInterstitial.setTestDeviceID('EMULATOR');
//AdMobInterstitial.setAdUnitID('ca-app-pub-8814644486029059/7718152351')
//AdMobInterstitial.setTestDeviceID('EMULATOR')

class AdMob extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            bannerSize: 'smartBannerPortrait',
        };
        this.setBannerSize = this.setBannerSize.bind(this);
    }

    componentDidMount() {

        //AdMobInterstitial.requestAd(AdMobInterstitial.showAd)
        AdMobInterstitial.addEventListener('interstitialDidLoad',
        () => console.log('interstitialDidLoad event'));
        AdMobInterstitial.addEventListener('interstitialDidClose',
        this.interstitialDidClose);
        AdMobInterstitial.addEventListener('interstitialDidFailToLoad',
        () => console.log('interstitialDidFailToLoad event'));
        AdMobInterstitial.addEventListener('interstitialDidOpen',
        () => console.log('interstitialDidOpen event'));
        AdMobInterstitial.addEventListener('interstitialWillLeaveApplication',
        () => console.log('interstitalWillLeaveApplication event'));

        //AdMobInterstitial.requestAd((error) => error && console.log(error));
        AdMobInterstitial.requestAd(AdMobInterstitial.showAd)
    }

    componentWillUnmount() {
        AdMobInterstitial.removeAllListeners();
    }

    interstitialDidClose() {
        console.log('interstitialDidClose event');
        AdMobInterstitial.requestAd((error) => error && console.log(error));
    }

    showInterstital() {
        AdMobInterstitial.showAd((error) => error && console.log(error));
    }

    setBannerSize() {
        const { bannerSize } = this.state;
        this.setState({
        bannerSize: bannerSize === 'smartBannerPortrait' ?
            'mediumRectangle' : 'smartBannerPortrait',
        });
    }
    componentWillUnmount() {
        AdMobInterstitial.removeAllListeners();
    }



    render() {
        const { bannerSize } = this.state;
        return <View>
            <TouchableHighlight>
                <Text onPress={this.showInterstital} style={styles.button}>
                Show interstital and preload next
                </Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text onPress={this.setBannerSize} style={styles.button}>
                Set banner size to {bannerSize === 'smartBannerPortrait' ?
                    'mediumRectangle' : 'smartBannerPortrait'}
                </Text>
            </TouchableHighlight>        
        </View>;
    }
}


const styles = StyleSheet.create({
    container: {
        flex :1,
        backgroundColor: "#f5f5f5"
    },
    content :{
        flex: 1,
        paddingTop: 60
    }
});

export default AdMob;