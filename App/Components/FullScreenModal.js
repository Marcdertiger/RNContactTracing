import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'

import PropTypes from 'prop-types'
import styles from './Styles/FullScreenModal.styles'
import { translate } from '../I18n/I18n'

import Modal, {
    ModalTitle,
    ModalContent,
    ModalFooter,
    ModalButton,
    SlideAnimation,
    ScaleAnimation,
  } from 'react-native-modals';

import TextButton from './TextButton'
import Divider from './Divider'

// ******************************
// *
// * Sample use of this component
// *
// * import NotifyOthersEntry from '../../xxxx'
// * ...
// * <FullScreenModal open={this.state.modal} content={<NotifyOthersEntry />} />


export default class FullScreenModal extends Component {
    static propTypes = {
       open: PropTypes.bool,
       content: PropTypes.element,
       title: PropTypes.string,
       callback: PropTypes.func
      }

    state = {
        bottomModalAndTitle: this.props.open
    }

    componentDidUpdate(prevProps) {
      if(prevProps.open !== this.props.open) {
        this.setState({bottomModalAndTitle: this.props.open});
      }
    }

    closeModal = () => {
        this.setState({ bottomModalAndTitle: false })
        this.props.callback()
    }

    renderModleTitleBar(){
        return (
            <View style={{backgroundColor:'#EEEEEE'}}>
                <View style={{height: 60, flexDirection: 'row'}}>
                    <View style={{flex: 2}}>
                    </View>
                    <View style={{flex: 4, justifyContent:'center'}}>
                        <Text style={styles.modalTitleBarTitle}>{this.props.title}</Text>
                    </View>
                    <View style={{flex: 2,justifyContent:'center'}}>
                        <TouchableOpacity  onPress={this.closeModal}>
                            <Text style={styles.modalButtonText}>{translate('close')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height: 1, backgroundColor: "#DDD"}} />
            </View>
        )
    }
  render () {
    return (
        <Modal.BottomModal
          useNativeDriver  
          visible={this.state.bottomModalAndTitle}
          onTouchOutside={() => this.setState({ bottomModalAndTitle: false })}
          height={0.94}
          width={1}
          onSwipeOut={() => this.setState({ bottomModalAndTitle: false })}
          modalTitle={
            this.renderModleTitleBar()
          }
        >
          <ModalContent
            style={{
              flex: 1,
              backgroundColor: 'fff',
            }}
          >
            {this.props.content}
          </ModalContent>
        </Modal.BottomModal>
    )
  }
}
