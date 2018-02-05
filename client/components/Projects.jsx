import React from 'react';
import ProjectTabs from './ProjectTabs';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 'all',
    };
    this.onSelect = this.onSelect.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onSelect(e) {
    this.setState({ active: e });
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.onSelect(e.target.className);
    }
  }

  isSelected(el) {
    return el === this.state.active ? 'is-active' : null;
  }

  render() {
    return (
      <div className="hero is-bold is-light">
        <div className="hero-body">
          <div className="container">
            <div className="title level-item">Projects</div>
            <div className="container">
              <ProjectTabs
                onSelect={this.onSelect}
                isSelected={this.isSelected}
                onKeyPress={this.onKeyPress}
              />
              Add some React stuff here for projects. Maybe I'll need some state
              <div className="hero is-large">
                <div className="hero-body">
                  Test check to make sure unsized hero can change size dynamically
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
