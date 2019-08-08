import _get from 'lodash/get'
import { connect } from 'react-redux'
import _truncate from 'lodash/truncate'
import React, { Component } from 'react'
import { articleGetList } from '../actions/Article'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'

class NewsComponent extends Component {
  componentDidMount () {
    this.props.handleToFeatchArtiles();
  }

  render() {
    const articles = this.props.data
    const { loading } = this.props

    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>Berita Terbaru</Text>
        <View style={styles.wrapContent}>
          {
            (loading) ?
              <View style={{ flex: 1 }}>
                <Text>Loading...</Text>
              </View>
            :
            <View>
              {
                articles.map((article, index) => {
                  const { title, short_description } = article.attributes
                  return (
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('DetailArticle', { article_id: article.id })} key={article.id}>
                      <View style={styles.wrapItem}>
                        <Text style={styles.wrapItemTitle}>{_truncate(title, { 'length': 42 })}</Text>
                        <Text style={styles.wrapItemDesc}>{_truncate(short_description, { 'length': 95 })}</Text>
                      </View>
                    </TouchableHighlight>
                  )
                })
              }
            </View>
          }
        </View> */}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: _get(state, '_article.articles.loading', false),
    data: _get(state, '_article.articles.data', []),
    error: _get(state, '_article.articles.error', ''),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleToFeatchArtiles: () => {
      dispatch(articleGetList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsComponent)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15
  },
  wrapContent: {
  },
  wrapItem: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 13
  },
  wrapItemTitle: {
    fontWeight: 'bold'
  },
  wrapItemDesc: {
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  }
});
