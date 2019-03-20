// @flow
    import React, { PureComponent } from 'react'
    import { StyleSheet, Text, TouchableWithoutFeedback, View,ImageBackground } from 'react-native'
    import Marker from '../marker'
    import type { ClusterParams } from '.'

    const style = StyleSheet.create({
      cluster: {
        borderWidth: 4,
        borderColor: 'rgba(30,144,255,0.4)',
        backgroundColor: 'rgba(30,144,255,0.9)',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: '#333',
        fontWeight: '400',
      },
    })

    type Props = {
      cluster: ClusterParams,
      style?: View.propTypes.style,
      textStyle?: View.propTypes.style,
      onPress?: ClusterParams => void,
    }

    export default class ClusterView extends PureComponent<Props> {
      onPress = () => {
        if (this.props.onPress) {
          this.props.onPress(this.props.cluster)
        }
      }

      renderClusterView = () => {
        const { count } = this.props.cluster
        const size = 30 + Math.log2(count)
        const clusterStyle = {
          width: size,
          height: size,
          borderRadius: size / 2,
        }
        const clusterStyle1 = {
          width: 40,
          height: 40,
          borderRadius: size / 2,
    	 alignItems: 'center',
    	 justifyContent: 'center',
        }
    	const clusterStyle2 = {
          width: 60,
          height: 60,
          borderRadius: size / 2,
    	 alignItems: 'center',
    	 justifyContent: 'center',
        }
    	const clusterStyle3 = {
          width: 80,
          height: 80,
          borderRadius: size / 2,
    	 alignItems: 'center',
    	 justifyContent: 'center',
        }
        return (
          <TouchableWithoutFeedback>
            <View style={[this.props.style]}>
    			{count < 100?
    				count <10?
    					<ImageBackground style={[clusterStyle1, this.props.style]} source={require('./images/m0.png')} >
    						<Text style={[style.text, this.props.textStyle]}>{count}</Text>
    					</ImageBackground>
    					:
    					<ImageBackground style={[clusterStyle2, this.props.style]} source={require('./images/m3.png')} >
    						<Text style={[style.text, this.props.textStyle]}>{count}</Text>
    					</ImageBackground>
    				:
    				<ImageBackground style={[clusterStyle3, this.props.style]} source={require('./images/m4.png')} >
    					<Text style={[style.text, this.props.textStyle]}>{count}</Text>
    				</ImageBackground>
    			}

            </View>
          </TouchableWithoutFeedback>
        )
      }

      render() {
        return (
          <Marker
            flat
            onPress={this.onPress}
            coordinate={this.props.cluster.coordinate}
            view={this.renderClusterView}
          />
        )
      }
    }