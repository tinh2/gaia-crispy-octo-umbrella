import React, {Component} from 'react';
import '../assets/css/SeriesData.css';
import { connect } from 'react-redux';

class SeriesData extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loadComponent: false,
        imageURL: null,
        seriesTitle: null,
        episodeList: null,
      };
    }
    
    componentWillReceiveProps(nextProps) {
      this.setState({loadComponent: nextProps.loadComponent, imageURL: nextProps.imageURL, seriesTitle: nextProps.seriesTitle, episodeList: nextProps.episodeList});
    }

    createEpisodeList() {
      let listItems = [];
      for (let i = 0; i < this.state.episodeList.length; i++) {
        const currentEpisode = this.state.episodeList[i];
        listItems.push(<li key={i}>{currentEpisode.episodeNumber + ". " + currentEpisode.episodeTitle}</li>)
      }

      return listItems;
    }
    
    render() {
      if (this.state.loadComponent) {
        return (
          <div className="bottom-padding">
              <img src={this.state.imageURL} alt='seriesHeroArt' className="series-image bottom-padding" />
              <div className="series-title-ep-container">
                <div className="series-title-container">
                  <span className="series-title">{this.state.seriesTitle}</span>
                </div>
                <div className="series-episode-container">
                  <span className="episodes-header">First Twenty (or less) Episodes:</span>
                  <ol>{this.createEpisodeList()}</ol>
                </div> 
              </div>
          </div>
        );
      }

      return (
        <div></div>
      );
    }
}

const mapStateToProps = state => ({
    loadComponent: state.loadComponent,
    imageURL: state.imageURL,
    seriesTitle: state.seriesTitle,
    episodeList: state.episodeList
});

export default connect(mapStateToProps, null)(SeriesData);