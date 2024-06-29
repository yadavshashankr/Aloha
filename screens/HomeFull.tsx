import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, FlatList, LogBox } from "react-native";
import { FontFamily, Padding, Color, FontSize, Border } from "../GlobalStyles";

const HomeFull = () => {
  return (
    <View style={{flex:1}}>
    
    <ScrollView
      style={styles.homeFull}
      indicatorStyle="white"
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={false}
      alwaysBounceVertical
      contentContainerStyle={styles.homeFullContent}>
      <TopBar/>

      <Banner/>

      <Highlights/>

      <Sections/>

    </ScrollView>

    
    <BookButton/>

    <BottomNavigation/>

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
      style={[styles.imageIcon, styles.allPosition]}
      resizeMode="cover"
      source={require("../assets/image1.png")}
    />
  
      <Text style={styles.welcomeToHawaiiContainer}>
        {`Welcome
to`}
        {` `}Hawaii
    </Text>
  </View>
  );
};

const Sections = () => {
  return (
    <View style={[styles.section, styles.sectionLayout]}>
     <CategoriesSection/>
     <TravelGuideSection/>
    </View>
  );
};

const Highlights = () => {
  return (
  <View style={styles.highlights}>
        <Text style={[styles.highlights1, styles.categoriesPosition]}>
        Highlights
        </Text>

      <FlatList style={styles.flatListStyle}
      horizontal
      data={highlightsData}
      renderItem={(item)=>
        <View style={{padding: 10}}>
          <View style={styles.highlightBox}>
            <Image
              style={styles.highlightsIcon}
              resizeMode="cover"
              source={item.item.image}/>
            <View style={[styles.highlightsTextView, styles.itemFlexBox]}>
                <Text style={[styles.highlightTitle, styles.surfingLayout]}>{item.item.title}</Text>
                <Text
                  style={[
                    styles.hightlightSubtitle,
                    styles.highlightSubtitleType,
                  ]}>
                  {item.item.subtitle}
                </Text>
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
       } />
      </View>
  );
};

const CategoriesSection = () => {
  return (
    <View>
    <View style={[styles.sectionChild, styles.sectionLayout]} />
    <View style={[styles.categories, styles.categoriesPosition]}>
    <Text style={[styles.categoriesType, styles.contactTypo]}>
      Catergories
    </Text>

    <FlatList style={styles.categoriesListStyle}
      data={categoriesData}
      scrollEnabled={false}
      renderItem={(item)=>
        <View style={{paddingTop:10}}>
        <View style={[styles.categoryStyle, styles.itemFlexBox]}>
          <Text style={[styles.categoryTextStyle, styles.categoryTextStyleType]}>
           {item.item.title}
          </Text>
          <Image
            style={styles.itemChild}
            resizeMode="cover"
            source={require("../assets/group-1.png")}
          />
        </View>
        </View>
      }/>
  </View>
  </View>
  );
};


const TravelGuideSection = () => {
  return (
    <View>
    <View style={[styles.travelGuide, styles.categoriesPosition]}>
          <Text style={[styles.categoriesType, styles.contactTypo]}>
            Travel Guide
          </Text>

          <View style={[styles.container, styles.containerLayout]}>
            <View style={[styles.containerChild, styles.containerLayout]} />
            <Text style={[styles.guideStyle, styles.guidePosition]}>
              {guideData.fullName}
            </Text>
            <Text style={[styles.guideSince, styles.guidePosition]}>
              Guide since {guideData.joiningYear}
            </Text>
            <View style={[styles.button, styles.buttonSpaceBlock]}>
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
  );
};

const BookButton = () => {
  return (
    <View style={[styles.button1, styles.navBarFlexBox]}>
    <Text style={[styles.bookATrip, styles.contactTypo]}>Book a trip</Text>
  </View>
  );
};

