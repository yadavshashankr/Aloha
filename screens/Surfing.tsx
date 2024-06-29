import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, FlatList, TouchableNativeFeedback } from "react-native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../routes/HomeStack";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";


interface SurfingScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'Surfing'>
}

const Surfing = ({ navigation }: SurfingScreenProps) => {

  const route: RouteProp<{ params: { description: string } }, 'params'> = useRoute()
  const description: string = route.params.description


  return (
    <View style={{ flex: 1 }}>

      <ScrollView
        style={styles.surfing}
        indicatorStyle="white"
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.surfingScrollViewContent}>

        <TopBar />

        <Banner />

        <Description description={description} />

        <TopSpots />

        <TravelGuideSection />

      </ScrollView>

      <BookButton />

      <BottomNavigation{...navigation} />

    </View>
  );
};

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <Image
        style={styles.alohaIcon}
        resizeMode="cover"
        source={require("../assets/aloha.png")}
      />
    </View>
  );
};

const Banner = () => {
  return (
    <View style={[styles.head, styles.headLayout]}>
      <Image
        style={[styles.imageIcon, styles.topSpotsPosition]}
        resizeMode="cover"
        source={require("../assets/image5.png")}
      />
      <Text style={[styles.activity, styles.activityType]}>Surfing</Text>
    </View>
  );
};

const Description = ({ description }: { description: string }) => {
  return (
    <Text style={[styles.description, styles.descriptionType]}>
      {description}
    </Text>
  );
};

const TopSpots = () => {
  return (

    <View style={styles.section}>
      <Text style={[styles.topSpots, styles.spotType]}>Top spots</Text>
      <View style={[styles.itemParent, styles.topSpotsPosition]}>

        <FlatList style={styles.flatListStyle}
          data={topSpotsData}
          scrollEnabled={false}
          renderItem={(item) =>
            <View style={styles.item}>
              <Text style={[styles.spot, styles.spotType]}>{item.item.title}</Text>
              <Image
                style={styles.imageIcon1}
                resizeMode="cover"
                source={item.item.image}
              />
            </View>
          } />
      </View>
    </View>
  );
};

const TravelGuideSection = () => {
  return (
    <View style={styles.section1}>
      <View style={styles.sectionChild} />
      <View style={styles.travelGuide}>

        <Text style={[styles.travelGuide1, styles.spotType]}>
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
    </View>
  );
};

const BookButton = () => {
  return (
    <View style={[styles.button1, styles.buttonSpaceBlock]}>
      <Text style={[styles.bookATrip, styles.spotType]}>Book a trip</Text>
    </View>
  );
};

