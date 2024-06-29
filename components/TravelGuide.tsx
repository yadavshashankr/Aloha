import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, FlatList } from "react-native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const TravelGuideSection = () => {
    return (
    <View style={styles.travelGuide}>
    <Text style={[styles.travelGuide, styles.spotType]}>
        Travel Guide
    </Text>
    <View style={styles.container}>
    <View style={styles.containerChild} />
    <Text style={[styles.guide, styles.activityType]}>
        {guideData.fullName}
    </Text>
    <Text style={[styles.guideSince, styles.descriptionType]}>
    Guide since {guideData.joiningYear}
    </Text>
    <View style={[styles.button, styles.buttonSpaceBlock]}>
        <Text style={[styles.contact, styles.spotType]}>Contact</Text>
    </View>
    </View>
    <Image
    style={styles.travelGuideChild}
    resizeMode="cover"
    source={guideData.image}
    />
</View>
);
};

const styles = StyleSheet.create({
    travelGuide: {
        bottom: 192,
        lineHeight: 20,
        textAlign: "left",
        color: Color.dark,
        fontFamily: FontFamily.bodyBold,
        left: 0,
        position: "absolute",
      },  
      spotType: {
        fontSize: FontSize.bodyBold_size,
        lineHeight: 20,
      },
      container: {
        height: 176,
        bottom: 0,
        width: 328,
        left: 0,
        position: "absolute",
      },
      travelGuideChild: {
        bottom: 78,
        left: 230,
        width: 74,
        height: 74,
        position: "absolute",
      },
      containerChild: {
        borderRadius: Border.br_5xs,
        height: 176,
        bottom: 0,
        width: 328,
        left: 0,
        position: "absolute",
        backgroundColor: Color.white,
      },
      guide: {
        bottom: 132,
        fontSize: FontSize.header_size,
        width: 211,
        left: 24,
        lineHeight: 20,
        textAlign: "left",
        color: Color.dark,
        paddingTop:5,
        fontFamily: FontFamily.bodyBold,
      },
      activityType: {
        fontFamily: FontFamily.bodyBold,
        position: "absolute",
      },
      guideSince: {
        bottom: 97,
        left: 24,
        fontSize: FontSize.bodyBold_size,
        lineHeight: FontSize.bodyBold_lineHeight,
        textAlign: "left",
        color: Color.dark,
        position: "absolute",
      },
      contact: {
        fontFamily: FontFamily.labelBoldL,
        color: Color.green,
        lineHeight: 20,
        textAlign: "center",
      },
      descriptionType: {
        fontFamily: FontFamily.iBMPlexMonoRegular,
        textAlign: "left",
        color: "#001A1A",
        fontSize: FontSize.bodyBold_size,
      },
      button: {
        bottom: 24,
        borderWidth: 1,
        borderColor: Color.green,
        borderStyle: "solid",
        left: 24,
      },
      buttonSpaceBlock: {
        paddingBottom: Padding.p_2xs,
        paddingTop: Padding.p_4xs,
        justifyContent: "center",
        borderRadius: Border.br_5xs,
        position: "absolute",
        paddingHorizontal: Padding.p_5xl,
        alignItems: "center",
        flexDirection: "row",
      },
})


// Guide data
const guideData = {          
    id: 0,
    title : "Adventure",
    fullName: "Madwin Malone",
    joiningYear: "2012",
    contact: "9999999999",
    image: require("../assets/ellipse-10.png")
  }
export default TravelGuideSection
