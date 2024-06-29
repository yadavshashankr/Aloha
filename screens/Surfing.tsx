import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const Surfing = () => {
  return (
    <View style={styles.surfing}>
      <View style={styles.section}>
        <View style={styles.sectionChild} />
        <View style={[styles.travelGuide, styles.travelGuideLayout]}>
          <Text style={[styles.travelGuide1, styles.mauiTypo]}>
            Travel Guide
          </Text>
          <View style={styles.container}>
            <View style={styles.containerChild} />
            <Text style={[styles.hadwinMalone, styles.hadwinMalonePosition]}>
              Hadwin Malone
            </Text>
            <Text style={[styles.guideSince2012, styles.hawaiiIsTheTypo]}>
              Guide since 2012
            </Text>
            <View style={styles.button}>
              <Text style={[styles.contact, styles.contactTypo]}>Contact</Text>
            </View>
          </View>
          <Image
            style={styles.travelGuideChild}
            resizeMode="cover"
            source={require("../assets/ellipse-10.png")}
          />
        </View>
      </View>
      <View style={[styles.section1, styles.section1Layout]}>
        <Text style={[styles.topSpots, styles.section1Layout]}>Top spots</Text>
        <View style={styles.itemParent}>
          <View style={styles.item}>
            <Text style={[styles.maui, styles.mauiTypo]}>Maui</Text>
            <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require("../assets/image2.png")}
            />
          </View>
          <View style={styles.itemShadowBox}>
            <Text style={[styles.maui, styles.mauiTypo]}>Kauai</Text>
            <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require("../assets/image3.png")}
            />
          </View>
          <View style={styles.itemShadowBox}>
            <Text style={[styles.maui, styles.mauiTypo]}>Honolulu</Text>
            <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require("../assets/image4.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.hawaiiIsThe, styles.hawaiiIsTheTypo]}>
        Hawaii is the capital of modern surfing. This group of Pacific islands
        gets swell from all directions, so there are plenty of pristine surf
        spots for all.
      </Text>
      <View style={[styles.head, styles.headLayout]}>
        <Image
          style={[styles.imageIcon3, styles.headLayout]}
          resizeMode="cover"
          source={require("../assets/image5.png")}
        />
        <Text style={[styles.surfing1, styles.contactTypo]}>Surfing</Text>
      </View>
      <View style={styles.topBar}>
        <Image
          style={styles.alohaIcon}
          resizeMode="cover"
          source={require("../assets/aloha.png")}
        />
      </View>
      <View style={[styles.navBar, styles.navBarShadowBox]}>
        <View style={styles.menuItemSpaceBlock}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon1.png")}
          />
          <Text style={styles.label}>Home</Text>
        </View>
        <View style={[styles.menuItemNative1, styles.menuItemSpaceBlock]}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/surfing1.png")}
          />
          <Text style={[styles.label1, styles.labelTypo]}>Surfing</Text>
        </View>
        <View style={styles.menuItemSpaceBlock}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/nightlife.png")}
          />
          <Text style={[styles.label2, styles.labelTypo]}>Hula</Text>
        </View>
        <View style={styles.menuItemSpaceBlock}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/filter-hdr.png")}
          />
          <Text style={[styles.label2, styles.labelTypo]}>Vulcano</Text>
        </View>
      </View>
      <View style={[styles.button1, styles.navBarShadowBox]}>
        <Text style={[styles.bookATrip, styles.contactTypo]}>Book a trip</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  travelGuideLayout: {
    width: 328,
    left: 16,
  },
  mauiTypo: {
    textAlign: "left",
    fontWeight: "700",
    fontFamily: FontFamily.header,
  },
  hadwinMalonePosition: {
    left: 24,
    lineHeight: 20,
  },
  hawaiiIsTheTypo: {
    fontFamily: FontFamily.body,
    textAlign: "left",
    color: Color.dark,
    fontSize: FontSize.body_size,
    position: "absolute",
  },
  contactTypo: {
    textAlign: "center",
    fontWeight: "700",
  },
  section1Layout: {
    width: 344,
    position: "absolute",
  },
  headLayout: {
    height: 240,
    width: 360,
    left: 0,
    position: "absolute",
  },
  navBarShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  menuItemSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    height: 72,
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.white,
  },
  labelTypo: {
    fontFamily: FontFamily.iBMPlexMonoSemiBold,
    fontWeight: "600",
    marginTop: 4,
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    alignSelf: "stretch",
    textAlign: "center",
  },
  sectionChild: {
    backgroundColor: Color.light,
    bottom: 0,
    height: 332,
    width: 360,
    left: 0,
    position: "absolute",
  },
  travelGuide1: {
    bottom: 192,
    color: Color.dark,
    lineHeight: 20,
    fontSize: FontSize.body_size,
    left: 0,
    position: "absolute",
  },
  containerChild: {
    borderRadius: Border.br_5xs,
    height: 176,
    width: 328,
    bottom: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  hadwinMalone: {
    bottom: 132,
    fontSize: FontSize.header_size,
    width: 211,
    textAlign: "left",
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.dark,
    position: "absolute",
  },
  guideSince2012: {
    bottom: 97,
    left: 24,
    lineHeight: 20,
  },
  contact: {
    fontFamily: FontFamily.labelBoldL,
    color: Color.green,
    lineHeight: 20,
    fontSize: FontSize.body_size,
  },
  button: {
    bottom: 24,
    borderWidth: 1,
    paddingBottom: Padding.p_2xs,
    paddingTop: Padding.p_4xs,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: Color.green,
    borderStyle: "solid",
    left: 24,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  container: {
    height: 176,
    width: 328,
    bottom: 0,
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
  travelGuide: {
    bottom: 80,
    height: 212,
    position: "absolute",
  },
  section: {
    bottom: 72,
    height: 332,
    width: 360,
    left: 0,
    position: "absolute",
  },
  topSpots: {
    top: 0,
    textAlign: "left",
    fontWeight: "700",
    fontFamily: FontFamily.header,
    color: Color.dark,
    lineHeight: 20,
    fontSize: FontSize.body_size,
    left: 0,
  },
  maui: {
    color: Color.green,
    lineHeight: 20,
    fontSize: FontSize.body_size,
  },
  imageIcon: {
    width: 120,
    height: 63,
  },
  item: {
    paddingLeft: Padding.p_base,
    borderRadius: Border.br_9xs,
    shadowColor: "rgba(0, 128, 128, 0.16)",
    justifyContent: "space-between",
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    alignItems: "center",
    flexDirection: "row",
    width: 328,
    backgroundColor: Color.white,
  },
  itemShadowBox: {
    marginTop: 8,
    paddingLeft: Padding.p_base,
    justifyContent: "space-between",
    overflow: "hidden",
    borderRadius: Border.br_9xs,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 128, 128, 0.16)",
    alignItems: "center",
    flexDirection: "row",
    width: 328,
    backgroundColor: Color.white,
  },
  itemParent: {
    top: 36,
    left: 0,
    position: "absolute",
  },
  section1: {
    top: 520,
    height: 241,
    left: 16,
    width: 344,
  },
  hawaiiIsThe: {
    top: 360,
    lineHeight: 24,
    width: 328,
    left: 16,
  },
  imageIcon3: {
    top: 0,
  },
  surfing1: {
    top: 94,
    left: 1,
    fontSize: 40,
    width: 358,
    fontFamily: FontFamily.header,
    textAlign: "center",
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
    top: 0,
    paddingHorizontal: Padding.p_5xl,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  icon: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  label: {
    marginTop: 4,
    lineHeight: 16,
    fontSize: FontSize.size_3xs,
    alignSelf: "stretch",
    textAlign: "center",
    color: Color.dark,
    fontFamily: FontFamily.header,
    fontWeight: "700",
  },
  label1: {
    color: Color.green,
  },
  menuItemNative1: {
    borderBottomWidth: 4,
    borderColor: Color.green,
    borderStyle: "solid",
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    height: 72,
  },
  label2: {
    color: Color.dark,
  },
  navBar: {
    shadowColor: "rgba(81, 81, 224, 0.24)",
    elevation: 16,
    shadowRadius: 16,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    bottom: 0,
    width: 360,
    left: 0,
  },
  bookATrip: {
    color: Color.white,
    fontFamily: FontFamily.header,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.body_size,
  },
  button1: {
    marginLeft: -164,
    bottom: 88,
    left: "50%",
    shadowColor: "rgba(7, 56, 56, 0.8)",
    shadowRadius: 8,
    elevation: 8,
    backgroundColor: Color.green,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    paddingBottom: Padding.p_2xs,
    paddingTop: Padding.p_4xs,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_5xs,
    width: 328,
  },
  surfing: {
    width: "100%",
    height: 1245,
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Surfing;
