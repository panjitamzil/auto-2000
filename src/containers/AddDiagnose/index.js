import _get from 'lodash/get'
import React, { Component } from 'react'
import _isUndefined from 'lodash/isUndefined'
import { Content } from 'native-base'
import UIInput from '../../components/UiInput'
import UITextarea from '../../components/UiTextarea'
import { View, StyleSheet, Image, Text } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps'

class AddDiagnoseContainer extends Component {
  static navigationOptions = ({ navigation }) =>  {
    return {
      title: 'Add Diagnose',
      headerTitleStyle: styles.navigationHeaderTitle
    }
  }

  constructor (props) {
    super(props)

    this.state = {
      step_1: {
        no_polisi: '',
        nama_customer: '',
        model: '',
        delivery_date: '',
        complain_component: '',
        customer_complaint: ''
      }
    }
  }

  render() {
    const progressStepsStyle = {
      activeStepIconBorderColor: '#ffaf05',
      activeLabelColor: '#ffaf05',
      activeStepNumColor: '#ffaf05',
      activeStepIconColor: '#ffaf05',
      stepIconBorderColor: '#fff',
      labelColor: '#fff',
      disabledStepNumColor: '#fff',
      disabledStepIconColor: '#fff',
      completedStepIconColor: '#ffaf05',
      completedProgressBarColor: '#ffaf05',
      progressBarColor: '#fff',
      completedCheckColor: '#fff'
    }

    const buttonTextStyle = {
      color: '#686868',
      fontWeight: 'bold'
    }

    return (
      <Content style={{ padding: 15, paddingVertical: 5, flex: 1, backgroundColor: '#f1f2f6' }}>
        <View style={{flex: 1}}>
          <ProgressSteps {...progressStepsStyle}>
            <ProgressStep
              label=""
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}>
              <View style={styles.itemContainerFlex}>
                <UIInput
                  label="No.Polisi" />

                <UIInput
                  label="Nama Customer" />

                <UIInput
                  label="Model" />

                <UIInput
                  label="Delivery Date" />

                <UIInput
                  label="Transmition Type" />

                <UIInput
                  label="Complain Component" />

                <UITextarea
                  label="Customer Complain" />
              </View>
            </ProgressStep>

            <ProgressStep
              label=""
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}>
              <View style={styles.itemContainerFlex}>
                <UIInput
                  label="Sejak Kapan" />

                <UIInput
                  label="Frekuensi" />

                <UIInput
                  label="Kondisi Mesin" />

                <UIInput
                  label="Posisi Shift Lever" />
              </View>
            </ProgressStep>

            <ProgressStep
              label=""
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}>
              <View style={styles.itemContainerFlex}>
                <UIInput
                  label="Kecepatan" />

                <UIInput
                  label="Beban Kendaraaan" />

                <UIInput
                  label="Putaran Mesin" />

                <UIInput
                  label="Jumlah Penumpang" />

                <UIInput
                  label="Odometer" />

                <UIInput
                  label="Kondisi Jalan dan Pengendara" />

                <UIInput
                  label="Kondisi Lalu lintas" />

                <UIInput
                  label="Kondisi Cuaca" />

                <UIInput
                  label="Temperatur Udara Luar" />

                <UIInput
                  label="Waktu Kejadian" />

                <UIInput
                  label="Kondisi A/C" />
              </View>
            </ProgressStep>

            <ProgressStep
              label=""
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}>
              <View style={styles.itemContainerFlex}>
                <UIInput
                  label="Detail Inspeksi/Hasil" />

                <UIInput
                  label="DTC" />

                <UIInput
                  label="Status" />
              </View>
            </ProgressStep>

            <ProgressStep
              label=""
              nextBtnTextStyle={buttonTextStyle}
              previousBtnTextStyle={buttonTextStyle}>
              <View style={styles.itemContainerFlex}>
                <UITextarea
                  label="Analisa Penyebab Utama" />

                <UITextarea
                  label="Job Instruksi" />

                <UIInput
                  label="Foreman" />

                <UIInput
                  label="Video Link" />

                <UIInput
                  label="DTR" />

                <View>
                  <Text style={styles.labelUpload}>File</Text>
                  <View style={styles.paneUploader}>
                    <Image
                      source={require('../../../assets/img/upload.png')}
                      style={{ width: 20, height: 20, marginBottom: 10 }} />

                    <Text style={styles.textUploader}>Choose File</Text>
                  </View>
                </View>
              </View>
            </ProgressStep>
          </ProgressSteps>
        </View>
      </Content>
    )
  }
}

export default AddDiagnoseContainer

const styles = StyleSheet.create({
  navigationHeaderTitle: {
    color: '#7f8c8d',
    textAlign: 'center',
    width: '82%'
  },
  itemContainerFlex: {
    backgroundColor: '#fff',
    padding: 10,
    paddingVertical: 20
  },
  paneUploader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
    borderColor: '#dfe4ea',
    borderWidth: 1,
    marginBottom: 20
  },
  textUploader: {
    color: '#7f8c8d',
    fontSize: 13
  },
  labelUpload: {
    marginBottom: 5,
    color: '#7f8c8d'
  }
})