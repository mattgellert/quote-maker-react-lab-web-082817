import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';
import { bindActionCreators } from 'redux';

export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      author: "",
      content: ""
    }
  }

  handleAuthorChange = event => {
    // Handle Updating Component State
    this.setState({
      author: event.target.value
    });
  };

  handleContentChange = event => {
    // Handle Updating Component State
    this.setState({
      content: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    // Handle Form Submit event default
    // Create quote object from state
    this.props.addQuote({
      id: uuid(),
      author: this.state.author,
      content: this.state.content,
      votes: 0
    });
    // Pass quote object to action creator
    // Update component state to return to default state
    this.setState({
      author: "",
      content: ""
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        name="content"
                        onChange={this.handleContentChange}
                        className="form-control"
                        value={this.state.content}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        name="author"
                        onChange={this.handleAuthorChange}
                        className="form-control"
                        type="text"
                        value={this.state.author}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    author: state.author,
    content: state.content
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addQuote: addQuote
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);
