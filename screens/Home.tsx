import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.highlights}>
        <Text style={[styles.highlights1, styles.surfingFlexBox]}>
          Highlights
        </Text>
        <View style={styles.scroll}>
          <View style={styles.tile1}>
            <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require("../assets/image.png")}
            />
            <View style={styles.text}>
              <View>
                <Text style={[styles.surfing, styles.labelTypo1]}>Surfing</Text>
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
                <Text style={[styles.surfing, styles.labelTypo1]}>Hula</Text>
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
                <Text style={[styles.surfing, styles.labelTypo1]}>
                  Vulcanoes
                </Text>
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
      <View style={[styles.head, styles.headLayout]}>
        <Image
          style={[styles.imageIcon1, styles.headLayout]}
          resizeMode="cover"
          source={require("../assets/image1.png")}
        />
        <Text style={styles.welcomeToHawaiiContainer}>
          <Text style={styles.welcomeToHawaiiContainer1}>
            {`Welcome
to`}
            {` `}Hawaii
          </Text>
        </Text>
      </View>
      <View style={[styles.topBar, styles.topBarFlexBox]}>
        <Image
          style={styles.alohaIcon}
          resizeMode="cover"
          source={require("../assets/aloha1.png")}
        />
      </View>
      <View style={styles.navBar}>
        <View style={[styles.menuItemNative, styles.menuItemSpaceBlock]}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Home</Text>
        </View>
        <View style={styles.menuItemSpaceBlock}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/surfing.png")}
          />
          <Text style={[styles.label1, styles.labelTypo]}>Surfing</Text>
        </View>
        <View style={styles.menuItemSpaceBlock}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/nightlife.png")}
          />
          <Text style={[styles.label1, styles.labelTypo]}>Hula</Text>
        </View>
        <View style={styles.menuItemSpaceBlock}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/filter-hdr.png")}
          />
          <Text style={[styles.label1, styles.labelTypo]}>Vulcano</Text>
        </View>
      </View>
      <View style={[styles.button, styles.topBarFlexBox]}>
        <Text style={styles.bookATrip}>Book a trip</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  surfingFlexBox: {
    textAlign: "left",
    lineHeight: 20,
  },
  labelTypo1: {
    color: Color.green,
    fontFamily: FontFamily.header,
    fontWeight: "700",
  },
  bestHawaiianIslandsTypo: {
    marginTop: 16,
    fontFamily: FontFamily.body,
    textAlign: "left",
    color: Color.dark,
    lineHeight: 20,
    fontSize: FontSize.body_size,
  },
  headLayout: {
    height: 480,
    width: 360,
    left: 0,
    position: "absolute",
  },
  topBarFlexBox: {
    paddingHorizontal: Padding.p_5xl,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  menuItemSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    height: 72,
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.white,
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  labelTypo: {
    marginTop: 4,
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    alignSelf: "stretch",
  },
  highlights1: {
    color: Color.dark,
    fontFamily: FontFamily.header,
    fontWeight: "700",
    fontSize: FontSize.body_size,
    textAlign: "left",
    lineHeight: 20,
    left: 0,
    top: 0,
    width: 358,
    position: "absolute",
  },
  imageIcon: {
    width: 368,
    height: 170,
  },
  surfing: {
    fontSize: FontSize.header_size,
    textAlign: "left",
    lineHeight: 20,
    color: Color.green,
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
    padding: Padding.p_5xl,
    justifyContent: "space-between",
    alignSelf: "stretch",
    height: 170,
  },
  tile1: {
    width: 304,
    elevation: 16,
    shadowRadius: 16,
    shadowColor: "rgba(0, 128, 128, 0.16)",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  tileShadowBox: {
    marginLeft: 16,
    width: 304,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 128, 128, 0.16)",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  volcanicConditionsCan: {
    alignSelf: "stretch",
  },
  top2: {
    alignSelf: "stretch",
  },
  scroll: {
    top: 44,
    width: 344,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  highlights: {
    top: 600,
    left: 16,
    height: 384,
    width: 358,
    position: "absolute",
  },
  imageIcon1: {
    top: 0,
  },
  welcomeToHawaiiContainer1: {
    width: "100%",
  },
  welcomeToHawaiiContainer: {
    top: 156,
    fontSize: FontSize.size_37xl,
    lineHeight: 56,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    width: 360,
    fontFamily: FontFamily.header,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  head: {
    top: 80,
  },
  alohaIcon: {
    width: 94,
    height: 35,
  },
  topBar: {
    width: 359,
    height: 80,
    paddingVertical: 0,
    justifyContent: "space-between",
    left: 0,
    top: 0,
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.white,
  },
  icon: {
    overflow: "hidden",
  },
  label: {
    color: Color.green,
    fontFamily: FontFamily.header,
    fontWeight: "700",
  },
  menuItemNative: {
    borderStyle: "solid",
    borderColor: Color.green,
    borderBottomWidth: 4,
  },
  label1: {
    fontWeight: "600",
    fontFamily: FontFamily.iBMPlexMonoSemiBold,
    color: Color.dark,
  },
  navBar: {
    bottom: 0,
    shadowColor: "rgba(81, 81, 224, 0.24)",
    width: 360,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  bookATrip: {
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.header,
    fontWeight: "700",
    lineHeight: 20,
    fontSize: FontSize.body_size,
  },
  button: {
    marginLeft: -164,
    bottom: 88,
    left: "50%",
    shadowColor: "rgba(7, 56, 56, 0.8)",
    shadowRadius: 8,
    elevation: 8,
    backgroundColor: Color.green,
    width: 328,
    justifyContent: "center",
    paddingTop: Padding.p_4xs,
    paddingBottom: Padding.p_2xs,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    paddingHorizontal: Padding.p_5xl,
  },
  home: {
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Home;
