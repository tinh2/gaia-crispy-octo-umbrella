import React, {Component} from 'react';
import '../assets/css/SeriesForm.css';
import { connect } from 'react-redux';
import { fetchNodeInfo } from '../redux/SeriesActions';

class SeriesForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentSeriesId: undefined,
        previousSeriesId: undefined,
        loading: false,
        error: false,
      };
    }
  
    componentWillReceiveProps(nextProps) {
      if (this.props.loading !== nextProps.loading || this.props.error !== nextProps.error) {
        this.setState({loading: nextProps.loading, error: nextProps.error, previousSeriesId: this.props.currentSeriesId})
      }
    }

    handleChange = (event) => {
      this.setState({currentSeriesId: parseInt(event.target.value)});
    }
  
    handleSubmit = (event) => {
      if (this.shouldMakeARequest()) { 
        this.props.fetchNodeInfo(this.state.currentSeriesId);
      }

      event.preventDefault();
    }

    shouldMakeARequest = () => {
        return (!this.state.loading && this.state.currentSeriesId !== undefined &&
            typeof this.state.currentSeriesId === "number" && this.state.currentSeriesId !== this.state.previousSeriesId)
    }
  
    render() {
      return (
          <div className="series-form">
              <form onSubmit={this.handleSubmit}>
                  <div className="series-id">
                    Series Id:
                  </div>
                  <input type="number" className="input-box" value={this.state.seriesId} onChange={this.handleChange} />
                  <button type="submit" className="button">GET SERIES DATA</button>
                  {this.state.loading && <div>THINKING!</div>}
                  {this.state.error && <div className="error">Not found!</div>}
              </form>
          </div>
      );
    }
}

const mapStateToProps = state => ({
    currentSeriesId: state.currentSeriesId,
    loading: state.loading,
    error: state.error
});

const mapDispatchToProps = dispatch => ({
    fetchNodeInfo: (seriesId) => {
        dispatch(fetchNodeInfo(seriesId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SeriesForm);