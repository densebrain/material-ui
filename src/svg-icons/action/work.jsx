let React = require('react');
let SvgIcon = require('../../svg-icon');

let ActionWork = React.createClass({

  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
      </SvgIcon>
    );
  }

});

module.exports = ActionWork;