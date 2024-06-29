import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Highlights = () => {
  return (
    <View style={styles.highlights}>
      <View style={styles.scroll}>
        <View style={styles.tile1}>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../assets/image.png")}
          />
          <View style={styles.text}>
            <View>
              <Text style={styles.surfing}>Surfing</Text>
              <Text
                style={[
                  styles.bestHawaiianIslands,
                  styles.bestHawaiianIslandsTypo,
                ]}
              >
                Best Hawaiian islands for surfing.
              </Text>
            </View>
            <View style={styles.bottom}>
              <Image
                style={styles.bottomChild}
                resizeMode="cover"
                source={require("../assets/group-11.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.tileShadowBox}>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-6.png")}
          />
          <View style={styles.text}>
            <View>
              <Text style={styles.surfing}>Hula</Text>
              <Text
                style={[
                  styles.bestHawaiianIslands,
                  styles.bestHawaiianIslandsTypo,
                ]}
              >
                Try it yourself.
              </Text>
            </View>
            <View style={styles.bottom}>
              <Image
                style={styles.bottomChild}
                resizeMode="cover"
                source={require("../assets/group-11.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.tileShadowBox}>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-61.png")}
          />
          <View style={styles.text}>
            <View style={styles.top2}>
              <Text style={styles.surfing}>Vulcanoes</Text>
              <Text
                style={[
                  styles.volcanicConditionsCan,
                  styles.bestHawaiianIslandsTypo,
                ]}
              >
                Volcanic conditions can change at any time.
              </Text>
            </View>
            <View style={styles.bottom}>
              <Image
                style={styles.bottomChild}
                resizeMode="cover"
                source={require("../assets/group-11.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bestHawaiianIslandsTypo: {
    marginTop: 16,
    color: Color.dark,
    fontFamily: FontFamily.body,
    fontSize: FontSize.bodyBold_size,
    textAlign: "left",
    lineHeight: 20,
  },
  imageIcon: {
    width: 368,
    height: 170,
  },
  surfing: {
    fontSize: FontSize.header_size,
    fontWeight: "700",
    fontFamily: FontFamily.bodyBold,
    color: Color.green,
    textAlign: "left",
    lineHeight: 20,
  },
  bestHawaiianIslands: {
    width: 318,
  },
  bottomChild: {
    width: 40,
    height: 40,
  },
  bottom: {
    justifyContent: "flex-end",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  text: {
    justifyContent: "space-between",
    padding: Padding.p_5xl,
    alignSelf: "stretch",
    height: 170,
  },
  tile1: {
    overflow: "hidden",
    width: 304,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 128, 128, 0.16)",
  },
  tileShadowBox: {
    marginLeft: 16,
    overflow: "hidden",
    width: 304,
    backgroundColor: Color.white,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 128, 128, 0.16)",
  },
  volcanicConditionsCan: {
    alignSelf: "stretch",
  },
  top2: {
    alignSelf: "stretch",
  },
  scroll: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
    width: 944,
  },
  highlights: {
    height: 340,
    width: 944,
  },
});

export default Highlights;