const BottomNavigation = (navigation: NativeStackNavigationProp<RootStackParamsList, 'Surfing'>) => {
  return (
    <View style={[styles.navBar, styles.navBarShadowBox]}>


      <TouchableNativeFeedback style={styles.menuItemSpaceBlock} onPress={() => {
        navigation.navigate("Home")
      }}>
        <View style={styles.menuItemSpaceBlock}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon1.png")}
          />
          <Text style={styles.label}>Home</Text>
        </View>
      </TouchableNativeFeedback>



      <TouchableNativeFeedback style={styles.menuItemSpaceBlock} onPress={() => {
      }}>
        <View style={[styles.menuItemNative1, styles.menuItemSpaceBlock]}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/surfing1.png")}
          />
          <Text style={[styles.label1, styles.labelTypo]}>Surfing</Text>
        </View>
      </TouchableNativeFeedback>


      <TouchableNativeFeedback style={styles.menuItemSpaceBlock} onPress={() => {
      }}>
        <View style={styles.menuItemSpaceBlock}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/nightlife.png")}
          />
          <Text style={[styles.label2, styles.labelTypo]}>Hula</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback style={styles.menuItemSpaceBlock} onPress={() => {
      }}>
        <View style={styles.menuItemSpaceBlock}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/filter-hdr.png")}
          />
          <Text style={[styles.label2, styles.labelTypo]}>Vulcano</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  surfingScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  headLayout: {
    height: 240,
    width: 360,
  },
  sectionLayout: {
    height: 350,
    width: 360,
  },
  welcomeContainer: {
    top: 156,
    fontFamily: FontFamily.iBMPlexMonoBold,
    fontSize: FontSize.size_56,
    lineHeight: FontSize.size_56,
    display: "flex",
    textAlign: "center",
    left: 0,
    position: "absolute",
    width: "100%",
    alignItems: "center",
  },
  containerLayout: {
    height: 176,
    width: 328,
    left: 0,
    position: "absolute",
  },
  categoriesPosition: {
    left: 16,
    position: "absolute",
  },
  guideType: {
    color: Color.dark,
    textAlign: "left",
    left: 0,
    position: "absolute",
    top: 0,
  },
  guideStyle: {
    top: 24,
    width: 211,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.bodyBold,
    lineHeight: FontSize.bodyBold_lineHeight
  },
  guidePosition: {
    left: 24,
    color: Color.dark,
    textAlign: "left",
    lineHeight: 20,
    paddingTop: 5,
    position: "absolute",
  },
  flatListStyle: {
    top: 0,
    width: "100%",
    paddingStart: 5,
    marginEnd: 5,
  },
  contactTypo: {
    fontSize: FontSize.bodyBold_size,
    lineHeight: FontSize.bodyBold_lineHeight,
    fontFamily: FontFamily.iBMPlexMonoBold,
  },
  allPosition: {
    left: 0,
    position: "absolute",
  },
  topSpotsPosition: {
    left: 0,
    position: "absolute",
  },
  activityType: {
    fontFamily: FontFamily.bodyBold,
    position: "absolute",
  },
  descriptionType: {
    fontFamily: FontFamily.iBMPlexMonoRegular,
    textAlign: "left",
    color: "#001A1A",
    fontSize: FontSize.bodyBold_size,
  },
  spotType: {
    fontSize: FontSize.bodyBold_size,
    lineHeight: 20,
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
  navBarShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  menuItemSpaceBlock: {
    paddingTop: 16,
    paddingHorizontal: 0,
    width: "80%",
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
    textAlign: "center",
    alignSelf: "stretch",
  },
  alohaIcon: {
    width: 94,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topBar: {
    height: 80,
    paddingVertical: 0,
    zIndex: 0,
    paddingHorizontal: Padding.p_5xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: Color.white,
  },
  imageIcon: {
    top: 0,
    left: 0,
    height: 240,
    width: 360,
  },
  activity: {
    top: 94,
    fontFamily: FontFamily.iBMPlexMonoBold,
    fontSize: FontSize.size_56,
    lineHeight: FontSize.size_56,
    display: "flex",
    textAlign: "center",
    left: 0,
    position: "absolute",
    width: "100%",
    alignItems: "center",
  },
  head: {
    zIndex: 1,
    marginTop: 0,
  },
  description: {
    lineHeight: FontSize.size_5xl,
    zIndex: 2,
    width: 328,
    textAlign: "left",
    color: Color.dark,
    marginTop: 32,
    marginStart: 16
  },
  topSpots: {
    lineHeight: FontSize.bodyBold_lineHeight,
    width: 344,
    textAlign: "left",
    color: Color.dark,
    fontFamily: FontFamily.iBMPlexMonoBold,
    left: 0,
    position: "absolute",
    top: 0,
  },
  spot: {
    color: Color.green,
    lineHeight: FontSize.bodyBold_lineHeight,
    textAlign: "left",
    fontFamily: FontFamily.iBMPlexMonoBold,
  },
  imageIcon1: {
    width: 120,
    height: 63,
  },
  item: {
    paddingLeft: Padding.p_base,
    borderRadius: Border.br_9xs,
    shadowColor: "light-green",
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 2,
    marginTop: 2,
    marginBottom: 10,
    shadowRadius: 16,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    width: 328,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  highlightBox: {
    overflow: "hidden",
    width: 304,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    marginEnd: 5,
    shadowColor: "gray",
    borderRadius: Border.br_5xs,
    elevation: 16,
    shadowRadius: 16,
    backgroundColor: Color.white,
  },
  itemShadowBox: {
    marginTop: 8,
    paddingLeft: Padding.p_base,
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
    width: 328,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  itemParent: {
    top: 36,
  },
  section: {
    height: 285,
    zIndex: 3,
    width: "100%",
    marginTop: 32,
    marginStart: 16
  },
  sectionChild: {
    backgroundColor: Color.light,
    bottom: 0,
    height: 332,
    left: 0,
    position: "absolute",
    width: 360,
  },
  travelGuide1: {
    bottom: 192,
    lineHeight: 20,
    textAlign: "left",
    color: Color.dark,
    fontFamily: FontFamily.bodyBold,
    left: 0,
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
    paddingTop: 5,
    fontFamily: FontFamily.bodyBold,
  },
  guideSince: {
    bottom: 107,
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
  button: {
    bottom: 24,
    borderWidth: 1,
    borderColor: Color.green,
    borderStyle: "solid",
    left: 24,
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
  travelGuide: {
    bottom: 80,
    left: 16,
    height: 212,
    width: 328,
    position: "absolute",
  },
  section1: {
    zIndex: 4,
    height: 332,
    marginTop: 32,
    width: 360,
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
    color: Color.dark,
    textAlign: "center",
    fontFamily: FontFamily.bodyBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  label1: {
    color: Color.green,
  },
  menuItemNative1: {
    borderBottomWidth: 4,
    borderColor: Color.green,
    borderStyle: "solid",
  },
  label2: {
    color: Color.dark,
  },
  navBar: {
    shadowColor: "rgba(81, 81, 224, 0.24)",
    zIndex: 5,
    elevation: 16,
    shadowRadius: 16,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    marginTop: 32,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  bookATrip: {
    color: Color.white,
    lineHeight: 20,
    textAlign: "center",
    fontFamily: FontFamily.bodyBold,
  },
  button1: {
    marginLeft: -164,
    bottom: 88,
    left: "50%",
    shadowColor: "rgba(7, 56, 56, 0.8)",
    shadowRadius: 8,
    elevation: 8,
    backgroundColor: Color.green,
    zIndex: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    paddingBottom: Padding.p_2xs,
    paddingTop: Padding.p_4xs,
    justifyContent: "center",
    height: 45,
    width: 328,
  },
  surfing: {
    width: "100%",
    maxWidth: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

// Top spots data
const topSpotsData = [{
  id: 0,
  title: "Maui",
  image: require("../assets/image2.png")
},
{
  id: 1,
  title: "Kauai",
  image: require("../assets/kauai.png")
},
{
  id: 2,
  title: "Honolulu",
  image: require("../assets/honolulu.png")
}
]

// Guide data
const guideData = {
  id: 0,
  title: "Adventure",
  fullName: "Hadwin Malone",
  joiningYear: "2012",
  contact: "9999999999",
  image: require("../assets/ellipse-10.png")
}
export default Surfing;