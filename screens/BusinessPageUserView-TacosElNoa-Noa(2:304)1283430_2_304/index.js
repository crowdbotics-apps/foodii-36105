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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c934fe60-3afb-4d5f-998b-78908f2092ab"
        }}
        style={styles.ImageBackground_65_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4695fdf9-ad98-4a17-8fda-67d105e246db"
        }}
        style={styles.ImageBackground_65_30}
      />
      <View style={styles.View_65_31}>
        <View style={styles.View_65_32}>
          <Text style={styles.Text_65_32}>Location</Text>
        </View>
        <View style={styles.View_65_33}>
          <Text style={styles.Text_65_33}>Hours</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b361ac4c-c866-48a4-8b2d-f891ce8335ec"
          }}
          style={styles.ImageBackground_65_34}
        />
      </View>
      <View style={styles.View_65_35}>
        <View style={styles.View_65_36}>
          <Text style={styles.Text_65_36}>Tacos El Noa-Noa</Text>
        </View>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e115365f-9b58-4a5a-bdfe-891e9d725bf2"
        }}
        style={styles.TouchableOpacity_65_43}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("30_20"))
        }
      />
      <View style={styles.View_67_564}>
        <View style={styles.View_67_565}>
          <View style={styles.View_67_566} />
          <View style={styles.View_67_567} />
          <View style={styles.View_67_568} />
          <View style={styles.View_67_569} />
          <View style={styles.View_67_570} />
          <View style={styles.View_67_571} />
          <View style={styles.View_67_572} />
          <View style={styles.View_67_573} />
          <View style={styles.View_67_574} />
          <View style={styles.View_67_575} />
          <View style={styles.View_67_576} />
          <View style={styles.View_67_577} />
          <View style={styles.View_67_578} />
          <View style={styles.View_67_579} />
          <View style={styles.View_67_580} />
          <View style={styles.View_67_581} />
          <View style={styles.View_67_582} />
          <View style={styles.View_67_583} />
          <View style={styles.View_67_584} />
          <View style={styles.View_67_585} />
          <View style={styles.View_67_586} />
          <View style={styles.View_67_587} />
          <View style={styles.View_67_588} />
          <View style={styles.View_67_589} />
        </View>
        <View style={styles.View_67_590}>
          <Text style={styles.Text_67_590}>Posts</Text>
        </View>
      </View>
      <View style={styles.View_67_592}>
        <View style={styles.View_65_37}>
          <View style={styles.View_65_38} />
          <View style={styles.View_65_39}>
            <Text style={styles.Text_65_39}>Follow</Text>
          </View>
        </View>
        <View style={styles.View_65_45}>
          <View style={styles.View_65_46} />
          <View style={styles.View_65_47}>
            <Text style={styles.Text_65_47}>Favorite</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_67_593}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("30_12"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b77956f9-cbab-4141-90de-b615d98b2fc9"
          }}
          style={styles.ImageBackground_80_790}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("211%") },
  ImageBackground_65_23: {
    width: wp("100%"),
    height: hp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_65_30: {
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
  View_65_31: {
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
  View_65_32: {
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
  Text_65_32: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_65_33: {
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
  Text_65_33: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_65_34: {
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
  View_65_35: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("50%")
  },
  View_65_36: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_65_36: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_65_43: {
    width: wp("22%"),
    height: hp("10%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_67_564: {
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
  View_67_565: {
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
  View_67_566: {
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
  View_67_567: {
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
  View_67_568: {
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
  View_67_569: {
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
  View_67_570: {
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
  View_67_571: {
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
  View_67_572: {
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
  View_67_573: {
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
  View_67_574: {
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
  View_67_575: {
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
  View_67_576: {
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
  View_67_577: {
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
  View_67_578: {
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
  View_67_579: {
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
  View_67_580: {
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
  View_67_581: {
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
  View_67_582: {
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
  View_67_583: {
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
  View_67_584: {
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
  View_67_585: {
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
  View_67_586: {
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
  View_67_587: {
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
  View_67_588: {
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
  View_67_589: {
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
  View_67_590: {
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
  Text_67_590: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_67_592: {
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
  View_65_37: {
    width: wp("22%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_65_38: {
    width: wp("22%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(125, 197, 113, 1)"
  },
  View_65_39: {
    width: wp("17%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_65_39: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_65_45: {
    width: wp("22%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_65_46: {
    width: wp("22%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(124, 167, 252, 1)"
  },
  View_65_47: {
    width: wp("19%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "center"
  },
  Text_65_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_67_593: {
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
  ImageBackground_80_790: {
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
