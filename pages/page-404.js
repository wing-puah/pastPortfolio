import React from 'react';
import Error from 'next/error';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

class Page extends React.Component {
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/repos/zeit/next.js');
    const errorCode = res.statusCode > 200 ? res.statusCode : false;
    const json = await res.json();

    return { errorCode, stars: json.stargazers_count };
  }

  render() {
    const { errorCode } = this.props;

    if (errorCode) {
      return <Error statusCode={this.props.errorCode} />
    }

    return (
      <div>
        Next stars: {this.props.stars}
      </div>
    )
  }
}

Page.propTypes = {
  errorCode = PropTypes.object,
}

export default Page;
