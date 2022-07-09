import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_80_837}>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6308b86-ebbd-46e8-bfa8-b90500630c22"
          }}
          style={styles.TouchableOpacity_80_838}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_205"))
          }
        />
        <View style={styles.View_80_839}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c3e249d-0f94-4c5e-84ed-a3878e82d648"
            }}
            style={styles.ImageBackground_80_840}
          />
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79b15ff0-62eb-434e-8ffd-0d88c0227010"
          }}
          style={styles.TouchableOpacity_80_844}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("65_496"))
          }
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba1e2a31-dc8f-4da5-bdef-d32ecb75cf08"
        }}
        style={styles.ImageBackground_80_848}
      />
      <View style={styles.View_80_849}>
        <View style={styles.View_80_850}>
          <Text style={styles.Text_80_850}>Location</Text>
        </View>
        <View style={styles.View_80_851}>
          <Text style={styles.Text_80_851}>Hours</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77a9c6db-9c9a-4ad2-a2de-50b180c2f0ff"
          }}
          style={styles.ImageBackground_80_852}
        />
      </View>
      <View style={styles.View_80_853}>
        <View style={styles.View_80_854}>
          <Text style={styles.Text_80_854}>[Truck Name]</Text>
        </View>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e8c3b9e-a1e9-4509-8e09-1681305a6e6b"
        }}
        style={styles.TouchableOpacity_80_855}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("30_20"))
        }
      />
      <View style={styles.View_80_857}>
        <View style={styles.View_80_858}>
          <View style={styles.View_80_859} />
          <View style={styles.View_80_860} />
          <View style={styles.View_80_861} />
          <View style={styles.View_80_862} />
          <View style={styles.View_80_863} />
          <View style={styles.View_80_864} />
          <View style={styles.View_80_865} />
          <View style={styles.View_80_866} />
          <View style={styles.View_80_867} />
          <View style={styles.View_80_868} />
          <View style={styles.View_80_869} />
          <View style={styles.View_80_870} />
          <View style={styles.View_80_871} />
          <View style={styles.View_80_872} />
          <View style={styles.View_80_873} />
          <View style={styles.View_80_874} />
          <View style={styles.View_80_875} />
          <View style={styles.View_80_876} />
          <View style={styles.View_80_877} />
          <View style={styles.View_80_878} />
          <View style={styles.View_80_879} />
          <View style={styles.View_80_880} />
          <View style={styles.View_80_881} />
          <View style={styles.View_80_882} />
        </View>
        <View style={styles.View_80_883}>
          <Text style={styles.Text_80_883}>Posts</Text>
        </View>
      </View>
      <View style={styles.View_80_884}>
        <View style={styles.View_80_885}>
          <View style={styles.View_80_886} />
          <View style={styles.View_80_887}>
            <Text style={styles.Text_80_887}>#followers</Text>
          </View>
        </View>
        <View style={styles.View_80_888}>
          <View style={styles.View_80_889} />
          <View style={styles.View_80_895}>
            <Text style={styles.Text_80_895}>#favorites</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_80_891}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("30_12"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85ae1b0f-6a0c-4e35-aef6-fc82e4395e83"
          }}
          style={styles.ImageBackground_80_892}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("211%") },
  View_80_837: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    overflow: "hidden"
  },
  TouchableOpacity_80_838: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_80_839: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_80_840: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  TouchableOpacity_80_844: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%")
  },
  ImageBackground_80_848: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    resizeMode: "cover"
  },
  View_80_849: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("61%")
  },
  View_80_850: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_80_850: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_80_851: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_80_851: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_80_852: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("5%")
  },
  View_80_853: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("50%")
  },
  View_80_854: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_80_854: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_80_855: {
    width: wp("22%"),
    height: hp("10%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_80_857: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("113%"),
    minHeight: hp("113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("91%")
  },
  View_80_858: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("108%"),
    minHeight: hp("108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_80_859: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_860: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_861: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_862: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_863: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("18%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_864: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("18%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_865: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("18%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_866: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_867: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("36%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_868: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("36%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_869: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("36%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_870: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_871: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("54%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_872: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("54%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_873: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("54%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_874: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_875: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("72%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_876: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("72%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_877: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("72%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_878: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_879: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("90%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_880: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("90%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_881: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("90%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_882: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("90%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_80_883: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_80_883: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_80_884: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_80_885: {
    width: wp("22%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_80_886: {
    width: wp("22%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(125, 197, 113, 1)"
  },
  View_80_887: {
    width: wp("19%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_80_887: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_80_888: {
    width: wp("22%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_80_889: {
    width: wp("22%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(124, 167, 252, 1)"
  },
  View_80_895: {
    width: wp("19%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_80_895: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_80_891: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_80_892: {
    width: wp("13%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