const BottomNavigation = () => {
  return (
    <View>
    <View style={[styles.navBar, styles.navBarFlexBox]}>
        <View style={[styles.menuItemNative, styles.menuItemSpaceBlock]}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon.png")}
          />
          <Text style={[styles.labelSelected, styles.labelTypo]}>Home</Text>
        </View>
        <View style={styles.menuItemSpaceBlock}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/surfing.png")}
          />
          <Text style={[styles.labelUnSelected, styles.labelTypo]}>Surfing</Text>
        </View>
        <View style={styles.menuItemSpaceBlock}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/nightlife.png")}
          />
          <Text style={[styles.labelUnSelected, styles.labelTypo]}>Hula</Text>
        </View>
        <View style={styles.menuItemSpaceBlock}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/filter-hdr.png")}
          />
          <Text style={[styles.labelUnSelected, styles.labelTypo]}>Vulcano</Text>
        </View>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  scrollScrollViewContent: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingEnd:20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  homeFullContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  headLayout: {
    height: 480,
    width: 360,
  },
  allPosition: {
    left: 0,
    position: "absolute",
  },
  labelTypo1: {
    fontFamily: FontFamily.iBMPlexMonoBold,
    fontWeight: "700",
  },
  categoriesPosition: {
    left: 16,
    position: "absolute",
  },
  itemFlexBox: {
    padding: Padding.p_5xl,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  surfingLayout: {
    lineHeight: 20,
    textAlign: "left",
  },
  highlightSubtitleType: {
    marginTop: 8,
    color: Color.dark,
    fontFamily: FontFamily.iBMPlexMonoRegular,
    fontSize: FontSize.bodyBold_size,
    textAlign: "left",
    lineHeight: FontSize.bodyBold_lineHeight,
  },
  sectionLayout: {
    height: 780,
    width: 360,
  },
  contactTypo: {
    fontSize: FontSize.bodyBold_size,
    lineHeight: FontSize.bodyBold_lineHeight,
    fontFamily: FontFamily.iBMPlexMonoBold,
  },
  categoryTextStyleType: {
    fontFamily: FontFamily.iBMPlexMonoRegular,
    fontSize: FontSize.bodyBold_size,
    lineHeight:FontSize.bodyBold_lineHeight
  },
  containerLayout: {
    height: 176,
    width: 328,
    left: 0,
    position: "absolute",
  },
  guidePosition: {
    left: 24,
    color: Color.dark,
    textAlign: "left",
    lineHeight: 20,
    paddingTop:5,
    position: "absolute",
  },
  buttonSpaceBlock: {
    paddingBottom: Padding.p_2xs,
    paddingTop: Padding.p_4xs,
    borderRadius: Border.br_5xs,
    position: "absolute",
    paddingHorizontal: Padding.p_5xl,
  },
  navBarFlexBox: {
    alignItems: "flex-end",
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    marginTop: 20,
    flexDirection: "row",
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
    height: 480,
    width: 360,
  },
  welcomeToHawaiiContainer: {
    top: 156,
    fontFamily:FontFamily.iBMPlexMonoBold,
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
  highlights1: {
    width: 344,
    fontFamily: FontFamily.iBMPlexMonoBold,
    color: Color.dark,
    fontSize: FontSize.bodyBold_size,
    textAlign: "left",
    lineHeight:FontSize.bodyBold_lineHeight,
    top: 0,
    position: "absolute",
    left: 16,
  },
  highlightsIcon: {
    width: 368,
    height: 170,
  },
  highlightTitle: {
    paddingTop:5,
    textAlign: "left",
    color: Color.green,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.iBMPlexMonoBold,
  },
  hightlightSubtitle: {
    width: "100%",
    paddingEnd:10
  },
  bottomChild: {
    width: 40,
    height: 40,
  },
  bottom: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  highlightsTextView: {
    height: 170,
  },
  highlightBox: {
    overflow: "hidden",
    width: 304,
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    marginEnd:5,
    shadowColor: "gray",
    borderRadius: Border.br_5xs,
    elevation: 16,
    shadowRadius: 16,
    backgroundColor: Color.white,
  },

  volcanicConditionsCan: {
    alignSelf: "stretch",
  },
  top2: {
    alignSelf: "stretch",
  },
  flatListStyle: {
    top: 30,
    width: "100%",
    paddingStart:5,
    marginEnd:5
  },

  categoriesListStyle: {
    top: 30,
    width: "100%",
  },
  highlights: {
    height: 384,
    zIndex: 5,
    marginTop: 20,
    width: 360,
  },
  sectionChild: {
    backgroundColor: Color.light,
    left: 0,
    position: "absolute",
    top: 0,
  },
  categoriesType: {
    color: Color.dark,
    textAlign: "left",
    left: 0,
    position: "absolute",
    top: 0,
  },
  categoryTextStyle: {
    color: Color.dark,
    textAlign: "left",
    lineHeight: 20,
  },
  itemChild: {
    width: 16,
    height: 16,
  },
  categoryStyle: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    alignItems: "center",
    flexDirection: "row",
  },
  item1: {
    marginTop: 8,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    alignItems: "center",
    flexDirection: "row",
  },
  all: {
    top: 36,
    width: 328,
  },
  categories: {
    top: 30,
    height: 408,
    width: 328,
  },
  containerChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    top: 0,
  },
  guideStyle: {
    top: 24,
    width: 211,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.bodyBold,
    lineHeight:FontSize.bodyBold_lineHeight
  },
  guideSince: {
    top: 59,
    fontFamily: FontFamily.iBMPlexMonoRegular,
    fontSize: FontSize.bodyBold_size,
    lineHeight: FontSize.bodyBold_lineHeight
  },
  contact: {
    color: Color.green,
    textAlign: "center",
  },
  button: {
    top: 112,
    borderWidth: 1,
    justifyContent: "center",
    fontSize:FontSize.bodyBold_size,
    lineHeight:FontSize.bodyBold_lineHeight,
    fontFamily:FontFamily.iBMPlexMonoBold,
    paddingBottom: Padding.p_2xs,
    paddingTop: Padding.p_4xs,
    borderColor: Color.green,
    borderStyle: "solid",
    left: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    top: 36,
  },
  travelGuideChild: {
    top: 55,
    left: 230,
    width: 74,
    height: 74,
    position: "absolute",
  },
  travelGuide: {
    top: 468,
    height: 212,
    width: 328,
  },
  section: {
    zIndex: 3,
    marginTop: 20,
  },
  icon: {
    overflow: "hidden",
  },
  labelSelected: {
    color: Color.green,
    fontFamily: FontFamily.bodyBold,
    fontWeight: "700",
  },
  menuItemNative: {
    borderBottomWidth: 4,
    borderColor: Color.green,
    borderStyle: "solid",
    paddingVertical: Padding.p_base,
    paddingHorizontal: 0,
    height: 72,
  },
  labelUnSelected: {
    fontWeight: "600",
    fontFamily: FontFamily.iBMPlexMonoSemiBold,
    color: Color.dark,
  },
  navBar: {
    shadowColor: "rgba(81, 81, 224, 0.24)",
    zIndex: 4,
    elevation: 16,
    shadowRadius: 16,
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  bookATrip: {
    color: Color.white,
    textAlign: "center",
  },
  button1: {
    marginLeft: -164,
    bottom: 88,
    left: "50%",
    shadowColor: "rgba(7, 56, 56, 0.8)",
    shadowRadius: 8,
    elevation: 8,
    backgroundColor: Color.green,
    zIndex: 5,
    paddingBottom: Padding.p_2xs,
    paddingTop: Padding.p_4xs,
    borderRadius: Border.br_5xs,
    position: "absolute",
    paddingHorizontal: Padding.p_5xl,
    width: 328,
  },
  homeFull: {
    maxWidth: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});



// Using dummy data until remote data is available / configured


// Highlights data
const highlightsData = [{          
  id: 0,
  title : "Surfing",
  subtitle : "Best Hawaiian islands for surfing.",
  image: require("../assets/image.png")
},
{          
  id: 1,
  title : "Hula",
  subtitle : "Try it yourself.",
  image: require("../assets/rectangle-6.png")
},
{          
  id: 2,
  title : "Vulcanoes",
  subtitle : "Volcanic conditions can change at any time.",
  image: require("../assets/rectangle-61.png")
}
]


// Categories data
const categoriesData = [{          
  id: 0,
  title : "Adventure"
},
{          
  id: 1,
  title : "Culinary"
},
{          
  id: 2,
  title : "Eco-tourism"
},
{          
  id: 3,
  title : "Family"
},
{          
  id: 4,
  title : "Sport"
}
]

// Guide data
const guideData = {          
  id: 0,
  title : "Adventure",
  fullName: "Madwin Malone",
  joiningYear: "2012",
  contact: "9999999999"
}

export default HomeFull;
