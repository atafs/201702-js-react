import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer class="demo-footer mdl-mini-footer">
          <div class="mdl-mini-footer--left-section">
              <ul class="mdl-mini-footer--link-list">
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Privacy and Terms</a></li>
                  <li><a href="#">User Agreement</a></li>
              </ul>
          </div>
      </footer>
    );
  }
}
