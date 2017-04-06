import template from 'html-loader!./app.html';

let appComponent = () => {
  return {
    template,
    restrict: 'E'
  };
};

export default appComponent;
